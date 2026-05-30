export type Project = {
  title: string;
  tagline: string;
  desc: string;
  link: string;
  year: string;
  stack: string[];
  highlights: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    title: "Quill",
    tagline: "Write the story. Your AI ghostwriter takes it to LinkedIn.",
    desc: "Hit publish and Quill's AI reads your article, drafts a scroll-stopping LinkedIn post — hook, code snippet, link and all — then ships it straight to your feed in one click. The busywork of marketing, gone.",
    link: "https://lets-quill.vercel.app/",
    year: "2026",
    stack: [
      "Next.js 16",
      "React 19",
      "Hono",
      "Cloudflare Workers",
      "Workers AI",
      "Prisma + Accelerate",
      "PostgreSQL",
      "Tiptap",
      "NextAuth",
      "Tailwind",
    ],
    highlights: [
      { label: "Signature", value: "AI-drafted LinkedIn posts via Workers AI (Llama 3.1)" },
      { label: "Edge-native", value: "Hono API on Cloudflare Workers, global by default" },
      { label: "Hardened", value: "PBKDF2 hashing · AES-256-GCM tokens · HTML sanitized on write & render" },
    ],
  },
];
