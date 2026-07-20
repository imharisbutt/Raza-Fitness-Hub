"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { cn, focusRing } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/content/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <Reveal className="relative overflow-hidden rounded-lg">
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=75"
                alt="Coach guiding a member through a training session"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Got Questions?"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know before you walk through our doors — and if it's not here, just ask."
            />

            <div className="mt-10 flex flex-col gap-4">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <Reveal
                    as="div"
                    key={faq.question}
                    delay={(i % 4) * 0.05}
                    className={cn(
                      "rounded-lg border bg-charcoal-850 transition-colors duration-300",
                      isOpen
                        ? "border-gold-500/60"
                        : "border-charcoal-700/60 hover:border-charcoal-600",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7",
                        focusRing("focus-visible:ring-offset-charcoal-850"),
                      )}
                    >
                      <span
                        className={cn(
                          "font-display text-base uppercase tracking-wide sm:text-lg",
                          isOpen ? "text-gold-400" : "text-offwhite",
                        )}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          "flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-colors duration-300",
                          isOpen
                            ? "border-gold-500 bg-gold-500 text-charcoal-950"
                            : "border-charcoal-600 text-muted",
                        )}
                      >
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="flex"
                        >
                          <FaChevronDown size={12} />
                        </motion.span>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-base leading-relaxed text-muted sm:px-7 sm:text-lg">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
