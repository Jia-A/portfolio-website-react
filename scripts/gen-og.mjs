import sharp from "sharp";
import { writeFileSync } from "node:fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#161616"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="80" y="130" width="6" height="370" fill="#ff5436"/>
  <text x="120" y="205" font-family="JetBrains Mono, monospace" font-size="30" letter-spacing="6" font-weight="500" fill="#ff5436">// HI, MY NAME IS</text>
  <text x="120" y="320" font-family="Raleway, Helvetica, Arial, sans-serif" font-size="110" font-weight="700" letter-spacing="-2" fill="#e5e5e5">JIYA AGRAWAL</text>
  <text x="120" y="400" font-family="JetBrains Mono, monospace" font-size="40" font-weight="500" fill="#6b6b6b">&gt; <tspan fill="#e5e5e5">Frontend Engineer</tspan></text>
  <text x="120" y="490" font-family="JetBrains Mono, monospace" font-size="26" letter-spacing="3" font-weight="400" fill="#6b6b6b">REACT · NEXT.JS · TYPESCRIPT · TAILWIND</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync("public/og.png", png);
console.log("wrote public/og.png", png.length, "bytes");
