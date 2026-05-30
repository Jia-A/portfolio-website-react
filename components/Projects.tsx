"use client";

import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { fadeIn } from "./variants";
import { projects } from "./projectData";
import SectionHeading from "./SectionHeading";

function Projects() {
  const project = projects[0];

  return (
    <section id="projects" className="w-full border-t border-line py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <SectionHeading
          index="03"
          title="Work"
          intro="A focused build — engineered end to end to deliver a single product with high-quality, performant execution."
        />

        <motion.a
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="group relative block overflow-hidden border border-line bg-ink transition-colors duration-500 hover:border-accent/40 hover:bg-surface"
        >
          {/* Top meta bar */}
          <div className="flex items-center justify-between border-b border-line px-6 py-4 sm:px-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-accent">01</span>
              <span className="h-px w-8 bg-line" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                Featured
              </span>
            </div>
            <span className="font-mono text-xs text-fog">{project.year}</span>
          </div>

          <div className="grid gap-px bg-line lg:grid-cols-[1.15fr_1fr]">
            {/* Left: identity */}
            <div className="flex flex-col justify-between bg-ink p-6 transition-colors duration-500 group-hover:bg-surface sm:p-8 lg:p-10">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-4xl font-bold uppercase tracking-tight text-bone sm:text-6xl">
                    {project.title}
                  </h3>
                  <HiArrowNarrowRight className="mt-2 shrink-0 -rotate-45 text-2xl text-fog transition-all duration-300 group-hover:rotate-0 group-hover:text-accent" />
                </div>
                <p className="mt-4 max-w-[420px] text-base font-medium leading-relaxed text-bone sm:text-lg">
                  {project.tagline}
                </p>
                <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-fog">
                  {project.desc}
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors duration-300 group-hover:text-accent">
                lets-quill.vercel.app
              </div>
            </div>

            {/* Right: highlights + stack */}
            <div className="flex flex-col bg-ink p-6 transition-colors duration-500 group-hover:bg-surface sm:p-8 lg:p-10">
              <ul className="flex flex-col gap-5">
                {project.highlights.map((h) => (
                  <li key={h.label}>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {h.label}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-bone">
                      {h.value}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-line pt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                  Stack
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-2.5 py-1 font-mono text-[11px] text-fog transition-colors duration-300 group-hover:border-line/80 group-hover:text-bone"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

export default Projects;
