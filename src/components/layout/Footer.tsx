import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { siteConfig, navLinks } from "@/content/siteConfig";
import { branches } from "@/content/branches";
import Container from "@/components/ui/Container";
import { cn, focusRing, withBasePath } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-800 bg-charcoal-900">
      <Container className="pt-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="#home" className="inline-flex items-center">
              <Image
                src={withBasePath("/logo.png")}
                alt="Raza Fitness Hub"
                width={1349}
                height={432}
                priority
                className="h-14 w-auto sm:h-16"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.tagline}. Train hard, train smart, and become the
              strongest version of yourself.
            </p>
            <div className="mt-6 flex items-center gap-5 text-muted">
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
                <FaInstagram size={20} />
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
                <FaWhatsapp size={20} />
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className={cn(
                  "rounded transition-colors hover:text-gold-400",
                  focusRing("focus-visible:ring-offset-charcoal-900"),
                )}
              >
                <HiOutlineMail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-offwhite">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded text-sm text-muted transition-colors hover:text-gold-400",
                      focusRing("focus-visible:ring-offset-charcoal-900"),
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-offwhite">
              Locations
            </h3>
            <ul className="mt-4 space-y-4">
              {branches.map((branch) => (
                <li key={branch.name} className="text-sm text-muted">
                  <span className="block font-medium text-offwhite">
                    {branch.name}
                  </span>
                  {branch.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-800 p-2 text-center text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
