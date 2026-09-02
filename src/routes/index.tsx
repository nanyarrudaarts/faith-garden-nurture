import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/agape-logo.png.asset.json";
import heroImg from "@/assets/hero-worship.jpg";
import communityImg from "@/assets/community.jpg";
import bibleImg from "@/assets/bible.jpg";
import prayerImg from "@/assets/prayer.jpg";
import baptismImg from "@/assets/baptism.jpg";
import { content, type Lang } from "@/lib/agape-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chiesa Agape | Chiesa Cristiana Evangelica a Fiume Veneto (PN)" },
      {
        name: "description",
        content:
          "Comunità cristiana evangelica a Fiume Veneto, Pordenone. Un amore fraterno e immenso: Cristo, la Bibbia, la comunione e la missione. Incontri aperti a tutti.",
      },
      { property: "og:title", content: "Chiesa Agape | Fiume Veneto (PN)" },
      {
        property: "og:description",
        content:
          "Una comunità che crede in Gesù Cristo e vive l'amore agape. Incontri settimanali in Via Pontebbana 1, Fiume Veneto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [lang, setLang] = useState<Lang>("it");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [heroY, setHeroY] = useState(0);
  const t = content[lang];

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.body.scrollHeight - window.innerHeight;
        setScrolled(y > 40);
        setProgress(max > 0 ? (y / max) * 100 : 0);
        setHeroY(Math.min(y, window.innerHeight) * 0.25);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || menuOpen
            ? "border-b border-border bg-background/80 py-0 shadow-[0_10px_40px_-30px_rgb(0_0_0/0.9)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 md:px-10 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <a href="#top" className="group flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Chiesa Agape"
              className="h-9 w-auto transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 md:h-10"
            />
            <span className="font-display text-lg uppercase tracking-[0.28em] md:text-xl">
              Agape
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline font-display text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground hover:bg-[length:100%_1px]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "it" ? "pt" : "it")}
              className="border border-border px-3 py-2 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {t.langLabel}
            </button>
            <a
              href="#contatti"
              className="hidden bg-primary px-5 py-2.5 font-display text-sm uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
            >
              {t.navCta}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="animate-fade-in border-t border-border bg-background px-5 py-6 lg:hidden">
            {t.nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
                className="block animate-fade-in border-b border-border py-4 font-display text-2xl uppercase tracking-wide transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Comunità Agape in adorazione"
          width={1920}
          height={1088}
          style={{ transform: `translate3d(0, ${heroY}px, 0)` }}
          className="hero-zoom absolute inset-0 size-full scale-105 object-cover will-change-transform"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <p className="font-serif text-base italic tracking-wide text-marfim/80 md:text-lg">
              {t.heroKicker}
            </p>
          </Reveal>
          <Reveal delay={120} as="span" className="block">
          <h1 className="mt-5 max-w-4xl text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            {t.heroTitle}
          </h1>
          </Reveal>
          <Reveal delay={260} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#incontri"
              className="shine bg-sand px-7 py-4 font-display text-sm uppercase tracking-[0.2em] text-sand-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.heroCtaPrimary}
            </a>
            <a
              href="#chi-siamo"
              className="border border-foreground/40 px-7 py-4 font-display text-sm uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-foreground/5 hover:text-primary"
            >
              {t.heroCtaSecondary}
            </a>
          </Reveal>
          <p className="mt-8 font-display text-xs uppercase tracking-[0.28em] text-muted-foreground">
            {t.heroPlace}
          </p>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal as="span" className="block">
        <p className="max-w-5xl font-display text-3xl uppercase leading-[1.05] sm:text-5xl md:text-6xl">
          <span className="text-primary">{t.introLead}</span> {t.introBody}
        </p>
        </Reveal>
        <Reveal delay={120} className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">{t.introVerse}</p>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">
            {t.introText}
          </p>
          <div className="md:col-span-2">
            <a
              href="#chi-siamo"
              className="link-underline font-display text-sm uppercase tracking-[0.2em] text-primary hover:bg-[length:100%_1px]"
            >
              {t.introCta}
            </a>
          </div>
        </Reveal>
      </section>

      {/* ABOUT / FEATURE SPLIT */}
      <section id="chi-siamo" className="bg-card">
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 md:grid-cols-2">
          <Reveal className="order-2 flex flex-col justify-center px-5 py-16 md:order-1 md:px-16 md:py-28">
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl">{t.aboutTitle}</h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.aboutBody}
            </p>
            <a
              href="#crediamo"
              className="shine mt-10 self-start border border-foreground/30 px-7 py-4 font-display text-sm uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              {t.aboutCta}
            </a>
          </Reveal>
          <div className="group order-1 overflow-hidden md:order-2">
            <img
              src={communityImg}
              alt="Comunità a tavola"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-[320px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 md:h-full"
            />
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section id="crediamo" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">{t.beliefsEyebrow}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl">{t.beliefsTitle}</h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
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
              <h3 className="mt-5 text-2xl md:text-3xl">{b.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {b.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LIFE TOGETHER — 3 cards with images */}
      <section id="vita" className="bg-card py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow">{t.lifeEyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl md:text-6xl">{t.lifeTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.life.map((item, i) => (
              <Reveal key={item.t} as="article" delay={i * 120} className="group">
                <div className="relative overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-[color:var(--burgundy)]/0 transition-colors duration-700 group-hover:bg-[color:var(--burgundy)]/25" />
                  <img
                    src={[bibleImg, prayerImg, baptismImg][i]}
                    alt={item.t}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-6 text-2xl transition-colors duration-300 group-hover:text-primary md:text-3xl">
                  {item.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.d}
                </p>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="incontri" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">{t.scheduleEyebrow}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl">{t.scheduleTitle}</h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.scheduleNote}
            </p>
          </Reveal>
          <ul className="md:col-span-8">
            {t.schedule.map((s, i) => (
              <Reveal
                key={s.d}
                as="li"
                delay={i * 90}
                className="row-hover flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-7 first:border-t"
              >
                <span className="font-display text-2xl uppercase tracking-wide md:text-4xl">
                  {s.d}
                </span>
                <span className="text-sm text-muted-foreground md:text-base">{s.n}</span>
                <span className="font-display text-2xl text-primary md:text-4xl">{s.h}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section id="contatti" className="relative overflow-hidden">
        <img
          src={prayerImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <Reveal className="relative mx-auto max-w-[1400px] px-5 py-28 text-center md:px-10 md:py-40">
          <img
            src={logoAsset.url}
            alt=""
            aria-hidden="true"
            className="float-slow mx-auto h-14 w-auto"
          />
          <h2 className="mt-8 text-5xl sm:text-6xl md:text-7xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.ctaBody}
          </p>
          <a
            href="mailto:info@chiesaagape.com"
            className="shine mt-10 inline-block bg-primary px-9 py-4 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.ctaButton}
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
          <Reveal>
            <p className="max-w-2xl font-display text-xl uppercase leading-tight md:text-3xl">
              {t.footerVerse}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
            <div>
              <p className="eyebrow">{t.contactEyebrow}</p>
              <p className="mt-4 text-sm text-muted-foreground">{t.address}</p>
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <a
                href="mailto:info@chiesaagape.com"
                className="link-underline mt-4 inline-block text-sm text-muted-foreground hover:text-foreground hover:bg-[length:100%_1px]"
              >
                info@chiesaagape.com
              </a>
            </div>
            <div className="flex items-start gap-3 md:justify-end">
              <img src={logoAsset.url} alt="Chiesa Agape" className="h-10 w-auto" />
            </div>
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t.footerRights}
          </p>
        </div>
      </footer>
    </div>
  );
}
