"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const TEL = "+687518747";

const links = [
  { href: "#top", label: "Accueil" },
  { href: "#cuisine", label: "Cuisines" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#materiaux", label: "Matériaux" },
  { href: "#atelier", label: "Atelier" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Toujours démarrer en haut du site (pas de restauration de scroll mobile),
    // sauf si l'URL contient une ancre volontaire.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo(0, 0);

    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Défile vers la section sans laisser le hash dans l'URL.
  const goTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    const id = href.slice(1);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let top = 0;
    if (id !== "top") {
      const el = document.getElementById(id);
      if (!el) return;
      top = el.getBoundingClientRect().top + window.scrollY - 72;
    }
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-line bg-cream/90 text-ink backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-cream"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <a
          href="#top"
          onClick={(e) => goTo(e, "#top")}
          className="flex items-center"
          aria-label="TOP BOIS, accueil"
        >
          <Image
            src="/brand_assets/wordmark-topbois.png"
            alt="TOP BOIS"
            width={348}
            height={60}
            className={`h-7 w-auto transition-[filter] duration-300 lg:h-9 ${
              solid ? "[filter:brightness(0.3)_saturate(1.3)]" : ""
            }`}
            priority
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => goTo(e, l.href)}
                className="relative text-sm font-medium opacity-90 transition-opacity after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-leaf after:transition-[width] after:duration-300 hover:opacity-100 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => goTo(e, "#contact")}
              className="inline-flex items-center gap-2 rounded-full bg-leaf px-5 py-2.5 text-sm font-bold text-coal shadow-lg shadow-leaf/25 transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-deep"
            >
              Demandez un devis
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            solid ? "text-ink" : "text-cream"
          }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream/97 text-ink backdrop-blur-md lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => goTo(e, l.href)}
                  className="block py-3 text-base font-medium text-ink/90"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={`tel:${TEL}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-5 py-3 text-base font-bold text-coal"
              >
                <Phone size={18} strokeWidth={2.5} />
                Demandez un devis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
