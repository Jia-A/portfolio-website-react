"use client";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { experiences } from "./experienceData";
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section id="experience" className="w-full border-t border-line py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <SectionHeading
          index="02"
          title="Experience"
          intro="Where I've worked and what I shipped — the roles, teams, and problems I've helped solve."
        />

        <div className="border-t border-line">
          {experiences.map((exp, i) => (
            <motion.article
              key={`${exp.company}-${i}`}
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              data-cursor="hover"
              className="group grid gap-6 border-b border-line py-10 md:grid-cols-[200px_1fr]"
            >
              {/* Left: period + index */}
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="font-mono text-xs uppercase tracking-wider text-fog">
                  <p className="text-bone">{exp.period}</p>
                  {exp.location && <p className="mt-1">{exp.location}</p>}
                </div>
              </div>

              {/* Right: role, company, details */}
              <div>
                <h3 className="text-xl font-medium uppercase tracking-wide text-bone sm:text-2xl">
                  {exp.role}
                  <span className="text-accent"> @ {exp.company}</span>
                </h3>
                <p className="mt-2 text-sm text-fog">{exp.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {exp.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="flex gap-3 text-sm leading-relaxed text-fog"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      <span className="text-bone transition-colors md:text-fog md:group-hover:text-bone">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                {exp.stack && exp.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fog"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1g_TRCYQfmfGjvO-yC_wJJ3ktxffNGOsw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:text-accent"
        >
          Full history in my résumé
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}

export default Experience;
