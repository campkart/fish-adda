import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { BRAND } from "../content/site";

type Variant = "brick" | "cream" | "outline" | "ghostCream";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-all duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick";

const variants: Record<Variant, string> = {
  brick: "bg-brick text-cream shadow-[0_8px_0_-2px_var(--brick-deep)] hover:bg-brick-deep",
  cream: "bg-cream text-brick shadow-[0_8px_0_-2px_color-mix(in_oklab,var(--brick)_35%,transparent)] hover:bg-paint",
  outline: "border-2 border-brick/40 text-brick hover:border-brick hover:bg-brick/5",
  ghostCream: "border-2 border-cream/45 text-cream hover:bg-cream/12",
};

export function btnClass(variant: Variant = "brick", extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}

export function ButtonLink({
  to,
  href,
  variant = "brick",
  className = "",
  children,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  if (href) {
    return (
      <a href={href} className={btnClass(variant, className)}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={btnClass(variant, className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "brick",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button {...props} className={btnClass(variant, className)} />;
}

export function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full rounded-xl border-2 border-border bg-paint px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-brick focus:outline-none";
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-brick">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} required={required} placeholder={placeholder} className={cls} />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </label>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  tone = "brick",
  center,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  tone?: "brick" | "cream";
  center?: boolean;
}) {
  const isCream = tone === "cream";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${isCream ? "text-mustard" : "text-brick/70"}`}>{eyebrow}</p>
      )}
      <h2
        className={`display-xl text-[clamp(2rem,7vw,3.6rem)] ${isCream ? "text-cream" : "text-brick"}`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 text-base leading-relaxed ${isCream ? "text-cream/80" : "text-muted-foreground"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function waLink(message: string, phone = BRAND.whatsapp) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.76 1.45 5.32L2 22l4.98-1.6a9.8 9.8 0 0 0 5.06 1.4c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm0 17.9c-1.63 0-3.14-.48-4.41-1.3l-.32-.2-2.95.95.96-2.87-.21-.33a7.98 7.98 0 0 1-1.24-4.3c0-4.44 3.62-8.06 8.07-8.06 4.45 0 8.06 3.62 8.06 8.06 0 4.45-3.61 8.06-8.06 8.06Zm4.44-5.98c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function WhatsAppLink({
  message,
  variant = "brick",
  className = "",
  children,
}: {
  message: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={btnClass(variant, className)}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

/*export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi Fish Adda! I'd like to know more about the adda.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fish Adda on WhatsApp"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-cream shadow-[0_10px_28px_-8px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 lg:bottom-6 lg:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}*/
