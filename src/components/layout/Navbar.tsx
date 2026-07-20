"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { cn, focusRing, withBasePath } from "@/lib/utils";
import { navLinks } from "@/content/siteConfig";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-charcoal-700/60 bg-charcoal-950/90 backdrop-blur"
            : "bg-transparent",
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="#home" className="flex items-center">
            <Image
              src={withBasePath("/logo.png")}
              alt="Raza Fitness Hub"
              width={1349}
              height={432}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded text-sm font-medium uppercase tracking-wide text-muted transition-colors hover:text-gold-400",
                  focusRing(),
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" size="md">
              Join Now
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "rounded text-offwhite transition-colors hover:text-gold-400 lg:hidden",
              focusRing(),
            )}
          >
            <HiMenuAlt3 size={28} />
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
