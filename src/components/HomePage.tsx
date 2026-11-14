import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GitCompareArrows,
  Pause,
  Play,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CareArticle, CatBreed, CatFact, Language, PageRoute } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { HERO_BANNER_IMAGE } from '../data/mediaAndContent';
import { BreedImage } from './BreedImage';
import { BreedCard } from './BreedCard';

interface HomePageProps {
  breeds: CatBreed[];
  facts: CatFact[];
  careArticles: CareArticle[];
  language: Language;
  favorites: string[];
  compareIds: string[];
  onToggleFavorite: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelectBreed: (id: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export function HomePage({
  breeds,
  facts,
  careArticles,
  language,
  favorites,
  compareIds,
  onToggleFavorite,
  onToggleCompare,
  onSelectBreed,
  onNavigate,
}: HomePageProps) {
  const t = UI_TRANSLATIONS[language];
  const heroRef = useRef<HTMLDivElement>(null);
  const midBannerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallaxY = useTransform(heroScroll, [0, 1], ['0%', '18%']);

  const { scrollYProgress: midScroll } = useScroll({
    target: midBannerRef,
    offset: ['start end', 'end start'],
  });
  const midParallaxY = useTransform(midScroll, [0, 1], ['-8%', '8%']);

  // Popular Breeds Carousel
  const popularBreeds = [...breeds]
    .sort((a, b) => a.popularityRank - b.popularityRank)
    .slice(0, 6);

  const [carouselIdx, setCarouselIdx] = useState(0);
  const [autoPlayCarousel, setAutoPlayCarousel] = useState(true);

  useEffect(() => {
    if (!autoPlayCarousel) return;
    const timer = window.setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % popularBreeds.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [autoPlayCarousel, popularBreeds.length]);

  // Facts Carousel
  const [factIdx, setFactIdx] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFactIdx((prev) => (prev + 1) % facts.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [facts.length]);

  const activeFeatured = popularBreeds[carouselIdx] || breeds[0];
  const latestBreeds = breeds.slice(14, 17); // Turkish Angora, American Shorthair, Burmese highlights

  const stats = [
    { value: String(breeds.length), label: t.home.statBreeds },
    { value: '12+', label: t.home.statCountries },
    { value: '5', label: t.home.statCoats },
    { value: '15+', label: t.home.statSections },
  ];

  return (
    <div className="overflow-x-clip">
      {/* 1. ANIMATED PARALLAX HERO BANNER */}
      <section
        ref={heroRef}
        className="relative min-h-[580px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#141513] text-[#F6F3EC]"
      >
        <motion.div
          style={{ y: heroParallaxY }}
          className="absolute inset-0 -top-12 -bottom-12 will-change-transform"
        >
          <BreedImage
            src={HERO_BANNER_IMAGE}
            alt="Catopedia Editorial Cat Portrait"
            className="w-full h-full object-cover object-center"
            fallbackTitle="CATOPEDIA"
            priority
          />
        </motion.div>

        {/* Measured Gradient Scrim for 4.5:1+ contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111310]/90 via-[#111310]/65 to-[#111310]/25 rtl:bg-gradient-to-l" />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#D4B05D] font-medium mb-4"
            >
              {t.hero.kicker}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-editorial text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.05] tracking-tight text-[#FBF9F5] max-w-2xl"
              style={{ textWrap: 'balance' }}
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 text-base sm:text-lg text-[#E2DDD0] leading-relaxed max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => onNavigate('catalog')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#D4B05D] text-[#111310] text-sm font-semibold hover:bg-[#E2C276] transition-colors duration-150 whitespace-nowrap shrink-0 shadow-sm"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('compare')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-[#FBF9F5] text-sm font-medium hover:bg-white/20 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <GitCompareArrows className="w-4 h-4" />
                <span>{t.hero.secondaryCta}</span>
              </button>
            </motion.div>
          </div>

          {/* Right-hand Interactive Specimen Spotlight Card */}
          {activeFeatured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:col-span-4"
            >
              <div className="rounded-xl bg-[#191C18]/88 backdrop-blur-md border border-white/15 p-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectBreed(activeFeatured.id)}
                  className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#252923]"
                >
                  <BreedImage
                    src={activeFeatured.image}
                    alt={activeFeatured.name[language]}
                    className="w-full h-full object-cover"
                    priority
                  />
                </button>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-widest text-[#D4B05D]">
                    {t.hero.featuredLabel} · #{activeFeatured.popularityRank}
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectBreed(activeFeatured.id)}
                    className="font-editorial text-xl font-semibold text-[#FBF9F5] hover:text-[#D4B05D] transition-colors truncate block w-full text-start"
                  >
                    {activeFeatured.name[language]}
                  </button>
                  <div className="text-xs text-[#C6C3B8] truncate">
                    {activeFeatured.originCountry[language]}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setCarouselIdx((p) => (p + 1) % popularBreeds.length)
                  }
                  aria-label="Next featured breed"
                  className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-[#FBF9F5] hover:bg-white/15 transition-colors shrink-0"
                >
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        <a
          href="#home-stats"
          className="hidden sm:inline-flex items-center gap-1.5 absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-[#E2DDD0]/80 hover:text-white transition-colors"
        >
          <span>{t.hero.scrollHint}</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </section>

      {/* 2. VERIFIED STATISTICS STRIP */}
      <section
        id="home-stats"
        className="border-b border-[#E2DDD0] dark:border-[#272B25] bg-[#FCFBF7] dark:bg-[#161915]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <p className="text-xs uppercase tracking-widest text-[#5C5E58] dark:text-[#A7A89F] mb-6 text-center sm:text-start">
            {t.home.statsTitle}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col border-t border-[#E2DDD0] dark:border-[#272B25] pt-4"
              >
                <span className="font-editorial text-4xl sm:text-5xl font-semibold text-[#161715] dark:text-[#F0EDE5] tabular-nums">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-[#5C5E58] dark:text-[#A7A89F]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MOST POPULAR BREEDS (Interactive Auto-Carousel + Grid) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
              {t.home.popularKicker}
            </p>
            <h2 className="mt-2 font-editorial text-3xl sm:text-4xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
              {t.home.popularTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F] max-w-2xl leading-relaxed">
              {t.home.popularSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setAutoPlayCarousel((p) => !p)}
              aria-label={autoPlayCarousel ? 'Pause carousel' : 'Play carousel'}
              className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center text-[#161715] dark:text-[#F0EDE5] hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors"
            >
              {autoPlayCarousel ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() =>
                setCarouselIdx((p) => (p - 1 + popularBreeds.length) % popularBreeds.length)
              }
              aria-label="Previous breed"
              className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center text-[#161715] dark:text-[#F0EDE5] hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors"
            >
              <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            </button>
            <button
              type="button"
              onClick={() =>
                setCarouselIdx((p) => (p + 1) % popularBreeds.length)
              }
              aria-label="Next breed"
              className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center text-[#161715] dark:text-[#F0EDE5] hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors"
            >
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('catalog')}
              className="ms-2 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#161715] dark:border-[#F0EDE5] text-xs font-semibold text-[#161715] dark:text-[#F0EDE5] hover:bg-[#161715] hover:text-[#F6F3EC] dark:hover:bg-[#F0EDE5] dark:hover:text-[#111310] transition-colors whitespace-nowrap shrink-0"
            >
              <span>{t.home.viewAllBreeds}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Highlighted Auto-Advancing Spotlight Split */}
        {activeFeatured && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-[#E2DDD0] dark:border-[#272B25] bg-[#FCFBF7] dark:bg-[#191C18] grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto lg:min-h-[360px] overflow-hidden bg-[#EBE5D8] dark:bg-[#222620]">
              <BreedImage
                src={activeFeatured.image}
                alt={activeFeatured.name[language]}
                className="w-full h-full object-cover"
                fallbackTitle={activeFeatured.name[language]}
              />
            </div>
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-[#B58E3E] dark:text-[#D4B05D] font-semibold">
                {activeFeatured.accessionCode} · #{activeFeatured.popularityRank} ·{' '}
                {activeFeatured.originCountry[language]}
              </div>
              <h3 className="mt-2 font-editorial text-3xl sm:text-4xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
                {activeFeatured.name[language]}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
                {activeFeatured.generalDescription[language]}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 border-y border-[#EBE5D8] dark:border-[#272B25] py-4 text-xs">
                <div>
                  <span className="text-[#5C5E58] dark:text-[#A7A89F] block">
                    {t.detail.lifespanLabel}
                  </span>
                  <span className="font-semibold tabular-nums text-[#161715] dark:text-[#F0EDE5]">
                    {activeFeatured.lifespanMin}–{activeFeatured.lifespanMax}{' '}
                    {t.detail.yearsUnit}
                  </span>
                </div>
                <div>
                  <span className="text-[#5C5E58] dark:text-[#A7A89F] block">
                    {t.detail.weightLabel}
                  </span>
                  <span className="font-semibold tabular-nums text-[#161715] dark:text-[#F0EDE5]">
                    {activeFeatured.weightRangeKg}
                  </span>
                </div>
                <div>
                  <span className="text-[#5C5E58] dark:text-[#A7A89F] block">
                    {t.detail.coatLabel}
                  </span>
                  <span className="font-semibold text-[#161715] dark:text-[#F0EDE5]">
                    {t.catalog.coats[activeFeatured.coatType]}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectBreed(activeFeatured.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4A6B57] text-white dark:bg-[#7BA38A] dark:text-[#111310] text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>{t.home.discoverMore}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
                <div className="flex items-center gap-1.5 ms-auto">
                  {popularBreeds.map((b, i) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setCarouselIdx(i)}
                      aria-label={b.name[language]}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        i === carouselIdx
                          ? 'w-6 bg-[#4A6B57] dark:bg-[#7BA38A]'
                          : 'w-2 bg-[#D6D0C1] dark:bg-[#333831]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Popular Breeds 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {popularBreeds.map((breed, idx) => (
            <BreedCard
              key={breed.id}
              breed={breed}
              language={language}
              isFavorite={favorites.includes(breed.id)}
              isCompared={compareIds.includes(breed.id)}
              onToggleFavorite={onToggleFavorite}
              onToggleCompare={onToggleCompare}
              onSelectBreed={onSelectBreed}
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* 4. PARALLAX EDITORIAL BANNER */}
      <section
        ref={midBannerRef}
        className="relative overflow-hidden bg-[#1D2620] text-[#F6F3EC] py-20 sm:py-28"
      >
        <motion.div
          style={{ y: midParallaxY }}
          className="absolute inset-0 -top-16 -bottom-16 opacity-35 will-change-transform"
        >
          <BreedImage
            src={breeds[8]?.image || HERO_BANNER_IMAGE}
            alt="Catopedia Comparator Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#131814]/90 via-[#19211B]/75 to-[#131814]/90" />

        <div className="relative z-10 max-w-[960px] mx-auto px-4 sm:px-6 text-center">
          <h2
            className="font-editorial text-3xl sm:text-5xl font-semibold text-[#FBF9F5] leading-tight mx-auto"
            style={{ textWrap: 'balance' }}
          >
            {t.home.bannerTitle}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D6D2C5] max-w-2xl mx-auto leading-relaxed">
            {t.home.bannerText}
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => onNavigate('compare')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#D4B05D] text-[#111310] text-sm font-semibold hover:bg-[#E2C276] transition-colors"
            >
              <GitCompareArrows className="w-4 h-4" />
              <span>{t.home.bannerCta}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. DID YOU KNOW? INTERACTIVE FACTS SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[#E2DDD0] dark:border-[#272B25]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
              {t.home.factsKicker}
            </p>
            <h2 className="mt-2 font-editorial text-3xl sm:text-4xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
              {t.home.factsTitle}
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setFactIdx((p) => (p - 1 + facts.length) % facts.length)
                }
                aria-label="Previous fact"
                className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => setFactIdx((p) => (p + 1) % facts.length)}
                aria-label="Next fact"
                className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors"
              >
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
              <span className="text-xs tabular-nums text-[#5C5E58] dark:text-[#A7A89F] ms-2">
                0{factIdx + 1} / 0{facts.length}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            {facts[factIdx] && (
              <motion.div
                key={facts[factIdx].id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]"
              >
                <span className="text-xs uppercase tracking-widest text-[#B58E3E] dark:text-[#D4B05D] font-semibold">
                  {facts[factIdx].category[language]}
                </span>
                <h3 className="mt-2 font-editorial text-2xl sm:text-3xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
                  {facts[factIdx].title[language]}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
                  {facts[factIdx].fact[language]}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 6. LATEST ADDITIONS & CARE GUIDE PREVIEW */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
              {t.home.latestKicker}
            </p>
            <h2 className="mt-2 font-editorial text-3xl sm:text-4xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
              {t.home.latestTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F]">
              {t.home.latestSubtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {latestBreeds.map((breed, idx) => (
            <BreedCard
              key={breed.id}
              breed={breed}
              language={language}
              isFavorite={favorites.includes(breed.id)}
              isCompared={compareIds.includes(breed.id)}
              onToggleFavorite={onToggleFavorite}
              onToggleCompare={onToggleCompare}
              onSelectBreed={onSelectBreed}
              index={idx}
            />
          ))}
        </div>

        {/* Care Guides Quick Strip */}
        <div className="mt-16 pt-14 border-t border-[#E2DDD0] dark:border-[#272B25] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h3 className="font-editorial text-3xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
              {t.home.carePreviewTitle}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
              {t.home.carePreviewSubtitle}
            </p>
            <button
              type="button"
              onClick={() => onNavigate('care')}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#161715] text-[#F6F3EC] dark:bg-[#F0EDE5] dark:text-[#111310] text-sm font-semibold hover:bg-[#4A6B57] dark:hover:bg-[#7BA38A] transition-colors"
            >
              <span>{t.home.readGuide}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {careArticles.slice(0, 2).map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => onNavigate('care')}
                className="text-start p-5 rounded-xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25] hover:border-[#4A6B57] dark:hover:border-[#7BA38A] transition-colors"
              >
                <span className="text-xs font-semibold tabular-nums text-[#B58E3E] dark:text-[#D4B05D]">
                  {article.number} · {article.category[language]}
                </span>
                <h4 className="mt-1.5 font-editorial text-xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
                  {article.title[language]}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#5C5E58] dark:text-[#A7A89F] line-clamp-2">
                  {article.lead[language]}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
