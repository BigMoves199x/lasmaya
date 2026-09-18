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

const criteria = [
  {
    number: "01",
    title: "Leadership",
    text: "Exemplary leadership qualities demonstrated through responsibility, influence and contribution.",
  },
  {
    number: "02",
    title: "Integrity",
    text: "Consistent moral standards and integrity form part of the considerations reported in the selection process.",
  },
  {
    number: "03",
    title: "Achievement",
    text: "Outstanding personal and professional achievements help distinguish prospective nominees.",
  },
  {
    number: "04",
    title: "Service",
    text: "The process considers meaningful and selfless service to Lagos, society and humanity.",
  },
  {
    number: "05",
    title: "Public Opinion",
    text: "Public participation has remained an important part of determining the eventual honouree.",
  },
];

const milestones = [
  {
    year: "2008",
    label: "The Beginning",
    text: "Published accounts trace the Lagos State Man of the Year Award to 2008.",
  },
  {
    year: "2009",
    label: "Recognition Across Gender",
    text: "Princess Victoria Adejoke Orelope-Adefulire is documented as the 2009 recipient, demonstrating early in the award's history that gender was not a barrier to recognition.",
  },
  {
    year: "2013",
    label: "Public Service & Innovation",
    text: "Obafemi Hamzat received the Lagos State Man of the Year recognition in 2013.",
  },
  {
    year: "2014",
    label: "Exemplary Service",
    text: "George Noah emerged as the 2014 recipient after polling the highest number of votes.",
  },
  {
    year: "2017",
    label: "Seventh Edition",
    text: "Dr. Adebola Ismail Akindele emerged as the 2017 Man of the Year at the seventh edition of the conferment.",
  },
  {
    year: "2018",
    label: "Tenth Edition",
    text: "Dr. Abdul-Hakeem Abdul-Lateef emerged as the 2018 recipient. Contemporary reporting identified the ceremony as LASMAYA's 10th edition.",
  },
  {
    year: "2021",
    label: "Recognition Continues",
    text: "Dr. Aderemi Emmanuel Awode was honoured following nomination, assessment and public participation.",
  },
  {
    year: "2025",
    label: "A New Chapter",
    text: "Chief Habeeb Olalekan Okunola emerged with 6,926 votes from 16,940 valid votes reported in the 2025 process.",
  },
  {
    year: "2026",
    label: "14th Edition",
    text: "Engr. Abdulhafis Gbolahan Toriola, FNSE, emerged as the 2026 honouree after receiving 3,850 votes.",
  },
];

export default function DiscoverLasmayaPage() {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
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

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
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
    <main ref={pageRef} className="overflow-hidden bg-[#f5f2e9]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#090b0a] text-[#f5f2e9]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[10%] top-[-20%] h-[800px] w-[800px] rounded-full bg-[#174c3d]/25 blur-[180px]" />

          <div className="absolute bottom-[-30%] left-[-10%] h-[650px] w-[650px] rounded-full bg-[#c6a15b]/10 blur-[170px]" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:100px_100px]" />
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.2em] right-[-0.04em] select-none font-display text-[clamp(12rem,32vw,34rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.025]"
        >
          08
        </span>

        <div className="site-container relative z-10 pb-16 pt-40 sm:pb-20 lg:pb-24 lg:pt-52">
          <div className="mb-14 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c6a15b]" />

            <p className="text-[0.55rem] font-bold uppercase tracking-[0.28em] text-[#dfc27b]">
              Discover LASMAYA
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-20">
            <div className="font-display text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.79] tracking-[-0.065em]">
              <div className="overflow-hidden">
                <span data-hero-reveal className="block">
                  A story of
                </span>
              </div>

              <div className="overflow-hidden">
                <span
                  data-hero-reveal
                  className="block text-white/25"
                >
                  recognition.
                </span>
              </div>

              <div className="overflow-hidden">
                <span
                  data-hero-reveal
                  className="block text-[#dfc27b]"
                >
                  Since 2008.
                </span>
              </div>
            </div>

            <div data-hero-copy className="lg:pb-3">
              <div className="mb-7 h-px bg-gradient-to-r from-[#c6a15b] via-white/15 to-transparent" />

              <p className="max-w-[470px] text-[1rem] leading-[1.85] text-white/60">
                The Lagos State Man of the Year Award is a platform created
                to identify, recognise and celebrate individuals whose
                achievements, leadership, integrity and service distinguish
                them within the Lagos community.
              </p>

              <div className="mt-9 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#dfc27b]">
                  <ArrowDown size={13} />
                </span>

                <span className="text-[0.5rem] font-bold uppercase tracking-[0.2em] text-white/30">
                  Explore the story
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ORIGIN
      ===================================================== */}

      <section className="relative text-[#102e25]">
        <div className="site-container py-24 sm:py-32 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[.34fr_1fr] lg:gap-20">
            <div data-reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#a9833f]" />

                <p className="text-[0.52rem] font-bold uppercase tracking-[0.24em] text-[#8d6c32]">
                  The Beginning
                </p>
              </div>

              <p className="mt-6 font-display text-5xl tracking-[-0.05em] text-[#9b7839]">
                2008
              </p>
            </div>

            <div data-reveal>
              <p className="max-w-[950px] font-display text-[clamp(2.4rem,5vw,5.5rem)] leading-[1] tracking-[-0.05em]">
                Created to pay tribute to{" "}
                <span className="text-[#102e25]/25">
                  excellence
                </span>{" "}
                and bring genuine role models into public view.
              </p>

              <div className="mt-12 grid gap-8 border-t border-[#102e25]/10 pt-10 md:grid-cols-2 md:gap-14">
                <p className="text-[0.9rem] leading-[1.9] text-[#26352f]/65">
                  Published accounts trace LASMAYA to 2008. The award was
                  conceptualised as a platform for identifying, recognising
                  and projecting role models whose achievements and service
                  contribute meaningfully to Lagos State.
                </p>

                <p className="text-[0.9rem] leading-[1.9] text-[#26352f]/65">
                  It is organised by the Centre for Policy Development and
                  Political Studies, commonly referred to as CEPODEPS or
                  CPDPS in published reports. Over successive editions, its
                  nominees have come from public service, business,
                  engineering, medicine and other areas of professional and
                  civic life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="relative bg-[#102e25] text-[#f5f2e9]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-20%] top-[-30%] h-[700px] w-[700px] rounded-full bg-[#c6a15b]/10 blur-[170px]" />
        </div>

        <div className="site-container relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-[.42fr_1fr] lg:gap-24">
            <div data-reveal>
              <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#dfc27b]">
                The Idea
              </p>

              <h2 className="mt-7 font-display text-[clamp(3rem,5vw,5.5rem)] leading-[0.92] tracking-[-0.05em]">
                Recognition
                <br />
                with a
                <br />
                <span className="text-[#dfc27b]">purpose.</span>
              </h2>
            </div>

            <div data-reveal>
              <p className="max-w-[850px] font-display text-[clamp(2rem,3.8vw,4rem)] leading-[1.08] tracking-[-0.04em] text-white/85">
                LASMAYA was designed around a simple proposition: achievement
                and service should be seen, acknowledged and preserved.
              </p>

              <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2">
                <p className="text-[0.86rem] leading-[1.9] text-white/50">
                  Rather than restricting recognition to one profession, the
                  platform has considered people working across different
                  sectors of Lagos. Published editions have featured
                  entrepreneurs, engineers, public servants, political
                  office-holders, medical professionals and corporate
                  leaders.
                </p>

                <p className="text-[0.86rem] leading-[1.9] text-white/50">
                  Nomination itself therefore represents a stage of
                  recognition. The final honouree emerges from a process that
                  has combined preliminary assessment with public
                  participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW RECOGNITION WORKS
      ===================================================== */}

      <section className="text-[#102e25]">
        <div className="site-container py-24 sm:py-32 lg:py-40">
          <div
            data-reveal
            className="grid gap-12 lg:grid-cols-[1fr_.65fr] lg:items-end"
          >
            <div>
              <p className="mb-6 text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
                The Selection Process
              </p>

              <h2 className="font-display text-[clamp(3.4rem,7vw,7.5rem)] leading-[0.86] tracking-[-0.055em]">
                How recognition
                <br />
                <span className="text-[#102e25]/25">
                  takes shape.
                </span>
              </h2>
            </div>

            <p className="max-w-[460px] text-[0.86rem] leading-[1.9] text-[#26352f]/60">
              Published accounts of LASMAYA describe a process that begins
              before public voting. Prospective nominees are assessed and a
              final nominee list is produced before the public participates
              in determining the eventual honouree.
            </p>
          </div>

          <div className="mt-16 grid border-t border-[#102e25]/10 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Study & Assessment",
                text: "Potential nominees are researched and assessed before the final nomination stage.",
              },
              {
                number: "02",
                title: "Nomination",
                text: "Individuals meeting the award's considerations are selected for the edition's nominee field.",
              },
              {
                number: "03",
                title: "Public Participation",
                text: "The public voting stage provides a direct role in determining who ultimately receives the honour.",
              },
            ].map((item, index) => (
              <article
                key={item.number}
                data-reveal
                className={`py-10 lg:px-9 lg:py-14 ${
                  index !== 0
                    ? "border-t border-[#102e25]/10 lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <span className="text-[0.5rem] font-bold tracking-[0.2em] text-[#9b7839]">
                  {item.number}
                </span>

                <h3 className="mt-16 font-display text-[2.5rem] tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[330px] text-[0.78rem] leading-6 text-[#26352f]/55">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CRITERIA
      ===================================================== */}

      <section className="bg-[#ebe6da] text-[#102e25]">
        <div className="site-container py-24 sm:py-32 lg:py-40">
          <div data-reveal className="max-w-[900px]">
            <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
              What LASMAYA Looks For
            </p>

            <h2 className="mt-7 font-display text-[clamp(3.3rem,6.5vw,7rem)] leading-[0.88] tracking-[-0.055em]">
              Excellence is more
              <br />
              <span className="text-[#102e25]/25">
                than a title.
              </span>
            </h2>
          </div>

          <div
            data-criteria-grid
            className="mt-16 grid border-t border-[#102e25]/10 md:grid-cols-2 lg:grid-cols-5"
          >
            {criteria.map((item, index) => (
              <article
                key={item.number}
                data-criteria-card
                className={`group relative min-h-[350px] overflow-hidden py-9 md:px-7 ${
                  index !== 0
                    ? "border-t border-[#102e25]/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#102e25] transition-transform duration-700 group-hover:scale-y-100" />

                <div className="relative z-10">
                  <span className="text-[0.5rem] font-bold tracking-[0.2em] text-[#9b7839] group-hover:text-[#dfc27b]">
                    {item.number}
                  </span>

                  <Check
                    size={14}
                    className="ml-auto text-[#9b7839]"
                  />

                  <h3 className="mt-20 font-display text-[2.2rem] tracking-[-0.04em] transition-colors group-hover:text-[#f5f2e9]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[0.72rem] leading-6 text-[#26352f]/55 transition-colors group-hover:text-white/55">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EVOLUTION / HISTORY
      ===================================================== */}

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
              Across the Years
            </p>

            <h2 className="mt-7 max-w-[1000px] font-display text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.86] tracking-[-0.055em]">
              From an award
              <br />
              to a continuing{" "}
              <span className="text-[#9b7839]">
                record.
              </span>
            </h2>

            <p className="mt-10 max-w-[650px] text-[0.88rem] leading-[1.9] text-[#26352f]/60">
              Since its beginnings, LASMAYA has accumulated a history of
              nominees and honourees from different areas of Lagos life. The
              names change from edition to edition, but the recurring idea is
              recognition of achievement, character, leadership and service.
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
                className="relative grid gap-6 border-t border-[#102e25]/10 py-10 pl-9 lg:grid-cols-[170px_.65fr_1fr] lg:gap-12 lg:pl-0 lg:py-12"
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
            This timeline highlights selected independently documented
            milestones rather than claiming to be a complete list of every
            LASMAYA edition.
          </p>
        </div>
      </section>

      {/* =====================================================
          2026
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#102e25] text-[#f5f2e9]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.25em] right-[-0.04em] font-display text-[clamp(15rem,35vw,36rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.025]"
        >
          14
        </span>

        <div className="site-container relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-[.35fr_1fr] lg:gap-24">
            <div data-reveal>
              <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#dfc27b]">
                Today
              </p>

              <p className="mt-8 font-display text-[6rem] leading-none tracking-[-0.07em]">
                14
              </p>

              <p className="mt-2 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-white/30">
                14th Edition · 2026
              </p>
            </div>

            <div data-reveal>
              <h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.055em]">
                The story
                <br />
                <span className="text-[#dfc27b]">
                  continues.
                </span>
              </h2>

              <p className="mt-10 max-w-[760px] text-[0.92rem] leading-[1.9] text-white/55">
                In 2026, Engr. Abdulhafis Gbolahan Toriola, FNSE, emerged
                from the LASMAYA public voting process with 3,850 votes. The
                nominee field represented backgrounds including public
                service, business, engineering and medicine.
              </p>

              <p className="mt-6 max-w-[760px] text-[0.82rem] leading-[1.85] text-white/40">
                His recognition became the latest chapter in an award history
                that stretches back to 2008 and continues to document people
                whose work has attracted public and institutional
                recognition in Lagos.
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
            <Award size={19} strokeWidth={1.2} className="text-[#9b7839]" />
          </div>

          <p
            data-reveal
            className="mx-auto mt-10 max-w-[1000px] font-display text-[clamp(3rem,6vw,7rem)] leading-[0.9] tracking-[-0.055em]"
          >
            Recognising the people
            <br />
            behind{" "}
            <span className="text-[#9b7839]">
              meaningful impact.
            </span>
          </p>

          <p
            data-reveal
            className="mx-auto mt-8 max-w-[570px] text-[0.85rem] leading-[1.9] text-[#26352f]/55"
          >
            Every edition introduces another group of nominees, another
            public conversation and another chapter in the continuing
            LASMAYA story.
          </p>

          <div
            data-reveal
            className="mt-12 flex flex-wrap items-center justify-center gap-8"
          >
            <Link
              href="/winners"
              className="group inline-flex items-center gap-4"
            >
              <Landmark size={14} className="text-[#9b7839]" />

              <span className="text-[0.54rem] font-bold uppercase tracking-[0.21em]">
                Explore Winners
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
              <Users size={14} className="text-[#9b7839]" />

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