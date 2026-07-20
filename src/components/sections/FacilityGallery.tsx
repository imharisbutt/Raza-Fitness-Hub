"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowsExpand, HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { galleryImages, type GalleryImage } from "@/content/gallery";

const sizeClasses: Record<GalleryImage["size"], string> = {
  lg: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  sm: "",
};

export default function FacilityGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const close = useCallback(() => {
    const lastIndex = activeIndex;
    setActiveIndex(null);
    if (lastIndex !== null) triggerRefs.current[lastIndex]?.focus();
  }, [activeIndex]);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);

  return (
    <section id="gallery" className="py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Space"
          title="Built To World-Class Standards"
          subtitle="A look inside our training floor — the equipment, the light, the atmosphere. See why members say it doesn't feel like a gym in Lahore, it feels like a gym anywhere."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 [grid-auto-flow:dense] auto-rows-[130px] sm:grid-cols-4 sm:auto-rows-[160px] lg:auto-rows-[180px]">
          {galleryImages.map((image, i) => (
            <Reveal
              as="div"
              key={image.src}
              delay={(i % 4) * 0.06}
              className={cn("relative", sizeClasses[image.size])}
            >
              <button
                type="button"
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                onClick={() => setActiveIndex(i)}
                aria-label={`View larger photo: ${image.alt}`}
                className="group relative h-full w-full overflow-hidden rounded-lg border border-charcoal-700/60 bg-charcoal-850 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-950/0 transition-colors duration-300 group-hover:bg-charcoal-950/40" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-charcoal-950">
                    <HiArrowsExpand size={18} />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <Lightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={close}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}

type LightboxProps = {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function Lightbox({ images, activeIndex, onClose, onPrev, onNext }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const open = activeIndex !== null;
  const image = open ? images[activeIndex] : null;

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && image && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal-950/90 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex h-full max-h-[80vh] w-full max-w-5xl flex-col"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg border border-charcoal-700/60">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-contain bg-charcoal-900"
                priority
              />
            </div>

            <p className="mt-4 text-center text-sm text-muted">{image.alt}</p>

            <button
              type="button"
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close gallery"
              className="absolute -top-4 right-0 flex h-10 w-10 -translate-y-full items-center justify-center rounded-full bg-charcoal-900 text-offwhite transition-colors hover:bg-gold-500 hover:text-charcoal-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 sm:top-0 sm:translate-y-0"
            >
              <HiX size={20} />
            </button>

            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous photo"
              className="absolute left-0 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal-900 text-offwhite transition-colors hover:bg-gold-500 hover:text-charcoal-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 max-sm:hidden"
            >
              <HiChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next photo"
              className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-charcoal-900 text-offwhite transition-colors hover:bg-gold-500 hover:text-charcoal-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 max-sm:hidden"
            >
              <HiChevronRight size={22} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
