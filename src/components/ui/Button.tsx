import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide uppercase transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950 disabled:opacity-60 disabled:pointer-events-none disabled:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-charcoal-950 shadow-lg shadow-gold-500/20 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30",
  outline:
    "border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-charcoal-950 hover:shadow-xl hover:shadow-gold-500/20",
  ghost: "text-offwhite hover:text-gold-400",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm rounded-md",
  lg: "px-8 py-4 text-base rounded-md",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, rel, ...rest } = props as ButtonAsLink;
    const safeRel = rest.target === "_blank" ? (rel ?? "noopener noreferrer") : rel;
    return (
      <Link href={href} className={classes} rel={safeRel} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
