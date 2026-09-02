import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { content, type Lang } from "@/lib/agape-content";

import prayerImg from "@/assets/prayer.jpg";

export const Route = createFileRoute("/ministeri")({
  head: () => ({
    meta: [
      { title: "Ministeri | Chiesa Agape — Fiume Veneto (PN)" },
      {
        name: "description",
        content:
          "I ministeri della Chiesa Agape: culto domenicale, studio biblico, preghiera, giovani, adorazione, accoglienza e diaconia. Ogni dono al servizio degli altri.",
      },
      { property: "og:title", content: "Ministeri | Chiesa Agape" },
      {
        property: "og:description",
        content:
          "Culto, studio biblico, preghiera, giovani, adorazione e diaconia: i modi concreti in cui serviamo Dio e la nostra città.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MinisteriPage,
});

function MinisteriPage() {
  const [lang, setLang] = useState<Lang>("it");
  const t = content[lang];
  const p = t.pages.ministeri;

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

      {/* MINISTRIES */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((m, i) => (
            <Reveal
              key={m.t}
              as="article"
              delay={(i % 3) * 100}
              className="card-tile bg-background p-8 md:p-10"
            >
              <span className="font-display text-xs tracking-[0.3em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 text-2xl md:text-3xl">{m.t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {m.d}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative mt-20 overflow-hidden">
          <img
            src={prayerImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-25"
          />
          <div className="relative flex flex-col items-start gap-8 px-8 py-16 md:flex-row md:items-center md:justify-between md:px-16 md:py-24">
            <p className="max-w-xl font-display text-2xl uppercase leading-tight md:text-4xl">
              {p.cta}
            </p>
            <Link
              to="/contatti"
              className="shine bg-primary px-7 py-4 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.ctaButton}
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter t={t} />
    </div>
  );
}
