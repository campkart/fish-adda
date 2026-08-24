import { Link } from "@tanstack/react-router";
import { AlpanaBorder, WaveLine } from "./folk";
import { Wordmark } from "./navbar";
import { waLink, WhatsAppIcon } from "./ui-kit";
import { BRAND, NAV_LINKS } from "../content/site";

/** Site footer, shared across every page. */
export function Footer() {
  return (
    <footer className="mt-0 bg-brick text-cream">
      <AlpanaBorder className="pt-6 opacity-90" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Wordmark tone="cream" size="lg" />
          <p className="mt-3 text-sm text-cream/70">{BRAND.legal}</p>
          <p className="eyebrow mt-5 text-mustard">{BRAND.comingSoonLabel}</p>
          <WaveLine className="mt-5 h-4 w-40 text-cream/40" />
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3 text-cream/60">Reach us</p>
          <a href={`mailto:${BRAND.email}`} className="block underline-offset-4 hover:underline">
            {BRAND.email}
          </a>
          <a
            href={waLink(`Hi ${BRAND.name}! I'd like to know more.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 font-semibold text-mustard underline-offset-4 hover:underline"
          >
            <WhatsAppIcon /> WhatsApp us
          </a>
          <address className="mt-3 not-italic leading-relaxed text-cream/75">
            {BRAND.companyAddress.line1}
            <br />
            {BRAND.companyAddress.line2}
          </address>
        </div>
        <div>
          <p className="eyebrow mb-3 text-cream/60">Explore</p>
          <ul className="grid grid-cols-2 gap-y-2 text-sm md:grid-cols-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/80 underline-offset-4 hover:text-mustard hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AlpanaBorder flip className="opacity-70" />
      <p className="pb-24 pt-5 text-center text-[0.68rem] uppercase tracking-[0.18em] text-cream/50 lg:pb-6">
        © {new Date().getFullYear()} Jyoty Food And Beverages
      </p>
    </footer>
  );
}
