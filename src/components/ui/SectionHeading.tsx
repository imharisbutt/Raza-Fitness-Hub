import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  subtitleClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
        <span className="h-px w-8 bg-gold-500" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-offwhite sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
            align === "center" ? "mx-auto" : "",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
