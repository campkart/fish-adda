import { createFileRoute } from "@tanstack/react-router";
import {
  AlpanaBorder,
  FolkBird,
  FolkBoat,
  FolkFish,
  FolkLeaf,
  FolkSun,
  Reveal,
  WaveLine,
} from "../components/folk";
import { AddaModules, DishCard, FounderCard, Ticker } from "../components/sections";
import { ButtonLink, SectionHead, WhatsAppLink } from "../components/ui-kit";
import { GALLERY, IMAGES } from "../content/images";
import { SIGNATURE_PICKS } from "../content/menu";
import { ADDA_MODULES, FOUNDERS, HOME } from "../content/pages";
import { BRAND } from "../content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME.seo.title },
      { name: "description", content: HOME.seo.description },
      { property: "og:title", content: HOME.seo.ogTitle },
      { property: "og:description", content: HOME.seo.ogDescription },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="paper relative overflow-hidden bg-cream">
        <FolkSun className="float-slow pointer-events-none absolute -right-6 top-6 h-24 w-24 text-mustard/45" />
        <FolkBird className="pointer-events-none absolute left-6 top-10 h-6 w-16 text-brick/25" />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-16">
          <div className="relative">
            <p className="eyebrow inline-flex items-center gap-2 rounded-full bg-brick px-3.5 py-2 text-cream">
              {BRAND.comingSoonLabel}
            </p>
            <h1 className="display-xl mt-5 text-[clamp(2.3rem,10vw,4.6rem)] leading-[0.95] text-brick">
              {HOME.hero.titleLine1}
              <br />
              <span className="text-indigo">{HOME.hero.titleLine2}</span>
            </h1>
            <WaveLine className="draw-line mt-3 h-5 w-52 text-indigo/70" />
            <p className="mt-5 max-w-md text-lg font-semibold leading-snug text-foreground/85 sm:text-xl">
              {HOME.hero.sub}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink to="/menu">{HOME.hero.primaryCta}</ButtonLink>
              <WhatsAppLink message={HOME.hero.whatsappMessage} variant="outline">
                {HOME.hero.whatsappCta}
              </WhatsAppLink>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-brick">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
              {BRAND.openingAt}
            </p>
          </div>

          <div className="relative">
            <FolkFish className="float-slow pointer-events-none absolute -left-3 -top-4 z-10 h-10 w-20 text-brick/45" />
            <FolkLeaf className="pointer-events-none absolute -bottom-4 -right-2 z-10 h-16 w-10 text-leaf/60" />
            <div className="overflow-hidden rounded-[2rem] border-4 border-brick/15 shadow-[0_24px_60px_-30px_color-mix(in_oklab,var(--brick)_70%,transparent)]">
              <img
                src={IMAGES.heroFood}
                alt={HOME.hero.imageAlt}
                width={1408}
                height={1408}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <AlpanaBorder tone="brick" className="opacity-70" />
      </section>

      {/* INTRO */}
      <section className="bg-cream px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHead center title={HOME.intro.title} />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {HOME.intro.body}
            </p>
          </Reveal>
        </div>
      </section>
      <Ticker />

      {/* SIGNATURE PICKS */}
      <section className="paper bg-cream px-0 py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <SectionHead eyebrow={HOME.signature.eyebrow} title={HOME.signature.title} />
          </Reveal>
        </div>
        <div className="rail mt-8 px-5 sm:px-6 lg:mx-auto lg:max-w-6xl">
          {SIGNATURE_PICKS.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <DishCard image={d.image} name={d.name} desc={d.desc} />
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-6xl px-5 sm:px-6">
          <ButtonLink to="/menu" variant="outline">
            {HOME.signature.cta}
          </ButtonLink>
        </div>
      </section>

      {/* ADDA CONCEPT */}
      <section className="relative overflow-hidden bg-brick px-5 py-16 sm:px-6 lg:py-24">
        <FolkBoat className="pointer-events-none absolute -right-4 top-8 h-28 w-36 text-cream/12" />
        <WaveLine className="pointer-events-none absolute inset-x-0 bottom-6 h-8 w-full text-cream/12" />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHead tone="cream" eyebrow={HOME.concept.eyebrow} title={HOME.concept.title} />
          </Reveal>
          <div className="mt-10">
            <AddaModules items={ADDA_MODULES} />
          </div>
        </div>
      </section>

      {/* INTERIOR GALLERY */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <SectionHead
              eyebrow={HOME.gallery.eyebrow}
              title={HOME.gallery.title}
              sub={HOME.gallery.sub}
            />
          </Reveal>
        </div>
        <div className="rail mt-8 px-5 sm:px-6 lg:mx-auto lg:max-w-6xl">
          {GALLERY.map((g, i) => (
            <Reveal key={g.caption} delay={i * 80}>
              <figure className="w-[16rem] sm:w-[20rem]">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1008}
                  height={1200}
                  className="h-80 w-full rounded-3xl border-4 border-brick/12 object-cover sm:h-96"
                />
                <figcaption className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-brick">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-6xl px-5 sm:px-6">
          <ButtonLink to="/story" variant="outline">
            {HOME.gallery.cta}
          </ButtonLink>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-cream px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHead
              eyebrow={HOME.founders.eyebrow}
              title={HOME.founders.title}
              sub={HOME.founders.sub}
            />
          </Reveal>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <FounderCard founder={f} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink to="/founders" variant="outline">
              {HOME.founders.cta}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* LAUNCH CTA */}
      <section className="relative overflow-hidden bg-brick-deep px-5 py-16 text-center sm:px-6 lg:py-24">
        <AlpanaBorder className="absolute inset-x-0 top-0 opacity-60" />
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow text-mustard">{HOME.launch.eyebrow}</p>
            <p className="display-xl mt-4 text-[clamp(2.4rem,11vw,5.5rem)] text-cream">
              {HOME.launch.line1}
              <span className="block text-mustard">{HOME.launch.line2}</span>
              {HOME.launch.line3}
            </p>
            <p className="mx-auto mt-5 max-w-md text-cream/80">{HOME.launch.sub}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink to="/contact" variant="cream">
                {HOME.launch.primaryCta}
              </ButtonLink>
              <WhatsAppLink message={HOME.launch.whatsappMessage} variant="ghostCream">
                {HOME.launch.whatsappCta}
              </WhatsAppLink>
            </div>
          </Reveal>
        </div>
        <AlpanaBorder flip className="absolute inset-x-0 bottom-0 opacity-60" />
      </section>

      {/* LOCATION */}
      <section className="paper bg-cream px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHead eyebrow={HOME.location.eyebrow} title={HOME.location.title} />
            <div className="mt-6 rounded-3xl border-2 border-brick/15 bg-paint p-6">
              <p className="display-xl text-2xl text-brick">{BRAND.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{BRAND.legal}</p>
              <p className="eyebrow mt-4 text-brick/70">Opening at</p>
              <p className="text-lg font-semibold text-foreground/90">{BRAND.openingAt}</p>
              <p className="eyebrow mt-4 text-brick/70">Company address</p>
              <address className="not-italic leading-relaxed text-foreground/85">
                {BRAND.companyAddress.line1}
                <br />
                {BRAND.companyAddress.line2}
              </address>
              <p className="eyebrow mt-5 inline-flex rounded-full bg-mustard px-3 py-1.5 text-brick-deep">
                Opening Soon
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border-4 border-brick/15">
              <iframe
                title={BRAND.mapTitle}
                src={BRAND.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full lg:h-96"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
