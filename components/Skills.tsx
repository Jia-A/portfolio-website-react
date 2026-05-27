"use client";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { skills, currentLearning } from "./skillsData";
import SectionHeading from "./SectionHeading";

function Skills() {
  return (
    <section id="skills" className="w-full border-t border-line py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <SectionHeading
          index="01"
          title="Skills"
          intro="Modern technologies and tools I use to build scalable, performant web applications with excellent user experience."
        />

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {skills.map((item) => (
            <div
              key={item.title}
              data-cursor="hover"
              className="group flex aspect-square flex-col items-center justify-center gap-3 border-b border-r border-line transition-colors hover:bg-surface"
            >
              <div className="text-3xl text-fog transition-colors duration-300 group-hover:text-accent">
                {item.icon}
              </div>
              <small className="font-mono text-[11px] uppercase tracking-wider text-fog transition-colors group-hover:text-bone">
                {item.title}
              </small>
            </div>
          ))}
        </motion.div>

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-line" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
              Currently Learning
            </span>
          </div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {currentLearning.map((item) => (
              <div
                key={item.title}
                data-cursor="hover"
                className="group inline-flex items-center gap-2.5 border border-line px-4 py-2.5 transition-colors hover:border-accent"
              >
                <span className="text-lg text-fog transition-colors group-hover:text-accent">
                  {item.icon}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-fog transition-colors group-hover:text-bone">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
