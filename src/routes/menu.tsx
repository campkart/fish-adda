import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  AlpanaBorder,
  FolkFish,
  Reveal,
  WaveLine,
} from "../components/folk";

import { DishCard } from "../components/sections";

import {
  SectionHead,
  WhatsAppLink,
} from "../components/ui-kit";

import {
  FEATURED_DISHES,
  MENU,
  MENU_ITEM_IMAGES,
} from "../content/menu";

import { MENU_PAGE } from "../content/pages";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      {
        title: MENU_PAGE.seo.title,
      },
      {
        name: "description",
        content: MENU_PAGE.seo.description,
      },
      {
        property: "og:title",
        content: MENU_PAGE.seo.ogTitle,
      },
      {
        property: "og:description",
        content: MENU_PAGE.seo.ogDescription,
      },
      {
        property: "og:url",
        content: "/menu",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/menu",
      },
    ],
  }),

  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState(
    MENU[0]!.id,
  );

  const category =
    MENU.find((c) => c.id === active) ??
    MENU[0]!;

  return (
    <>
      {/* MENU HEADER */}

      <section className="paper relative overflow-hidden bg-cream px-5 pb-8 pt-10 sm:px-6 lg:pt-16">
        <FolkFish
          className="float-slow pointer-events-none absolute -right-3 bottom-2 h-10 w-20 text-brick/15"
        />

        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow={MENU_PAGE.eyebrow}
            title={MENU_PAGE.title}
            sub={MENU_PAGE.sub}
          />

          <WaveLine className="mt-6 h-5 w-40 text-indigo/60" />
        </div>
      </section>

      {/* CATEGORY RAIL */}

      <div className="sticky top-[3.8rem] z-40 bg-cream/95 py-3 backdrop-blur-md lg:top-[4.5rem]">
        <div className="rail mx-auto max-w-6xl px-5 sm:px-6">
          {MENU.map((c) => {
            const on = c.id === active;

            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                aria-pressed={on}
                className={`rounded-full border-2 px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] transition-colors ${
                  on
                    ? "border-brick bg-brick text-cream"
                    : "border-brick/25 bg-paint text-brick hover:border-brick/60"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* MENU ITEMS */}

      <section className="bg-cream px-5 pb-16 pt-6 sm:px-6 lg:pb-24">
        <div className="mx-auto max-w-6xl">

          <p className="eyebrow text-brick/70">
            {category.blurb}
          </p>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {category.items.map((item, i) => {

              const f = FEATURED_DISHES[item];

              const image =
                MENU_ITEM_IMAGES[item] ??
                category.image;

              return (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 60}
                >

                  <div className="flex h-full overflow-hidden rounded-3xl border-2 border-brick/12 bg-paint">

                    <img
                      src={image}
                      alt={item}
                      loading="lazy"
                      className="h-28 w-28 shrink-0 object-cover sm:h-32 sm:w-32"
                    />

                    <div className="flex min-w-0 flex-col justify-center p-4">

                      <h3 className="text-base font-bold leading-tight text-brick sm:text-lg">
                        {item}
                      </h3>

                      {f && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {f.desc}
                        </p>
                      )}

                    </div>

                  </div>

                </Reveal>
              );
            })}

          </ul>

          <p className="mt-8 text-sm italic text-muted-foreground">
            {MENU_PAGE.pricingNote}
          </p>

          {/* <div className="mt-6">
            <WhatsAppLink
              message={MENU_PAGE.whatsappMessage}
            >
              {MENU_PAGE.whatsappCta}
            </WhatsAppLink>
          </div> */}

        </div>
      </section>

      {/* DECORATIVE BORDER */}

      <AlpanaBorder
        tone="brick"
        className="opacity-60"
      />

      {/* SIGNATURE PICKS */}

      <section className="bg-cream py-14 lg:py-20">

        <div className="mx-auto max-w-6xl px-5 sm:px-6">

          <SectionHead
            eyebrow={
              MENU_PAGE.signature.eyebrow
            }
            title={
              MENU_PAGE.signature.title
            }
          />

        </div>

        <div className="rail mt-8 px-5 sm:px-6 lg:mx-auto lg:max-w-6xl">

          {Object.entries(
            FEATURED_DISHES,
          ).map(([name, f], i) => (

            <Reveal
              key={name}
              delay={i * 70}
            >

              <DishCard
                image={f.image}
                name={name}
                desc={f.desc}
              />

            </Reveal>

          ))}

        </div>
      </section>
    </>
  );
}