import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Member Stories"
          title="Results That Speak"
          subtitle="Real members, real transformations. Here's what the Raza Fitness Hub community has to say."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="article"
              key={t.name}
              delay={(i % 3) * 0.08}
              className="flex flex-col rounded-lg border border-charcoal-700/60 bg-charcoal-850 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <FaQuoteLeft className="text-gold-500/40" size={28} />
              <p className="mt-5 flex-1 text-base leading-relaxed text-offwhite">
                “{t.quote}”
              </p>
              <div className="mt-6 flex gap-1 text-gold-400">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} size={14} />
                ))}
              </div>
              <div className="mt-4 border-t border-charcoal-700/60 pt-4">
                <div className="font-semibold text-offwhite">{t.name}</div>
                <div className="text-sm text-gold-400">{t.result}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
