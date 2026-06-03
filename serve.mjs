// Simple static file server — runs the project root on http://localhost:3000
// Usage: node serve.mjs  (or: python3 serve.mjs if node is unavailable)

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const PORT = 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'text/javascript',
  '.mjs':  'text/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
};

const server = createServer(async (req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/') url = '/index.html';
  const filePath = join(ROOT, url);

  try {
    await stat(filePath);
    const ext  = extname(filePath).toLowerCase();
    const mime = MIME[ext] ?? 'application/octet-stream';
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`\n  Pacific Pulse dev server\n  http://localhost:${PORT}\n`);
});
