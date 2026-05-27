export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Compose Tech",
    period: "Jul 2024 — Present",
    location: "Australia · Remote",
    summary:
      "Building scalable B2B & B2C commerce platforms for Australian brands with a focus on performance, AI-era SEO, and composable architecture.",
    highlights: [
      "Cut LCP on Kitchen Warehouse PDP, PLP and Recipe pages from 8–10s down to 1.5–2s — via SSR optimisation, eager image loading with srcset, next/image migration, deferring render-blocking scripts, and resolving 2,000+ technical SEO issues flagged in SEMRush.",
      "Built A/B testing & personalisation infrastructure with Builder.io — session-based variant assignment via cookies, region detection through Cloudflare edge functions with a Netlify fallback, tracked via CTR and custom conversion events.",
      "Implemented AEO/GEO optimisation — authored and fixed JSON-LD schemas (Organization, Website, ItemList) and structured content for AI-powered search visibility (Perplexity, ChatGPT citations).",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Commercetools",
      "Builder.io",
      "Cloudflare",
      "TailwindCSS",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Overdose.digital",
    period: "Jul 2023 — Jun 2024",
    location: "via Compose Tech · Remote",
    summary:
      "Delivered hybrid B2B and B2C e-commerce platforms for high-traffic Australian retailers across core commerce flows.",
    highlights: [
      "Built a full-fledged Account section end-to-end — integrating APIs via React Query and turning designs into a seamless, high-performance experience.",
      "Implemented Google Analytics and GTM tracking on BikeExchange, enabling accurate event tracking, conversion analysis, and marketing insights.",
      "Led the Red Merch Sale for Motion AU — owning high-traffic launch stability and resolving critical (P1) production incidents in real time to minimise downtime and revenue impact.",
    ],
    stack: ["React", "React Query", "JavaScript", "GA / GTM", "Storybook"],
  },
];
