import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { AlpanaBorder, FolkBoat, FolkFish, Reveal, WaveLine } from "../components/folk";
import { Button, ButtonLink, Field, SectionHead, WhatsAppLink } from "../components/ui-kit";
import { FRANCHISE } from "../content/pages";
import { BRAND } from "../content/site";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: FRANCHISE.seo.title },
      { name: "description", content: FRANCHISE.seo.description },
      { property: "og:title", content: FRANCHISE.seo.ogTitle },
      { property: "og:description", content: FRANCHISE.seo.ogDescription },
      { property: "og:url", content: "/franchise" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/franchise" }],
  }),
  component: FranchisePage,
});

function FranchisePage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Proposed Location: ${data.get("location")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      FRANCHISE.form.emailSubject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-brick px-5 py-14 sm:px-6 lg:py-24">
        <FolkBoat className="float-slow pointer-events-none absolute -right-3 top-10 h-28 w-36 text-cream/12" />
        <WaveLine className="pointer-events-none absolute inset-x-0 bottom-4 h-8 w-full text-cream/12" />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHead
              tone="cream"
              eyebrow={FRANCHISE.eyebrow}
              title={FRANCHISE.title}
              sub={FRANCHISE.sub}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#franchise-form" variant="cream">
                {FRANCHISE.primaryCta}
              </ButtonLink>
              <ButtonLink href="#franchise-form" variant="ghostCream">
                {FRANCHISE.secondaryCta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <AlpanaBorder className="bg-brick pb-4 opacity-70" />

      <section id="franchise-form" className="paper bg-cream px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHead eyebrow={FRANCHISE.form.eyebrow} title={FRANCHISE.form.title} />
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              {FRANCHISE.form.intro}
            </p>
            <FolkFish className="mt-8 h-12 w-24 text-brick/25" />
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-[2rem] border-2 border-brick/15 bg-card p-6 sm:p-8"
            >
              <Field label="Name" name="name" required placeholder="Your full name" />
              <Field label="Phone" name="phone" type="tel" required placeholder="+91" />
              <Field label="Email" name="email" type="email" required placeholder="you@email.com" />
              <Field label="Proposed Location" name="location" required placeholder="City / neighbourhood" />
              <Field label="Message" name="message" textarea placeholder="Tell us a little about yourself and the site." />
              <Button type="submit" className="w-full">
                Send Franchise Enquiry
              </Button>
              <WhatsAppLink
                message="Hi Fish Adda! I'm interested in a franchise."
                variant="outline"
                className="w-full"
              >
                Enquire on WhatsApp
              </WhatsAppLink>
              {sent && (
                <p className="text-center text-sm font-semibold text-leaf">
                  Your email draft is ready — hit send and we'll take it from there.
                </p>
              )}
              <p className="text-center text-xs text-muted-foreground">
                Or email us directly at{" "}
                <a href={`mailto:${BRAND.email}`} className="underline underline-offset-4">
                  {BRAND.email}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
