function Footer() {
  return (
    <footer className="w-full border-t border-line py-10">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-3 px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-fog sm:flex-row lg:px-10">
        <p>
          Built with Next.js · Tailwind · Framer Motion
        </p>
        <p>
          © 2026 <span className="text-bone">Jiya Agrawal</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
