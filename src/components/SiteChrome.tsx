import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/agape-mark.png.asset.json";
import { NAV_ROUTES, type content } from "@/lib/agape-content";

export type SiteContent = (typeof content)["it"];

export function SiteHeader({
  t,
  onToggleLang,
}: {
  t: SiteContent;
  onToggleLang: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
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
        <Link to="/" className="group flex items-center gap-3" aria-label="Chiesa Agape — Home">
          <img
            src={logoAsset.url}
            alt="Chiesa Agape"
            className="h-9 w-auto brightness-0 invert transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 md:h-10"
          />
          <span className="font-display text-lg uppercase tracking-[0.28em] md:text-xl">
            Agape
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {t.nav.map((label, i) => (
            <Link
              key={NAV_ROUTES[i]}
              to={NAV_ROUTES[i]}
              activeProps={{ className: "text-primary bg-[length:100%_1px]" }}
              className="link-underline font-display text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground hover:bg-[length:100%_1px]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="border border-border px-3 py-2 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {t.langLabel}
          </button>
          <Link
            to="/contatti"
            className="hidden bg-primary px-5 py-2.5 font-display text-sm uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            {t.navCta}
          </Link>
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
          {t.nav.map((label, i) => (
            <Link
              key={NAV_ROUTES[i]}
              to={NAV_ROUTES[i]}
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${i * 60}ms` }}
              className="block animate-fade-in border-b border-border py-4 font-display text-2xl uppercase tracking-wide transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter({ t }: { t: SiteContent }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
        <p className="max-w-2xl font-display text-xl uppercase leading-tight md:text-3xl">
          {t.footerVerse}
        </p>
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
            <img src={logoAsset.url} alt="Chiesa Agape" className="h-10 w-auto brightness-0 invert" />
          </div>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
