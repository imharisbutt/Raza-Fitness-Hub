import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/siteConfig";
import { cn, focusRing } from "@/lib/utils";

const contactItems = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:+${siteConfig.phoneRaw}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat with us",
    href: siteConfig.whatsappUrl,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: `@${siteConfig.instagram}`,
    href: siteConfig.instagramUrl,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal-900 py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get In Touch"
              title={
                <>
                  Start Your
                  <span className="block text-gold-400">Journey Today</span>
                </>
              }
              subtitle="Ready to train? Book a free tour, ask about memberships, or just say hello. Our team usually replies within a few hours."
              subtitleClassName="max-w-md"
            />

            <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cn(
                      "group flex items-center gap-4 rounded-lg border border-charcoal-700/60 bg-charcoal-850 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/5",
                      focusRing(),
                    )}
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gold-500/10 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-charcoal-950">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-muted">
                        {item.label}
                      </span>
                      <span className="text-sm text-offwhite">{item.value}</span>
                    </span>
                  </Link>
                );
              })}
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-4 flex items-center gap-3 rounded-lg border border-charcoal-700/60 bg-charcoal-850 p-4 text-sm text-muted"
            >
              <FaMapMarkerAlt className="flex-none text-gold-400" />
              {branchesSummary}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const branchesSummary = "Gulberg III & DHA Phase 6 (opening soon), Lahore";
