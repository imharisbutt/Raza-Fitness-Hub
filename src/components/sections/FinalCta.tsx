"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/siteConfig";

export default function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative flex min-h-[70vh] items-center overflow-hidden py-24 md:py-32"
    >
      <Image
        src="/images/final-cta-bg.png"
        alt="Athlete straining against battle ropes in a dramatic, dust-filled gym"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-charcoal-950/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        >
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold-400">
            <span className="h-px w-10 bg-gold-500" />
            Your Journey Starts Here
            <span className="h-px w-10 bg-gold-500" />
          </span>

          <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-wide text-offwhite sm:text-6xl md:text-6xl">
            Ready to <span className="text-gold-400">Transform</span> Your
            Body?
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Stop putting it off. Book a free trial session, meet your
            coaches, and see the facility for yourself — no pressure, no
            obligation, just a real look at what Raza Fitness Hub can do for
            you.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" size="lg">
              Book Free Trial <FaArrowRight />
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              target="_blank"
              size="lg"
              variant="outline"
            >
              <FaWhatsapp /> Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
