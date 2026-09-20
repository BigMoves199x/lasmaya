"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  MessageSquareText,
  Trophy,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    number: "01",
    icon: Users,
    title: "Selection",
    text:
      "Ten nominees formed the field for the 14th Edition of the Lagos State Man of the Year Award.",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "Public Voting",
    text:
      "Public voting was conducted through SMS from 20–26 July 2026, giving the public a direct role in the process.",
  },
  {
    number: "03",
    icon: Check,
    title: "Results",
    text:
      "At the close of voting, the reported results placed Engr. Abdulhafis Gbolahan Toriola at the top of the 10-person field with 3,850 votes.",
  },
  {
    number: "04",
    icon: Trophy,
    title: "2026 Awardee",
    text:
      "Engr. Abdulhafis Gbolahan Toriola, FNSE, was subsequently recognised as the Lagos State Man of the Year 2026.",
  },
];

export default function AwardJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const context = gsap.context(() => {
      gsap.from("[data-journey-label]", {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from("[data-journey-heading] .journey-line", {
        scrollTrigger: {
          trigger: "[data-journey-heading]",
          start: "top 82%",
        },
        yPercent: 110,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from("[data-journey-intro]", {
        scrollTrigger: {
          trigger: "[data-journey-intro]",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from("[data-journey-card]", {
        scrollTrigger: {
          trigger: "[data-journey-cards]",
          start: "top 78%",
        },
        y: 55,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from("[data-ten]", {
        scrollTrigger: {
          trigger: "[data-ten]",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
        yPercent: 12,
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="award-journey"
      className="relative overflow-hidden bg-[#f5f2e9] text-[#102e25]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[15%] top-[10%] h-[650px] w-[650px] rounded-full bg-[#123f32]/[0.04] blur-[150px]" />

        <div className="absolute -right-[15%] bottom-[5%] h-[550px] w-[550px] rounded-full bg-[#b8924d]/[0.05] blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(16,46,37,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(16,46,37,.7)_1px,transparent_1px)] [background-size:100px_100px]" />
      </div>

      {/* =====================================================
          TOP DIVIDER
      ===================================================== */}

      <div className="site-container relative z-10">
        <div className="h-px w-full bg-[#102e25]/10" />
      </div>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <div className="site-container relative z-10 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-40">
        <div
          data-journey-label
          className="mb-12 flex items-center justify-between gap-8 lg:mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#a9833f]" />

            <p className="text-[0.56rem] font-bold uppercase tracking-[0.28em] text-[#8d6c32]">
              The 2026 Journey
            </p>
          </div>

          <p className="hidden text-[0.52rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/30 sm:block">
            Lagos · 14th Edition
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-20">
          <div
            data-journey-heading
            className="font-display text-[clamp(3.7rem,8vw,8.8rem)] font-medium leading-[0.82] tracking-[-0.06em]"
          >
            <div className="overflow-hidden">
              <span className="journey-line block">
                Ten nominees.
              </span>
            </div>

            <div className="overflow-hidden">
              <span className="journey-line block text-[#102e25]/30">
                One 2026
              </span>
            </div>

            <div className="overflow-hidden">
              <span className="journey-line block text-[#9b7839]">
                Awardee.
              </span>
            </div>
          </div>

          <div data-journey-intro className="lg:pb-2">
            <div className="mb-7 h-px w-full bg-gradient-to-r from-[#a9833f]/80 via-[#102e25]/15 to-transparent" />

            <p className="max-w-[480px] text-[0.95rem] leading-[1.85] text-[#26352f]/70">
              The 14th Edition brought together ten nominees from public
              service, business, engineering, medicine and other areas of
              professional life, before public SMS voting determined the
              leading nominee.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
              <div>
                <p className="text-[0.46rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/35">
                  Voting
                </p>

                <p className="mt-1 font-display text-lg text-[#102e25]">
                  20–26 July
                </p>
              </div>

              <div className="hidden w-px bg-[#102e25]/10 sm:block" />

              <div>
                <p className="text-[0.46rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/35">
                  Edition
                </p>

                <p className="mt-1 font-display text-lg text-[#102e25]">
                  14th · 2026
                </p>
              </div>
            </div>

            <Link
              href="/editions/2026"
              className="group mt-8 inline-flex items-center gap-3"
            >
              <span className="relative text-[0.57rem] font-bold uppercase tracking-[0.2em] text-[#102e25] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#a9833f] after:transition-transform after:duration-500 group-hover:text-[#8d6c32] group-hover:after:scale-x-100">
                Explore the Edition
              </span>

              <ArrowUpRight
                size={13}
                className="text-[#8d6c32] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          LARGE 10 BAND
      ===================================================== */}

      <div className="relative z-10 overflow-hidden border-y border-[#102e25]/10">
        <div className="site-container">
          <div className="grid min-h-[300px] items-center gap-8 py-12 md:grid-cols-[.8fr_1.2fr] lg:min-h-[390px]">
            <div className="relative overflow-hidden">
              <div
                data-ten
                className="font-display text-[clamp(10rem,25vw,24rem)] font-semibold leading-[0.7] tracking-[-0.1em] text-[#102e25]"
              >
                10
              </div>
            </div>

            <div className="relative md:border-l md:border-[#102e25]/10 md:pl-12 lg:pl-20">
              <p className="mb-5 text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
                2026 Nominee Field
              </p>

              <h3 className="max-w-[650px] font-display text-[clamp(2.3rem,4.5vw,5rem)] font-medium leading-[0.95] tracking-[-0.045em]">
                Ten individual journeys.
                <br />
                <span className="text-[#102e25]/35">
                  One field of recognition.
                </span>
              </h3>

              <p className="mt-7 max-w-[550px] text-[0.78rem] leading-6 text-[#26352f]/50">
                The nominee field reflected a range of professional
                backgrounds across Lagos, from public administration and
                community service to business, engineering and healthcare.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#a9833f]" />

                <span className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#102e25]/40">
                  14th Edition · 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          JOURNEY STEPS
      ===================================================== */}

      <div className="site-container relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="mb-14 flex items-end justify-between gap-8 sm:mb-20">
          <div>
            <p className="mb-4 text-[0.54rem] font-bold uppercase tracking-[0.26em] text-[#8d6c32]">
              From Selection to Recognition
            </p>

            <h3 className="font-display text-[clamp(2.8rem,5vw,5.3rem)] font-medium leading-[0.9] tracking-[-0.045em]">
              The award
              <br />
              <span className="text-[#102e25]/30">
                journey.
              </span>
            </h3>
          </div>

          <p className="hidden max-w-[300px] text-right text-[0.68rem] leading-5 text-[#26352f]/45 md:block">
            Selection, public participation, results and recognition shaped
            the 2026 process.
          </p>
        </div>

        <div
          data-journey-cards
          className="grid border-t border-[#102e25]/10 md:grid-cols-2 xl:grid-cols-4"
        >
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                data-journey-card
                className={`
                  group
                  relative
                  min-h-[340px]
                  overflow-hidden
                  border-b
                  border-[#102e25]/10
                  px-0
                  py-9
                  md:min-h-[380px]
                  md:px-8
                  xl:min-h-[420px]
                  xl:border-b-0
                  ${
                    index % 2 !== 0
                      ? "md:border-l md:border-[#102e25]/10"
                      : ""
                  }
                  ${
                    index > 0
                      ? "xl:border-l xl:border-[#102e25]/10"
                      : ""
                  }
                `}
              >
                <div className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[#102e25] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100" />

                <span className="absolute left-0 top-0 z-10 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#a9833f] via-[#d7b66b] to-transparent transition-transform duration-700 group-hover:scale-x-100" />

                <div className="pointer-events-none absolute -bottom-[40%] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#c6a15b]/0 blur-[100px] transition-all duration-700 group-hover:bg-[#c6a15b]/10" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.5rem] font-bold tracking-[0.2em] text-[#8d6c32] transition-colors duration-500 group-hover:text-[#dfc27b]">
                      {item.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#102e25]/15 text-[#102e25]/50 transition-all duration-500 group-hover:border-[#dfc27b]/40 group-hover:text-[#dfc27b]">
                      <Icon size={15} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="mt-auto pt-20">
                    <h4 className="font-display text-[2.5rem] tracking-[-0.04em] text-[#102e25] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-[#f5f2e9]">
                      {item.title}
                    </h4>

                    <p className="mt-5 max-w-[290px] text-[0.7rem] leading-6 text-[#26352f]/55 transition-colors duration-500 group-hover:text-[#f5f2e9]/60">
                      {item.text}
                    </p>

                    <div className="mt-7 flex items-center gap-3 opacity-40 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
                      <span className="h-px w-7 bg-[#a9833f] transition-colors duration-500 group-hover:bg-[#dfc27b]" />

                      <ArrowUpRight
                        size={12}
                        className="text-[#8d6c32] transition-colors duration-500 group-hover:text-[#dfc27b]"
                      />
                    </div>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-[0.18em] -right-[0.02em] font-display text-[10rem] font-semibold leading-none tracking-[-0.08em] text-[#102e25]/[0.025] transition-colors duration-700 group-hover:text-white/[0.025]"
                >
                  {item.number}
                </span>
              </article>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          RESULT BAND
      ===================================================== */}

      <div className="relative z-10 bg-[#102e25] text-[#f5f2e9]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-10%] top-[-50%] h-[500px] w-[500px] rounded-full bg-[#c6a15b]/[0.07] blur-[130px]" />

          <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="site-container relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.34fr_1fr_auto] lg:items-center">
            <div>
              <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#dfc27b]">
                The Result
              </p>

              <p className="mt-3 text-[0.55rem] uppercase tracking-[0.16em] text-white/30">
                3,850 votes
              </p>
            </div>

            <div>
              <p className="mb-3 text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-white/35">
                Lagos State Man of the Year · 2026
              </p>

              <h3 className="font-display text-[clamp(2.2rem,4vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                Engr. Abdulhafis
                <br className="sm:hidden" /> Gbolahan Toriola
              </h3>

              <p className="mt-3 text-[0.55rem] font-bold uppercase tracking-[0.22em] text-[#dfc27b]">
                FNSE · Permanent Secretary · Ministry of Housing
              </p>
            </div>

            <Link
              href="/editions/2026"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#c6a15b]/45 text-[#dfc27b] transition-all duration-500 hover:border-[#dfc27b] hover:bg-[#dfc27b] hover:text-[#102e25] sm:h-14 sm:w-14"
              aria-label="View the 2026 edition"
            >
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}