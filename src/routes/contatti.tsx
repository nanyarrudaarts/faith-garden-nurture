import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { content, type Lang } from "@/lib/agape-content";

import logoAsset from "@/assets/agape-mark.png.asset.json";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti | Chiesa Agape — Fiume Veneto (PN)" },
      {
        name: "description",
        content:
          "Contatta la Chiesa Cristiana Evangelica Agape: Via Pontebbana 1, 33080 Fiume Veneto (PN). Scrivici a info@chiesaagape.com — ti aspettiamo.",
      },
      { property: "og:title", content: "Contatti | Chiesa Agape" },
      {
        property: "og:description",
        content:
          "Scrivici o vieni a trovarci in Via Pontebbana 1, Fiume Veneto (PN). C'è un posto per te.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContattiPage,
});

function ContattiPage() {
  const [lang, setLang] = useState<Lang>("it");
  const t = content[lang];
  const p = t.pages.contatti;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader t={t} onToggleLang={() => setLang(lang === "it" ? "pt" : "it")} />

      {/* PAGE HERO */}
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <Reveal>
          <img
            src={logoAsset.url}
            alt=""
            aria-hidden="true"
            className="float-slow h-12 w-auto brightness-0 invert"
          />
          <p className="eyebrow mt-8">{p.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            {p.title}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {p.intro}
          </p>
        </Reveal>
      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          <Reveal as="article" className="card-tile bg-background p-8 md:p-12">
            <p className="eyebrow">{p.addressLabel}</p>
            <p className="mt-6 font-display text-2xl uppercase leading-tight md:text-3xl">
              {t.address}
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Pontebbana+1%2C+33080+Fiume+Veneto+PN"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-8 inline-block font-display text-sm uppercase tracking-[0.2em] text-primary hover:bg-[length:100%_1px]"
            >
              Google Maps →
            </a>
          </Reveal>
          <Reveal as="article" delay={120} className="card-tile bg-background p-8 md:p-12">
            <p className="eyebrow">{p.emailLabel}</p>
            <a
              href="mailto:info@chiesaagape.com"
              className="link-underline mt-6 inline-block font-display text-2xl uppercase leading-tight text-foreground hover:text-primary hover:bg-[length:100%_1px] md:text-3xl"
            >
              info@chiesaagape.com
            </a>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.scheduleNote}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20 text-center">
          <p className="font-display text-3xl uppercase leading-tight md:text-5xl">
            {t.ctaTitle}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.ctaBody}
          </p>
          <a
            href="mailto:info@chiesaagape.com"
            className="shine mt-10 inline-block bg-primary px-9 py-4 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {p.cta}
          </a>
        </Reveal>
      </section>

      <SiteFooter t={t} />
    </div>
  );
}
