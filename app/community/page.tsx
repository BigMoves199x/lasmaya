"use client";

import {
  FormEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Lightbulb,
  MessageCircle,
  Quote,
  Send,
  Sparkles,
  UserRoundPlus,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

type ContributionType =
  | "Commendation"
  | "Nominee Suggestion"
  | "Feedback"
  | "General Message";

type CommunityVoice = {
  quote: string;
  name: string;
  type: string;
};

/* =========================================================
   COMMUNITY OPTIONS
========================================================= */

const contributionTypes = [
  {
    title: "Send a Commendation",
    description:
      "Celebrate leadership, service or meaningful impact you believe deserves to be recognised.",
    icon: MessageCircle,
    value: "Commendation" as ContributionType,
    number: "01",
  },
  {
    title: "Suggest a Future Nominee",
    description:
      "Bring an individual whose work is creating meaningful impact across Lagos to our attention.",
    icon: UserRoundPlus,
    value: "Nominee Suggestion" as ContributionType,
    number: "02",
  },
  {
    title: "Share Feedback",
    description:
      "Tell us what you think about LASMAYA, its public platform and the experience surrounding the award.",
    icon: Lightbulb,
    value: "Feedback" as ContributionType,
    number: "03",
  },
];

/* =========================================================
   PLACEHOLDER COMMUNITY VOICES

   Replace these with approved/public submissions later.
========================================================= */

const communityVoices: CommunityVoice[] = [
  {
    quote:
      "Recognition becomes more meaningful when it reflects service, responsibility and the lives touched along the way.",
    name: "Community Voice",
    type: "Reflection",
  },
  {
    quote:
      "Lagos is shaped every day by people whose contributions deserve to be seen, documented and remembered.",
    name: "Community Voice",
    type: "Reflection",
  },
  {
    quote:
      "Celebrating impact also encourages a new generation to understand that meaningful service matters.",
    name: "Community Voice",
    type: "Reflection",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function CommunityPage() {
  const pageRef = useRef<HTMLElement>(null);
  const formSectionRef = useRef<HTMLElement>(null);

  const [contributionType, setContributionType] =
    useState<ContributionType>("Commendation");

  const [submitted, setSubmitted] = useState(false);

  /* =========================================================
     PAGE ANIMATIONS
  ========================================================= */

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const context = gsap.context(() => {
      /* HERO EYEBROW */

      gsap.from("[data-community-eyebrow]", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      /* HERO HEADING */

      gsap.from("[data-community-heading] .community-heading-line", {
        yPercent: 115,
        opacity: 0,
        stagger: 0.1,
        duration: 1.15,
        ease: "power4.out",
      });

      /* HERO COPY */

      gsap.from("[data-community-intro]", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.35,
        ease: "power3.out",
      });

      /* HERO NUMBER */

      gsap.from("[data-community-hero-word]", {
        xPercent: 8,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      /* INTRO */

      gsap.from("[data-community-story]", {
        scrollTrigger: {
          trigger: "[data-community-story]",
          start: "top 82%",
        },
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      /* CONTRIBUTION CARDS */

      gsap.from("[data-community-option]", {
        scrollTrigger: {
          trigger: "[data-community-options]",
          start: "top 80%",
        },
        y: 55,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });

      /* VOICES */

      gsap.from("[data-community-voice]", {
        scrollTrigger: {
          trigger: "[data-community-voices]",
          start: "top 80%",
        },
        x: -40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });

      /* FORM */

      gsap.from("[data-community-form]", {
        scrollTrigger: {
          trigger: "[data-community-form]",
          start: "top 82%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      /* LARGE BACKGROUND WORD */

      gsap.to("[data-community-background-word]", {
        xPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-community-voices-section]",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, page);

    return () => {
      context.revert();
    };
  }, []);

  /* =========================================================
     SELECT CONTRIBUTION TYPE
  ========================================================= */

  const selectContributionType = (
    type: ContributionType
  ) => {
    setContributionType(type);
    setSubmitted(false);

    window.setTimeout(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  /* =========================================================
     DEMO FORM SUBMIT

     Replace with API/database/email integration later.
  ========================================================= */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#f5f2e9] text-[#102e25]"
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#090b0a] text-[#f5f2e9]">
        {/* ATMOSPHERE */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[5%] h-[700px] w-[700px] rounded-full bg-[#174c3d]/20 blur-[170px]" />

          <div className="absolute bottom-[-25%] right-[-10%] h-[650px] w-[650px] rounded-full bg-[#b8924d]/10 blur-[170px]" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:100px_100px]" />
        </div>

        {/* GIANT WORD */}

        <div
          data-community-hero-word
          aria-hidden="true"
          className="pointer-events-none absolute -right-[4%] top-[14%] select-none font-display text-[clamp(9rem,26vw,28rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.025]"
        >
          VOICE
        </div>

        {/* CONTENT */}

        <div className="site-container relative z-10 w-full pb-16 pt-40 sm:pb-20 lg:pb-24">
          <div className="grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-20">
            {/* LEFT */}

            <div>
              <div
                data-community-eyebrow
                className="mb-9 flex items-center gap-4"
              >
                <span className="h-px w-10 bg-[#dfc27b]" />

                <p className="text-[0.54rem] font-bold uppercase tracking-[0.28em] text-[#dfc27b]">
                  LASMAYA Community
                </p>
              </div>

              <div
                data-community-heading
                className="font-display text-[clamp(4.5rem,10vw,10.5rem)] font-medium leading-[0.78] tracking-[-0.065em]"
              >
                <div className="overflow-hidden">
                  <span className="community-heading-line block">
                    Your voice
                  </span>
                </div>

                <div className="overflow-hidden">
                  <span className="community-heading-line block text-white/30">
                    belongs
                  </span>
                </div>

                <div className="overflow-hidden">
                  <span className="community-heading-line block text-[#dfc27b]">
                    here.
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div
              data-community-intro
              className="lg:pb-2"
            >
              <div className="mb-6 h-px w-full bg-gradient-to-r from-[#dfc27b]/80 via-white/15 to-transparent" />

              <p className="max-w-[470px] text-[0.95rem] leading-[1.9] text-white/60">
                Recognition begins with people noticing
                meaningful work. Share a commendation, suggest
                someone whose impact deserves attention, or tell
                us how LASMAYA can continue strengthening its
                connection with the public.
              </p>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("have-your-say")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="group mt-9 inline-flex items-center gap-4"
              >
                <span className="text-[0.54rem] font-bold uppercase tracking-[0.22em] text-[#f5f2e9] transition-colors group-hover:text-[#dfc27b]">
                  Have Your Say
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dfc27b]/35 text-[#dfc27b] transition-all duration-500 group-hover:bg-[#dfc27b] group-hover:text-[#102e25]">
                  <ArrowDown size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY INTRODUCTION
      ====================================================== */}

      <section className="relative bg-[#f5f2e9] py-24 sm:py-32 lg:py-40">
        <div
          data-community-story
          className="site-container"
        >
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            {/* LABEL */}

            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#a9833f]" />

                <p className="text-[0.54rem] font-bold uppercase tracking-[0.26em] text-[#8d6c32]">
                  The Public Voice
                </p>
              </div>
            </div>

            {/* STORY */}

            <div>
              <p className="max-w-[850px] font-display text-[clamp(2.7rem,5vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#102e25]">
                Lagos is shaped by{" "}
                <span className="text-[#9b7839]">
                  people,
                </span>{" "}
                and meaningful recognition begins by listening
                to them.
              </p>

              <div className="mt-12 grid gap-8 border-t border-[#102e25]/10 pt-8 sm:grid-cols-2">
                <p className="text-[0.92rem] leading-[1.85] text-[#26352f]/65">
                  The LASMAYA community space provides a channel
                  for members of the public to share observations
                  about leadership, service, contribution and
                  impact across Lagos.
                </p>

                <p className="text-[0.92rem] leading-[1.85] text-[#26352f]/65">
                  It is also a place to send feedback,
                  commendations and suggestions that can help
                  preserve a wider record of the people and work
                  influencing the state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WOULD YOU LIKE TO CONTRIBUTE?
      ====================================================== */}

      <section
        id="have-your-say"
        className="relative bg-[#eee9de] py-24 sm:py-32 lg:py-36"
      >
        <div className="site-container">
          {/* HEADER */}

          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#a9833f]" />

                <p className="text-[0.52rem] font-bold uppercase tracking-[0.26em] text-[#8d6c32]">
                  Have Your Say
                </p>
              </div>

              <h2 className="max-w-[800px] font-display text-[clamp(3.4rem,7vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.055em]">
                How would you like
                <br />
                <span className="text-[#9b7839]">
                  to contribute?
                </span>
              </h2>
            </div>

            <p className="max-w-[430px] text-[0.9rem] leading-[1.8] text-[#26352f]/60 lg:justify-self-end">
              Choose the kind of contribution you would like to
              make. Your selection will take you directly to the
              community submission form.
            </p>
          </div>

          {/* OPTIONS */}

          <div
            data-community-options
            className="grid border-l border-t border-[#102e25]/10 md:grid-cols-3"
          >
            {contributionTypes.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.number}
                  type="button"
                  data-community-option
                  onClick={() =>
                    selectContributionType(item.value)
                  }
                  className="group relative min-h-[390px] overflow-hidden border-b border-r border-[#102e25]/10 bg-[#f5f2e9] p-7 text-left transition-colors duration-700 hover:bg-[#102e25] sm:p-9"
                >
                  {/* GOLD HOVER WASH */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#dfc27b]/0 blur-[80px] transition-all duration-700 group-hover:bg-[#dfc27b]/10" />

                  {/* NUMBER */}

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-[0.5rem] font-bold tracking-[0.2em] text-[#102e25]/30 transition-colors group-hover:text-[#dfc27b]">
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#102e25]/10 text-[#8d6c32] transition-all duration-500 group-hover:border-[#dfc27b]/35 group-hover:text-[#dfc27b]">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="absolute bottom-8 left-7 right-7 z-10 sm:bottom-9 sm:left-9 sm:right-9">
                    <h3 className="max-w-[300px] font-display text-[2.5rem] font-medium leading-[0.92] tracking-[-0.04em] transition-colors duration-500 group-hover:text-[#f5f2e9]">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-[320px] text-[0.82rem] leading-[1.75] text-[#26352f]/55 transition-colors duration-500 group-hover:text-white/50">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center gap-3 text-[#8d6c32] transition-colors group-hover:text-[#dfc27b]">
                      <span className="text-[0.48rem] font-bold uppercase tracking-[0.2em]">
                        Continue
                      </span>

                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  {/* BOTTOM LINE */}

                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#dfc27b] transition-transform duration-700 group-hover:scale-x-100" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY VOICES
      ====================================================== */}

      <section
        data-community-voices-section
        className="relative overflow-hidden bg-[#102e25] py-24 text-[#f5f2e9] sm:py-32 lg:py-40"
      >
        {/* GIANT WORD */}

        <div
          data-community-background-word
          aria-hidden="true"
          className="pointer-events-none absolute left-[-3%] top-[3%] select-none whitespace-nowrap font-display text-[clamp(10rem,27vw,30rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.025]"
        >
          VOICES
        </div>

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[15%] top-[20%] h-[650px] w-[650px] rounded-full bg-[#28614e]/20 blur-[150px]" />

          <div className="absolute -right-[15%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-[#b8924d]/10 blur-[150px]" />
        </div>

        <div className="site-container relative z-10">
          {/* HEADING */}

          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[#dfc27b]" />

                <p className="text-[0.52rem] font-bold uppercase tracking-[0.26em] text-[#dfc27b]">
                  Community Voices
                </p>
              </div>

              <h2 className="font-display text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.055em]">
                What Lagos
                <br />
                <span className="text-white/25">
                  has to say.
                </span>
              </h2>
            </div>

            <p className="max-w-[420px] text-[0.88rem] leading-[1.85] text-white/50 lg:justify-self-end">
              A space for reflections around service,
              recognition, contribution and the people shaping
              the wider Lagos story.
            </p>
          </div>

          {/* VOICES */}

          <div
            data-community-voices
            className="border-t border-white/10"
          >
            {communityVoices.map((voice, index) => (
              <article
                key={index}
                data-community-voice
                className="group grid gap-7 border-b border-white/10 py-10 sm:py-12 lg:grid-cols-[.2fr_1.3fr_.4fr] lg:items-center lg:gap-12"
              >
                {/* NUMBER */}

                <div>
                  <span className="font-display text-[2rem] text-[#dfc27b]/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* QUOTE */}

                <div className="relative">
                  <Quote
                    size={22}
                    strokeWidth={1}
                    className="mb-5 text-[#dfc27b]/50"
                  />

                  <blockquote className="max-w-[820px] font-display text-[clamp(1.8rem,3vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[#f5f2e9] transition-colors duration-500 group-hover:text-[#dfc27b]">
                    “{voice.quote}”
                  </blockquote>
                </div>

                {/* META */}

                <div className="lg:text-right">
                  <p className="text-[0.52rem] font-bold uppercase tracking-[0.2em] text-white/60">
                    {voice.name}
                  </p>

                  <p className="mt-2 text-[0.46rem] font-bold uppercase tracking-[0.18em] text-white/25">
                    {voice.type}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 max-w-[600px] text-[0.7rem] leading-[1.7] text-white/30">
            Community reflections displayed here are editorial
            placeholders until approved public submissions are
            published.
          </p>
        </div>
      </section>

      {/* =====================================================
          SUBMISSION FORM
      ====================================================== */}

      <section
        ref={formSectionRef}
        className="relative bg-[#f5f2e9] py-24 sm:py-32 lg:py-40"
      >
        <div
          data-community-form
          className="site-container"
        >
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            {/* LEFT */}

            <div>
              <div className="sticky top-32">
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#a9833f]" />

                  <p className="text-[0.52rem] font-bold uppercase tracking-[0.26em] text-[#8d6c32]">
                    Community Submission
                  </p>
                </div>

                <h2 className="font-display text-[clamp(3.5rem,6vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.055em]">
                  Share what
                  <br />
                  <span className="text-[#9b7839]">
                    matters.
                  </span>
                </h2>

                <p className="mt-8 max-w-[360px] text-[0.86rem] leading-[1.8] text-[#26352f]/60">
                  Submit a commendation, suggestion or message
                  for consideration by the LASMAYA team.
                </p>

                <div className="mt-10 hidden items-center gap-3 lg:flex">
                  <Sparkles
                    size={14}
                    className="text-[#a9833f]"
                  />

                  <p className="text-[0.48rem] font-bold uppercase tracking-[0.18em] text-[#102e25]/35">
                    People · Recognition · Impact
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}

            <div>
              {submitted ? (
                /* =============================================
                   SUCCESS STATE
                ============================================= */

                <div className="flex min-h-[600px] flex-col items-center justify-center border border-[#102e25]/10 bg-[#eee9de] px-7 text-center sm:px-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#a9833f]/30 text-[#8d6c32]">
                    <Check size={22} />
                  </div>

                  <p className="mt-8 text-[0.5rem] font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
                    Submission Received
                  </p>

                  <h3 className="mt-5 max-w-[600px] font-display text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                    Thank you for
                    <br />
                    <span className="text-[#9b7839]">
                      sharing your voice.
                    </span>
                  </h3>

                  <p className="mt-7 max-w-[470px] text-[0.86rem] leading-[1.8] text-[#26352f]/60">
                    This demo currently shows the website
                    submission experience. Connect the form to
                    your preferred backend before launch to
                    receive and manage live submissions.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="group mt-9 inline-flex items-center gap-4"
                  >
                    <span className="text-[0.52rem] font-bold uppercase tracking-[0.2em] text-[#102e25] transition-colors group-hover:text-[#8d6c32]">
                      Send Another Message
                    </span>

                    <ArrowRight
                      size={14}
                      className="text-[#8d6c32] transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              ) : (
                /* =============================================
                   FORM
                ============================================= */

                <form
                  onSubmit={handleSubmit}
                  className="border border-[#102e25]/10 bg-[#eee9de]"
                >
                  {/* FORM HEADER */}

                  <div className="border-b border-[#102e25]/10 p-6 sm:p-8">
                    <p className="mb-5 text-[0.48rem] font-bold uppercase tracking-[0.22em] text-[#102e25]/35">
                      I would like to
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Commendation",
                        "Nominee Suggestion",
                        "Feedback",
                        "General Message",
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() =>
                            setContributionType(
                              type as ContributionType
                            )
                          }
                          className={`rounded-full border px-4 py-2.5 text-[0.46rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                            contributionType === type
                              ? "border-[#102e25] bg-[#102e25] text-[#f5f2e9]"
                              : "border-[#102e25]/15 text-[#102e25]/50 hover:border-[#a9833f] hover:text-[#8d6c32]"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* FIELDS */}

                  <div className="grid sm:grid-cols-2">
                    {/* NAME */}

                    <div className="border-b border-[#102e25]/10 p-6 sm:border-r sm:p-8">
                      <label
                        htmlFor="community-name"
                        className="block text-[0.46rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/35"
                      >
                        Your Name
                      </label>

                      <input
                        id="community-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Full name"
                        className="mt-4 w-full bg-transparent font-display text-[1.5rem] text-[#102e25] outline-none placeholder:text-[#102e25]/20"
                      />
                    </div>

                    {/* EMAIL */}

                    <div className="border-b border-[#102e25]/10 p-6 sm:p-8">
                      <label
                        htmlFor="community-email"
                        className="block text-[0.46rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/35"
                      >
                        Email Address
                      </label>

                      <input
                        id="community-email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@email.com"
                        className="mt-4 w-full bg-transparent font-display text-[1.5rem] text-[#102e25] outline-none placeholder:text-[#102e25]/20"
                      />
                    </div>

                    {/* SUBJECT */}

                    <div className="border-b border-[#102e25]/10 p-6 sm:col-span-2 sm:p-8">
                      <label
                        htmlFor="community-subject"
                        className="block text-[0.46rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/35"
                      >
                        Subject
                      </label>

                      <input
                        id="community-subject"
                        name="subject"
                        type="text"
                        required
                        placeholder={
                          contributionType ===
                          "Nominee Suggestion"
                            ? "Name of the person you are suggesting"
                            : contributionType ===
                              "Commendation"
                            ? "Who or what would you like to commend?"
                            : "What would you like to share?"
                        }
                        className="mt-4 w-full bg-transparent font-display text-[1.5rem] text-[#102e25] outline-none placeholder:text-[#102e25]/20"
                      />
                    </div>

                    {/* MESSAGE */}

                    <div className="border-b border-[#102e25]/10 p-6 sm:col-span-2 sm:p-8">
                      <label
                        htmlFor="community-message"
                        className="block text-[0.46rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/35"
                      >
                        Your Message
                      </label>

                      <textarea
                        id="community-message"
                        name="message"
                        required
                        rows={7}
                        placeholder="Tell us more..."
                        className="mt-5 w-full resize-none bg-transparent font-display text-[1.6rem] leading-[1.3] text-[#102e25] outline-none placeholder:text-[#102e25]/20"
                      />
                    </div>
                  </div>

                  {/* SUBMIT */}

                  <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                    <p className="max-w-[430px] text-[0.68rem] leading-[1.65] text-[#102e25]/40">
                      Submissions may be reviewed before
                      publication. Sending a message does not
                      guarantee nomination, selection or
                      publication.
                    </p>

                    <button
                      type="submit"
                      className="group flex shrink-0 items-center justify-center gap-4 bg-[#102e25] px-6 py-4 text-[#f5f2e9] transition-colors duration-500 hover:bg-[#8d6c32]"
                    >
                      <span className="text-[0.5rem] font-bold uppercase tracking-[0.2em]">
                        Submit Message
                      </span>

                      <Send
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#090b0a] py-24 text-[#f5f2e9] sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#174c3d]/20 blur-[150px]" />
        </div>

        <div className="site-container relative z-10 text-center">
          <p className="text-[0.5rem] font-bold uppercase tracking-[0.28em] text-[#dfc27b]">
            LASMAYA · Lagos
          </p>

          <h2 className="mx-auto mt-7 max-w-[950px] font-display text-[clamp(3.7rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.055em]">
            Every era leaves
            <br />
            <span className="text-white/25">
              a record of impact.
            </span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/editions"
              className="group inline-flex items-center gap-4"
            >
              <span className="text-[0.52rem] font-bold uppercase tracking-[0.22em] text-[#f5f2e9] transition-colors group-hover:text-[#dfc27b]">
                Explore the Editions
              </span>

              <ArrowUpRight
                size={14}
                className="text-[#dfc27b] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <span className="h-4 w-px bg-white/15" />

            <Link
              href="/news"
              className="text-[0.52rem] font-bold uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-[#dfc27b]"
            >
              Read LASMAYA News
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}