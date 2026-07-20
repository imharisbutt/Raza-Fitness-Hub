"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/siteConfig";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=75"
        alt="Athlete training with a barbell"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/40" />

      <Container className="relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-gold-400">
            <span className="h-px w-10 bg-gold-500" />
            {siteConfig.tagline}
          </span>

          <h1 className="mt-6 font-display text-6xl uppercase leading-[0.9] tracking-wide text-offwhite sm:text-7xl md:text-8xl lg:text-9xl">
            Build Your
            <span className="block text-gold-400">Legacy</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Premium coaching, world-class equipment, and a community that pushes
            you further. This is where Lahore comes to get seriously strong.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" size="lg">
              Join Now <FaArrowRight />
            </Button>
            <Button href="#programs" size="lg" variant="outline">
              View Programs
            </Button>
          </div>
        </motion.div>
      </Container>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border-2 border-gold-500/50"
        >
          <span className="mx-auto mt-2 block h-2 w-1 rounded-full bg-gold-400" />
        </motion.div>
      </div>
    </section>
  );
}
