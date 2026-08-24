import { createFileRoute } from "@tanstack/react-router";
import { AlpanaBorder, FolkBoat, FolkFish, FolkLeaf, Reveal, WaveLine } from "../components/folk";
import { AddaModules } from "../components/sections";
import { ButtonLink, SectionHead } from "../components/ui-kit";
import { GALLERY, IMAGES } from "../content/images";
import { ADDA_MODULES, STORY } from "../content/pages";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: STORY.seo.title },
      { name: "description", content: STORY.seo.description },
      { property: "og:title", content: STORY.seo.ogTitle },
      { property: "og:description", content: STORY.seo.ogDescription },
      { property: "og:url", content: "/story" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/story" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <section className="paper relative overflow-hidden bg-cream px-5 py-12 sm:px-6 lg:py-20">
        <FolkFish className="float-slow pointer-events-none absolute -right-2 top-10 h-12 w-24 text-brick/18" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHead eyebrow={STORY.eyebrow} title={STORY.title} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              {STORY.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <WaveLine className="mt-6 h-5 w-48 text-indigo/60" />
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <FolkLeaf className="pointer-events-none absolute -left-4 -top-5 h-16 w-10 text-leaf/60" />
              <img
                src={IMAGES.interior1}
                alt={STORY.imageAlt}
                loading="lazy"
                width={1008}
                height={1200}
                className="w-full rounded-[2rem] border-4 border-brick/15 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brick px-5 py-12 sm:px-6">
        <ol className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-3">
          {STORY.chain.map((word, i) => (
            <li key={word} className="flex items-center gap-4">
              <span className="display-xl text-2xl text-cream sm:text-4xl">{word}</span>
              {i < STORY.chain.length - 1 && <span className="text-mustard">→</span>}
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-cream py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <SectionHead
              eyebrow={STORY.gallery.eyebrow}
              title={STORY.gallery.title}
              sub={STORY.gallery.sub}
            />
          </Reveal>
        </div>
        <div className="rail mt-8 px-5 sm:px-6 lg:mx-auto lg:max-w-6xl">
          {GALLERY.map((g, i) => (
            <Reveal key={g.caption} delay={i * 80}>
              <figure className="w-[16rem] sm:w-[21rem]">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1008}
                  height={1200}
                  className="h-80 w-full rounded-3xl border-4 border-brick/12 object-cover sm:h-[26rem]"
                />
                <figcaption className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-brick">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <AlpanaBorder tone="brick" className="opacity-60" />

      <section className="relative overflow-hidden bg-brick px-5 py-16 sm:px-6 lg:py-24">
        <FolkBoat className="pointer-events-none absolute -left-4 bottom-6 h-24 w-32 text-cream/12" />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHead tone="cream" eyebrow={STORY.concept.eyebrow} title={STORY.concept.title} />
          </Reveal>
          <div className="mt-10">
            <AddaModules items={ADDA_MODULES} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/founders" variant="cream">
              {STORY.ctaFounders}
            </ButtonLink>
            <ButtonLink to="/menu" variant="ghostCream">
              {STORY.ctaMenu}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
