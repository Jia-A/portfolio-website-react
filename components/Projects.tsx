"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { fadeIn } from "./variants";
import { projects } from "./projectData";
import SectionHeading from "./SectionHeading";

function Projects() {
  return (
    <section id="projects" className="w-full border-t border-line py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <SectionHeading
          index="03"
          title="Work"
          intro="Selected projects, each built to deliver a focused service with high-quality, performant execution."
        />

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((item, i) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group relative flex flex-col bg-ink transition-colors hover:bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-ink/40 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-medium uppercase tracking-wide text-bone">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-fog">{item.desc}</p>
                </div>
                <HiArrowNarrowRight className="mt-1 shrink-0 -rotate-45 text-fog transition-all duration-300 group-hover:rotate-0 group-hover:text-accent" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
