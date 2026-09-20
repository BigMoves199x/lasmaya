"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EditionSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const context = gsap.context(() => {
      /* ================================================
         LABEL
      ================================================= */

      gsap.from("[data-spotlight-label]", {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      /* ================================================
         LARGE YEAR
      ================================================= */

      gsap.from("[data-spotlight-year]", {
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom top",
          scrub: 1.2,
        },
        xPercent: 7,
      });

      /* ================================================
         PORTRAIT
      ================================================= */

      gsap.from("[data-spotlight-image]", {
        scrollTrigger: {
          trigger: "[data-spotlight-image]",
          start: "top 82%",
        },
        y: 70,
        scale: 0.96,
        opacity: 0,
        duration: 1.15,
        ease: "power4.out",
      });

      /* ================================================
         NAME
      ================================================= */

      gsap.from("[data-spotlight-name] .spotlight-line", {
        scrollTrigger: {
          trigger: "[data-spotlight-name]",
          start: "top 85%",
        },
        yPercent: 110,
        opacity: 0,
        stagger: 0.09,
        duration: 0.9,
        ease: "power4.out",
      });

      /* ================================================
         DETAILS
      ================================================= */

      gsap.from("[data-spotlight-details]", {
        scrollTrigger: {
          trigger: "[data-spotlight-details]",
          start: "top 88%",
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      /* ================================================
         QUOTE / STATEMENT
      ================================================= */

      gsap.from("[data-spotlight-statement]", {
        scrollTrigger: {
          trigger: "[data-spotlight-statement]",
          start: "top 88%",
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f5f2e9]
        text-[#102e25]
      "
    >
      {/* =====================================================
          TOP DIVIDER
      ===================================================== */}

      <div className="site-container relative z-10">
        <div className="h-px w-full bg-[#102e25]/10" />
      </div>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Green atmosphere */}

        <div
          className="
            absolute
            right-[-15%]
            top-[15%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#123f32]/[0.045]
            blur-[160px]
          "
        />

        {/* Gold atmosphere */}

        <div
          className="
            bottom-[5%]
            left-[-15%]
            absolute
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#b8924d]/[0.05]
            blur-[150px]
          "
        />

        {/* Giant decorative 2026 */}

        <div
          data-spotlight-year
          aria-hidden="true"
          className="
            absolute
            right-[-0.05em]
            top-[5%]
            select-none
            whitespace-nowrap
            font-display
            text-[clamp(12rem,30vw,34rem)]
            font-semibold
            leading-none
            tracking-[-0.09em]
            text-[#102e25]/[0.025]
          "
        >
          2026
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          site-container
          relative
          z-10
          pb-24
          pt-24

          sm:pb-32
          sm:pt-28

          lg:pb-40
          lg:pt-36
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          data-spotlight-label
          className="
            mb-12
            flex
            items-center
            justify-between
            gap-8

            sm:mb-16
          "
        >
          <div className="flex items-center gap-4">

            <p
              className="
                text-[1rem]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#8d6c32]
              "
            >
              2026 Spotlight
            </p>
          </div>

        </div>

        {/* =================================================
            SPOTLIGHT GRID
        ================================================= */}

        <div
          className="
            grid
            items-stretch
            gap-10

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-0
          "
        >
          {/* =================================================
              LEFT — PORTRAIT
          ================================================= */}

          <div
            data-spotlight-image
            className="
              relative
              min-h-[520px]
              overflow-hidden
              bg-[#e8e2d3]

              sm:min-h-[650px]

              lg:min-h-[780px]
            "
          >
            {/* =============================================
                IMAGE BACKGROUND
            ============================================= */}

            <div className="absolute inset-0">
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_55%_42%,rgba(24,74,59,.17),transparent_52%)]
                "
              />

              <div
                className="
                  absolute
                  bottom-[-20%]
                  left-1/2
                  h-[70%]
                  w-[90%]
                  -translate-x-1/2
                  rounded-full
                  bg-[#123f32]/10
                  blur-[100px]
                "
              />
            </div>

            {/* =============================================
                EDITION NUMBER
            ============================================= */}

            <div
              className="
                absolute
                left-6
                top-6
                z-20

                sm:left-8
                sm:top-8
              "
            >
              <p
                className="
                  text-[0.5rem]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#102e25]/40
                "
              >
                Edition
              </p>

              <p
                className="
                  mt-1
                  font-display
                  text-3xl
                  text-[#102e25]
                "
              >
                XIV
              </p>
            </div>

            {/* =============================================
                PORTRAIT
            ============================================= */}

            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-[95%]
                w-[115%]
                -translate-x-1/2

                sm:h-[97%]
                sm:w-[105%]

                lg:h-[98%]
                lg:w-[110%]
              "
            >
              <Image
                src="/images/editions/2026/winner/abdulhafis.png"
                alt="Engr. Abdulhafis Gbolahan Toriola"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="
                  object-contain
                  object-bottom
                  contrast-[1.03]
                "
              />
            </div>

            {/* =============================================
                IMAGE BOTTOM FADE
            ============================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-10
                h-[25%]
                bg-gradient-to-t
                from-[#e8e2d3]
                via-[#e8e2d3]/55
                to-transparent
              "
            />

            {/* =============================================
                SMALL IMAGE LABEL
            ============================================= */}

            <div
              className="
                absolute
                bottom-6
                left-6
                z-20

                sm:bottom-8
                sm:left-8
              "
            >
              <div className="flex items-center gap-3">

                <span
                  className="
                    text-[0.5rem]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#8d6c32]
                  "
                >
                  2026 Awardee
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — DARK GREEN PANEL
          ================================================= */}

          <div
            className="
              relative
              flex
              overflow-hidden
              bg-[#102e25]
              text-[#f5f2e9]

              lg:min-h-[780px]
            "
          >
            {/* =============================================
                PANEL BACKGROUND
            ============================================= */}

            <div className="pointer-events-none absolute inset-0">
              {/* Gold glow */}

              <div
                className="
                  absolute
                  right-[-25%]
                  top-[10%]
                  h-[450px]
                  w-[450px]
                  rounded-full
                  bg-[#c6a15b]/[0.07]
                  blur-[120px]
                "
              />

              {/* Green glow */}

              <div
                className="
                  absolute
                  bottom-[-20%]
                  left-[-20%]
                  h-[500px]
                  w-[500px]
                  rounded-full
                  bg-[#4b8a72]/10
                  blur-[140px]
                "
              />

              {/* Fine grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.025]
                  [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
                  [background-size:80px_80px]
                "
              />

              {/* Giant number */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-[0.16em]
                  right-[-0.05em]
                  font-display
                  text-[clamp(11rem,22vw,23rem)]
                  font-semibold
                  leading-none
                  tracking-[-0.08em]
                  text-white/[0.025]
                "
              >
                14
              </span>
            </div>

            {/* =============================================
                PANEL CONTENT
            ============================================= */}

            <div
              className="
                relative
                z-10
                flex
                w-full
                flex-col
                justify-between
                p-7

                sm:p-10

                lg:p-14

                xl:p-16
              "
            >
              {/* =========================================
                  TOP
              ========================================== */}

              <div>
                <div className="mb-12 flex items-center justify-between sm:mb-16">
                  <div className="flex items-center gap-3">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#dfc27b] shadow-[0_0_12px_rgba(223,194,123,.55)]" />

                    <span
                      className="
                        text-[0.52rem]
                        font-bold
                        uppercase
                        tracking-[0.23em]
                        text-[#dfc27b]
                      "
                    >
                      Lagos State
                    </span>
                  </div>

                  <span
                    className="
                      text-[0.5rem]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/30
                    "
                  >
                    2026
                  </span>
                </div>

                {/* =====================================
                    NAME
                ====================================== */}

                <div data-spotlight-name>
                  <div className="overflow-hidden">
                    <p
                      className="
                        spotlight-line
                        mb-4
                        text-[0.55rem]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-[#dfc27b]
                      "
                    >
                      Engr.
                    </p>
                  </div>

                  <div className="overflow-hidden">
                    <h2
                      className="
                        spotlight-line
                        font-display
                        text-[clamp(3.4rem,6vw,7rem)]
                        font-medium
                        leading-[0.83]
                        tracking-[-0.055em]
                        text-[#f5f2e9]
                      "
                    >
                      Abdulhafis
                    </h2>
                  </div>

                  <div className="overflow-hidden">
                    <h2
                      className="
                        spotlight-line
                        font-display
                        text-[clamp(3.4rem,6vw,7rem)]
                        font-medium
                        leading-[0.83]
                        tracking-[-0.055em]
                        text-[#f5f2e9]/35
                      "
                    >
                      Gbolahan
                    </h2>
                  </div>

                  <div className="overflow-hidden">
                    <h2
                      className="
                        spotlight-line
                        font-display
                        text-[clamp(3.4rem,6vw,7rem)]
                        font-medium
                        leading-[0.83]
                        tracking-[-0.055em]
                        text-[#f5f2e9]
                      "
                    >
                      Toriola
                    </h2>
                  </div>
                </div>

                {/* =====================================
                    FNSE
                ====================================== */}

                <p
                  className="
                    mt-6
                    text-[0.6rem]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#dfc27b]
                  "
                >
                  FNSE
                </p>
              </div>

              {/* =========================================
                  LOWER INFORMATION
              ========================================== */}

              <div
                data-spotlight-details
                className="mt-16 sm:mt-20"
              >
                <div className="mb-7 h-px w-full bg-gradient-to-r from-[#c6a15b]/70 via-white/15 to-transparent" />

                <div
                  className="
                    grid
                    gap-8

                    sm:grid-cols-[1fr_auto]
                    sm:items-end
                  "
                >
                  <div>
                    <p
                      className="
                        mb-3
                        text-[0.5rem]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-white/35
                      "
                    >
                      Public Service
                    </p>

                    <p
                      className="
                        max-w-[390px]
                        font-display
                        text-[1.55rem]
                        leading-[1.15]
                        tracking-[-0.025em]
                        text-[#f5f2e9]
                        sm:text-[1.8rem]
                      "
                    >
                      Permanent Secretary
                      <br />

                      <span className="text-white/45">
                        Lagos State Ministry of Housing
                      </span>
                    </p>
                  </div>

                  {/* =====================================
                      LINK
                  ====================================== */}

                  <Link
                    href="/editions/2026"
                    className="
                      group
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#c6a15b]/45
                      text-[#dfc27b]
                      transition-all
                      duration-500

                      hover:border-[#dfc27b]
                      hover:bg-[#dfc27b]
                      hover:text-[#102e25]
                      hover:shadow-[0_0_35px_rgba(198,161,91,.15)]

                      sm:h-14
                      sm:w-14
                    "
                    aria-label="Explore the 2026 edition"
                  >
                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-[2px]
                        group-hover:-translate-y-[2px]
                      "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM EDITORIAL STATEMENT
        ================================================= */}

        <div
          data-spotlight-statement
          className="
            grid
            gap-8
            border-b
            border-[#102e25]/10
            py-12

            md:grid-cols-[0.35fr_1fr]
            md:py-16
          "
        >
          

          <div>
            <p
              className="
                max-w-[780px]
                font-display
                text-[clamp(1.7rem,3vw,3.2rem)]
                leading-[1.08]
                tracking-[-0.035em]
                text-[#102e25]
              "
            >
              A celebration of{" "}
              <span className="text-[#102e25]/35">
                leadership, service
              </span>{" "}
              and the people contributing to the progress of Lagos.
            </p>

            <Link
              href="/editions/2026"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  relative
                  text-[0.58rem]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#102e25]

                  after:absolute
                  after:-bottom-2
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
                Explore the 2026 Edition
              </span>

              <ArrowUpRight
                size={13}
                className="
                  text-[#8d6c32]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          left-1/2
          h-[300px]
          w-[75%]
          -translate-x-1/2
          rounded-full
          bg-[#123f32]/[0.04]
          blur-[130px]
        "
      />
    </section>
  );
}