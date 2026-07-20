import { FaCheck } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { pricingTiers } from "@/content/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Membership"
          title="Choose Your Plan"
          subtitle="Simple, transparent pricing. No hidden fees, no long-term lock-ins — just flexible memberships that fit your goals."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal
              as="article"
              key={tier.name}
              delay={i * 0.1}
              className={cn(
                "relative flex flex-col rounded-lg border p-8 transition-all duration-300",
                tier.featured
                  ? "border-gold-500 bg-charcoal-850 shadow-2xl shadow-gold-500/10 hover:shadow-gold-500/20 lg:-translate-y-4"
                  : "border-charcoal-700/60 bg-charcoal-900 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/5",
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-charcoal-950">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-3xl uppercase tracking-wide text-offwhite">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl text-gold-400">
                  {tier.price}
                </span>
                <span className="mb-1 text-sm text-muted">{tier.period}</span>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                      <FaCheck size={11} />
                    </span>
                    <span className="text-offwhite">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  href="#contact"
                  variant={tier.featured ? "primary" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
