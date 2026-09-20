"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Search,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

type NewsCategory =
  | "All"
  | "2026 Edition"
  | "Announcements"
  | "Nominees"
  | "Award History";

type Article = {
  slug: string;
  category: Exclude<NewsCategory, "All">;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

/* =========================================================
   CATEGORIES
========================================================= */

const categories: NewsCategory[] = [
  "All",
  "2026 Edition",
  "Announcements",
  "Nominees",
  "Award History",
];

/* =========================================================
   ARTICLES
========================================================= */

const articles: Article[] = [
  {
    slug: "abdulhafis-toriola-emerges-2026-awardee",
    category: "2026 Edition",
    date: "September 2026",
    title:
      "Engr. Abdulhafis Gbolahan Toriola emerges as 2026 LASMAYA Awardee",
    excerpt:
      "The 14th Edition of the Lagos State Man of the Year Award culminated in the recognition of Engr. Abdulhafis Gbolahan Toriola, FNSE, as the 2026 Awardee following the public voting process.",
    image: "/images/editions/2026/winner/abdulhafis.png",
    featured: true,
  },
  {
    slug: "2026-public-voting",
    category: "Announcements",
    date: "July 2026",
    title: "Public voting takes centre stage in the 14th Edition",
    excerpt:
      "Ten nominees formed the 2026 field as the Lagos State Man of the Year Award entered its public voting stage.",
    image: "/images/news/2026-voting.jpg",
  },
  {
    slug: "meet-2026-nominees",
    category: "Nominees",
    date: "2026",
    title: "Meet the ten nominees of the 2026 LASMAYA edition",
    excerpt:
      "The 14th Edition brought together ten distinguished nominees representing different professional backgrounds and areas of contribution across Lagos.",
    image: "/images/news/2026-nominees.jpg",
  },
  {
    slug: "lasmaya-story-since-2008",
    category: "Award History",
    date: "Archive",
    title: "The LASMAYA story: recognition and impact since 2008",
    excerpt:
      "A look at the continuing story of the Lagos State Man of the Year Award and the Awardees recognised across its editions since 2008.",
    image: "/images/news/lasmaya-history.jpg",
  },
  {
    slug: "2026-results",
    category: "2026 Edition",
    date: "2026",
    title: "Inside the results of the 2026 public voting process",
    excerpt:
      "The public voting process concluded with Engr. Abdulhafis Gbolahan Toriola, FNSE, recording the highest reported vote total in the 2026 nominee field and emerging as the 2026 Awardee.",
    image: "/images/news/2026-results.jpg",
  },
  {
    slug: "people-purpose-progress",
    category: "Award History",
    date: "LASMAYA",
    title: "Recognition, service and the continuing LASMAYA story",
    excerpt:
      "Exploring the ideas of contribution, leadership and public recognition that continue to shape the award.",
    image: "/images/news/recognition.jpg",
  },
];

/* =========================================================
   NEWS PAGE
========================================================= */

export default function NewsPage() {
  const pageRef = useRef<HTMLElement>(null);

  const [activeCategory, setActiveCategory] =
    useState<NewsCategory>("All");

  const [search, setSearch] = useState("");

  /* =======================================================
     FEATURED ARTICLE
  ======================================================= */

  const featuredArticle =
    articles.find((article) => article.featured) ?? articles[0];

  /* =======================================================
     FILTER ARTICLES
  ======================================================= */

  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => !article.featured)
      .filter((article) => {
        const categoryMatch =
          activeCategory === "All" ||
          article.category === activeCategory;

        const searchMatch =
          article.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          article.excerpt
            .toLowerCase()
            .includes(search.toLowerCase());

        return categoryMatch && searchMatch;
      });
  }, [activeCategory, search]);

  /* =======================================================
     GSAP
  ======================================================= */

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const context = gsap.context(() => {
      /* HERO LABEL */

      gsap.from("[data-news-label]", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      /* HERO HEADING */

      gsap.from("[data-news-heading] .news-line", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });

      /* HERO INTRO */

      gsap.from("[data-news-intro]", {
        y: 30,
        opacity: 0,
        delay: 0.25,
        duration: 0.9,
        ease: "power3.out",
      });

      /* FEATURED STORY */

      gsap.from("[data-featured-story]", {
        scrollTrigger: {
          trigger: "[data-featured-story]",
          start: "top 84%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      /* FILTER */

      gsap.from("[data-news-filter]", {
        scrollTrigger: {
          trigger: "[data-news-filter]",
          start: "top 88%",
        },
        y: 25,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
      });

      /* ARTICLE CARDS */

      gsap.from("[data-news-card]", {
        scrollTrigger: {
          trigger: "[data-news-grid]",
          start: "top 85%",
        },
        y: 45,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
      });

      /* LARGE BACKGROUND WORD */

      gsap.to("[data-editorial-word]", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: page,
          start: "top top",
          end: "70% bottom",
          scrub: 1.3,
        },
      });
    }, page);

    return () => context.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#f5f2e9] text-[#102e25]"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#090b0a] text-[#f5f2e9]">
        {/* ATMOSPHERE */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-[15%] top-[-35%] h-[750px] w-[750px] rounded-full bg-[#174c3d]/25 blur-[180px]" />

          <div className="absolute -left-[20%] bottom-[-50%] h-[650px] w-[650px] rounded-full bg-[#c6a15b]/10 blur-[180px]" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:100px_100px]" />
        </div>

        {/* LARGE EDITORIAL WORD */}

        <div
          data-editorial-word
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-0.16em]
            left-[-0.03em]
            select-none
            whitespace-nowrap
            font-display
            text-[clamp(10rem,28vw,30rem)]
            font-semibold
            leading-none
            tracking-[-0.09em]
            text-white/[0.025]
          "
        >
          NEWS
        </div>

        <div className="site-container relative z-10 pb-20 pt-40 sm:pb-24 sm:pt-44 lg:pb-32 lg:pt-52">
          {/* LABEL */}

          <div
            data-news-label
            className="mb-14 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c6a15b]" />

              <p className="text-[0.55rem] font-bold uppercase tracking-[0.28em] text-[#dfc27b]">
                News & Updates
              </p>
            </div>

            <p className="hidden text-[0.5rem] font-bold uppercase tracking-[0.2em] text-white/25 sm:block">
              LASMAYA
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-20">
            {/* TITLE */}

            <div
              data-news-heading
              className="font-display text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.79] tracking-[-0.065em]"
            >
              <div className="overflow-hidden">
                <span className="news-line block">
                  Stories.
                </span>
              </div>

              <div className="overflow-hidden">
                <span className="news-line block text-white/25">
                  Recognition.
                </span>
              </div>

              <div className="overflow-hidden">
                <span className="news-line block text-[#dfc27b]">
                  Impact.
                </span>
              </div>
            </div>

            {/* INTRO */}

            <div
              data-news-intro
              className="lg:pb-3"
            >
              <div className="mb-7 h-px w-full bg-gradient-to-r from-[#c6a15b] via-white/15 to-transparent" />

              <p className="max-w-[470px] text-[0.95rem] leading-[1.85] text-white/55">
                Follow announcements, nominee stories, award results,
                Awardee profiles and moments from across the Lagos State
                Man of the Year Award.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-[5px] w-[5px] rounded-full bg-[#dfc27b] shadow-[0_0_12px_rgba(223,194,123,.6)]" />

                <span className="text-[0.5rem] font-bold uppercase tracking-[0.2em] text-white/30">
                  The LASMAYA Journal
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED STORY
      ===================================================== */}

      <section className="relative">
        <div className="site-container py-20 sm:py-28 lg:py-36">
          {/* SECTION LABEL */}

          <div className="mb-10 flex items-center justify-between border-b border-[#102e25]/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-[#a9833f]" />

              <p className="text-[0.52rem] font-bold uppercase tracking-[0.24em] text-[#8d6c32]">
                Lead Story
              </p>
            </div>

            <span className="text-[0.48rem] font-bold uppercase tracking-[0.2em] text-[#102e25]/30">
              Latest
            </span>
          </div>

          <Link
            href={`/news/${featuredArticle.slug}`}
            data-featured-story
            className="group grid overflow-hidden bg-[#102e25] lg:grid-cols-[1.05fr_.95fr]"
          >
            {/* =============================================
                IMAGE
            ============================================= */}

            <div className="relative min-h-[460px] overflow-hidden sm:min-h-[580px] lg:min-h-[680px]">
              <img
                src={featuredArticle.image}
                alt="Engr. Abdulhafis Gbolahan Toriola"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-contain
                  object-bottom
                  transition-transform
                  duration-[1200ms]
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:scale-[1.035]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102e25]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#102e25]/35" />

              <span
                aria-hidden="true"
                className="absolute bottom-[-0.22em] left-[-0.05em] font-display text-[13rem] font-semibold leading-none tracking-[-0.09em] text-white/[0.035] sm:text-[18rem]"
              >
                14
              </span>
            </div>

            {/* =============================================
                CONTENT
            ============================================= */}

            <div className="relative flex min-h-[500px] flex-col p-7 text-[#f5f2e9] sm:p-10 lg:min-h-0 lg:p-14 xl:p-16">
              <span className="absolute left-0 top-0 h-[2px] w-[40%] bg-gradient-to-r from-[#dfc27b] to-transparent" />

              <div className="flex items-center justify-between">
                <span className="text-[0.5rem] font-bold uppercase tracking-[0.22em] text-[#dfc27b]">
                  {featuredArticle.category}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#dfc27b] transition-all duration-500 group-hover:border-[#dfc27b] group-hover:bg-[#dfc27b] group-hover:text-[#102e25]">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </span>
              </div>

              <div className="mt-auto pt-20">
                <div className="mb-6 flex items-center gap-3">
                  <CalendarDays
                    size={12}
                    className="text-[#dfc27b]/60"
                  />

                  <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-white/30">
                    {featuredArticle.date}
                  </span>
                </div>

                <h1 className="max-w-[650px] font-display text-[clamp(2.5rem,4.5vw,5rem)] font-medium leading-[0.96] tracking-[-0.045em]">
                  {featuredArticle.title}
                </h1>

                <p className="mt-7 max-w-[540px] text-[0.82rem] leading-[1.85] text-white/50">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <span className="text-[0.52rem] font-bold uppercase tracking-[0.2em] text-[#dfc27b]">
                    Read Story
                  </span>

                  <ArrowRight
                    size={13}
                    className="text-[#dfc27b] transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* =====================================================
          NEWS ARCHIVE
      ===================================================== */}

      <section className="relative border-t border-[#102e25]/10">
        <div className="site-container py-20 sm:py-28 lg:py-36">
          {/* =============================================
              ARCHIVE HEADING
          ============================================= */}

          <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#8d6c32]">
                Latest Stories
              </p>

              <h2 className="font-display text-[clamp(3.3rem,6.5vw,7rem)] font-medium leading-[0.86] tracking-[-0.055em]">
                From across
                <br />

                <span className="text-[#102e25]/25">
                  LASMAYA.
                </span>
              </h2>
            </div>

            <p className="max-w-[450px] text-[0.8rem] leading-[1.85] text-[#26352f]/55">
              Explore news from current and previous editions, including
              nominee announcements, public voting, results, Awardee
              profiles and stories from the LASMAYA archive.
            </p>
          </div>

          {/* =============================================
              FILTERS
          ============================================= */}

          <div
            data-news-filter
            className="mt-14 border-y border-[#102e25]/10 py-5 sm:mt-20"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* CATEGORY FILTER */}

              <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
                {categories.map((category) => {
                  const active = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`
                        shrink-0
                        rounded-full
                        border
                        px-4
                        py-2.5
                        text-[0.48rem]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        transition-all
                        duration-300
                        ${
                          active
                            ? "border-[#102e25] bg-[#102e25] text-[#f5f2e9]"
                            : "border-[#102e25]/10 text-[#102e25]/50 hover:border-[#a9833f]/50 hover:text-[#8d6c32]"
                        }
                      `}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* SEARCH */}

              <label className="group flex min-w-0 items-center gap-3 border-b border-[#102e25]/15 pb-2 lg:w-[260px]">
                <Search
                  size={14}
                  className="shrink-0 text-[#102e25]/35"
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search stories"
                  className="
                    w-full
                    bg-transparent
                    text-[0.72rem]
                    text-[#102e25]
                    outline-none
                    placeholder:text-[#102e25]/30
                  "
                />
              </label>
            </div>
          </div>

          {/* =============================================
              ARTICLES
          ============================================= */}

          <div
            data-news-grid
            className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3"
          >
            {filteredArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                data-news-card
                className="group block"
              >
                {/* IMAGE */}

                <div
                  className={`
                    relative
                    overflow-hidden
                    bg-[#e7e1d3]
                    ${
                      index % 4 === 0
                        ? "aspect-[4/5]"
                        : "aspect-[4/3]"
                    }
                  `}
                >
                  <img
                    src={article.image}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-all
                      duration-[900ms]
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:scale-[1.045]
                    "
                  />

                  <div className="absolute inset-0 bg-[#102e25]/0 transition-colors duration-500 group-hover:bg-[#102e25]/10" />

                  {/* ARROW */}

                  <span
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-11
                      w-11
                      translate-y-3
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f5f2e9]
                      text-[#102e25]
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                {/* META */}

                <div className="mt-6 flex items-center justify-between gap-5">
                  <span className="text-[0.48rem] font-bold uppercase tracking-[0.2em] text-[#8d6c32]">
                    {article.category}
                  </span>

                  <span className="text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-[#102e25]/30">
                    {article.date}
                  </span>
                </div>

                {/* TITLE */}

                <h3 className="mt-4 font-display text-[clamp(1.9rem,2.7vw,2.8rem)] leading-[1.02] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#8d6c32]">
                  {article.title}
                </h3>

                {/* EXCERPT */}

                <p className="mt-5 max-w-[420px] text-[0.72rem] leading-6 text-[#26352f]/50">
                  {article.excerpt}
                </p>

                {/* READ */}

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#a9833f]" />

                  <span className="text-[0.48rem] font-bold uppercase tracking-[0.19em] text-[#102e25]/45 transition-colors group-hover:text-[#8d6c32]">
                    Read Article
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* EMPTY SEARCH */}

          {filteredArticles.length === 0 && (
            <div className="border-b border-[#102e25]/10 py-24 text-center">
              <p className="font-display text-3xl tracking-[-0.035em]">
                No stories found.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 text-[0.52rem] font-bold uppercase tracking-[0.2em] text-[#8d6c32]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          ARCHIVE / CLOSING
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#102e25] text-[#f5f2e9]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[10%] top-[-60%] h-[600px] w-[600px] rounded-full bg-[#c6a15b]/10 blur-[150px]" />

          <span
            aria-hidden="true"
            className="absolute -bottom-[0.25em] right-[-0.04em] font-display text-[clamp(12rem,30vw,30rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.025]"
          >
            08
          </span>
        </div>

        <div className="site-container relative z-10 py-24 sm:py-32 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[.35fr_1fr] lg:gap-20">
            <div>
              <p className="text-[0.52rem] font-bold uppercase tracking-[0.25em] text-[#dfc27b]">
                LASMAYA Archive
              </p>
            </div>

            <div>
              <h2 className="max-w-[900px] font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.055em]">
                Every edition leaves
                <br />

                <span className="text-[#dfc27b]">
                  a story behind.
                </span>
              </h2>

              <p className="mt-9 max-w-[620px] text-[0.84rem] leading-[1.9] text-white/45">
                The LASMAYA news archive will preserve announcements,
                nominees, Awardees, ceremonies and stories from across the
                award&apos;s continuing history.
              </p>

              <Link
                href="/editions"
                className="group mt-10 inline-flex items-center gap-4"
              >
                <span className="text-[0.54rem] font-bold uppercase tracking-[0.21em] text-[#dfc27b]">
                  Explore Editions
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfc27b]/35 transition-all duration-500 group-hover:bg-[#dfc27b] group-hover:text-[#102e25]">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}