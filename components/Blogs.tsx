"use client";

import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { fadeIn } from "./variants";
import { blogs } from "./blogData";
import SectionHeading from "./SectionHeading";

function Blogs() {
  return (
    <section id="blogs" className="w-full border-t border-line py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <SectionHeading
          index="04"
          title="Blogs"
          intro="Technical writing in plain language — explained so anyone, even newcomers, can follow and make use of it."
        />

        <motion.ul
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="border-t border-line"
        >
          {blogs.map((item, i) => (
            <li key={item.link} className="border-b border-line">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group flex items-center gap-6 py-7 transition-colors"
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-medium text-bone transition-colors group-hover:text-accent sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-fog">
                    {item.desc}
                  </p>
                </div>
                <HiArrowNarrowRight className="shrink-0 text-bone transition-all duration-300 md:text-fog md:group-hover:translate-x-1 md:group-hover:text-accent" />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default Blogs;
