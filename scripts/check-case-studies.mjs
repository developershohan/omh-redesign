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
async function navigate(url) {
  const loaded = new Promise(resolve => {
    const listener = ({ data }) => {
      if (JSON.parse(data).method === 'Page.loadEventFired') {
        socket.removeEventListener('message', listener);
        resolve();
      }
    };
    socket.addEventListener('message', listener);
  });
  await send('Page.navigate', { url });
  await loaded;
}
async function checkLayout(selector, width) {
  await waitFor(`!!document.querySelector('${selector}')`);
  await evaluate(`document.querySelectorAll('${selector} img').forEach(img => img.loading = 'eager')`);
  await waitFor(`[...document.querySelectorAll('${selector} img')].every(img => img.complete && img.naturalWidth > 0)`);
  assert.ok(await evaluate(`document.documentElement.scrollWidth <= ${width}`), `Overflow: ${selector}, ${width}`);
  assert.deepEqual(await evaluate(`[...document.querySelectorAll('${selector} *')].filter(e => e.getClientRects().length && [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) && parseFloat(getComputedStyle(e).fontSize) < 16).map(e => e.textContent.trim())`), [], 'Text below 16px');
  assert.equal(await evaluate('document.querySelectorAll("h1").length'), 1);
}
async function screenshot(name) {
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const file = path.join(os.tmpdir(), `omh-${name}.png`);
  await fs.writeFile(file, Buffer.from(shot.data, 'base64'));
  console.log(file);
}
try {
  const origin = process.argv[2] || 'http://localhost:3000';
  await send('Page.enable');
  const source = await fs.readFile('lib/content/case-studies.ts', 'utf8');
  const slugs = [...source.matchAll(/slug: "([^"]+)"/g)].map(match => match[1]);
  for (const width of [1440, 390]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: width < 500 });
    await navigate(origin + '/case-studies');
    await checkLayout('[data-case-archive]', width);
    assert.equal(await evaluate('document.querySelectorAll("article[data-case-study]").length'), slugs.length);
    await screenshot(`case-studies-${width}`);
    for (const category of ['SEO', 'Website', 'PPC', 'Design', 'All projects']) {
      await evaluate(`[...document.querySelectorAll('button[aria-pressed]')].find(b => b.textContent === '${category}').click()`);
      await waitFor(`document.querySelector('button[aria-pressed="true"]').textContent === '${category}'`);
      assert.ok(await evaluate('document.querySelectorAll("article[data-case-study]").length > 0'));
      if (category !== 'All projects') assert.ok(await evaluate(`[...document.querySelectorAll('article[data-case-study] > a > p:first-of-type')].every(p => p.textContent.startsWith('${category} /'))`));
    }
    for (const slug of slugs) {
      await navigate(origin + '/case-studies/' + slug);
      await checkLayout('[data-case-article]', width);
      assert.ok(await evaluate('Boolean(document.querySelector("#brief") && document.querySelector("#work"))'));
      assert.equal(await evaluate('document.querySelectorAll("[data-case-article] figure").length'), 3);
      if (slug === 'bakery') {
        assert.ok(await evaluate('document.querySelector("#results").innerText.includes("50%")'));
        await screenshot(`case-study-${width}`);
        await evaluate('document.getElementById("brief").scrollIntoView({behavior:"instant",block:"start"})');
        await screenshot(`case-study-scope-${width}`);
        await evaluate('document.getElementById("results").scrollIntoView({behavior:"instant",block:"start"})');
        await screenshot(`case-study-results-${width}`);
      }
      if (slug === 'allied-hands') assert.equal(await evaluate('document.querySelectorAll("#results").length'), 0);
    }
  }
  console.log(`PASS: archive filters, ${slugs.length} detail pages, images, 16px minimum text, and no overflow at desktop/mobile widths.`);
} finally {
  await send('Page.close');
  socket.close();
}
