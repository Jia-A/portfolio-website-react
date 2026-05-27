import sharp from "sharp";
import { writeFileSync } from "node:fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1919"/>
      <stop offset="100%" stop-color="#2b2828"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="80" y="120" width="6" height="390" rx="3" fill="#F9F9F9"/>
  <text x="120" y="210" font-family="Raleway, Helvetica, Arial, sans-serif" font-size="44" font-weight="500" fill="#aca6a6">Hi, I'm</text>
  <text x="120" y="320" font-family="Raleway, Helvetica, Arial, sans-serif" font-size="104" font-weight="700" fill="#F9F9F9">Jiya Agrawal</text>
  <text x="120" y="400" font-family="Raleway, Helvetica, Arial, sans-serif" font-size="52" font-weight="600" fill="#cfcaca">Senior Frontend Developer</text>
  <text x="120" y="500" font-family="Raleway, Helvetica, Arial, sans-serif" font-size="30" font-weight="400" fill="#8f8a8a">React · Next.js · TypeScript · Tailwind</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync("public/og.png", png);
console.log("wrote public/og.png", png.length, "bytes");
