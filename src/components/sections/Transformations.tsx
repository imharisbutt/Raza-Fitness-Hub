import Image from "next/image";
import { FaQuoteLeft, FaDumbbell, FaRegClock } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { transformations } from "@/content/transformations";

export default function Transformations() {
  return (
    <section
      id="transformations"
      className="bg-charcoal-900 py-20 md:py-28 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Real Results"
          title="Transformations That Inspire"
          subtitle="Every member's journey looks different. Here's what consistency, coaching, and community can do."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {transformations.map((t, i) => (
            <Reveal
              as="article"
              key={t.name}
              delay={(i % 2) * 0.1}
              className="group overflow-hidden rounded-lg border border-charcoal-700/60 bg-charcoal-850 transition-colors duration-300 hover:border-gold-500/40"
            >
              <div className="relative grid aspect-[16/10] grid-cols-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={t.beforeImage}
                    alt={`${t.name} before training at Raza Fitness Hub`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-charcoal-600 bg-charcoal-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted backdrop-blur">
                    Before
                  </span>
                </div>

                <div className="relative overflow-hidden">
                  <Image
                    src={t.afterImage}
                    alt={`${t.name} after training at Raza Fitness Hub`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-charcoal-950">
                    After
                  </span>
                </div>

                {/* Center divider with directional accent */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold-500/70" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-500 text-charcoal-950 shadow-lg shadow-gold-500/30 transition-transform duration-300 group-hover:scale-110">
                  <HiArrowRight size={16} />
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl uppercase tracking-wide text-offwhite">
                  {t.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-400">
                    <FaDumbbell size={11} />
                    {t.result}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-charcoal-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    <FaRegClock size={11} />
                    {t.duration}
                  </span>
                </div>

                <div className="mt-4 flex gap-3">
                  <FaQuoteLeft className="mt-1 flex-none text-gold-500/40" size={16} />
                  <p className="text-base leading-relaxed text-muted">{t.story}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <Button href="#contact" size="lg">
            Start Your Transformation
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
