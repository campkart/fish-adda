import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { AlpanaBorder, FolkSun, Reveal, WaveLine } from "../components/folk";
import { Button, ButtonLink, Field, SectionHead, WhatsAppLink } from "../components/ui-kit";
import { CONTACT } from "../content/pages";
import { BRAND } from "../content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: CONTACT.seo.title },
      { name: "description", content: CONTACT.seo.description },
      { property: "og:title", content: CONTACT.seo.ogTitle },
      { property: "og:description", content: CONTACT.seo.ogDescription },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      "",
      "Please add me to the Fish Adda launch updates list.",
    ].join("\n");
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      CONTACT.form.emailSubject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <section className="paper relative overflow-hidden bg-cream px-5 py-12 sm:px-6 lg:py-20">
        <FolkSun className="float-slow pointer-events-none absolute -right-6 top-6 h-20 w-20 text-mustard/40" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHead eyebrow={CONTACT.eyebrow} title={CONTACT.title} sub={CONTACT.sub} />

            <div className="mt-8 rounded-3xl border-2 border-brick/15 bg-paint p-6">
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
              <p className="mt-4">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-semibold text-brick underline underline-offset-4"
                >
                  {BRAND.email}
                </a>
              </p>
              <p className="eyebrow mt-5 inline-flex rounded-full bg-mustard px-3 py-1.5 text-brick-deep">
                Opening Soon
              </p>
              <WaveLine className="mt-6 h-4 w-32 text-indigo/50" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppLink message={CONTACT.whatsappMessage}>{CONTACT.whatsappCta}</WhatsAppLink>
              <ButtonLink href={`mailto:${BRAND.email}`} variant="outline">
                {CONTACT.emailCta}
              </ButtonLink>
              <ButtonLink to="/franchise" variant="outline">
                {CONTACT.franchiseCta}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-[2rem] border-2 border-brick/15 bg-card p-6 sm:p-8"
            >
              <h2 className="text-2xl text-brick">{CONTACT.form.title}</h2>
              <p className="text-sm text-muted-foreground">{CONTACT.form.sub}</p>
              <Field label="Name" name="name" required placeholder="Your name" />
              <Field label="Phone" name="phone" type="tel" placeholder="+91" />
              <Field label="Email" name="email" type="email" required placeholder="you@email.com" />
              <Button type="submit" className="w-full">
                {CONTACT.form.submit}
              </Button>
              <WhatsAppLink
                message={CONTACT.form.whatsappMessage}
                variant="outline"
                className="w-full"
              >
                {CONTACT.form.whatsappCta}
              </WhatsAppLink>
              {sent && (
                <p className="text-center text-sm font-semibold text-leaf">
                  {CONTACT.form.success}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <AlpanaBorder tone="brick" className="opacity-60" />

      <section className="bg-cream px-5 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border-4 border-brick/15">
          <iframe
            title={BRAND.mapTitle}
            src={BRAND.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full lg:h-[26rem]"
          />
        </div>
      </section>
    </>
  );
}
