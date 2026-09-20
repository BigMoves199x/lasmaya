"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Check,
  Landmark,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   CRITERIA
========================================================= */

const criteria = [
  {
    number: "01",
    title: "Leadership",
    text: "Leadership qualities, responsibility, influence and meaningful contribution form part of the considerations surrounding LASMAYA recognition.",
  },
  {
    number: "02",
    title: "Integrity",
    text: "Integrity, honour and strong moral standards are central to the kind of role models LASMAYA seeks to recognise and project.",
  },
  {
    number: "03",
    title: "Achievement",
    text: "Personal and professional achievements help distinguish individuals whose work has created meaningful impact.",
  },
  {
    number: "04",
    title: "Service",
    text: "Meaningful service and contribution to Lagos, society and humanity remain important elements of recognition.",
  },
  {
    number: "05",
    title: "Public Participation",
    text: "Public participation forms an important part of the process through which the eventual Awardee emerges.",
  },
];

/* =========================================================
   SELECTED MILESTONES
========================================================= */

const milestones = [
  {
    year: "2008",
    label: "The Beginning",
    text: "LASMAYA began its continuing journey as a platform created to recognise excellence and project genuine role models in Lagos State.",
  },
  {
    year: "2009",
    label: "Recognition Continues",
    text: "Princess Victoria Adejoke Orelope-Adefulire is documented as the 2009 recipient of the Lagos State Man of the Year Award.",
  },
  {
    year: "2013",
    label: "Public Service",
    text: "Obafemi Hamzat received the Lagos State Man of the Year recognition in 2013.",
  },
  {
    year: "2014",
    label: "Exemplary Service",
    text: "George Noah emerged as the 2014 recipient after the public participation process.",
  },
  {
    year: "2017",
    label: "Recognition & Achievement",
    text: "Dr. Adebola Ismail Akindele emerged as a recipient of the Lagos State Man of the Year Award in 2017.",
  },
  {
    year: "2018",
    label: "A Continuing Legacy",
    text: "Dr. Abdul-Hakeem Abdul-Lateef emerged as the 2018 recipient as LASMAYA continued its recognition journey.",
  },
  {
    year: "2021",
    label: "Recognition Continues",
    text: "Dr. Aderemi Emmanuel Awode received LASMAYA recognition following the edition's nomination, assessment and public participation process.",
  },
  {
    year: "2025",
    label: "Another Chapter",
    text: "Chief Habeeb Olalekan Okunola emerged as the 2025 Awardee following the edition's public participation process.",
  },
  {
    year: "2026",
    label: "14th Edition",
    text: "Engr. Abdulhafis Gbolahan Toriola, FNSE, emerged as the 2026 Awardee after receiving 3,850 votes.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function DiscoverLasmayaPage() {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
      /* HERO */

      gsap.from("[data-hero-reveal]", {
        yPercent: 105,
        opacity: 0,
        stagger: 0.1,
        duration: 1.15,
        ease: "power4.out",
      });

      gsap.from("[data-hero-copy]", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      /* GENERAL REVEALS */

      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
            },
            y: 45,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          });
        });

      /* CRITERIA */

      gsap.from("[data-criteria-card]", {
        scrollTrigger: {
          trigger: "[data-criteria-grid]",
          start: "top 82%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: "power3.out",
      });

      /* MILESTONES */

      gsap.from("[data-milestone]", {
        scrollTrigger: {
          trigger: "[data-timeline]",
          start: "top 82%",
        },
        y: 45,
        opacity: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: "power3.out",
      });

      /* HISTORY WORD */

      gsap.to("[data-history-word]", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-history-section]",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#f5f2e9]"
    >
 

      <section className="relative text-[#102e25]">
        <div className="site-container py-24 sm:py-32 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[.34fr_1fr] lg:gap-20">
            {/* LEFT */}

            <div data-reveal>
              <p className="mt-3 text-[1rem] font-bold uppercase tracking-[0.18em] text-[#102e25]/35">
                The LASMAYA Journey
              </p>
            </div>

            {/* RIGHT */}

            <div data-reveal>
              <p className="max-w-[1050px] font-display text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[1] tracking-[-0.05em]">
                Created to identify,
                <br />
                recognise and{" "}
                <span className="text-[#9b7839]">
                  project genuine role models.
                </span>
              </p>

              <div className="mt-12 grid gap-8 border-t border-[#102e25]/10 pt-10 md:grid-cols-2 md:gap-14">
                <p className="text-[0.9rem] leading-[1.9] text-[#26352f]/65">
                  LASMAYA was conceptualised as a credible
                  programme for paying tribute to excellence and as
                  an award platform for identifying, recognising
                  and projecting genuine role models in Lagos State,
                  the Centre of Excellence.
                </p>

                <p className="text-[0.9rem] leading-[1.9] text-[#26352f]/65">
                  Since 2008, the award has continued to bring
                  individuals from different professional and civic
                  backgrounds into a process centred on
                  recognition, contribution, leadership and public
                  participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#102e25] text-[#f5f2e9]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-20%] top-[-30%] h-[700px] w-[700px] rounded-full bg-[#c6a15b]/10 blur-[170px]" />

          <span
            aria-hidden="true"
            className="absolute -bottom-[0.2em] left-[-0.04em] font-display text-[clamp(10rem,26vw,28rem)] font-semibold leading-none tracking-[-0.09em] text-white/[0.025]"
          >
            ROLE
          </span>
        </div>

        <div className="site-container relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-[.42fr_1fr] lg:gap-24">
            {/* LEFT */}

            <div data-reveal>
              <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#dfc27b]">
                The Purpose
              </p>

              <h2 className="mt-7 font-display text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                Recognition
                <br />
                with a
                <br />
                <span className="text-[#dfc27b]">
                  purpose.
                </span>
              </h2>
            </div>

            {/* RIGHT */}

            <div data-reveal>
              <p className="max-w-[900px] font-display text-[clamp(2rem,3.8vw,4rem)] leading-[1.08] tracking-[-0.04em] text-white/90">
                LASMAYA exists not simply to present an award, but
                to identify and project people whose work can stand
                as examples of excellence, service and leadership.
              </p>

              <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2">
                <p className="text-[0.86rem] leading-[1.9] text-white/50">
                  The platform is designed around the idea that
                  achievement and meaningful contribution deserve
                  recognition, while genuine role models should be
                  brought into wider public view.
                </p>

                <p className="text-[0.86rem] leading-[1.9] text-white/50">
                  Each edition introduces a field of nominees before
                  public participation contributes to determining
                  the eventual LASMAYA Awardee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CEPODEPS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#ebe6da] text-[#102e25]">
        <div className="site-container py-24 sm:py-32 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[.4fr_1fr] lg:gap-24">
            {/* LEFT */}

            <div data-reveal>
              <div className="flex items-center gap-4">

                <p className="text-[1rem] font-bold uppercase tracking-[0.24em] text-[#8d6c32]">
                  Behind LASMAYA
                </p>
              </div>

              <div className="mt-9 flex h-[100px] w-[150px] items-center justify-center bg-white/40 p-4">
                <img
                  src="/images/brand/cepodeps-logo.png"
                  alt="CEPODEPS"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <p className="mt-6 text-[0.52rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/35">
                Organising LASMAYA since 2008
              </p>
            </div>

            {/* RIGHT */}

            <div data-reveal>
              <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
                Centre for Policy Development and Political Studies
              </p>

              <h2 className="mt-7 max-w-[950px] font-display text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.055em]">
                The organisation
                <br />
                <span className="text-[#9b7839]">
                  behind the award.
                </span>
              </h2>

              <p className="mt-10 max-w-[820px] text-[0.94rem] leading-[1.95] text-[#26352f]/65">
                The Centre for Policy Development and Political
                Studies — CEPODEPS — was created to develop human
                capacity for policy making and political
                development. The Centre works to stimulate
                leadership skills and has organised LASMAYA since
                2008 as part of its continuing programmes and
                initiatives.
              </p>

              <div className="mt-12 grid gap-x-12 gap-y-7 border-t border-[#102e25]/10 pt-10 sm:grid-cols-2">
                {[
                  "Human capacity development",
                  "Policy making and political development",
                  "Leadership skills development",
                  "Academic and research cooperation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#a9833f]/40">
                      <Check
                        size={10}
                        className="text-[#9b7839]"
                      />
                    </span>

                    <p className="text-[0.78rem] font-medium leading-6 text-[#26352f]/65">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-10 max-w-[760px] text-[0.78rem] leading-[1.85] text-[#26352f]/50">
                CEPODEPS also works with academics and researchers
                from academia whose expertise contributes to its
                projects and programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW RECOGNITION WORKS
      ===================================================== */}

      <section className="bg-[#f5f2e9] text-[#102e25]">
        <div className="site-container py-24 sm:py-32 lg:py-40">
          <div
            data-reveal
            className="grid gap-12 lg:grid-cols-[1fr_.65fr] lg:items-end"
          >
            <div>
              <p className="mb-6 text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
                The LASMAYA Process
              </p>

              <h2 className="font-display text-[clamp(3.4rem,7vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.055em]">
                From consideration
                <br />
                <span className="text-[#9b7839]">
                  to recognition.
                </span>
              </h2>
            </div>

            <p className="max-w-[480px] text-[0.86rem] leading-[1.9] text-[#26352f]/60">
              LASMAYA combines consideration and assessment with
              public participation before the eventual result and
              recognition of an Awardee.
            </p>
          </div>


          <div
            data-reveal
            className="mt-16 border-l-2 border-[#a9833f] bg-[#ebe6da] px-7 py-8 sm:px-10 sm:py-10"
          >
            <div className="grid gap-7 lg:grid-cols-[.25fr_1fr] lg:gap-12">

              <div>
                <p className="max-w-[850px] text-[0.86rem] leading-[1.9] text-[#26352f]/65">
                  For the 2026 edition, ten distinguished nominees
                  were presented. Public participation was conducted
                  through SMS voting for seven days, from Monday,
                  20 July to Sunday, 26 July 2026, before the result
                  was announced and published.
                </p>

                <p className="mt-4 max-w-[850px] text-[0.7rem] leading-[1.75] text-[#26352f]/40">
                  This describes the published process for the 2026
                  edition and should not be read as a claim that
                  every historical LASMAYA edition followed exactly
                  the same voting format or schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-history-section
        className="relative overflow-hidden bg-[#f5f2e9] text-[#102e25]"
      >
        <div
          data-history-word
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-10 whitespace-nowrap font-display text-[clamp(10rem,25vw,27rem)] font-semibold leading-none tracking-[-0.09em] text-[#102e25]/[0.025]"
        >
          EVOLUTION
        </div>

        <div className="site-container relative z-10 py-24 sm:py-32 lg:py-40">
          <div data-reveal>
            <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
              The LASMAYA Journey
            </p>

            <h2 className="mt-7 max-w-[1050px] font-display text-[clamp(3.5rem,7vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.055em]">
              Recognising excellence
              <br />
              and projecting{" "}
              <span className="text-[#9b7839]">
                role models.
              </span>
            </h2>

            <p className="mt-10 max-w-[700px] text-[0.88rem] leading-[1.9] text-[#26352f]/60">
              Since 2008, LASMAYA has continued its journey of
              recognising individuals from different areas of Lagos
              life. Each edition contributes another chapter to the
              award&apos;s continuing record of recognition.
            </p>
          </div>

          {/* TIMELINE */}

          <div
            data-timeline
            className="relative mt-20 lg:mt-28"
          >
            <div className="absolute bottom-0 left-[5px] top-0 w-px bg-[#102e25]/10 lg:left-[170px]" />

            {milestones.map((milestone) => (
              <article
                key={`${milestone.year}-${milestone.label}`}
                data-milestone
                className="relative grid gap-6 border-t border-[#102e25]/10 py-10 pl-9 lg:grid-cols-[170px_.65fr_1fr] lg:gap-12 lg:py-12 lg:pl-0"
              >
                <span className="absolute left-[2px] top-[3.15rem] h-[7px] w-[7px] rounded-full bg-[#a9833f] ring-[6px] ring-[#f5f2e9] lg:left-[167px]" />

                <p className="font-display text-[2.5rem] tracking-[-0.04em] text-[#9b7839]">
                  {milestone.year}
                </p>

                <h3 className="font-display text-[2rem] leading-none tracking-[-0.035em]">
                  {milestone.label}
                </h3>

                <p className="max-w-[580px] text-[0.8rem] leading-7 text-[#26352f]/55">
                  {milestone.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-[700px] text-[0.65rem] leading-6 text-[#26352f]/40">
            This timeline presents selected milestones in the
            continuing LASMAYA story rather than claiming to be a
            complete year-by-year record of every edition.
          </p>
        </div>
      </section>

      {/* =====================================================
          2026
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#102e25] text-[#f5f2e9]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-15%] top-[-30%] h-[650px] w-[650px] rounded-full bg-[#c6a15b]/10 blur-[160px]" />
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.25em] right-[-0.04em] font-display text-[clamp(15rem,35vw,36rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.025]"
        >
          14
        </span>

        <div className="site-container relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-[.35fr_1fr] lg:gap-24">
            {/* EDITION */}

            <div data-reveal>
              <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#dfc27b]">
                Current Edition
              </p>

              <p className="mt-8 font-display text-[6rem] font-semibold leading-none tracking-[-0.07em]">
                14
              </p>

              <p className="mt-2 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/30">
                14th Edition · 2026
              </p>
            </div>

            {/* CONTENT */}

            <div data-reveal>
              <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#dfc27b]">
                2026 Awardee
              </p>

              <h2 className="mt-6 font-display text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.055em]">
                Engr. Abdulhafis
                <br />
                <span className="text-[#dfc27b]">
                  Gbolahan Toriola.
                </span>
              </h2>

              <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/40">
                FNSE
              </p>

              <p className="mt-10 max-w-[760px] text-[0.92rem] leading-[1.9] text-white/55">
                Engr. Abdulhafis Gbolahan Toriola, FNSE, emerged as
                the 2026 LASMAYA Awardee after receiving 3,850 votes
                in the public participation process.
              </p>

              <p className="mt-6 max-w-[760px] text-[0.82rem] leading-[1.85] text-white/40">
                His recognition forms the latest chapter in a
                LASMAYA journey that began in 2008 and continues to
                identify, recognise and project role models in
                Lagos State.
              </p>

              <Link
                href="/editions/2026"
                className="group mt-10 inline-flex items-center gap-5"
              >
                <span className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-[#dfc27b]">
                  Explore 2026
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfc27b]/35 transition-all duration-500 group-hover:bg-[#dfc27b] group-hover:text-[#102e25]">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="bg-[#f5f2e9] text-[#102e25]">
        <div className="site-container py-24 text-center sm:py-32 lg:py-40">
          <div
            data-reveal
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#a9833f]/35"
          >
            <Award
              size={19}
              strokeWidth={1.2}
              className="text-[#9b7839]"
            />
          </div>

          <p className="mt-8 text-[1rem] font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
            The LASMAYA Purpose
          </p>

          <p
            data-reveal
            className="mx-auto mt-8 max-w-[650px] text-[0.88rem] leading-[1.9] text-[#26352f]/55"
          >
            Identifying, recognising and projecting genuine role
            models whose achievements, leadership and service
            contribute to the continuing story of Lagos State.
          </p>

          <div
            data-reveal
            className="mt-12 flex flex-wrap items-center justify-center gap-8"
          >
            <Link
              href="/winners"
              className="group inline-flex items-center gap-4"
            >
              <Landmark
                size={14}
                className="text-[#9b7839]"
              />

              <span className="text-[0.54rem] font-bold uppercase tracking-[0.21em]">
                Explore Awardees
              </span>

              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <span className="h-4 w-px bg-[#102e25]/15" />

            <Link
              href="/community"
              className="group inline-flex items-center gap-4"
            >
              <Users
                size={14}
                className="text-[#9b7839]"
              />

              <span className="text-[0.54rem] font-bold uppercase tracking-[0.21em]">
                Join the Conversation
              </span>

              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}