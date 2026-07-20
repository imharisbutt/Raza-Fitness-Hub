import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { programs } from "@/content/programs";

export default function Programs() {
  return (
    <section id="programs" className="bg-charcoal-900 py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Programs Built For Results"
          subtitle="Whatever your goal — strength, fat loss, endurance, or just feeling great — we have a program and a coach for you."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <Reveal
                as="article"
                key={program.title}
                delay={(i % 3) * 0.08}
                className="group rounded-lg border border-charcoal-700/60 bg-charcoal-850 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-charcoal-950">
                  <Icon size={30} />
                </span>
                <h3 className="mt-6 font-display text-2xl uppercase tracking-wide text-offwhite">
                  {program.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {program.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
