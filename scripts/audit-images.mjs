import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import sharp from 'sharp';

// Run from site/: npm run audit:images. Check exact casing for Linux deploys.
async function main() {
  const assets = new Set(fs.readdirSync('public', { recursive: true }).map(p => '/' + p.replaceAll('\\', '/')));
  const references = new Set();
  const errors = [];
  for (const dir of ['app', 'components', 'lib']) {
    for (const file of fs.readdirSync(dir, { recursive: true }).filter(f => /\.tsx?$/.test(f))) {
      const name = path.join(dir, file);
      const source = ts.createSourceFile(name, fs.readFileSync(name, 'utf8'), ts.ScriptTarget.Latest, true);
      function visit(node) {
        if (ts.isStringLiteralLike(node) && /^\/images\/.+\.(png|jpe?g|webp|gif|svg|avif)$/i.test(node.text)) references.add(node.text);
        if (ts.isPropertyAssignment(node) && node.name.getText(source) === 'file' && ts.isStringLiteral(node.initializer)) references.add('/images/website-designs/' + node.initializer.text);
        if ((ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) && ['MediaFrame', 'Fpo'].includes(node.tagName.getText(source))) {
          const attr = node.attributes.properties.find(a => a.name?.text === 'source');
          if (!attr?.initializer || (ts.isStringLiteral(attr.initializer) && !attr.initializer.text.trim())) errors.push(`${name}:${source.getLineAndCharacterOfPosition(node.pos).line + 1}: media has no source`);
        }
        ts.forEachChild(node, visit);
      }
      visit(source);
    }
  }
  for (const ref of references) if (!assets.has(ref)) errors.push(`Missing asset or incorrect filename case: ${ref}`);
  const images = [...assets].filter(p => /\.(png|jpe?g|webp|gif|avif)$/i.test(p));
  for (const asset of images) {
    try { await sharp('public' + asset).resize(1, 1).toBuffer(); }
    catch (error) { errors.push(`Invalid image ${asset}: ${error.message}`); }
  }
  assert.equal(errors.length, 0, errors.join('\n'));
  console.log(`PASS: ${references.size} referenced paths exist with exact casing; ${images.length} images decode; every media frame has a source.`);
  // Optional production check: npm run audit:images -- http://localhost:3100
  if (process.argv[2]) {
    const origin = new URL(process.argv[2]);
    const routes = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8')).routes;
    const pages = Object.entries(routes).filter(([url, route]) =>
      route.srcRoute !== '/[slug]' && !/^\/(insights|_)/.test(url) && !/\.[a-z]+$/.test(url));
    const urls = new Set();
    for (const [route] of pages) {
      const response = await fetch(new URL(route, origin));
      assert.equal(response.status, 200, route);
      const html = await response.text();
      assert.ok(!/aria-label="(?:Image |Screen |Video )?[Pp]laceholder:/.test(html), `Placeholder on ${route}`);
      for (const match of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
        const url = new URL(match[1].replaceAll('&amp;', '&'), origin);
        if (url.pathname === '/_next/image') url.searchParams.set('w', '640');
        urls.add(url.href);
      }
    }
    const pending = [...urls];
    await Promise.all(Array.from({ length: 4 }, async () => {
      while (pending.length) {
        const url = pending.pop();
        const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
        assert.equal(response.status, 200, url);
        await sharp(Buffer.from(await response.arrayBuffer())).resize(1, 1).toBuffer();
      }
    }));
    console.log(`PASS: ${pages.length} non-blog pages return 200; ${urls.size} image URLs return decodable images, including Next.js optimisation.`);
  }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
