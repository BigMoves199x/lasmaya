"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const navigation = [
  { label: "Discover LASMAYA", href: "/about" },
  { label: "Editions", href: "/editions" },
  { label: "Winners", href: "/winners" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Community", href: "/community" },
];

const editionLinks = [
  {
    label: "2026 Edition",
    href: "/editions/2026",
  },
  {
    label: "2026 Honouree",
    href: "/editions/2026",
  },
  {
    label: "2026 Nominees",
    href: "/editions/2026/nominees",
  },
  {
    label: "Award Journey",
    href: "/editions/2026#journey",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#090b0a] text-[#f5f2e9]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* GREEN ATMOSPHERE */}

        <div className="absolute -left-[12%] top-[5%] h-[620px] w-[620px] rounded-full bg-[#174c3d]/20 blur-[160px]" />

        {/* GOLD ATMOSPHERE */}

        <div className="absolute -right-[12%] bottom-[-25%] h-[600px] w-[600px] rounded-full bg-[#c6a15b]/[0.055] blur-[150px]" />

        {/* SUBTLE GRID */}

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:90px_90px]" />

        {/* TOP GOLD LINE */}

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c6a15b]/30 to-transparent" />
      </div>

      {/* =====================================================
          CLOSING STATEMENT
      ====================================================== */}

      <div className="site-container relative z-10 pt-20 sm:pt-24 lg:pt-28">
        <div className="grid gap-12 border-b border-white/[0.08] pb-16 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-20 lg:pb-20">
          {/* LEFT */}

          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#c6a15b]" />

              <p className="text-[0.52rem] font-bold uppercase tracking-[0.28em] text-[#dfc27b]">
                Lagos State Man of the Year Award
              </p>
            </div>

            <h2 className="max-w-[900px] font-display text-[clamp(3.5rem,7.2vw,7.8rem)] font-medium leading-[0.84] tracking-[-0.055em]">
              Celebrating those
              <br />

              <span className="text-white/25">
                shaping Lagos.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="lg:pb-2">
            <div className="mb-6 h-px w-full bg-gradient-to-r from-[#c6a15b]/70 via-white/10 to-transparent" />

            <p className="max-w-[440px] text-[0.86rem] leading-[1.85] text-white/45">
              A platform dedicated to recognising leadership,
              service, achievement and meaningful contributions
              to the continuing story of Lagos.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-4"
            >
              <span className="relative text-[0.5rem] font-bold uppercase tracking-[0.22em] text-[#f5f2e9] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#dfc27b] after:transition-transform after:duration-500 group-hover:text-[#dfc27b] group-hover:after:scale-x-100">
                Discover LASMAYA
              </span>

              <ArrowUpRight
                size={13}
                className="text-[#dfc27b] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="site-container relative z-10">
        <div className="grid gap-14 border-b border-white/[0.08] py-14 sm:py-16 lg:grid-cols-[1.2fr_.7fr_.7fr_.8fr] lg:gap-10 lg:py-20">
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            {/* LOGOS */}

            <div className="flex items-center gap-5">
              {/* LASMAYA */}

              <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full border border-white/10 bg-white/[0.025] p-2.5">
                <img
                  src="/images/brand/lasmaya-logo.png"
                  alt="LASMAYA logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="h-10 w-px bg-white/10" />

              {/* CEPODEPS */}

              <div className="flex h-[58px] w-[74px] items-center justify-center">
                <img
                  src="/images/brand/cepodeps-logo.png"
                  alt="CEPODEPS logo"
                  className="max-h-full max-w-full object-contain opacity-80"
                />
              </div>
            </div>

            {/* BRAND */}

            <div className="mt-8">
              <p className="font-display text-[2.4rem] font-medium leading-none tracking-[-0.04em]">
                LASMAYA
              </p>

              <p className="mt-3 max-w-[270px] text-[0.5rem] font-semibold uppercase leading-[1.8] tracking-[0.18em] text-white/35">
                Lagos State
                <br />
                Man of the Year Award
              </p>
            </div>

            {/* EDITION */}

            <div className="mt-8 flex items-center gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-[#dfc27b] shadow-[0_0_12px_rgba(223,194,123,.65)]" />

              <p className="text-[0.46rem] font-bold uppercase tracking-[0.18em] text-[#dfc27b]/70">
                14th Edition · 2026
              </p>
            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <div>
            <p className="mb-7 text-[0.48rem] font-bold uppercase tracking-[0.24em] text-[#dfc27b]">
              Explore
            </p>

            <nav className="flex flex-col items-start gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative text-[0.76rem] text-white/50 transition-colors duration-300 hover:text-[#f5f2e9]"
                >
                  <span className="relative block">
                    {item.label}

                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#dfc27b] transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              2026 EDITION
          ================================================== */}

          <div>
            <p className="mb-7 text-[0.48rem] font-bold uppercase tracking-[0.24em] text-[#dfc27b]">
              2026 Edition
            </p>

            <nav className="flex flex-col items-start gap-4">
              {editionLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-[0.76rem] text-white/50 transition-colors duration-300 hover:text-[#f5f2e9]"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={10}
                    className="text-[#dfc27b]/50 opacity-0 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              COMMUNITY
          ================================================== */}

          <div>
            <p className="mb-7 text-[0.48rem] font-bold uppercase tracking-[0.24em] text-[#dfc27b]">
              Community
            </p>

            <p className="max-w-[260px] text-[0.78rem] leading-[1.75] text-white/40">
              Have a commendation, suggestion or message for
              LASMAYA? The community space is open to your voice.
            </p>

            <Link
              href="/community"
              className="group mt-7 inline-flex items-center gap-3"
            >
              <span className="text-[0.48rem] font-bold uppercase tracking-[0.2em] text-[#f5f2e9] transition-colors duration-300 group-hover:text-[#dfc27b]">
                Have Your Say
              </span>

              <ArrowUpRight
                size={12}
                className="text-[#dfc27b] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* CONTACT */}

            <div className="mt-10 border-t border-white/[0.07] pt-7">
              <div className="flex items-center gap-3">
                <Mail
                  size={13}
                  strokeWidth={1.5}
                  className="text-[#dfc27b]/70"
                />

                <span className="text-[0.46rem] font-bold uppercase tracking-[0.18em] text-white/30">
                  Contact LASMAYA
                </span>
              </div>

              <Link
                href="/community"
                className="mt-3 inline-block text-[0.74rem] text-white/55 transition-colors duration-300 hover:text-[#dfc27b]"
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          LARGE LASMAYA WORD
      ====================================================== */}

      <div className="site-container relative z-10 overflow-hidden border-b border-white/[0.08]">
        <div className="relative pt-10 sm:pt-12">
          <p
            aria-hidden="true"
            className="translate-y-[12%] select-none whitespace-nowrap font-display text-[clamp(6rem,19vw,20rem)] font-semibold leading-[0.72] tracking-[-0.075em] text-white/[0.055]"
          >
            LASMAYA
          </p>

          {/* GOLD ACCENT */}

          <div className="absolute bottom-0 right-0 hidden items-center gap-3 pb-5 lg:flex">
            <span className="h-[5px] w-[5px] rounded-full bg-[#dfc27b]" />

            <span className="text-[0.42rem] font-bold uppercase tracking-[0.2em] text-[#dfc27b]/50">
              Lagos · Nigeria
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="site-container relative z-10">
        <div className="flex flex-col gap-7 py-7 sm:flex-row sm:items-center sm:justify-between">
          {/* COPYRIGHT */}

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-[0.44rem] font-semibold uppercase tracking-[0.17em] text-white/25">
              © {currentYear} LASMAYA
            </p>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <p className="text-[0.44rem] font-semibold uppercase tracking-[0.17em] text-white/20">
              Lagos State Man of the Year Award
            </p>
          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-6">
            <Link
              href="/community"
              className="text-[0.44rem] font-semibold uppercase tracking-[0.17em] text-white/25 transition-colors duration-300 hover:text-[#dfc27b]"
            >
              Community
            </Link>

            {/* BACK TO TOP */}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-3"
            >
              <span className="hidden text-[0.44rem] font-semibold uppercase tracking-[0.17em] text-white/25 transition-colors duration-300 group-hover:text-[#dfc27b] sm:block">
                Back to top
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:border-[#dfc27b]/50 group-hover:bg-[#dfc27b] group-hover:text-[#090b0a]">
                <ArrowUp
                  size={12}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}