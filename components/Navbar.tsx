"use client";

import { useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { to: "hero", label: "Home" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Work" },
  { to: "blogs", label: "Blogs" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1100px] items-center justify-between px-6 lg:px-10">
        <Link
          to="hero"
          smooth
          duration={500}
          className="font-mono text-sm font-bold tracking-[0.2em] text-bone"
        >
          JA<span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 font-mono text-xs uppercase tracking-[0.15em] text-fog">
            {navItems.map((item, i) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={500}
                  className="group inline-flex items-center gap-1.5 transition-colors hover:text-bone"
                >
                  <span className="text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-6 bg-bone transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-bone transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-bone transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-[68px] bg-ink transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 pt-10 font-mono uppercase tracking-[0.15em]">
          {navItems.map((item, i) => (
            <li key={item.to} className="border-b border-line">
              <Link
                to={item.to}
                smooth
                duration={500}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 py-5 text-2xl text-bone"
              >
                <span className="text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export { Navbar };
