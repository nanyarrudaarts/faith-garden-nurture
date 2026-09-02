import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { content, type Lang } from "@/lib/agape-content";

import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo | Chiesa Agape — Fiume Veneto (PN)" },
      {
        name: "description",
        content:
          "Chi siamo: una comunità cristiana evangelica a Fiume Veneto. Persone, Cristo, Vangelo — una famiglia che cammina insieme nella fede.",
      },
      { property: "og:title", content: "Chi siamo | Chiesa Agape" },
      {
        property: "og:description",
        content:
          "Una comunità cristiana evangelica a Fiume Veneto: persone che credono in Gesù Cristo e vivono in rapporto con il Vangelo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChiSiamoPage,
});

function ChiSiamoPage() {
  const [lang, setLang] = useState<Lang>("it");
  const t = content[lang];
  const p = t.pages.chiSiamo;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader t={t} onToggleLang={() => setLang(lang === "it" ? "pt" : "it")} />

      {/* PAGE HERO */}
      <section className="relative overflow-hidden pt-40 md:pt-52">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <p className="eyebrow">{p.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
              {p.title}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {p.intro}
            </p>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal className="group overflow-hidden">
            <img
              src={communityImg}
              alt="La comunità Agape a tavola insieme"
              width={1280}
              height={1280}
              className="aspect-[21/9] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      {/* BLOCKS */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {p.blocks.map((b, i) => (
            <Reveal
              key={b.t}
              as="article"
              delay={i * 100}
              className="card-tile bg-background p-8 md:p-12"
            >
              <span className="font-display text-xs tracking-[0.3em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl">{b.t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {b.d}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col items-start gap-8 border-t border-border pt-12 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-2xl uppercase leading-tight md:text-3xl">
            {t.introBody}
          </p>
          <Link
            to="/incontri"
            className="shine bg-primary px-7 py-4 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {p.cta}
          </Link>
        </Reveal>
      </section>

      <SiteFooter t={t} />
    </div>
  );
}
