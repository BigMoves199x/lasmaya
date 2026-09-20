"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  {
    label: "Discover LASMAYA",
    href: "/about",
  },
  {
    label: "Editions",
    href: "/editions",
  },
  {
    label: "Winners",
    href: "/winners",
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Community",
    href: "/community",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================================
     SCROLL BEHAVIOUR
  ========================================================= */

  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      /*
       * Add glass background after leaving
       * the top of the page.
       */
      setScrolled(window.scrollY > 20);

      /*
       * Navbar becomes very faint while
       * the user is actively scrolling.
       */
      setIsScrolling(true);

      clearTimeout(scrollTimer);

      /*
       * Once scrolling stops, wait briefly
       * before bringing the navbar back.
       */
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 280);
    };

    setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  /* =========================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* =========================================================
     ACTIVE LINK
  ========================================================= */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-[100]

          transition-[opacity,background-color,border-color,backdrop-filter]
          duration-700
          ease-out

          ${
            scrolled
              ? `
                border-b
                border-white/[0.07]
                bg-[#090b0a]/85
                shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                backdrop-blur-2xl
              `
              : `
                border-b
                border-transparent
                bg-transparent
              `
          }

          ${
            isScrolling && !menuOpen
              ? "opacity-[0.12]"
              : "opacity-100"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            max-w-[1600px]
            items-center
            justify-between
            px-[var(--page-padding)]

            transition-[height]
            duration-500
            ease-out

            ${
              scrolled
                ? "h-[74px]"
                : "h-[92px]"
            }
          `}
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <Link
            href="/"
            aria-label="LASMAYA Home"
            className="group relative z-10 flex items-center gap-3"
          >
            {/* LOGO MARK */}

            <div className="relative flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-full border border-[#c6a15b]/35 bg-[#102e25] shadow-[0_0_30px_rgba(198,161,91,0.08)]">
              {/* glow */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(198,161,91,0.16),transparent_68%)]" />

              {/* shine */}

              <div className="absolute -left-[120%] top-0 h-full w-[70%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-700 ease-out group-hover:left-[140%]" />

              <span className="relative font-display text-[1.45rem] font-semibold leading-none text-[#dfc27b]">
                L
              </span>
            </div>

            {/* WORDMARK */}

            <div className="hidden sm:block">
              <div className="font-display text-[1.25rem] font-semibold leading-none tracking-[0.04em] text-white">
                LASMAYA
              </div>

              <div className="mt-1 text-[0.44rem] font-semibold uppercase tracking-[0.22em] text-white/40">
                Lagos State Man of the Year
              </div>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 xl:flex">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative py-3"
                >
                  {/* GOLD GLOW */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      h-8
                      w-14
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#c6a15b]/0
                      blur-xl
                      transition-all
                      duration-500
                      group-hover:bg-[#c6a15b]/10
                    "
                  />

                  {/* TEXT WINDOW */}

                  <span className="relative block h-[17px] overflow-hidden">
                    {/* NORMAL TEXT */}

                    <span
                      className={`
                        block
                        whitespace-nowrap
                        text-[0.59rem]
                        font-bold
                        uppercase
                        tracking-[0.16em]

                        transition-transform
                        duration-500
                        ease-[cubic-bezier(.16,1,.3,1)]

                        group-hover:-translate-y-full

                        ${
                          active
                            ? "text-[#dfc27b]"
                            : "text-white/65"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    {/* GOLD HOVER TEXT */}

                    <span
                      className="
                        absolute
                        left-0
                        top-full
                        block
                        whitespace-nowrap

                        text-[0.59rem]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#dfc27b]

                        transition-transform
                        duration-500
                        ease-[cubic-bezier(.16,1,.3,1)]

                        group-hover:-translate-y-full
                      "
                    >
                      {item.label}
                    </span>
                  </span>

                  {/* UNDERLINE */}

                  <span
                    className={`
                      absolute
                      -bottom-[1px]
                      left-0
                      h-px
                      bg-[#c6a15b]

                      transition-all
                      duration-500
                      ease-out

                      ${
                        active
                          ? "w-full"
                          : "w-full origin-left scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="relative z-10 flex items-center gap-3">
            {/* 2026 CTA */}

            <Link
              href="/editions/2026"
              className="
                group
                relative
                hidden
                overflow-hidden
                rounded-full
                border
                border-[#c6a15b]/30
                bg-[#c6a15b]/[0.06]
                px-5
                py-3
                lg:inline-flex
                lg:items-center
                lg:gap-3
              "
            >
              {/* BUTTON SHINE */}

              <span
                className="
                  absolute
                  -left-[80%]
                  top-0
                  h-full
                  w-[55%]
                  rotate-[15deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent

                  transition-all
                  duration-700
                  ease-out

                  group-hover:left-[130%]
                "
              />

              {/* GOLD DOT */}

              <span className="relative flex h-[6px] w-[6px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfc27b] opacity-40" />

                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#dfc27b]" />
              </span>

              <span className="relative text-[0.56rem] font-bold uppercase tracking-[0.17em] text-[#dfc27b]">
                2026 Edition
              </span>

              <ArrowUpRight
                size={13}
                strokeWidth={1.8}
                className="
                  relative
                  text-[#dfc27b]
                  transition-transform
                  duration-300
                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
              />
            </Link>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((previous) => !previous)}
              className="
                group
                relative
                flex
                h-[44px]
                w-[44px]
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.035]

                transition-all
                duration-300

                hover:border-[#c6a15b]/35
                hover:bg-[#c6a15b]/[0.07]

                xl:hidden
              "
            >
              <span className="absolute inset-0 rounded-full bg-[#c6a15b]/0 blur-md transition-colors duration-300 group-hover:bg-[#c6a15b]/10" />

              {menuOpen ? (
                <X
                  size={19}
                  strokeWidth={1.5}
                  className="relative text-[#dfc27b]"
                />
              ) : (
                <Menu
                  size={19}
                  strokeWidth={1.5}
                  className="relative text-white/80 transition-colors duration-300 group-hover:text-[#dfc27b]"
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION OVERLAY
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[90]
          overflow-hidden
          bg-[#090b0a]

          transition-all
          duration-700
          ease-[cubic-bezier(.16,1,.3,1)]

          xl:hidden

          ${
            menuOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      >
        {/* GREEN ATMOSPHERE */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-20%]
            top-[-10%]
            h-[60vw]
            min-h-[450px]
            w-[60vw]
            min-w-[450px]
            rounded-full
            bg-[#174c3d]/20
            blur-[130px]
          "
        />

        {/* GOLD ATMOSPHERE */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-25%]
            left-[-15%]
            h-[55vw]
            min-h-[400px]
            w-[55vw]
            min-w-[400px]
            rounded-full
            bg-[#c6a15b]/[0.07]
            blur-[130px]
          "
        />

        {/* GRID */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]

            [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <div
          className="
            relative
            flex
            min-h-screen
            flex-col
            px-[var(--page-padding)]
            pb-10
            pt-[125px]
          "
        >
          {/* LABEL */}

          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c6a15b]" />

            <span className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#c6a15b]">
              Navigate
            </span>
          </div>

          {/* LINKS */}

          <nav className="flex flex-col">
            {navigation.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    group
                    relative
                    border-b
                    border-white/[0.07]
                    py-4

                    transition-all
                    duration-500

                    ${
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: menuOpen
                      ? `${120 + index * 55}ms`
                      : "0ms",
                  }}
                >
                  {/* HOVER WASH */}

                  <span
                    className="
                      absolute
                      inset-0
                      origin-left
                      scale-x-0
                      bg-gradient-to-r
                      from-[#c6a15b]/[0.07]
                      to-transparent

                      transition-transform
                      duration-500
                      ease-[cubic-bezier(.16,1,.3,1)]

                      group-hover:scale-x-100
                    "
                  />

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="w-5 text-[0.48rem] font-bold tracking-[0.16em] text-[#c6a15b]/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          font-display
                          text-[clamp(1.9rem,7vw,3.5rem)]
                          font-medium
                          leading-none
                          tracking-[-0.035em]

                          transition-all
                          duration-300

                          group-hover:translate-x-2
                          group-hover:text-[#dfc27b]

                          ${
                            active
                              ? "text-[#dfc27b]"
                              : "text-white/85"
                          }
                        `}
                      >
                        {item.label}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.3}
                      className="
                        text-white/20
                        transition-all
                        duration-300

                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:text-[#dfc27b]
                      "
                    />
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* BOTTOM */}

          <div className="mt-auto pt-10">
            <Link
              href="/editions/2026"
              onClick={() => setMenuOpen(false)}
              className="
                group
                flex
                items-center
                justify-between
                rounded-[2px]
                border
                border-[#c6a15b]/25
                bg-[#c6a15b]/[0.05]
                px-5
                py-4

                transition-all
                duration-300

                hover:border-[#c6a15b]/50
                hover:bg-[#c6a15b]/[0.09]
              "
            >
              
            </Link>

            
          </div>
        </div>
      </div>
    </>
  );
}