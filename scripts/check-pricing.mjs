import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

// Run against an isolated Chrome started with --remote-debugging-port=9231.
const target = await (await fetch('http://localhost:9231/json/new?about:blank', { method: 'PUT' })).json();
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }));
let sequence = 0;
const pending = new Map();
socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data);
  if (pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  }
});
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++sequence;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  assert.ok(!result.exceptionDetails, JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
async function waitFor(expression) {
  for (let attempt = 0; attempt < 100; attempt++) {
    if (await evaluate(expression)) return;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error(`Timed out: ${expression}`);
}
try {
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: process.argv[2] || 'http://localhost:3000/pricing' });
  await waitFor('document.querySelectorAll("details[name=pricing-service]").length === 12');
  await waitFor('document.readyState === "complete"');
  await send('Page.bringToFront');
  assert.equal(await evaluate('document.querySelectorAll("details[name=pricing-service][open]").length'), 0);
  assert.ok(!await evaluate('document.body.innerText.includes("Not sure which column you belong in?")'));
  await evaluate('document.querySelector("#wordpress > summary").focus()');
  assert.equal(await evaluate('document.activeElement.tagName'), 'SUMMARY');
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: ' ', code: 'Space', windowsVirtualKeyCode: 32 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: ' ', code: 'Space', windowsVirtualKeyCode: 32 });
  await waitFor('document.getElementById("wordpress").open');
  assert.ok(await evaluate('document.querySelector("#wordpress thead").innerText.includes("£200")'));
  assert.ok(!await evaluate('document.querySelector("#wordpress thead").innerText.includes("*")'));
  await evaluate('document.querySelector("#website-designs > summary").click()');
  assert.equal(await evaluate('document.querySelectorAll("details[name=pricing-service][open]").length'), 1);
  assert.ok(await evaluate('document.getElementById("website-designs").innerText.includes("Request a quote")'));
  await evaluate('location.hash = "seo"');
  await waitFor('document.getElementById("seo").open');
  assert.equal(await evaluate('document.querySelectorAll("#seo tbody tr").length'), 15);
  for (const width of [1440, 1024, 768, 390, 375, 320]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: width < 500 });
    const loaded = new Promise(resolve => {
      const listener = ({ data }) => {
        if (JSON.parse(data).method === 'Page.loadEventFired') {
          socket.removeEventListener('message', listener);
          resolve();
        }
      };
      socket.addEventListener('message', listener);
    });
    await send('Page.reload');
    await loaded;
    await waitFor('document.readyState === "complete" && document.getElementById("seo")?.open');
    assert.deepEqual(await evaluate('[...document.querySelectorAll("main main *")].filter(e => e.getClientRects().length && [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) && parseFloat(getComputedStyle(e).fontSize) < 16).map(e => e.textContent.trim())'), [], 'Pricing text below 16px');
    await evaluate('window.scrollTo(0, 0)');
    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    const file = path.join(os.tmpdir(), `omh-pricing-${width}.png`);
    await fs.writeFile(file, Buffer.from(screenshot.data, 'base64'));
    console.log(`Screenshot: ${file}`);
    assert.ok(await evaluate(`document.documentElement.scrollWidth <= ${width}`), `Page overflow at ${width}px`);
    if (width === 390) {
      await evaluate('document.getElementById("seo").scrollIntoView({behavior:"instant",block:"start"})');
      const expanded = await send('Page.captureScreenshot', { format: 'png' });
      await fs.writeFile(path.join(os.tmpdir(), 'omh-pricing-mobile-packages.png'), Buffer.from(expanded.data, 'base64'));
    }
  }
  console.log('PASS: 12 services, keyboard expansion, exclusive comparisons, custom quote, deep links and responsive overflow.');
} finally {
  await send('Page.close');
  socket.close();
}
