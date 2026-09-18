"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

type Nominee = {
  id: string;
  name: string;
  shortName?: string;
  suffix?: string;
  role: string;
  image: string;
  votes: string;
  winner: boolean;
};

/* =========================================================
   NOMINEES
========================================================= */

const nominees: Nominee[] = [
  {
    id: "01",
    name: "Engr. Abdulhafis Gbolahan Toriola",
    shortName: "Abdulhafis G. Toriola",
    suffix: "FNSE",
    role: "Permanent Secretary, Lagos State Ministry of Housing",
    image: "/images/editions/2026/winner/abdulhafis.png",
    votes: "3,850",
    winner: true,
  },
  {
    id: "02",
    name: "Prince Ifalade Oyekan",
    shortName: "Ifalade Oyekan",
    role: "General Manager, Lagos State Neighbourhood Safety Agency",
    image: "/images/nominees/placeholder-1.jpg",
    votes: "3,481",
    winner: false,
  },
  {
    id: "03",
    name: "Hon. Tasir Olawale Raji",
    shortName: "Tasir Olawale Raji",
    role: "House of Representatives, Epe Federal Constituency",
    image: "/images/nominees/placeholder-2.jpg",
    votes: "3,073",
    winner: false,
  },
  {
    id: "04",
    name: "Hon. Bolaji Kayode Robert",
    shortName: "Bolaji Kayode Robert",
    role: "Public Service",
    image: "/images/nominees/placeholder-3.jpg",
    votes: "1,724",
    winner: false,
  },
  {
    id: "05",
    name: "Hon. Babatunde Adande Hunpe",
    shortName: "Babatunde Adande Hunpe",
    role: "Chairman, Badagry Local Government",
    image: "/images/nominees/placeholder-4.jpg",
    votes: "878",
    winner: false,
  },
  {
    id: "06",
    name: "Engr. Olatunde Runsewe",
    shortName: "Olatunde Runsewe",
    suffix: "FNSE",
    role: "Chairman, Dutum Group",
    image: "/images/nominees/placeholder-6.jpg",
    votes: "785",
    winner: false,
  },
  {
    id: "07",
    name: "Dr. Richard Ajayi",
    shortName: "Richard Ajayi",
    suffix: "FRCOG, FWACS",
    role: "Executive Vice Chairman, Bridge Clinic",
    image: "/images/nominees/placeholder-7.jpg",
    votes: "779",
    winner: false,
  },
  {
    id: "08",
    name: "Hon. Kunle Soname",
    shortName: "Kunle Soname",
    suffix: "OFR",
    role: "Chairman, ValueJet",
    image: "/images/nominees/placeholder-8.jpg",
    votes: "322",
    winner: false,
  },
  {
    id: "09",
    name: "Engr. Wole Ogunsanya",
    shortName: "Wole Ogunsanya",
    suffix: "FNSE",
    role: "Chairman/CEO, Geoplex Drillteq Limited",
    image: "/images/nominees/placeholder-9.jpg",
    votes: "305",
    winner: false,
  },
  {
    id: "10",
    name: "Chief Victor Nwokeji",
    shortName: "Victor Nwokeji",
    suffix: "MON",
    role: "Executive Chairman, Zotmann International Limited",
    image: "/images/nominees/placeholder-1.jpg",
    votes: "301",
    winner: false,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function NomineesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeNominee = nominees[activeIndex];

  /* =========================================================
     SLIDER FUNCTIONS
  ========================================================= */

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => {
      return (current + 1) % nominees.length;
    });
  }, []);

  const previousSlide = useCallback(() => {
    setActiveIndex((current) => {
      return (current - 1 + nominees.length) % nominees.length;
    });
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  /* =========================================================
     SECTION ENTRANCE ANIMATIONS
  ========================================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const context = gsap.context(() => {
      /* TOP LABEL */

      gsap.from("[data-nominees-label]", {
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
        },
        y: -24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      /* HEADING FROM TOP */

      gsap.from(
        "[data-nominees-heading] .nominee-heading-line",
        {
          scrollTrigger: {
            trigger: "[data-nominees-heading]",
            start: "top 84%",
          },
          yPercent: -115,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
        }
      );

      /* COPY FROM LEFT */

      gsap.from("[data-nominees-copy]", {
        scrollTrigger: {
          trigger: "[data-nominees-copy]",
          start: "top 87%",
        },
        x: -55,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      });

      /* SLIDER ENTRANCE */

      gsap.from("[data-slider-shell]", {
        scrollTrigger: {
          trigger: "[data-slider-shell]",
          start: "top 88%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      /* LARGE BACKGROUND WORD */

      gsap.fromTo(
        "[data-nominees-word]",
        {
          xPercent: 4,
        },
        {
          xPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  /* =========================================================
     ACTIVE NOMINEE ANIMATION
  ========================================================= */

  useLayoutEffect(() => {
    const slide = slideRef.current;

    if (!slide) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline();

      /* PORTRAIT - LEFT + FADE */

      timeline.fromTo(
        "[data-active-image]",
        {
          x: -65,
          opacity: 0,
          scale: 1.04,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power4.out",
        }
      );

      /* LARGE NUMBER */

      timeline.fromTo(
        "[data-active-number]",
        {
          x: -25,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.08
      );

      /* META FROM TOP */

      timeline.fromTo(
        "[data-active-meta]",
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        0.15
      );

      /* NAME FROM TOP */

      timeline.fromTo(
        "[data-active-name]",
        {
          y: -45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power4.out",
        },
        0.2
      );

      /* ROLE FROM LEFT */

      timeline.fromTo(
        "[data-active-role]",
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.3
      );

      /* VOTES */

      timeline.fromTo(
        "[data-active-votes]",
        {
          y: 18,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
        },
        0.38
      );

      /* LINK */

      timeline.fromTo(
        "[data-active-link]",
        {
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        0.45
      );
    }, slide);

    return () => {
      context.revert();
    };
  }, [activeIndex]);

  /* =========================================================
     4 SECOND AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      nextSlide();
    }, 4000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, isPaused, nextSlide]);

  /* =========================================================
     PROGRESS BAR
  ========================================================= */

  useLayoutEffect(() => {
    const progress = progressRef.current;

    if (!progress) return;

    gsap.killTweensOf(progress);

    if (isPaused) {
      gsap.set(progress, {
        scaleX: 0,
      });

      return;
    }

    gsap.fromTo(
      progress,
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 4,
        ease: "none",
      }
    );

    return () => {
      gsap.killTweensOf(progress);
    };
  }, [activeIndex, isPaused]);

  return (
    <section
      ref={sectionRef}
      id="nominees"
      className="relative overflow-hidden bg-[#f5f2e9] text-[#102e25]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[18%] top-[8%] h-[600px] w-[600px] rounded-full bg-[#123f32]/[0.035] blur-[150px]" />

        <div className="absolute -right-[15%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-[#b8924d]/[0.05] blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(16,46,37,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(16,46,37,.7)_1px,transparent_1px)] [background-size:100px_100px]" />
      </div>

      {/* =====================================================
          LARGE BACKGROUND WORD
      ====================================================== */}

      <div
        data-nominees-word
        aria-hidden="true"
        className="pointer-events-none absolute left-[-3%] top-[2%] select-none whitespace-nowrap font-display text-[clamp(8rem,22vw,24rem)] font-semibold leading-none tracking-[-0.08em] text-[#102e25]/[0.025]"
      >
        NOMINEES
      </div>

      {/* =====================================================
          TOP DIVIDER
      ====================================================== */}

      <div className="site-container relative z-10">
        <div className="h-px w-full bg-[#102e25]/10" />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="site-container relative z-10 pb-12 pt-20 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
        {/* LABEL */}

        <div
          data-nominees-label
          className="mb-10 flex items-center justify-between gap-8 lg:mb-12"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#a9833f]" />

            <p className="text-[0.56rem] font-bold uppercase tracking-[0.28em] text-[#8d6c32]">
              2026 Nominees
            </p>
          </div>

          <p className="hidden text-[0.52rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/30 sm:block">
            10 Individuals · 14th Edition
          </p>
        </div>

        {/* HEADING + INTRO */}

        <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-16">
          <div
            data-nominees-heading
            className="font-display text-[clamp(3.5rem,7.5vw,8rem)] font-medium leading-[0.82] tracking-[-0.06em]"
          >
            <div className="overflow-hidden">
              <span className="nominee-heading-line block">
                Meet the
              </span>
            </div>

            <div className="overflow-hidden">
              <span className="nominee-heading-line block text-[#102e25]/30">
                2026
              </span>
            </div>

            <div className="overflow-hidden">
              <span className="nominee-heading-line block text-[#9b7839]">
                nominees.
              </span>
            </div>
          </div>

          <div
            data-nominees-copy
            className="lg:pb-1"
          >
            <div className="mb-5 h-px w-full bg-gradient-to-r from-[#a9833f]/80 via-[#102e25]/15 to-transparent" />

            <p className="max-w-[470px] text-[0.92rem] leading-[1.75] text-[#26352f]/70">
              Ten individuals formed the nominee class of the
              14th Edition, each taking part in the journey
              toward the 2026 honour.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-[#a9833f]" />

              <p className="text-[0.52rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/40">
                Lagos · 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SLIDER
      ====================================================== */}

      <div className="site-container relative z-10 pb-20 sm:pb-24 lg:pb-32">
        <div
          data-slider-shell
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative overflow-hidden bg-[#102e25] shadow-[0_30px_80px_rgba(16,46,37,0.14)]"
        >
          {/* =================================================
              CARD BACKGROUND
          ================================================== */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[18%] top-[-50%] h-[560px] w-[560px] rounded-full bg-[#275d4c]/25 blur-[130px]" />

            <div className="absolute bottom-[-60%] right-[-15%] h-[500px] w-[500px] rounded-full bg-[#b8924d]/10 blur-[120px]" />

            <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:90px_90px]" />
          </div>

          {/* =================================================
              ACTIVE SLIDE
          ================================================== */}

          <div
            ref={slideRef}
            key={activeNominee.id}
            className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] lg:min-h-[570px]"
          >
            {/* =================================================
                PORTRAIT SIDE
            ================================================== */}

            <div className="relative min-h-[400px] overflow-hidden sm:min-h-[470px] lg:min-h-[570px]">
              {/* LIGHT */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(223,194,123,.15),transparent_52%)]" />

              {/* LARGE NUMBER */}

              <div
                data-active-number
                aria-hidden="true"
                className="pointer-events-none absolute -left-[3%] bottom-[-8%] z-[1] font-display text-[clamp(11rem,23vw,23rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.035]"
              >
                {activeNominee.id}
              </div>

              {/* PORTRAIT */}

              <div
                data-active-image
                className="absolute bottom-0 left-1/2 z-10 h-[94%] w-[106%] -translate-x-1/2"
              >
                <Image
                  src={activeNominee.image}
                  alt={activeNominee.name}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={
                    activeNominee.winner
                      ? "object-contain object-bottom"
                      : "object-cover object-top"
                  }
                />
              </div>

              {/* LEFT FADE */}

              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[12%] bg-gradient-to-r from-[#102e25]/65 to-transparent" />

              {/* DESKTOP RIGHT FADE */}

              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[30%] bg-gradient-to-l from-[#102e25] to-transparent lg:block" />

              {/* MOBILE BOTTOM FADE */}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[42%] bg-gradient-to-t from-[#102e25] via-[#102e25]/45 to-transparent lg:hidden" />

              {/* NUMBER LABEL */}

              <div className="absolute left-5 top-5 z-20 sm:left-7 sm:top-7">
                <p className="text-[0.5rem] font-bold uppercase tracking-[0.22em] text-[#dfc27b]">
                  Nominee {activeNominee.id}
                </p>
              </div>

              {/* HONOUREE BADGE */}

              {activeNominee.winner && (
                <div className="absolute right-5 top-5 z-20 sm:right-7 sm:top-7">
                  <div className="flex items-center gap-2 rounded-full border border-[#dfc27b]/30 bg-[#102e25]/70 px-3 py-2 backdrop-blur-xl">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#dfc27b] shadow-[0_0_12px_rgba(223,194,123,.8)]" />

                    <span className="text-[0.42rem] font-bold uppercase tracking-[0.18em] text-[#dfc27b]">
                      2026 Honouree
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* =================================================
                INFORMATION SIDE
            ================================================== */}

            <div className="relative flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10 xl:px-12">
              {/* EDITION */}

              <div
                data-active-meta
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#dfc27b]" />

                <p className="text-[0.48rem] font-bold uppercase tracking-[0.24em] text-[#dfc27b]">
                  14th Edition · Lagos
                </p>
              </div>

              {/* NAME */}

              <div
                data-active-name
                className="max-w-[620px]"
              >
                <p className="mb-3 text-[0.48rem] font-bold uppercase tracking-[0.22em] text-white/35">
                  {activeNominee.winner
                    ? "2026 Honouree"
                    : "2026 Nominee"}
                </p>

                <h3 className="font-display text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.86] tracking-[-0.05em] text-[#f5f2e9]">
                  {activeNominee.shortName ??
                    activeNominee.name}
                </h3>

                {activeNominee.suffix && (
                  <p className="mt-4 text-[0.54rem] font-bold uppercase tracking-[0.26em] text-[#dfc27b]">
                    {activeNominee.suffix}
                  </p>
                )}
              </div>

              {/* ROLE */}

              <div
                data-active-role
                className="mt-6 max-w-[560px]"
              >
                <div className="mb-4 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

                <p className="text-[0.88rem] leading-[1.65] text-white/55 sm:text-[0.94rem]">
                  {activeNominee.role}
                </p>
              </div>

              {/* VOTES */}

              <div
                data-active-votes
                className="mt-6 flex items-end gap-4"
              >
                <span className="font-display text-[clamp(2.5rem,4vw,4.2rem)] font-medium leading-none tracking-[-0.05em] text-[#dfc27b]">
                  {activeNominee.votes}
                </span>

                <span className="mb-[3px] text-[0.44rem] font-bold uppercase tracking-[0.2em] text-white/30">
                  Public
                  <br />
                  Votes
                </span>
              </div>

              {/* PROFILE LINK */}

              <div
                data-active-link
                className="mt-6"
              >
                <Link
                  href="/editions/2026/nominees"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="relative text-[0.52rem] font-bold uppercase tracking-[0.2em] text-[#f5f2e9] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#dfc27b] after:transition-transform after:duration-500 group-hover:text-[#dfc27b] group-hover:after:scale-x-100">
                    View Nominee Profile
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-[#dfc27b] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================
              SLIDER CONTROL BAR
          ================================================== */}

          <div className="relative z-20 flex items-center justify-between gap-4 border-t border-white/[0.08] px-5 py-3.5 sm:px-7 lg:px-8">
            {/* COUNTER */}

            <div className="flex items-center gap-3">
              <span className="font-display text-[1.2rem] font-medium text-[#dfc27b]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-7 bg-white/15" />

              <span className="text-[0.44rem] font-bold tracking-[0.18em] text-white/25">
                {String(nominees.length).padStart(2, "0")}
              </span>
            </div>

            {/* DESKTOP INDICATORS */}

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
              {nominees.map((nominee, index) => (
                <button
                  key={nominee.id}
                  type="button"
                  aria-label={`Show ${nominee.name}`}
                  onClick={() => goToSlide(index)}
                  className="group flex h-5 items-center"
                >
                  <span
                    className={`block h-[2px] transition-all duration-500 ${
                      activeIndex === index
                        ? "w-8 bg-[#dfc27b]"
                        : "w-3 bg-white/20 group-hover:bg-white/50"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* ARROWS */}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous nominee"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:border-[#dfc27b]/50 hover:bg-[#dfc27b] hover:text-[#102e25]"
              >
                <ArrowLeft
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next nominee"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:border-[#dfc27b]/50 hover:bg-[#dfc27b] hover:text-[#102e25]"
              >
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* =================================================
              4 SECOND PROGRESS
          ================================================== */}

          <div className="absolute bottom-0 left-0 z-30 h-[2px] w-full overflow-hidden bg-white/[0.05]">
            <div
              ref={progressRef}
              className="h-full w-full origin-left bg-[#dfc27b]"
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE INDICATORS
        ====================================================== */}

        <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
          {nominees.map((nominee, index) => (
            <button
              key={nominee.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Show ${nominee.name}`}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                activeIndex === index
                  ? "w-8 bg-[#a9833f]"
                  : "w-3 bg-[#102e25]/15"
              }`}
            />
          ))}
        </div>

        {/* =====================================================
            VIEW ALL
        ====================================================== */}

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/editions/2026/nominees"
            className="group inline-flex items-center gap-5"
          >
            <span className="relative text-[0.56rem] font-bold uppercase tracking-[0.22em] text-[#102e25] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#a9833f] after:transition-transform after:duration-500 group-hover:text-[#8d6c32] group-hover:after:scale-x-100">
              View All 2026 Nominees
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a9833f]/45 text-[#8d6c32] transition-all duration-500 group-hover:border-[#102e25] group-hover:bg-[#102e25] group-hover:text-[#f5f2e9]">
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}