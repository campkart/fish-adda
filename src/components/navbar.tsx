import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { IMAGES } from "../content/images";
import { BRAND, BOTTOM_NAV_LINKS, NAV_LINKS } from "../content/site";

/** Logo + brand name, reused by the navbar and the footer. */
export function Wordmark({
  tone = "brick",
  size = "sm",
}: {
  tone?: "brick" | "cream";
  size?: "sm" | "lg";
}) {
  const c = tone === "cream" ? "text-cream" : "text-brick";
  const mark = size === "lg" ? "h-20 w-20 sm:h-24 sm:w-24" : "h-11 w-11 sm:h-12 sm:w-12";
  const text = size === "lg" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl";
  return (
    <Link to="/" className={`group flex items-center gap-3 ${c}`} aria-label={`${BRAND.name} home`}>
      <span
        className={`${mark} grid shrink-0 place-items-center overflow-hidden rounded-full bg-cream ring-2 ring-brick/15 transition-transform duration-300 group-hover:-translate-y-0.5`}
      >
        <img
          src={IMAGES.logo}
          alt={`${BRAND.name} logo`}
          width={512}
          height={512}
          className="h-[112%] w-[112%] max-w-none object-contain"
        />
      </span>
      <span className={`display-xl ${text} leading-none tracking-[-0.03em]`}>{BRAND.name}</span>
    </Link>
  );
}

function Glyph({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...common}>
      {name === "home" && <path d="M3 11 12 3l9 8M5.5 9.5V20h13V9.5" />}
      {name === "menu" && <path d="M4 6h16M4 12h16M4 18h10" />}
      {name === "story" && (
        <path d="M4 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-7a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h7z" />
      )}
      {name === "shop" && <path d="M3 8l1.5-4h15L21 8M3 8h18v12H3zM9 20v-6h6v6" />}
      {name === "mail" && <path d="M3 6h18v12H3zM3 7l9 6 9-6" />}
    </svg>
  );
}

/** Sticky top navigation, shared across every page. */
export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_color-mix(in_oklab,var(--brick)_18%,transparent)]"
          : "bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <div className="min-w-0">
          <Wordmark />
        </div>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:text-brick"
              activeProps={{ className: "text-brick" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brick/20 text-brick transition-colors hover:bg-brick/5 lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[3.9rem] z-40 bg-brick-deep/40 backdrop-blur-[2px]"
          />
          <nav
            aria-label="Mobile menu"
            className="relative z-50 border-t border-brick/10 bg-cream px-5 pb-6 pt-3 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.4)]"
          >
            <ul className="grid gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "!text-brick !bg-brick/5" }}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:bg-brick/5 hover:text-brick"
                  >
                    {l.label}
                    <span aria-hidden="true" className="text-brick/40">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Fixed bottom bar shown on mobile only. */
export function BottomNav() {
  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cream/15 bg-brick pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {BOTTOM_NAV_LINKS.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "!text-mustard" }}
              className="flex min-h-14 flex-col items-center justify-center gap-1 px-1 py-2 text-cream/70 transition-colors"
            >
              <Glyph name={l.glyph} />
              <span className="text-[0.58rem] font-bold uppercase tracking-[0.1em]">{l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
