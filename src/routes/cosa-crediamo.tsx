import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { content, type Lang } from "@/lib/agape-content";

import bibleImg from "@/assets/bible.jpg";

export const Route = createFileRoute("/cosa-crediamo")({
  head: () => ({
    meta: [
      { title: "Cosa crediamo | Chiesa Agape — Fiume Veneto (PN)" },
      {
        name: "description",
        content:
          "Le convinzioni della Chiesa Agape: la Bibbia, Gesù Cristo, il battesimo, la cena del Signore, la libertà e la missione. Fondati sulla Parola.",
      },
      { property: "og:title", content: "Cosa crediamo | Chiesa Agape" },
      {
        property: "og:description",
        content:
          "Fondati sulla Parola di Dio: le convinzioni essenziali della nostra comunità evangelica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CosaCrediamoPage,
});

function CosaCrediamoPage() {
  const [lang, setLang] = useState<Lang>("it");
  const t = content[lang];
  const p = t.pages.crediamo;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader t={t} onToggleLang={() => setLang(lang === "it" ? "pt" : "it")} />

      {/* PAGE HERO */}
      <section className="relative overflow-hidden">
        <img
          src={bibleImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto max-w-[1400px] px-5 pb-24 pt-40 md:px-10 md:pb-32 md:pt-52">
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
      </section>

      {/* BELIEFS GRID */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.beliefs.map((b, i) => (
            <Reveal
              key={b.t}
              as="article"
              delay={(i % 3) * 100}
              className="card-tile bg-background p-8 md:p-10"
            >
              <span className="font-display text-xs tracking-[0.3em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 text-2xl md:text-3xl">{b.t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {b.d}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col items-start gap-8 border-t border-border pt-12 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-2xl uppercase leading-tight md:text-3xl">
            {p.cta}
          </p>
          <Link
            to="/contatti"
            className="shine bg-primary px-7 py-4 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.ctaButton}
          </Link>
        </Reveal>
      </section>

      <SiteFooter t={t} />
    </div>
  );
}
