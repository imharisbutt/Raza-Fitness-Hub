import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/content/programs";

const highlights = [
  "State-of-the-art strength & cardio equipment",
  "Certified coaches who build plans around you",
  "Clean, spacious, air-conditioned facilities",
  "A supportive community that keeps you accountable",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=70"
                alt="Members training together at Raza Fitness Hub"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-gold-500 px-6 py-5 text-charcoal-950 shadow-xl sm:block">
              <span className="block font-display text-4xl leading-none">8+</span>
              <span className="text-xs font-semibold uppercase tracking-widest">
                Years Strong
              </span>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Raza Fitness Hub"
              title={
                <>
                  More Than a Gym.
                  <span className="block text-gold-400">A Movement.</span>
                </>
              }
              subtitle="Founded in Lahore, Raza Fitness Hub was built on a simple belief: world-class training shouldn't require a plane ticket. We combine international-standard facilities with coaches who genuinely care — so every member, from first-timer to competitor, has everything they need to succeed."
            />

            <Reveal delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                    <FaCheck size={11} />
                  </span>
                  <span className="text-sm text-offwhite">{item}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal
          delay={0.15}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-charcoal-800 pt-12 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                className="font-display text-4xl text-gold-400 sm:text-5xl md:text-6xl"
              />
              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
