"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "People",
    text: "Recognising individuals whose leadership, service and influence contribute meaningfully to Lagos.",
  },
  {
    number: "02",
    title: "Purpose",
    text: "Celebrating impact driven by responsibility, commitment and a genuine desire to make a difference.",
  },
  {
    number: "03",
    title: "Progress",
    text: "Honouring contributions that help move communities, institutions and Lagos towards a stronger future.",
  },
];

export default function AboutAward() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const context = gsap.context(() => {
      /* ================================================
         ABOUT LABEL
      ================================================= */

      gsap.from("[data-about-label]", {
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      /* ================================================
         MAIN HEADING
      ================================================= */

      gsap.from("[data-about-heading] .reveal-line", {
        scrollTrigger: {
          trigger: "[data-about-heading]",
          start: "top 82%",
        },
        yPercent: 110,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });

      /* ================================================
         ABOUT COPY
      ================================================= */

      gsap.from("[data-about-copy]", {
        scrollTrigger: {
          trigger: "[data-about-copy]",
          start: "top 84%",
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      /* ================================================
         META / STATS
      ================================================= */

      gsap.from("[data-about-meta]", {
        scrollTrigger: {
          trigger: "[data-about-meta-wrapper]",
          start: "top 88%",
        },
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
      });

      /* ================================================
         PRINCIPLES
      ================================================= */

      gsap.from("[data-principle]", {
        scrollTrigger: {
          trigger: "[data-principles]",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.13,
        duration: 0.9,
        ease: "power3.out",
      });

      /* ================================================
         LARGE BACKGROUND WORD
      ================================================= */

      gsap.fromTo(
        "[data-big-word]",
        {
          xPercent: 6,
        },
        {
          xPercent: -3,
          scrollTrigger: {
            trigger: "[data-principles]",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
          ease: "none",
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-award"
      className="relative overflow-hidden bg-[#f5f2e9] text-[#102e25]"
    >
      {/* =====================================================
          TOP TRANSITION FROM DARK HERO
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[150px] bg-gradient-to-b from-[#090b0a]/[0.055] via-[#102e25]/[0.018] to-transparent" />

      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Left green atmosphere */}

        <div className="absolute left-[-22%] top-[4%] h-[700px] w-[700px] rounded-full bg-[#123f32]/[0.045] blur-[150px]" />

        {/* Right gold atmosphere */}

        <div className="absolute right-[-15%] top-[32%] h-[600px] w-[600px] rounded-full bg-[#b8924d]/[0.055] blur-[160px]" />

        {/* Bottom green atmosphere */}

        <div className="absolute bottom-[-10%] left-[35%] h-[500px] w-[650px] rounded-full bg-[#123f32]/[0.035] blur-[160px]" />

        {/* Editorial vertical rule */}

        <div className="absolute bottom-0 left-[var(--page-padding)] top-0 hidden w-px bg-[#102e25]/[0.055] lg:block" />

        {/* Extremely subtle grid */}

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(16,46,37,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(16,46,37,.7)_1px,transparent_1px)] [background-size:100px_100px]" />
      </div>

      {/* =====================================================
          ABOUT INTRODUCTION
      ===================================================== */}

      <div className="site-container relative z-10 pb-24 pt-28 sm:pb-32 sm:pt-36 lg:pb-40 lg:pt-44">
        {/* =================================================
            LABEL
        ================================================= */}

        <div
          data-about-label
          className="mb-12 flex items-center gap-4 lg:mb-20"
        >
          <span className="h-px w-10 bg-[#a9833f]" />

          <p className="text-[0.58rem] font-bold uppercase tracking-[0.28em] text-[#8d6c32]">
            About the Award
          </p>
        </div>

        {/* =================================================
            MAIN INTRODUCTION GRID
        ================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          {/* =============================================
              LEFT — MAIN STATEMENT
          ============================================= */}

          <div>
            <div
              data-about-heading
              className="
                font-display
                text-[clamp(3.5rem,8vw,8.6rem)]
                font-medium
                leading-[0.82]
                tracking-[-0.055em]
                text-[#102e25]
              "
            >
              <div className="overflow-hidden">
                <span className="reveal-line block">
                  Recognising
                </span>
              </div>

              <div className="overflow-hidden">
                <span className="reveal-line block text-[#102e25]/30">
                  those shaping
                </span>
              </div>

              <div className="overflow-hidden">
                <span className="reveal-line block">
                  Lagos.
                </span>
              </div>
            </div>
          </div>

          {/* =============================================
              RIGHT — DESCRIPTION
          ============================================= */}

          <div
            data-about-copy
            className="flex flex-col justify-end lg:pb-3"
          >
            {/* Gold / green line */}

            <div className="mb-7 h-px w-full bg-gradient-to-r from-[#a9833f]/80 via-[#102e25]/15 to-transparent" />

            {/* Main description */}

            <p className="max-w-[500px] text-[1rem] leading-[1.85] text-[#26352f]/75 sm:text-[1.08rem]">
              The{" "}
              <span className="font-medium text-[#102e25]">
                Lagos State Man of the Year Award
              </span>{" "}
              celebrates individuals whose leadership, service and meaningful
              contributions continue to create impact across Lagos.
            </p>

            {/* Secondary description */}

            <p className="mt-5 max-w-[470px] text-[0.78rem] leading-6 text-[#26352f]/55">
              Beyond recognition, LASMAYA provides a platform for celebrating
              people whose work reflects responsibility, purpose and a
              commitment to progress.
            </p>

            {/* CTA */}

            <Link
              href="/about"
              className="group mt-8 inline-flex w-fit items-center gap-4"
            >
              <span
                className="
                  relative
                  text-[0.6rem]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#102e25]/70
                  transition-colors
                  duration-300

                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-px
                  after:w-full
                  after:origin-left
                  after:scale-x-0
                  after:bg-[#a9833f]
                  after:transition-transform
                  after:duration-500

                  group-hover:text-[#8d6c32]
                  group-hover:after:scale-x-100
                "
              >
                Discover LASMAYA
              </span>

              <span
                className="
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#a9833f]/45
                  text-[#8d6c32]
                  transition-all
                  duration-500

                  group-hover:border-[#102e25]
                  group-hover:bg-[#102e25]
                  group-hover:text-[#f5f2e9]
                  group-hover:shadow-[0_8px_30px_rgba(16,46,37,.14)]
                "
              >
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            EDITION META
        ===================================================== */}

        <div
          data-about-meta-wrapper
          className="mt-20 border-y border-[#102e25]/10 sm:mt-28 lg:mt-36"
        >
          <div className="grid grid-cols-3">
            {/* =============================================
                EDITION
            ============================================= */}

            <div
              data-about-meta
              className="
                group
                relative
                overflow-hidden
                border-r
                border-[#102e25]/10
                py-7
                pr-3

                sm:py-9
                sm:pr-6
              "
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#102e25]/[0.025] transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative">
                <p className="mb-2 text-[0.46rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/40 sm:text-[0.54rem]">
                  Edition
                </p>

                <p className="font-display text-[1.65rem] tracking-[-0.03em] text-[#102e25] sm:text-[2.5rem]">
                  14th
                </p>
              </div>
            </div>

            {/* =============================================
                LOCATION
            ============================================= */}

            <div
              data-about-meta
              className="
                group
                relative
                overflow-hidden
                border-r
                border-[#102e25]/10
                px-3
                py-7

                sm:px-8
                sm:py-9
              "
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#102e25]/[0.025] transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative">
                <p className="mb-2 text-[0.46rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/40 sm:text-[0.54rem]">
                  Celebrating
                </p>

                <p className="font-display text-[1.65rem] tracking-[-0.03em] text-[#102e25] sm:text-[2.5rem]">
                  Lagos
                </p>
              </div>
            </div>

            {/* =============================================
                YEAR
            ============================================= */}

            <div
              data-about-meta
              className="
                group
                relative
                overflow-hidden
                py-7
                pl-3

                sm:py-9
                sm:pl-8
              "
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#a9833f]/[0.035] transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative">
                <p className="mb-2 text-[0.46rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/40 sm:text-[0.54rem]">
                  Current
                </p>

                <p className="font-display text-[1.65rem] tracking-[-0.03em] text-[#9b7839] sm:text-[2.5rem]">
                  2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PEOPLE · PURPOSE · PROGRESS
      ===================================================== */}

      <div
        data-principles
        className="relative z-10 border-t border-[#102e25]/[0.08]"
      >
        {/* =================================================
            HUGE DECORATIVE IMPACT WORD
        ================================================= */}

        <div
          data-big-word
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -top-[0.12em]
            right-[-0.08em]
            select-none
            whitespace-nowrap
            font-display
            text-[clamp(8rem,23vw,25rem)]
            font-semibold
            leading-none
            tracking-[-0.08em]
            text-[#102e25]/[0.025]
          "
        >
          IMPACT
        </div>

        {/* =================================================
            PRINCIPLES CONTENT
        ================================================= */}

        <div className="site-container relative py-24 sm:py-32 lg:py-40">
          {/* =============================================
              PRINCIPLES HEADING
          ============================================= */}

          <div className="mb-14 flex items-end justify-between gap-8 sm:mb-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#a9833f]" />

                <p className="text-[0.55rem] font-bold uppercase tracking-[0.26em] text-[#8d6c32]">
                  The Spirit of LASMAYA
                </p>
              </div>

              <h3
                className="
                  font-display
                  text-[clamp(3rem,5vw,5.5rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.04em]
                  text-[#102e25]
                "
              >
                People.
                <br />
                Purpose.
                <br />

                <span className="text-[#9b7839]">
                  Progress.
                </span>
              </h3>
            </div>

            {/* Desktop supporting copy */}

            <div className="hidden md:block">
              <div className="mb-4 ml-auto h-px w-16 bg-[#a9833f]/50" />

              <p className="max-w-[280px] text-right text-[0.7rem] leading-5 text-[#26352f]/45">
                Three ideas at the heart of recognising meaningful contribution
                and lasting impact.
              </p>
            </div>
          </div>

          {/* =================================================
              PRINCIPLE CARDS
          ================================================= */}

          <div className="grid border-t border-[#102e25]/10 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                data-principle
                className={`
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-[#102e25]/10
                  py-10

                  lg:border-b-0
                  lg:px-9
                  lg:py-12

                  ${index !== 0 ? "lg:border-l lg:border-[#102e25]/10" : ""}
                `}
              >
                {/* =====================================
                    HOVER BACKGROUND
                ====================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    origin-bottom
                    scale-y-0
                    bg-[#102e25]
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]

                    group-hover:scale-y-100
                  "
                />

                {/* =====================================
                    SOFT GOLD HOVER GLOW
                ====================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-[60%]
                    left-1/2
                    h-[300px]
                    w-[300px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#c6a15b]/0
                    blur-[100px]
                    transition-all
                    duration-700

                    group-hover:bg-[#c6a15b]/10
                  "
                />

                {/* =====================================
                    GOLD TOP SLIDE LINE
                ====================================== */}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    z-10
                    h-[2px]
                    w-full
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-[#a9833f]
                    via-[#d7b66b]
                    to-transparent
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]

                    group-hover:scale-x-100
                  "
                />

                {/* =====================================
                    NUMBER
                ====================================== */}

                <div className="relative z-10 mb-12 flex items-center justify-between lg:mb-20">
                  <span
                    className="
                      text-[0.52rem]
                      font-bold
                      tracking-[0.18em]
                      text-[#9b7839]
                      transition-colors
                      duration-500

                      group-hover:text-[#dfc27b]
                    "
                  >
                    {principle.number}
                  </span>

                  <span
                    className="
                      h-[5px]
                      w-[5px]
                      rounded-full
                      bg-[#102e25]/20
                      transition-all
                      duration-500

                      group-hover:scale-125
                      group-hover:bg-[#dfc27b]
                      group-hover:shadow-[0_0_15px_rgba(223,194,123,.7)]
                    "
                  />
                </div>

                {/* =====================================
                    TITLE
                ====================================== */}

                <h4
                  className="
                    relative
                    z-10
                    font-display
                    text-[clamp(2.7rem,4vw,4.2rem)]
                    tracking-[-0.04em]
                    text-[#102e25]
                    transition-all
                    duration-500

                    group-hover:-translate-y-1
                    group-hover:text-[#f5f2e9]
                  "
                >
                  {principle.title}
                </h4>

                {/* =====================================
                    DESCRIPTION
                ====================================== */}

                <p
                  className="
                    relative
                    z-10
                    mt-5
                    max-w-[330px]
                    text-[0.72rem]
                    leading-6
                    text-[#26352f]/55
                    transition-colors
                    duration-500

                    group-hover:text-[#f5f2e9]/65
                  "
                >
                  {principle.text}
                </p>

                {/* =====================================
                    DECORATIVE ARROW
                ====================================== */}

                <div
                  className="
                    relative
                    z-10
                    mt-9
                    flex
                    items-center
                    gap-3
                    opacity-45
                    transition-all
                    duration-500

                    group-hover:translate-x-2
                    group-hover:opacity-100
                  "
                >
                  <span className="h-px w-7 bg-[#a9833f] transition-colors duration-500 group-hover:bg-[#dfc27b]" />

                  <ArrowUpRight
                    size={12}
                    className="text-[#9b7839] transition-colors duration-500 group-hover:text-[#dfc27b]"
                  />
                </div>

                {/* =====================================
                    LARGE CARD NUMBER
                ====================================== */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -bottom-7
                    -right-2
                    z-[1]
                    font-display
                    text-[8rem]
                    font-semibold
                    leading-none
                    tracking-[-0.08em]
                    text-[#102e25]/[0.025]
                    transition-colors
                    duration-700

                    group-hover:text-white/[0.025]

                    sm:text-[10rem]
                  "
                >
                  {principle.number}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div className="relative z-10 pb-4">
        <div className="site-container">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#a9833f]/35 to-transparent" />
        </div>

        <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[320px] w-[70%] -translate-x-1/2 rounded-full bg-[#123f32]/[0.045] blur-[120px]" />
      </div>
    </section>
  );
}