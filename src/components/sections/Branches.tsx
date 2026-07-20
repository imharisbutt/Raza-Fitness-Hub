import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaDirections } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { branches } from "@/content/branches";
import { cn, focusRing } from "@/lib/utils";

export default function Branches() {
  return (
    <section id="branches" className="bg-charcoal-900 py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Find Us"
          title="Two Locations, One Standard"
          subtitle="Train at our flagship Gulberg branch today — and get ready for our brand-new location opening soon."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {branches.map((branch, i) => (
            <Reveal
              as="article"
              key={branch.name}
              delay={i * 0.1}
              className="group overflow-hidden rounded-lg border border-charcoal-700/60 bg-charcoal-850 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent" />
                {branch.status === "coming-soon" && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-charcoal-950">
                    Opening Soon
                  </span>
                )}
              </div>

              <div className="p-8">
                <h3 className="font-display text-3xl uppercase tracking-wide text-offwhite">
                  {branch.name}
                </h3>

                <ul className="mt-5 space-y-3 text-base text-muted">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-0.5 flex-none text-gold-400" />
                    {branch.address}
                  </li>
                  <li className="flex items-start gap-3">
                    <FaClock className="mt-0.5 flex-none text-gold-400" />
                    {branch.hours}
                  </li>
                  <li className="flex items-start gap-3">
                    <FaPhoneAlt className="mt-0.5 flex-none text-gold-400" />
                    {branch.phone}
                  </li>
                </ul>

                <Link
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-6 inline-flex items-center gap-2 rounded text-sm font-semibold uppercase tracking-wide text-gold-400 transition-colors hover:text-gold-300",
                    focusRing(),
                  )}
                >
                  <FaDirections /> Get Directions
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
