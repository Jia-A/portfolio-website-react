"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Frontend Engineer",
      "React & Next.js Specialist",
      "Performance & SEO Engineer",
    ],
    loop: 0,
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1800,
  });

  return (
    <section
      id="hero"
      className="bg-grid relative flex min-h-screen w-full items-center"
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 lg:px-10">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          // hi, my name is
        </p>

        <h1 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight text-bone sm:text-7xl lg:text-8xl">
          Jiya
          <br />
          Agrawal
        </h1>

        <div className="mt-6 flex items-center gap-3 font-mono text-lg text-fog sm:text-2xl">
          <span className="text-accent">{">"}</span>
          <span className="text-bone">{text}</span>
          <Cursor cursorColor="#ff5436" />
        </div>

        <p className="mt-8 max-w-[560px] text-sm leading-relaxed text-fog sm:text-base">
          Frontend Engineer specialising in React and Next.js, with production
          experience building scalable B2B &amp; B2C commerce platforms for
          Australian companies. Focused on performance engineering, AI-era SEO,
          and composable architecture — building towards full-stack ownership.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="projects" smooth duration={500}>
            <button className="group inline-flex items-center gap-2 border border-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-ink">
              View Work
              <HiArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link to="contact" smooth duration={500}>
            <button className="inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-fog transition-colors hover:border-bone hover:text-bone">
              Get in touch
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-fog md:block">
        scroll ↓
      </div>
    </section>
  );
}

export default Hero;
