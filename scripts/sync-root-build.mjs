import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(root, 'docs');

const generatedPaths = [
  '.nojekyll',
  '404.html',
  '_astro',
  'apple-touch-icon.png',
  'codeek-camera',
  'codeek-map',
  'favicon-32.png',
  'favicon.svg',
  'icon-192.png',
  'icon-512-maskable.png',
  'icon-512.png',
  'index.html',
  'manifest.webmanifest',
  'math-sprint',
  'og',
  'privacy',
  'qr-and-barcode',
  'robots.txt',
  'sitemap-0.xml',
  'sitemap-index.xml',
];

if (!fs.existsSync(path.join(docsDir, 'index.html'))) {
  throw new Error('docs/index.html was not found. Run astro build before syncing.');
}

for (const relativePath of generatedPaths) {
  const target = path.join(root, relativePath);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

for (const entry of fs.readdirSync(docsDir, { withFileTypes: true })) {
  const source = path.join(docsDir, entry.name);
  const target = path.join(root, entry.name);
  fs.cpSync(source, target, { recursive: true, force: true });
}

console.log('Synced docs build output to repository root for GitHub Pages.');
