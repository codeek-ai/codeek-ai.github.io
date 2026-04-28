import sharp from 'sharp';
import { readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'favicon.svg');

if (!existsSync(svgPath)) {
  console.error('Missing public/favicon.svg — skipping icon generation.');
  process.exit(0);
}

const svg = readFileSync(svgPath);

const sizes = [
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
  { file: 'icon-512-maskable.png', size: 512 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'favicon-32.png', size: 32 },
];

for (const { file, size } of sizes) {
  const out = join(root, 'public', file);
  await sharp(svg).resize(size, size).png().toFile(out);
  console.log(`  Generated ${file}`);
}

console.log('Icons generated.');
