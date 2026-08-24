import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar, BottomNav } from "../components/navbar";
import { Footer } from "../components/footer";
import { WhatsAppFab } from "../components/ui-kit";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-xl text-7xl text-brick">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">This adda doesn't exist</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has moved or was never on the menu.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brick px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-cream"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-brick px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-cream"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-brick/40 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-brick"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fish Adda — Open At Parnasree, Behala, Kolkata" },
      {
        name: "description",
        content:
          "Fish Adda is a new QSR opening soon at Parnasree, Behala, Kolkata — fish favourites, momos, maggi, pasta, tea and coffee in a Bengali folk-art adda.",
      },
      { name: "author", content: "Jyoty Food And Beverages" },
      { property: "og:site_name", content: "Fish Adda" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#8F1F0F" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Fish Adda",
          alternateName: "Fish Adda Parnasree",
          description:
            "Fish Adda is a neighbourhood QSR opening soon at Parnasree, Behala, Kolkata, serving fish snacks, chicken and veg bites, momos, maggi, pasta, tea, coffee and drinks.",
          servesCuisine: ["Bengali", "Indian", "Fast Food", "Cafe"],
          parentOrganization: { "@type": "Organization", name: "Jyoty Food And Beverages" },
          email: "connect.fishadda@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "21 Kalicharan Dutta Road",
            addressLocality: "Behala, Kolkata",
            addressRegion: "West Bengal",
            postalCode: "700061",
            addressCountry: "IN",
          },
          areaServed: "Parnasree, Behala, Kolkata",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pb-16 lg:pb-0">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <BottomNav />
    </QueryClientProvider>
  );
}
