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

  const TARGET_VOLUME = 0.24;

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
          y: 18,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          "[data-hero-year]",
          {
            scale: 0.94,
            opacity: 0,
            duration: 1.25,
          },
          "-=0.45",
        )
        .from(
          "[data-hero-person]",
          {
            x: 70,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.95",
        )
        .from(
          "[data-title-label]",
          {
            x: -25,
            opacity: 0,
            duration: 0.65,
          },
          "-=0.75",
        )
        .from(
          "[data-title-line]",
          {
            yPercent: 110,
            opacity: 0,
            stagger: 0.11,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.5",
        )
        .from(
          "[data-title-copy]",
          {
            y: 25,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.5",
        )
        .from(
          "[data-winner-details]",
          {
            y: 35,
            opacity: 0,
            duration: 0.85,
          },
          "-=0.55",
        )
        .from(
          "[data-hero-scroll]",
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          "[data-hero-sound]",
          {
            x: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.55",
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

        volumeTweenRef.current = gsap.to(audio, {
          volume: TARGET_VOLUME,
          duration: 1.8,
          ease: "power2.out",
        });
      } catch {
        /*
         * Browsers commonly block audible autoplay
         * until the visitor interacts with the page.
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
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        {/* Main green atmosphere */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_69%_46%,rgba(18,63,50,0.92),transparent_43%)]
          "
        />

        {/* Gold atmosphere */}

        <div
          className="
            absolute
            left-[4%]
            top-[14%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#c6a15b]/[0.045]
            blur-[140px]
          "
        />

        {/* Portrait green glow */}

        <div
          className="
            absolute
            right-[-10%]
            top-[10%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#174c3d]/30
            blur-[160px]

            sm:right-[-2%]
          "
        />

        {/* Lower atmosphere */}

        <div
          className="
            absolute
            bottom-[-25%]
            left-[35%]
            h-[500px]
            w-[700px]
            rounded-full
            bg-[#123f32]/25
            blur-[160px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Left grounding */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#090b0a]
            via-[#090b0a]/10
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          GIANT 2026
      ====================================================== */}

      <div
        data-hero-year
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[44%]
          z-[1]
          -translate-x-1/2
          -translate-y-1/2
          select-none

          lg:left-[48%]
          lg:top-[48%]
        "
      >
        <span
          className="
            whitespace-nowrap
            font-display
            text-[clamp(10rem,38vw,39rem)]
            font-semibold
            leading-none
            tracking-[-0.08em]
            text-transparent
          "
          style={{
            WebkitTextStroke: "1px rgba(198,161,91,.17)",
          }}
        >
          2026
        </span>
      </div>

      {/* =====================================================
          PORTRAIT
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
        {/* Green halo */}

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

        {/* Gold warmth */}

        <div
          className="
            absolute
            bottom-[12%]
            left-[55%]
            h-[40%]
            w-[55%]
            -translate-x-1/2
            rounded-full
            bg-[#c6a15b]/[0.055]
            blur-[100px]
          "
        />

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
          PORTRAIT / BACKGROUND BLENDING
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-20">
        {/* Desktop left gradient */}

        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: `
              linear-gradient(
                90deg,
                #090b0a 0%,
                #090b0a 16%,
                rgba(9,11,10,0.96) 21%,
                rgba(9,11,10,0.80) 27%,
                rgba(9,11,10,0.55) 33%,
                rgba(9,11,10,0.30) 39%,
                rgba(9,11,10,0.12) 45%,
                transparent 51%
              )
            `,
          }}
        />

        {/* Tablet left fade */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            hidden
            w-[45%]
            bg-gradient-to-r
            from-[#090b0a]
            via-[#090b0a]/55
            to-transparent

            md:block
            lg:hidden
          "
        />

        {/* Mobile left fade */}

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

        {/* Bottom portrait fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[43%]

            bg-gradient-to-t
            from-[#090b0a]
            via-[#090b0a]/68
            to-transparent

            sm:h-[40%]
            md:h-[37%]
            lg:h-[35%]
          "
        />

        {/* Right edge fade */}

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

            lg:w-[10%]
          "
        />

        {/* Center transition */}

        <div
          className="
            absolute
            bottom-[10%]
            left-[45%]
            h-[38%]
            w-[32%]
            rounded-full
            bg-[#123f32]/15
            blur-[90px]
          "
        />
      </div>

      {/* =====================================================
          EDITION BADGE
      ====================================================== */}

      <div
        data-hero-edition
        className="
          absolute
          left-1/2
          top-[104px]
          z-30
          -translate-x-1/2
          whitespace-nowrap

          sm:top-[110px]
          lg:top-[118px]
        "
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="h-px w-5 bg-[#dfc27b]/55 sm:w-8" />

          <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-[#dfc27b] sm:text-[0.64rem]">
            14th Edition
            <span className="mx-2 text-white/30">·</span>
            2026
          </p>

          <span className="h-px w-5 bg-[#dfc27b]/55 sm:w-8" />
        </div>
      </div>

      {/* =====================================================
          LEFT — MAIN AWARD IDENTITY
      ====================================================== */}

      <div
        data-hero-title
        className="
          absolute
          left-[var(--page-padding)]
          top-[17%]
          z-30
          max-w-[790px]

          sm:top-[19%]
          md:top-[21%]
          lg:top-[22%]
          xl:top-[23%]
        "
      >
        {/* LAGOS STATE */}

        <div
          data-title-label
          className="mb-5 flex items-center gap-3 sm:mb-6"
        >
          <span className="h-[2px] w-8 bg-[#dfc27b] sm:w-10" />

          <p
            className="
              text-[0.66rem]
              font-bold
              uppercase
              tracking-[0.24em]
              text-[#dfc27b]

              sm:text-[0.72rem]
            "
          >
            Lagos State
          </p>
        </div>

        {/* MAIN AWARD TITLE */}

        <h1
          className="
            font-display
            text-[clamp(3.7rem,14vw,9rem)]
            font-bold
            leading-[0.78]
            tracking-[-0.06em]
            text-white

            drop-shadow-[0_10px_40px_rgba(0,0,0,.32)]

            sm:text-[clamp(4.5rem,11vw,9rem)]
            lg:text-[clamp(4.5rem,7.8vw,9rem)]
          "
        >
          <span className="block overflow-hidden pb-[0.05em]">
            <span data-title-line className="block">
              Man of the
            </span>
          </span>

          <span className="block overflow-hidden pb-[0.08em]">
            <span
              data-title-line
              className="block text-[#f5f2e9]"
            >
              Year
            </span>
          </span>
        </h1>

        {/* AWARD DESCRIPTOR */}

        <div
          data-title-line
          className="mt-3 flex items-center gap-4 sm:mt-4 lg:mt-5"
        >
          <span className="h-[2px] w-10 bg-[#dfc27b] sm:w-12" />

          <span
            className="
              font-display
              text-[1.15rem]
              font-semibold
              italic
              tracking-[0.04em]
              text-[#dfc27b]

              sm:text-[1.3rem]
              lg:text-[1.4rem]
            "
          >
            Award
          </span>
        </div>

        {/* SUPPORTING COPY */}

        <div data-title-copy className="mt-6 sm:mt-7 lg:mt-8">
          <p
            className="
              max-w-[320px]
              text-[0.86rem]
              font-medium
              leading-[1.7]
              text-white/78

              sm:max-w-[390px]
              sm:text-[0.94rem]
              sm:leading-[1.75]

              lg:max-w-[430px]
              lg:text-[1rem]
            "
          >
            Celebrating leadership, service, impact and the
            individuals helping shape the future of Lagos.
          </p>
        </div>
      </div>

      {/* =====================================================
          2026 AWARDEE DETAILS
      ====================================================== */}

      <div
        data-winner-details
        className="
          absolute
          bottom-[3.5%]
          left-[var(--page-padding)]
          right-[var(--page-padding)]
          z-30

          sm:bottom-[5%]
          sm:left-auto
          sm:right-[var(--page-padding)]
          sm:w-[390px]

          lg:bottom-[6.5%]
          lg:w-[410px]

          xl:w-[440px]
        "
      >
        {/* Awardee label */}

        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <span className="h-[2px] w-8 bg-[#dfc27b] sm:w-10" />

          <p
            className="
              text-[0.62rem]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#dfc27b]

              sm:text-[0.68rem]
            "
          >
            2026 Awardee
          </p>
        </div>

        {/* Awardee name */}

        <h2
          className="
            font-display
            text-[clamp(2.15rem,8.5vw,4rem)]
            font-semibold
            leading-[0.9]
            tracking-[-0.038em]
            text-white

            drop-shadow-[0_5px_28px_rgba(0,0,0,.95)]

            sm:text-[clamp(2.5rem,6vw,4rem)]
            lg:text-[clamp(2.6rem,3.5vw,4rem)]
          "
        >
          Engr. Abdulhafis
          <br />
          Gbolahan Toriola
        </h2>

        {/* Qualification */}

        <p
          className="
            mt-3
            text-[0.68rem]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#dfc27b]

            sm:mt-4
            sm:text-[0.72rem]
          "
        >
          FNSE
        </p>

        {/* Role */}

        <p
          className="
            mt-4
            max-w-[300px]
            text-[0.8rem]
            font-medium
            leading-[1.65]
            text-white/78

            sm:max-w-[330px]
            sm:text-[0.88rem]

            lg:text-[0.92rem]
          "
        >
          Permanent Secretary
          <br />
          Lagos State Ministry of Housing
        </p>

        {/* CTA */}

        <div className="mt-5 sm:mt-7">
          <Link
            href="/editions/2026"
            className="
              group
              inline-flex
              items-center
              gap-4
            "
          >
            <span
              className="
                relative
                text-[0.64rem]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/90

                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-[#dfc27b]
                after:transition-transform
                after:duration-500

                group-hover:text-[#dfc27b]
                group-hover:after:scale-x-100

                sm:text-[0.68rem]
              "
            >
              Explore 2026
            </span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#dfc27b]/55
                text-[#dfc27b]
                transition-all
                duration-500

                group-hover:border-[#dfc27b]
                group-hover:bg-[#dfc27b]
                group-hover:text-[#090b0a]

                sm:h-10
                sm:w-10
              "
            >
              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
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
          gap-4

          lg:flex
        "
      >
        <span
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            text-white/75
            transition-all
            duration-500

            group-hover:border-[#dfc27b]/70
            group-hover:bg-[#dfc27b]/10
            group-hover:text-[#dfc27b]
          "
        >
          <ArrowDown
            size={14}
            strokeWidth={1.7}
            className="
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          />
        </span>

        <div>
          <span
            className="
              block
              text-[0.62rem]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/65
              transition-colors
              duration-300

              group-hover:text-white
            "
          >
            Discover LASMAYA
          </span>

          <span
            className="
              mt-1
              hidden
              text-[0.54rem]
              font-medium
              tracking-[0.08em]
              text-white/30

              xl:block
            "
          >
            Explore the story behind the award
          </span>
        </div>
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
          top-[46%]
          z-40
          flex
          -translate-y-1/2
          items-center
          gap-3

          sm:top-[47%]
          lg:top-[48%]
        "
      >
        {/* Sound text */}

        <div className="hidden text-right md:block">
          <p
            className={`
              text-[0.55rem]
              font-bold
              uppercase
              tracking-[0.2em]
              transition-colors
              duration-300

              ${
                soundOn
                  ? "text-[#dfc27b]"
                  : "text-white/55"
              }
            `}
          >
            {soundOn ? "Sound On" : "Sound Off"}
          </p>

          <p
            className="
              mt-1
              text-[0.5rem]
              font-medium
              uppercase
              tracking-[0.13em]
              text-white/38
            "
          >
            Awa Instrumental
          </p>
        </div>

        {/* Sound circle */}

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
                ? "border-[#dfc27b]/60 bg-[#dfc27b]/10 text-[#dfc27b]"
                : "border-white/20 bg-[#090b0a]/30 text-white/65"
            }

            group-hover:border-[#dfc27b]/80
            group-hover:bg-[#dfc27b]/10
            group-hover:text-[#dfc27b]

            sm:h-12
            sm:w-12
          `}
        >
          {/* Active ring */}

          {soundOn && (
            <span
              className="
                absolute
                inset-[-5px]
                rounded-full
                border
                border-[#dfc27b]/20
              "
            />
          )}

          {/* Active dot */}

          {soundOn && (
            <span
              className="
                absolute
                right-[1px]
                top-[1px]
                h-[5px]
                w-[5px]
                rounded-full
                bg-[#dfc27b]
                shadow-[0_0_10px_rgba(223,194,123,.9)]
              "
            />
          )}

          {soundOn ? (
            <Volume2 size={16} strokeWidth={1.6} />
          ) : (
            <VolumeX size={16} strokeWidth={1.6} />
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
          from-[#090b0a]/65
          to-transparent

          lg:hidden
        "
      />

      {/* =====================================================
          VERY SUBTLE BOTTOM BORDER
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-30
          h-px
          w-[92%]
          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#dfc27b]/20
          to-transparent
        "
      />
    </section>
  );
}