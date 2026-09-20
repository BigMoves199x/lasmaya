"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  Landmark,
  MessageSquareText,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DATA
========================================================= */

const process = [
  {
    number: "01",
    title: "Assessment",
    text: "Potential nominees are considered through an assessment process before the public participation stage.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Nominees",
    text: "Distinguished individuals who reflect leadership, service, achievement and contribution are presented for recognition.",
    icon: Users,
  },
  {
    number: "03",
    title: "Public Participation",
    text: "The process provides an opportunity for members of the public to participate in the recognition journey.",
    icon: MessageSquareText,
  },
  {
    number: "04",
    title: "Recognition",
    text: "Following the process, results are announced and the Awardee is recognised through the Lagos State Man of the Year Award.",
    icon: Award,
  },
];

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
      gsap.from("[data-about-label]", {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from("[data-about-heading] .reveal-line", {
        scrollTrigger: {
          trigger: "[data-about-heading]",
          start: "top 84%",
        },
        yPercent: 110,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from("[data-about-copy]", {
        scrollTrigger: {
          trigger: "[data-about-copy]",
          start: "top 84%",
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from("[data-journey]", {
        scrollTrigger: {
          trigger: "[data-journey-wrapper]",
          start: "top 82%",
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from("[data-cepodeps]", {
        scrollTrigger: {
          trigger: "[data-cepodeps]",
          start: "top 82%",
        },
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from("[data-process-card]", {
        scrollTrigger: {
          trigger: "[data-process]",
          start: "top 80%",
        },
        y: 45,
        opacity: 0,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
      });

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
        },
      );

      gsap.fromTo(
        "[data-since]",
        {
          yPercent: 0,
        },
        {
          yPercent: -8,
          scrollTrigger: {
            trigger: "[data-about-intro]",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
          ease: "none",
        },
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
          TOP TRANSITION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[150px] bg-gradient-to-b from-[#090b0a]/[0.055] via-[#102e25]/[0.018] to-transparent" />

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-22%] top-[4%] h-[700px] w-[700px] rounded-full bg-[#123f32]/[0.04] blur-[150px]" />

        <div className="absolute right-[-15%] top-[25%] h-[600px] w-[600px] rounded-full bg-[#b8924d]/[0.045] blur-[160px]" />

        <div className="absolute bottom-[5%] left-[30%] h-[550px] w-[700px] rounded-full bg-[#123f32]/[0.03] blur-[160px]" />

        <div className="absolute bottom-0 left-[var(--page-padding)] top-0 hidden w-px bg-[#102e25]/[0.05] lg:block" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(16,46,37,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(16,46,37,.7)_1px,transparent_1px)] [background-size:100px_100px]" />
      </div>

      {/* =====================================================
          MAIN ABOUT INTRODUCTION
      ====================================================== */}

      <div
        data-about-intro
        className="site-container relative z-10 pb-24 pt-28 sm:pb-32 sm:pt-36 lg:pb-36 lg:pt-44"
      >
        {/* LABEL */}

        <div
          data-about-label
          className="mb-12 flex items-center gap-4 lg:mb-20"
        >

          <p className="text-[1rem] font-bold uppercase tracking-[0.25em] text-[#806128]">
            About LASMAYA
          </p>
        </div>

        {/* =================================================
            MAIN HEADING + SINCE 2008
        ================================================== */}

        <div className="relative">
          <div
            data-since
            aria-hidden="true"
            className="pointer-events-none absolute -right-[2%] -top-[8%] hidden select-none text-right lg:block"
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-[#9b7839]/55">
              Since
            </p>

            <p className="font-display text-[clamp(8rem,16vw,16rem)] font-semibold leading-[0.72] tracking-[-0.07em] text-[#102e25]/[0.025]">
              2008
            </p>
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
            {/* LEFT */}

            <div className="relative z-20">
              <div
                data-about-heading
                className="font-display text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.055em] text-[#102e25]"
              >
                <div className="overflow-hidden pb-[0.04em]">
                  <span className="reveal-line block text-[#102e25]">
                    A journey of
                  </span>
                </div>

                <div className="overflow-hidden pb-[0.04em]">
                  <span className="reveal-line block text-[#102e25]">
                    recognising
                  </span>
                </div>

                <div className="overflow-hidden pb-[0.08em]">
                  <span className="reveal-line block text-[#9b7839]">
                    excellence.
                  </span>
                </div>
              </div>


            </div>

            {/* RIGHT */}

            <div
              data-about-copy
              className="relative z-20 flex flex-col justify-end lg:pb-2"
            >
              <div className="mb-7 h-[2px] w-full bg-gradient-to-r from-[#a9833f] via-[#102e25]/20 to-transparent" />

              <p className="max-w-[590px] text-[1.05rem] font-medium leading-[1.8] text-[#1b3029] sm:text-[1.12rem] lg:text-[1.16rem]">
                The{" "}
                <span className="font-bold text-[#102e25]">
                  Lagos State Man of the Year Award
                </span>{" "}
                LASMAYA was conceptualised as a programme for
                paying tribute to excellence and as a platform for
                identifying, recognising and projecting genuine role
                models in Lagos State.
              </p>

              <p className="mt-6 max-w-[580px] text-[0.94rem] font-medium leading-[1.85] text-[#35473f] sm:text-[1rem]">
                Since 2008, the award has developed a participatory
                approach to recognition, bringing together an
                assessment of distinguished nominees with public
                participation in the award process.
              </p>

              <p className="mt-5 max-w-[580px] text-[0.94rem] font-medium leading-[1.85] text-[#35473f] sm:text-[1rem]">
                At its heart is a commitment to recognising people
                whose work, leadership, service and achievements
                provide examples of excellence and meaningful
                contribution to Lagos.
              </p>

              <Link
                href="/about"
                className="group mt-9 inline-flex w-fit items-center gap-4"
              >
                <span className="relative text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#102e25] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#a9833f] after:transition-transform after:duration-500 group-hover:text-[#8d6c32] group-hover:after:scale-x-100">
                  Discover the LASMAYA Story
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a9833f]/60 text-[#8d6c32] transition-all duration-500 group-hover:border-[#102e25] group-hover:bg-[#102e25] group-hover:text-[#f5f2e9]">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            CENTERED LASMAYA STATEMENT + TIMELINE
        ====================================================== */}

        <div
          data-journey-wrapper
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <div data-journey>
            {/* MAIN CENTERED STATEMENT */}

            <div className="mx-auto flex max-w-[1150px] flex-col items-center text-center">
              <div className="mb-8 flex items-center justify-center gap-4">
                <span className="h-[2px] w-10 bg-[#a9833f] sm:w-16" />

                <span className="h-2 w-2 rounded-full bg-[#a9833f]" />

                <span className="h-[2px] w-10 bg-[#a9833f] sm:w-16" />
              </div>

              <p className="max-w-[1050px] font-display text-[clamp(2.4rem,4.8vw,5.2rem)] font-bold leading-[1.04] tracking-[-0.045em] text-[#102e25]">
                LASMAYA has been organised since{" "}
                <span className="text-[#9b7839]">2008</span>{" "}
                as a platform for recognising excellence and projecting{" "}
                <span className="text-[#9b7839]">role models</span>{" "}
                in Lagos State.
              </p>

              <div className="mt-9 h-[2px] w-[90px] bg-gradient-to-r from-transparent via-[#a9833f] to-transparent sm:mt-11 sm:w-[150px]" />
            </div>
           
          </div>
        </div>
      </div>

      {/* =====================================================
          CEPODEPS
      ====================================================== */}

      <div className="site-container relative z-10">
        <div
          data-cepodeps
          className="relative overflow-hidden bg-[#102e25] text-[#f5f2e9]"
        >
          {/* BACKGROUND ATMOSPHERE */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-[15%] -top-[40%] h-[500px] w-[500px] rounded-full bg-[#c6a15b]/10 blur-[140px]" />

            <div className="absolute -bottom-[60%] left-[15%] h-[500px] w-[500px] rounded-full bg-[#1d5a48]/35 blur-[150px]" />

            <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />

            <div
              aria-hidden="true"
              className="absolute -right-5 bottom-[-0.2em] select-none font-display text-[clamp(8rem,22vw,22rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.02]"
            >
              CPDPS
            </div>
          </div>

          <div className="relative grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT */}

            <div className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14 xl:p-16">
              <div className="mb-10 flex h-[100px] w-[130px] items-center justify-center rounded-sm border border-white/15 bg-white/[0.05] p-4 sm:h-[115px] sm:w-[150px]">
                <img
                  src="/images/brand/cepodeps-logo.png"
                  alt="Centre for Policy Development and Political Studies logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#dfc27b]">
                Behind LASMAYA
              </p>

              <h3 className="max-w-[460px] font-display text-[clamp(2.8rem,4.5vw,5rem)] font-bold leading-[0.96] tracking-[-0.045em] text-white">
                The organisation
                <br />
                behind the award.
              </h3>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-[7px] w-[7px] rounded-full bg-[#dfc27b]" />

                <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/75">
                  Organising LASMAYA since 2008
                </span>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative p-7 sm:p-10 lg:p-14 xl:p-16">
              <div className="mb-8 flex items-center gap-4">
                <Landmark
                  size={19}
                  strokeWidth={1.6}
                  className="text-[#dfc27b]"
                />

                <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#dfc27b]">
                  CEPODEPS
                </p>
              </div>

              <h4 className="max-w-[760px] font-display text-[clamp(2.2rem,3.6vw,4.1rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white">
                Centre for Policy Development
                <br className="hidden sm:block" /> and Political Studies
              </h4>

              <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-[#dfc27b]/80 via-white/15 to-transparent" />

              <p className="mt-8 max-w-[780px] text-[1rem] font-medium leading-[1.85] text-white/85 sm:text-[1.06rem]">
                The Centre for Policy Development and Political
                Studies — CEPODEPS — was created to develop human
                capacity for policymaking and political development
                while stimulating leadership skills.
              </p>

              <p className="mt-6 max-w-[780px] text-[0.96rem] font-medium leading-[1.85] text-white/75 sm:text-[1rem]">
                The organisation also seeks to encourage fair
                competition through the implementation of social
                policies and strategies, while working in cooperation
                with academics and researchers who contribute to its
                projects.
              </p>

              <p className="mt-6 max-w-[780px] text-[0.96rem] font-medium leading-[1.85] text-white/75 sm:text-[1rem]">
                Within this broader purpose, CEPODEPS has organised
                the Lagos State Man of the Year Award since 2008,
                providing the institutional platform behind
                LASMAYA&apos;s recognition journey.
              </p>

              <div className="mt-10 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-2">
                {[
                  "Human capacity development",
                  "Policy and political development",
                  "Leadership development",
                  "Academic and research cooperation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#dfc27b]/40">
                      <Check
                        size={12}
                        className="text-[#dfc27b]"
                      />
                    </span>

                    <p className="text-[0.88rem] font-medium leading-6 text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          RECOGNITION PROCESS
      ====================================================== */}

      <div
        data-process
        className="site-container relative z-10 py-24 sm:py-32 lg:py-40"
      >
        <div className="mb-14  sm:mb-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <p className="text-[1rem] font-bold uppercase tracking-[0.23em] text-[#806128]">
                The Recognition Journey
              </p>
            </div>

          </div>

          <p className="max-w-[540px] text-[0.96rem] font-medium leading-[1.85] text-[#35473f] sm:text-[1rem] lg:ml-auto">
            LASMAYA combines a process of consideration and
            assessment with public participation before the eventual
            result and recognition of an Awardee.
          </p>
        </div>

        {/* PROCESS CARDS */}

        <div className="grid border-t border-[#102e25]/15 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                data-process-card
                className={`
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-[#102e25]/15
                  px-0
                  py-10
                  md:px-7
                  lg:border-b-0
                  lg:px-8
                  lg:py-12
                  ${
                    index !== 0
                      ? "md:border-l md:border-[#102e25]/15"
                      : ""
                  }
                `}
              >
                <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#102e25] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100" />

                <span className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#a9833f] via-[#d7b66b] to-transparent transition-transform duration-700 group-hover:scale-x-100" />

                <div className="relative z-10">
                  <div className="mb-14 flex items-center justify-between">
                    <span className="text-[0.68rem] font-bold tracking-[0.18em] text-[#9b7839] transition-colors duration-500 group-hover:text-[#dfc27b]">
                      {item.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#102e25]/20 text-[#102e25]/70 transition-all duration-500 group-hover:border-[#dfc27b]/40 group-hover:text-[#dfc27b]">
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>

                  <h4 className="font-display text-[2.5rem] font-semibold leading-none tracking-[-0.04em] text-[#102e25] transition-colors duration-500 group-hover:text-[#f5f2e9] sm:text-[2.8rem]">
                    {item.title}
                  </h4>

                  <p className="mt-5 max-w-[330px] text-[0.9rem] font-medium leading-[1.75] text-[#35473f] transition-colors duration-500 group-hover:text-white/80">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            2026 NOTE
        ================================================== */}

        <div className="mt-12 grid gap-8 border border-[#a9833f]/30 bg-[#a9833f]/[0.045] p-7 sm:p-9 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12">
          <div>
            <p className="font-display text-[3.8rem] font-bold leading-none tracking-[-0.055em] text-[#9b7839] sm:text-[4.5rem]">
              2026
            </p>

            <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#806128]">
              14th Edition
            </p>
          </div>

          <div className="border-t border-[#102e25]/15 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="max-w-[880px] text-[0.96rem] font-medium leading-[1.85] text-[#35473f] sm:text-[1rem]">
              For the 2026 edition, ten nominees were presented.
              The published LASMAYA material states that public
              participation was conducted through SMS voting for
              seven days, from{" "}
              <strong className="font-bold text-[#102e25]">
                Monday, 20 July to Sunday, 26 July 2026
              </strong>
              , before the announcement and publication of the
              result.
            </p>
          </div>
        </div>

        <p className="mt-5 max-w-[920px] text-[0.82rem] font-medium leading-[1.75] text-[#35473f]/80">
          The 2026 voting period above describes that edition&apos;s
          public participation stage and should not be read as a
          complete description of every LASMAYA edition since 2008.
        </p>
      </div>

      {/* =====================================================
          EDITION META
      ====================================================== */}

      <div className="site-container relative z-10">
        <div
          data-about-meta-wrapper
          className="border-y border-[#102e25]/15"
        >
          <div className="grid grid-cols-3">
            <div
              data-about-meta
              className="group relative overflow-hidden border-r border-[#102e25]/12 py-8 pr-3 sm:py-10 sm:pr-6"
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#102e25]/[0.035] transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative">
                <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#102e25]/70">
                  Edition
                </p>

                <p className="font-display text-[2rem] font-bold tracking-[-0.03em] text-[#102e25] sm:text-[2.8rem]">
                  14th
                </p>
              </div>
            </div>

            <div
              data-about-meta
              className="group relative overflow-hidden border-r border-[#102e25]/12 px-3 py-8 sm:px-8 sm:py-10"
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#102e25]/[0.035] transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative">
                <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#102e25]/70">
                  Celebrating
                </p>

                <p className="font-display text-[2rem] font-bold tracking-[-0.03em] text-[#102e25] sm:text-[2.8rem]">
                  Lagos
                </p>
              </div>
            </div>

            <div
              data-about-meta
              className="group relative overflow-hidden py-8 pl-3 sm:py-10 sm:pl-8"
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#a9833f]/[0.05] transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative">
                <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#102e25]/70">
                  Current
                </p>

                <p className="font-display text-[2rem] font-bold tracking-[-0.03em] text-[#9b7839] sm:text-[2.8rem]">
                  2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        data-principles
        className="relative z-10 mt-10 sm:mt-32 lg:mt-40"
      >
        <div
          data-big-word
          aria-hidden="true"
          className="pointer-events-none absolute -top-[0.12em] right-[-0.08em] select-none whitespace-nowrap font-display text-[clamp(8rem,23vw,25rem)] font-semibold leading-none tracking-[-0.08em] text-[#102e25]/[0.018]"
        >
          IMPACT
        </div>

      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ====================================================== */}

      <div className="relative z-10 pb-4">
        <div className="site-container">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#a9833f]/40 to-transparent" />
        </div>

        <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[320px] w-[70%] -translate-x-1/2 rounded-full bg-[#123f32]/[0.04] blur-[120px]" />
      </div>
    </section>
  );
}