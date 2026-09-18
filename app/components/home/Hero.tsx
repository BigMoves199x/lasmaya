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
  ArrowDown,
  ArrowUpRight,
  Volume2,
  VolumeX,
} from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const volumeTweenRef = useRef<gsap.core.Tween | null>(null);
  const soundOnRef = useRef(false);

  const [soundOn, setSoundOn] = useState(false);

  const TARGET_VOLUME = 0.40;

  /* =========================================================
     KEEP SOUND REF IN SYNC
  ========================================================= */

  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);

  /* =========================================================
     HERO ENTRANCE ANIMATION
  ========================================================= */

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from("[data-hero-edition]", {
          y: 20,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          "[data-hero-year]",
          {
            scale: 0.92,
            opacity: 0,
            duration: 1.25,
          },
          "-=0.4",
        )
        .from(
          "[data-hero-person]",
          {
            x: 70,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.9",
        )
        .from(
          "[data-hero-title] > *",
          {
            y: 45,
            opacity: 0,
            stagger: 0.09,
            duration: 0.85,
          },
          "-=0.8",
        )
        .from(
          "[data-winner-details]",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          "[data-hero-scroll]",
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          "[data-hero-sound]",
          {
            x: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        );
    }, hero);

    return () => context.revert();
  }, []);

  /* =========================================================
     AUDIO FADE HELPERS
  ========================================================= */

  const fadeAudioIn = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    volumeTweenRef.current?.kill();

    try {
      if (audio.paused) {
        audio.volume = 0;
        await audio.play();
      }

      volumeTweenRef.current = gsap.to(audio, {
        volume: TARGET_VOLUME,
        duration: 1.5,
        ease: "power2.out",
      });
    } catch {
      setSoundOn(false);
      soundOnRef.current = false;
    }
  }, []);

  const fadeAudioOut = useCallback(() => {
    const audio = audioRef.current;

    if (!audio || audio.paused) return;

    volumeTweenRef.current?.kill();

    volumeTweenRef.current = gsap.to(audio, {
      volume: 0,
      duration: 1.3,
      ease: "power2.out",

      onComplete: () => {
        audio.pause();
      },
    });
  }, []);

  /* =========================================================
     AUDIO SETUP + AUTOPLAY ATTEMPT
  ========================================================= */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0;

    let cancelled = false;

    const attemptAutoplay = async () => {
      try {
        await audio.play();

        if (cancelled) return;

        setSoundOn(true);
        soundOnRef.current = true;

        gsap.to(audio, {
          volume: TARGET_VOLUME,
          duration: 1.8,
          ease: "power2.out",
        });
      } catch {
        /*
         * Normal browser behaviour.
         * Most browsers block audible autoplay until the
         * visitor interacts with the page.
         */
        if (!cancelled) {
          setSoundOn(false);
          soundOnRef.current = false;
        }
      }
    };

    attemptAutoplay();

    return () => {
      cancelled = true;

      volumeTweenRef.current?.kill();

      audio.pause();
    };
  }, []);

  /* =========================================================
     HERO VISIBILITY
     FADE MUSIC OUT WHEN LEAVING HERO
  ========================================================= */

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          if (soundOnRef.current) {
            fadeAudioIn();
          }
        } else {
          fadeAudioOut();
        }
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, [fadeAudioIn, fadeAudioOut]);

  /* =========================================================
     SOUND TOGGLE
  ========================================================= */

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    volumeTweenRef.current?.kill();

    if (soundOnRef.current) {
      soundOnRef.current = false;
      setSoundOn(false);

      volumeTweenRef.current = gsap.to(audio, {
        volume: 0,
        duration: 0.65,
        ease: "power2.out",

        onComplete: () => {
          audio.pause();
        },
      });

      return;
    }

    try {
      audio.volume = 0;

      await audio.play();

      soundOnRef.current = true;
      setSoundOn(true);

      volumeTweenRef.current = gsap.to(audio, {
        volume: TARGET_VOLUME,
        duration: 1.1,
        ease: "power2.out",
      });
    } catch (error) {
      console.error("Unable to play hero audio:", error);

      soundOnRef.current = false;
      setSoundOn(false);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#090b0a] text-white"
    >
      {/* =====================================================
          BACKGROUND AUDIO
      ====================================================== */}

      <audio
        ref={audioRef}
        src="/awa-instrumental.mp3"
        preload="auto"
        loop
      />

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        {/* Main green atmosphere */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(18,63,50,0.88),transparent_42%)]" />

        {/* Gold glow */}

        <div className="absolute left-[7%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#c6a15b]/[0.04] blur-[130px]" />

        {/* Green glow on portrait side */}

        <div className="absolute right-[-10%] top-[12%] h-[650px] w-[650px] rounded-full bg-[#174c3d]/25 blur-[150px] sm:right-[0%]" />

        {/* Subtle grid */}

        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Overall left darkness */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#090b0a] via-[#090b0a]/10 to-transparent" />
      </div>

      {/* =====================================================
          GIANT BACKGROUND YEAR
      ====================================================== */}

      <div
        data-hero-year
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[45%] z-[1] -translate-x-1/2 -translate-y-1/2 select-none lg:left-[48%] lg:top-[48%]"
      >
        <span
          className="whitespace-nowrap font-display text-[clamp(10rem,38vw,39rem)] font-semibold leading-none tracking-[-0.08em] text-transparent"
          style={{
            WebkitTextStroke:
              "1px rgba(198,161,91,.16)",
          }}
        >
          2026
        </span>
      </div>

      {/* =====================================================
          ABDULHAFIS PORTRAIT
      ====================================================== */}

      <div
        data-hero-person
        className="
          pointer-events-none
          absolute
          bottom-0
          z-10

          right-[-22%]
          h-[72%]
          w-[108vw]

          sm:right-[-15%]
          sm:h-[77%]
          sm:w-[92vw]

          md:right-[-8%]
          md:h-[83%]
          md:w-[72vw]

          lg:right-[-2%]
          lg:h-[88%]
          lg:w-[min(58vw,900px)]
        "
      >
        {/* Green glow directly behind portrait */}

        <div
          className="
            absolute
            left-[55%]
            top-[38%]
            h-[75%]
            w-[85%]
            -translate-x-1/2
            rounded-full
            bg-[#174c3d]/35
            blur-[100px]

            lg:left-[50%]
            lg:bg-[#174c3d]/30
            lg:blur-[140px]
          "
        />

        {/* Subtle gold warmth */}

        <div className="absolute bottom-[12%] left-[55%] h-[40%] w-[55%] -translate-x-1/2 rounded-full bg-[#c6a15b]/[0.045] blur-[100px]" />

        {/* Actual portrait */}

        <div
          className="
            absolute
            inset-0
            origin-bottom-right

            scale-[1.28]

            sm:scale-[1.22]
            md:scale-[1.16]
            lg:scale-[1.12]
          "
        >
          <Image
            src="/images/editions/2026/winner/abdulhafis.png"
            alt="Engr. Abdulhafis Gbolahan Toriola"
            fill
            priority
            sizes="(max-width: 640px) 108vw, (max-width: 768px) 92vw, (max-width: 1024px) 72vw, 58vw"
            className="
              object-contain
              object-bottom-right
              contrast-[1.07]
              saturate-[1.04]

              lg:contrast-100
              lg:saturate-100
            "
          />
        </div>
      </div>

      {/* =====================================================
          HERO / PORTRAIT BLENDING
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-20">
        {/* =============================================
            DESKTOP LEFT CLOSING GRADIENT
            Reduced spread
        ============================================= */}

        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: `
              linear-gradient(
                90deg,
                #090b0a 0%,
                #090b0a 18%,
                rgba(9,11,10,0.96) 23%,
                rgba(9,11,10,0.78) 29%,
                rgba(9,11,10,0.52) 35%,
                rgba(9,11,10,0.28) 41%,
                rgba(9,11,10,0.10) 47%,
                transparent 53%
              )
            `,
          }}
        />

        {/* =============================================
            TABLET LEFT FADE
        ============================================= */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            hidden
            w-[46%]
            bg-gradient-to-r
            from-[#090b0a]
            via-[#090b0a]/55
            to-transparent

            md:block
            lg:hidden
          "
        />

        {/* =============================================
            MOBILE LEFT FADE
        ============================================= */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[34%]
            bg-gradient-to-r
            from-[#090b0a]
            via-[#090b0a]/50
            to-transparent

            sm:w-[39%]
            md:hidden
          "
        />

        {/* =============================================
            BOTTOM PORTRAIT FADE
        ============================================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0

            h-[42%]

            bg-gradient-to-t
            from-[#090b0a]
            via-[#090b0a]/65
            to-transparent

            sm:h-[40%]
            md:h-[37%]
            lg:h-[35%]
          "
        />

        {/* =============================================
            RIGHT EDGE FADE
        ============================================= */}

        <div
          className="
            absolute
            bottom-0
            right-0

            h-[72%]
            w-[7%]

            bg-gradient-to-l
            from-[#090b0a]/55
            to-transparent

            lg:w-[12%]
          "
        />

        {/* Soft center transition */}

        <div className="absolute bottom-[10%] left-[45%] h-[38%] w-[32%] rounded-full bg-[#123f32]/15 blur-[90px]" />
      </div>

      {/* =====================================================
          EDITION
      ====================================================== */}

      <div
        data-hero-edition
        className="
          absolute
          left-1/2
          top-[105px]
          z-30
          -translate-x-1/2
          whitespace-nowrap

          sm:top-[110px]
          lg:top-[118px]
        "
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="h-px w-6 bg-[#c6a15b] sm:w-9" />

          <span className="text-[0.52rem] font-bold uppercase tracking-[0.24em] text-[#dfc27b] sm:text-[0.58rem] sm:tracking-[0.28em]">
            14th Edition · 2026
          </span>

          <span className="h-px w-6 bg-[#c6a15b] sm:w-9" />
        </div>
      </div>

      {/* =====================================================
          LEFT — AWARD TITLE
      ====================================================== */}

      <div
        data-hero-title
        className="
          absolute
          left-[var(--page-padding)]
          top-[20%]
          z-30
          max-w-[650px]

          sm:top-[23%]
          md:top-[27%]
          lg:top-[31%]
        "
      >
        <p className="mb-3 text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-white/45 sm:mb-4 sm:text-[0.62rem] sm:tracking-[0.25em]">
          Lagos State
        </p>

        <h1
          className="
            font-display
            text-[clamp(3.25rem,14vw,8.4rem)]
            font-medium
            leading-[0.78]
            tracking-[-0.055em]

            sm:text-[clamp(4rem,11vw,8.4rem)]
            lg:text-[clamp(3.9rem,7.6vw,8.4rem)]
          "
        >
          Man of
          <br />
          the Year
        </h1>

        <p
          className="
            mt-5
            max-w-[270px]
            text-[0.68rem]
            leading-5
            text-white/50

            sm:max-w-[320px]
            sm:text-[0.72rem]
            sm:leading-6

            lg:mt-6
            lg:max-w-[330px]
            lg:text-[0.75rem]
          "
        >
          Celebrating leadership, service, impact and the
          individuals helping shape the future of Lagos.
        </p>
      </div>

      {/* =====================================================
          WINNER DETAILS
      ====================================================== */}

      <div
        data-winner-details
        className="
          absolute
          bottom-[4%]
          left-[var(--page-padding)]
          right-[var(--page-padding)]
          z-30

          sm:bottom-[5%]
          sm:left-auto
          sm:right-[var(--page-padding)]
          sm:w-[360px]

          lg:bottom-[7%]
          lg:w-[370px]
        "
      >
        {/* Honouree label */}

        <div className="mb-3 flex items-center gap-3 sm:mb-4">
          <span className="h-px w-7 bg-[#c6a15b] sm:w-8" />

          <p className="text-[0.52rem] font-bold uppercase tracking-[0.22em] text-[#dfc27b] sm:text-[0.58rem] sm:tracking-[0.24em]">
            2026 Honouree
          </p>
        </div>

        {/* Winner name */}

        <h2
          className="
            font-display
            text-[clamp(2rem,8.5vw,3.8rem)]
            font-medium
            leading-[0.88]
            tracking-[-0.035em]
            text-white
            drop-shadow-[0_4px_25px_rgba(0,0,0,.95)]

            sm:text-[clamp(2.3rem,6vw,3.8rem)]
            lg:text-[clamp(2.3rem,3.3vw,3.8rem)]
          "
        >
          Engr. Abdulhafis
          <br />
          Gbolahan Toriola
        </h2>

        {/* Qualification */}

        <p className="mt-2 text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-white/70 sm:mt-3 sm:text-[0.62rem]">
          FNSE
        </p>

        {/* Role */}

        <p className="mt-3 max-w-[260px] text-[0.62rem] leading-[1.6] text-white/60 sm:mt-4 sm:max-w-[290px] sm:text-[0.68rem] sm:leading-5">
          Permanent Secretary
          <br />
          Lagos State Ministry of Housing
        </p>

        {/* CTA */}

        <div className="mt-4 sm:mt-6">
          <Link
            href="/editions/2026"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[0.56rem]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white

              sm:text-[0.62rem]
            "
          >
            Explore 2026

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#c6a15b]/60
                transition-all
                duration-300

                group-hover:border-[#c6a15b]
                group-hover:bg-[#c6a15b]
                group-hover:text-black

                sm:h-9
                sm:w-9
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
          SCROLL INDICATOR — DESKTOP
      ====================================================== */}

      <a
        data-hero-scroll
        href="#about-award"
        className="
          group
          absolute
          bottom-[6%]
          left-[var(--page-padding)]
          z-30
          hidden
          items-center
          gap-3
          lg:flex
        "
      >
        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            transition-all
            duration-300

            group-hover:border-[#c6a15b]/60
            group-hover:bg-[#c6a15b]/[0.05]
          "
        >
          <ArrowDown
            size={13}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </span>

        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-white/70">
          Discover LASMAYA
        </span>
      </a>

      {/* =====================================================
          SOUND CONTROL
      ====================================================== */}

      <button
        data-hero-sound
        type="button"
        onClick={toggleSound}
        aria-label={
          soundOn
            ? "Mute Awa Instrumental"
            : "Play Awa Instrumental"
        }
        aria-pressed={soundOn}
        className="
          group
          absolute
          right-[var(--page-padding)]
          top-[47%]
          z-40
          flex
          -translate-y-1/2
          items-center
          gap-3

          sm:top-[48%]
        "
      >
        {/* TEXT */}

        <div className="hidden text-right md:block">
          <p
            className={`
              text-[0.43rem]
              font-bold
              uppercase
              tracking-[0.2em]
              transition-colors
              duration-300

              ${
                soundOn
                  ? "text-[#dfc27b]/80"
                  : "text-white/30"
              }
            `}
          >
            {soundOn ? "Sound On" : "Sound Off"}
          </p>

          <p className="mt-1 text-[0.4rem] uppercase tracking-[0.14em] text-white/20">
            Awa Instrumental
          </p>
        </div>

        {/* CIRCLE */}

        <span
          className={`
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            backdrop-blur-md
            transition-all
            duration-500

            ${
              soundOn
                ? "border-[#dfc27b]/50 bg-[#dfc27b]/10 text-[#dfc27b]"
                : "border-white/15 bg-[#090b0a]/20 text-white/45"
            }

            group-hover:border-[#dfc27b]/70
            group-hover:bg-[#dfc27b]/10
            group-hover:text-[#dfc27b]

            sm:h-12
            sm:w-12
          `}
        >
          {/* OUTER ACTIVE RING */}

          {soundOn && (
            <span className="absolute inset-[-5px] rounded-full border border-[#dfc27b]/15" />
          )}

          {/* SMALL PLAYING INDICATOR */}

          {soundOn && (
            <span className="absolute right-[1px] top-[1px] h-[5px] w-[5px] rounded-full bg-[#dfc27b] shadow-[0_0_10px_rgba(223,194,123,.9)]" />
          )}

          {soundOn ? (
            <Volume2 size={15} strokeWidth={1.5} />
          ) : (
            <VolumeX size={15} strokeWidth={1.5} />
          )}
        </span>
      </button>

      {/* =====================================================
          MOBILE TOP VIGNETTE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-[21]
          h-[18%]
          bg-gradient-to-b
          from-[#090b0a]/60
          to-transparent

          lg:hidden
        "
      />
    </section>
  );
}