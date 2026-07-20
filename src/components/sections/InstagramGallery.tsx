import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/siteConfig";
import { instagramPosts } from "@/content/instagram";
import { cn, focusRing } from "@/lib/utils";

export default function InstagramGallery() {
  return (
    <section id="instagram" className="py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Follow Along"
          title="Instagram Gallery"
          subtitle={`A behind-the-scenes look at life at Raza Fitness Hub — follow @${siteConfig.instagram} for daily training tips, member wins, and studio moments.`}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {instagramPosts.map((post, i) => (
            <Reveal
              as="div"
              key={post.alt}
              delay={(i % 4) * 0.06}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Link
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View on Instagram: ${post.alt}`}
                className={cn("group relative block h-full w-full", focusRing())}
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal-950/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <FaInstagram
                    size={30}
                    className="scale-75 text-gold-400 transition-transform duration-300 group-hover:scale-100"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <Button
            href={siteConfig.instagramUrl}
            target="_blank"
            variant="outline"
            size="lg"
          >
            <FaInstagram /> Follow @{siteConfig.instagram}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
