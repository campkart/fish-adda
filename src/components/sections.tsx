import { Reveal, WaveLine, FolkFish, FolkLeaf } from "./folk";
import { TICKER } from "../content/menu";

export function Ticker() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="overflow-hidden border-y-2 border-brick/20 bg-brick py-3">
      <div className="marquee-track items-center gap-6">
        {row.map((word, i) => (
          <span key={i} className="flex items-center gap-6 whitespace-nowrap">
            <span className="display-xl text-lg text-cream sm:text-2xl">{word}</span>
            <FolkFish className="h-4 w-9 shrink-0 text-mustard" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function DishCard({
  image,
  name,
  desc,
  wide,
}: {
  image?: string;
  name: string;
  desc?: string;
  wide?: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border-2 border-brick/12 bg-paint transition-transform duration-300 hover:-translate-y-1 ${
        wide ? "w-[19rem] sm:w-[24rem]" : "w-[15rem] sm:w-[17rem]"
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className={`w-full object-cover ${wide ? "h-56 sm:h-64" : "h-44 sm:h-48"}`}
        />
      ) : (
        <div className="flex h-32 items-center justify-center bg-cream-deep">
          <FolkLeaf className="h-12 w-8 text-brick/35" />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-bold leading-tight text-brick">{name}</h3>
        {desc && <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>}
        <WaveLine className="mt-4 h-3 w-16 text-mustard" />
      </div>
    </article>
  );
}

export function AddaModules({ items }: { items: { title: string; copy: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((m, i) => (
        <Reveal key={m.title} delay={i * 90}>
          <div className="h-full rounded-3xl border-2 border-cream/20 bg-cream/8 p-6">
            <p className="display-xl text-3xl text-mustard">{m.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/80">{m.copy}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export type Founder = {
  name: string;
  role: string;
  credential: string;
  focus: string;
  initials: string;
};

/** Founder card — used on the home page and the founders page. */
export function FounderCard({ founder, size = "sm" }: { founder: Founder; size?: "sm" | "lg" }) {
  const avatar = size === "lg" ? "h-20 w-20" : "h-16 w-16";
  const initials = size === "lg" ? "text-2xl" : "text-xl";
  const Heading = size === "lg" ? "h2" : "h3";
  return (
    <article className="relative h-full overflow-hidden rounded-[2rem] border-2 border-brick/15 bg-paint p-7">
      <FolkLeaf className="pointer-events-none absolute -right-2 top-4 h-20 w-12 text-leaf/25" />
      <div className={`flex ${avatar} items-center justify-center rounded-full bg-brick`}>
        <span className={`display-xl ${initials} text-cream`}>{founder.initials}</span>
      </div>
      <Heading className={`${size === "lg" ? "mt-5" : "mt-4"} text-2xl text-brick`}>
        {founder.name}
      </Heading>
      <p className="eyebrow mt-2 text-brick/70">{founder.role}</p>
      <p className="mt-3 text-sm font-semibold text-foreground/80">{founder.credential}</p>
      <p className="mt-1 text-base leading-relaxed text-muted-foreground">{founder.focus}</p>
      <WaveLine className="mt-6 h-4 w-24 text-indigo/50" />
    </article>
  );
}
