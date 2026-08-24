import { useEffect, useRef, useState, type ReactNode } from "react";

/** Hand-painted alpana / floral border strip, repeated horizontally. */
export function AlpanaBorder({
  className = "",
  tone = "paint",
  flip = false,
}: {
  className?: string;
  tone?: "paint" | "brick";
  flip?: boolean;
}) {
  const stroke = tone === "paint" ? "%23FBF7EF" : "%238F1F0F";
  // One hand-painted lotus-fan unit, tiled horizontally so it never stretches.
  const unit = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 26'>
    <g fill='none' stroke='${stroke}' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'>
      <path d='M0 23.5 H36'/>
      <path d='M18 23 C10 19, 9 9, 18 3 C27 9, 26 19, 18 23 Z'/>
      <path d='M18 21 C13 17, 12.5 11, 18 7 C23.5 11, 23 17, 18 21 Z'/>
      <path d='M8 23 C6 18, 7 13, 11 10'/>
      <path d='M28 23 C30 18, 29 13, 25 10'/>
      <path d='M3 23 C2.5 20, 3.5 18, 5 17'/>
      <path d='M33 23 C33.5 20, 32.5 18, 31 17'/>
    </g>
    <g fill='${stroke}'>
      <circle cx='18' cy='1.6' r='1.5'/>
      <circle cx='10.5' cy='8.5' r='0.9'/>
      <circle cx='25.5' cy='8.5' r='0.9'/>
    </g>
  </svg>`;
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <div
        className="h-6 w-full sm:h-7"
        style={{
          backgroundImage: `url("data:image/svg+xml,${unit.replace(/\s+/g, " ").trim()}")`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center bottom",
          backgroundSize: "auto 100%",
        }}
      />
    </div>
  );
}

export function WaveLine({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 20"
      className={className}
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0 12 Q12 2 25 12 T50 12 T75 12 T100 12 T125 12 T150 12 T175 12 T200 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M0 18 Q12 8 25 18 T50 18 T75 18 T100 18 T125 18 T150 18 T175 18 T200 18"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FolkFish({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 48" className={className} fill="none">
      <path
        d="M8 24 C24 4, 62 4, 78 24 C62 44, 24 44, 8 24 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M78 24 L96 10 L92 24 L96 38 Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="21" r="2.4" fill="currentColor" />
      <path d="M40 10 C46 18, 46 30, 40 38" stroke="currentColor" strokeWidth="1.4" />
      <path d="M52 12 C58 19, 58 29, 52 36" stroke="currentColor" strokeWidth="1.4" />
      <path d="M64 15 C68 20, 68 28, 64 33" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function FolkLeaf({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 64" className={className} fill="none">
      <path
        d="M20 62 C20 40, 4 32, 20 2 C36 32, 20 40, 20 62 Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M20 56 V10" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 40 L9 30 M20 40 L31 30 M20 26 L11 19 M20 26 L29 19" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function FolkSun({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className} fill="none">
      <circle cx="32" cy="32" r="13" stroke="currentColor" strokeWidth="2" />
      <path d="M32 25 C36 29, 36 35, 32 39 C28 35, 28 29, 32 25 Z" fill="currentColor" opacity="0.6" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        return (
          <line
            key={i}
            x1={+(32 + Math.cos(a) * 18).toFixed(3)}
            y1={+(32 + Math.sin(a) * 18).toFixed(3)}
            x2={+(32 + Math.cos(a) * 27).toFixed(3)}
            y2={+(32 + Math.sin(a) * 27).toFixed(3)}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function FolkBoat({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 90 64" className={className} fill="none">
      <path d="M8 44 L82 44 L70 58 L20 58 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M45 44 V6" stroke="currentColor" strokeWidth="2" />
      <path d="M45 8 L74 20 L45 28 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M0 62 Q10 56 20 62 T40 62 T60 62 T80 62 T100 62" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function FolkBird({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 30" className={className} fill="none">
      <path d="M2 20 C10 6, 20 6, 28 18 C36 6, 46 6, 58 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Scroll-triggered reveal wrapper. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-up ${className}`}
    >
      {children}
    </Tag>
  );
}
