"use client";

import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full border border-line bg-surface px-4 py-3.5 text-sm text-bone placeholder:text-fog/70 transition-colors focus:border-accent focus:outline-none disabled:opacity-50";

const GETFORM_ENDPOINT =
  "https://getform.io/f/aca6ee8e-5f67-4750-84ed-4db5b868fdeb";

type Status = "idle" | "sending" | "sent" | "error";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus("sent");
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="w-full border-t border-line py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <SectionHeading
          index="05"
          title="Contact"
          intro="Have a project in mind or just want to say hello? Drop a message — I'll get back to you."
        />

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="Name"
                required
                disabled={status === "sending"}
                placeholder="Full name"
                className={inputClass}
              />
              <input
                type="email"
                name="Email"
                required
                disabled={status === "sending"}
                placeholder="Email"
                className={inputClass}
              />
            </div>
            <textarea
              name="Message"
              rows={5}
              required
              disabled={status === "sending"}
              placeholder="Your message"
              className={`${inputClass} resize-none`}
            />
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                data-cursor="hover"
                className="group inline-flex items-center gap-2 self-start border border-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-ink disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent disabled:hover:text-accent"
              >
                {status === "sending" ? "Sending…" : "Let's collaborate"}
                <HiArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              {status === "sent" && (
                <p
                  role="status"
                  className="font-mono text-xs uppercase tracking-[0.15em] text-accent"
                >
                  ✓ Message sent — I&apos;ll be in touch.
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="font-mono text-xs uppercase tracking-[0.15em] text-fog"
                >
                  Something went wrong — email me directly instead.
                </p>
              )}
            </div>
          </form>

          <div className="flex flex-col gap-8 border-l border-line pl-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
                // email
              </p>
              <a
                href="mailto:agrawaljia2011@gmail.com"
                data-cursor="hover"
                className="mt-2 inline-block text-bone transition-colors hover:text-accent"
              >
                agrawaljia2011@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
                // elsewhere
              </p>
              <div className="mt-3 flex flex-col gap-2 font-mono text-sm">
                <a href="https://www.linkedin.com/in/jiyaagrawal/" className="text-bone transition-colors hover:text-accent">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/Jia-A" className="text-bone transition-colors hover:text-accent">
                  GitHub ↗
                </a>
                <a href="https://jiya-blogs.hashnode.dev/" className="text-bone transition-colors hover:text-accent">
                  Hashnode ↗
                </a>
                <a
                  href="https://drive.google.com/file/d/1g_TRCYQfmfGjvO-yC_wJJ3ktxffNGOsw/view?usp=sharing"
                  className="text-bone transition-colors hover:text-accent"
                >
                  Résumé ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
