import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { trainers } from "@/content/trainers";
import { cn, focusRing } from "@/lib/utils";

export default function Trainers() {
  return (
    <section id="trainers" className="bg-charcoal-900 py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Meet The Team"
          title="Coaches Who Care"
          subtitle="Our certified trainers bring years of experience and a genuine commitment to helping you reach your goals."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, i) => (
            <Reveal
              as="article"
              key={trainer.name}
              delay={(i % 4) * 0.08}
              className="group overflow-hidden rounded-lg border border-charcoal-700/60 bg-charcoal-850 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                <Link
                  href={trainer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${trainer.name} on Instagram`}
                  className={cn(
                    "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal-950/60 text-offwhite backdrop-blur transition-colors hover:bg-gold-500 hover:text-charcoal-950",
                    focusRing(),
                  )}
                >
                  <FaInstagram size={16} />
                </Link>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase tracking-wide text-offwhite">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold-400">
                  {trainer.specialty}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {trainer.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
