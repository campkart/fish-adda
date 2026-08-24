import { createFileRoute } from "@tanstack/react-router";
import { AlpanaBorder, FolkSun, Reveal } from "../components/folk";
import { FounderCard } from "../components/sections";
import { ButtonLink, SectionHead } from "../components/ui-kit";
import { FOUNDERS, FOUNDERS_PAGE, FRANCHISE } from "../content/pages";

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      { title: FOUNDERS_PAGE.seo.title },
      { name: "description", content: FOUNDERS_PAGE.seo.description },
      { property: "og:title", content: FOUNDERS_PAGE.seo.ogTitle },
      { property: "og:description", content: FOUNDERS_PAGE.seo.ogDescription },
      { property: "og:url", content: "/founders" },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: "/founders" }],
  }),
  component: FoundersPage,
});

function FoundersPage() {
  return (
    <>
      <section className="paper relative overflow-hidden bg-cream px-5 py-12 sm:px-6 lg:py-20">
        <FolkSun className="float-slow pointer-events-none absolute -right-5 top-8 h-20 w-20 text-mustard/40" />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHead
              eyebrow={FOUNDERS_PAGE.eyebrow}
              title={FOUNDERS_PAGE.title}
              sub={FOUNDERS_PAGE.sub}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <FounderCard founder={f} size="lg" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AlpanaBorder tone="brick" className="opacity-60" />

      <section className="bg-brick px-5 py-14 text-center sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <SectionHead
            center
            tone="cream"
            title="Want to build an adda with us?"
            sub={FRANCHISE.sub}
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/franchise" variant="cream">
              Franchise Enquiry
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghostCream">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
