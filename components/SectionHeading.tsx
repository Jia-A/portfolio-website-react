type Props = {
  index: string;
  title: string;
  intro?: string;
};

export default function SectionHeading({ index, title, intro }: Props) {
  return (
    <div className="mb-14">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px w-12 bg-line" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
          {title}
        </span>
      </div>
      <h2 className="text-3xl font-bold uppercase tracking-tight text-bone sm:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-[620px] text-sm leading-relaxed text-fog sm:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}
