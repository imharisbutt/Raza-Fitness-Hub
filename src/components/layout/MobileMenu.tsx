"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteConfig, navLinks } from "@/content/siteConfig";
import Button from "@/components/ui/Button";
import { cn, focusRing } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-charcoal-950/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col bg-charcoal-900 p-6 shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl uppercase tracking-wide text-offwhite">
                <span className="text-gold-400">Raza</span> Fitness
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className={cn(
                  "rounded text-offwhite transition-colors hover:text-gold-400",
                  focusRing("focus-visible:ring-offset-charcoal-900"),
                )}
              >
                <HiX size={26} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "border-b border-charcoal-700/60 py-4 text-lg font-medium uppercase tracking-wide text-offwhite transition-colors hover:text-gold-400",
                    focusRing("focus-visible:ring-offset-charcoal-900"),
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <Button href="#contact" size="lg" className="w-full" onClick={onClose}>
                Join Now
              </Button>
            </div>

            <div className="mt-auto flex items-center gap-5 pt-8 text-muted">
              <Link
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={cn(
                  "rounded transition-colors hover:text-gold-400",
                  focusRing("focus-visible:ring-offset-charcoal-900"),
                )}
              >
                <FaInstagram size={22} />
              </Link>
              <Link
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={cn(
                  "rounded transition-colors hover:text-gold-400",
                  focusRing("focus-visible:ring-offset-charcoal-900"),
                )}
              >
                <FaWhatsapp size={22} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
