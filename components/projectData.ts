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
    desc: "Hit publish and Quill's AI reads your article, drafts a scroll-stopping LinkedIn post — hook, code snippet, link and all — then ships it straight to your feed in one click. Around it: private team drafts, passage-anchored margin notes, live notifications and instant search.",
    link: "https://lets-quill.vercel.app/",
    year: "2026",
    stack: [
      "Next.js 16",
      "React 19",
      "Hono",
      "Cloudflare Workers",
      "Workers AI",
      "Durable Objects",
      "Prisma + Accelerate",
      "PostgreSQL",
      "Tiptap",
      "NextAuth",
      "Tailwind",
    ],
    highlights: [
      { label: "Signature", value: "AI-drafted LinkedIn posts via Workers AI (Llama 3.1)" },
      { label: "Teams", value: "Share unpublished drafts with a private circle for feedback before going live" },
      { label: "Margin notes", value: "Comments anchored to highlighted passages, approved by the author before they show" },
      { label: "Real-time", value: "Live notifications over WebSockets, one Durable Object per user" },
      { label: "Edge-native", value: "Hono API on Cloudflare Workers, global by default" },
      { label: "Hardened", value: "PBKDF2 hashing · AES-256-GCM tokens · HTML sanitized on write & render" },
    ],
  },
];
