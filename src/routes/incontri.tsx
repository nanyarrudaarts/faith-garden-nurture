import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { content, type Lang } from "@/lib/agape-content";

export const Route = createFileRoute("/incontri")({
  head: () => ({
    meta: [
      { title: "Incontri e orari | Chiesa Agape — Fiume Veneto (PN)" },
      {
        name: "description",
        content:
          "Quando ci troviamo: culto domenicale alle 10:30, studio biblico il mercoledì, preghiera il venerdì, giovani il sabato. Via Pontebbana 1, Fiume Veneto.",
      },
      { property: "og:title", content: "Incontri e orari | Chiesa Agape" },
      {
        property: "og:description",
        content:
          "Gli incontri settimanali della Chiesa Agape a Fiume Veneto: aperti a tutti, vieni come sei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IncontriPage,
});

function IncontriPage() {
  const [lang, setLang] = useState<Lang>("it");
  const t = content[lang];
  const p = t.pages.incontri;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader t={t} onToggleLang={() => setLang(lang === "it" ? "pt" : "it")} />

      {/* PAGE HERO */}
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
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
      </section>

      {/* SCHEDULE */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <ul>
          {t.schedule.map((s, i) => (
            <Reveal
              key={s.d}
              as="li"
              delay={i * 90}
              className="row-hover flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-8 first:border-t md:py-10"
            >
              <span className="font-display text-3xl uppercase tracking-wide md:text-5xl">
                {s.d}
              </span>
              <span className="text-sm text-muted-foreground md:text-lg">{s.n}</span>
              <span className="font-display text-3xl text-primary md:text-5xl">{s.h}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20 grid gap-10 border-t border-border pt-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <p className="eyebrow">{t.contactEyebrow}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.address}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5 md:text-base">
            {t.scheduleNote}
          </p>
          <div className="md:col-span-3 md:text-right">
            <Link
              to="/contatti"
              className="shine inline-block bg-primary px-7 py-4 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              {p.cta}
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter t={t} />
    </div>
  );
}
