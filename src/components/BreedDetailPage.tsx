import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Baby,
  Check,
  ChevronLeft,
  ChevronRight,
  GitCompareArrows,
  Heart,
  PawPrint,
  Scissors,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Utensils,
  Volume2,
  X,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CatBreed, Language } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { BreedImage } from './BreedImage';
import { DocumentaryPlayer } from './DocumentaryPlayer';

interface BreedDetailPageProps {
  breed: CatBreed;
  allBreeds: CatBreed[];
  language: Language;
  isFavorite: boolean;
  isCompared: boolean;
  onToggleFavorite: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelectBreed: (id: string) => void;
  onBackToCatalog: () => void;
}

export function BreedDetailPage({
  breed,
  allBreeds,
  language,
  isFavorite,
  isCompared,
  onToggleFavorite,
  onToggleCompare,
  onSelectBreed,
  onBackToCatalog,
}: BreedDetailPageProps) {
  const t = UI_TRANSLATIONS[language];
  const [activeFrameIdx, setActiveFrameIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveFrameIdx(0);
    setLightboxOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [breed.id]);

  const currentIdx = allBreeds.findIndex((b) => b.id === breed.id);
  const prevBreed =
    allBreeds[(currentIdx - 1 + allBreeds.length) % allBreeds.length];
  const nextBreed = allBreeds[(currentIdx + 1) % allBreeds.length];

  const activeFrame = breed.gallery[activeFrameIdx] || breed.gallery[0];

  const metricRows = [
    { key: 'affection', label: t.detail.metrics.affection, value: breed.metrics.affection, Icon: Heart },
    { key: 'activity', label: t.detail.metrics.activity, value: breed.metrics.activity, Icon: Activity },
    { key: 'intelligence', label: t.detail.metrics.intelligence, value: breed.metrics.intelligence, Icon: Sparkles },
    { key: 'grooming', label: t.detail.metrics.grooming, value: breed.metrics.grooming, Icon: Scissors },
    { key: 'shedding', label: t.detail.metrics.shedding, value: breed.metrics.shedding, Icon: PawPrint },
    { key: 'childFriendly', label: t.detail.metrics.childFriendly, value: breed.metrics.childFriendly, Icon: Baby },
    { key: 'petFriendly', label: t.detail.metrics.petFriendly, value: breed.metrics.petFriendly, Icon: PawPrint },
    { key: 'vocalization', label: t.detail.metrics.vocalization, value: breed.metrics.vocalization, Icon: Volume2 },
  ];

  return (
    <article className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Top Breadcrumb & Prev/Next Breed Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2DDD0] dark:border-[#272B25]">
        <button
          type="button"
          onClick={onBackToCatalog}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5C5E58] dark:text-[#A7A89F] hover:text-[#161715] dark:hover:text-[#F0EDE5] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          <span>{t.detail.backToCatalog}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelectBreed(prevBreed.id)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] text-xs font-medium hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5 rtl:rotate-180" />
            <span className="hidden sm:inline">{prevBreed.name[language]}</span>
          </button>
          <button
            type="button"
            onClick={() => onSelectBreed(nextBreed.id)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] text-xs font-medium hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors"
          >
            <span className="hidden sm:inline">{nextBreed.name[language]}</span>
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>
      </div>

      {/* Hero Split: HD Gallery + Accession Monograph Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: HD Gallery Viewer */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-[#E2DDD0] dark:border-[#272B25] bg-[#EBE5D8] dark:bg-[#1D201B]">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="block w-full aspect-[4/3] overflow-hidden cursor-zoom-in"
              aria-label={t.gallery.openLightbox}
            >
              <BreedImage
                src={activeFrame.url}
                alt={activeFrame.caption[language]}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  activeFrame.focusClass || ''
                }`}
                priority
              />
            </button>
          </div>
          <p className="mt-2.5 text-xs font-serif italic text-[#5C5E58] dark:text-[#A7A89F]">
            {activeFrame.caption[language]}
          </p>

          {/* Gallery Thumbnails */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {breed.gallery.map((frame, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveFrameIdx(i)}
                className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                  i === activeFrameIdx
                    ? 'border-[#4A6B57] dark:border-[#7BA38A]'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <BreedImage
                  src={frame.url}
                  alt={frame.caption[language]}
                  className={`w-full h-full object-cover ${frame.focusClass || ''}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Accession Identity & Technical Sheet */}
        <div className="lg:col-span-6">
          <div className="text-xs uppercase tracking-[0.16em] text-[#B58E3E] dark:text-[#D4B05D] font-semibold">
            {t.detail.accession} {breed.accessionCode} · {breed.originCountry[language]}
          </div>

          <h1 className="mt-2 font-editorial text-4xl sm:text-5xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
            {breed.name[language]}
          </h1>

          <p className="mt-4 text-base text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
            {breed.generalDescription[language]}
          </p>

          {/* Action Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onToggleFavorite(breed.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                isFavorite
                  ? 'border-[#B58E3E] bg-[#B58E3E]/12 text-[#8C6A22] dark:text-[#D4B05D]'
                  : 'border-[#D8D2C3] dark:border-[#2C312A] hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
              <span>
                {isFavorite ? t.catalog.removeFavorite : t.catalog.addFavorite}
              </span>
            </button>

            <button
              type="button"
              onClick={() => onToggleCompare(breed.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isCompared
                  ? 'bg-[#4A6B57] text-white dark:bg-[#7BA38A] dark:text-[#111310]'
                  : 'bg-[#161715] text-[#F6F3EC] dark:bg-[#F0EDE5] dark:text-[#111310] hover:bg-[#4A6B57]'
              }`}
            >
              <GitCompareArrows className="w-4 h-4" />
              <span>
                {isCompared ? t.catalog.inCompare : t.detail.compareThisBreed}
              </span>
            </button>
          </div>

          {/* Museum Accession Metadata Grid */}
          <dl className="mt-8 border-t border-[#E2DDD0] dark:border-[#272B25] divide-y divide-[#E2DDD0] dark:divide-[#272B25] text-sm">
            <div className="py-3 flex justify-between gap-4">
              <dt className="text-[#5C5E58] dark:text-[#A7A89F]">{t.detail.originLabel}</dt>
              <dd className="font-medium text-end">{breed.originCountry[language]}</dd>
            </div>
            <div className="py-3 flex justify-between gap-4">
              <dt className="text-[#5C5E58] dark:text-[#A7A89F]">{t.detail.sizeLabel}</dt>
              <dd className="font-medium text-end">
                {t.catalog.sizes[breed.sizeCategory]} ({breed.heightRangeCm})
              </dd>
            </div>
            <div className="py-3 flex justify-between gap-4">
              <dt className="text-[#5C5E58] dark:text-[#A7A89F]">{t.detail.weightLabel}</dt>
              <dd className="font-medium tabular-nums text-end">{breed.weightRangeKg}</dd>
            </div>
            <div className="py-3 flex justify-between gap-4">
              <dt className="text-[#5C5E58] dark:text-[#A7A89F]">{t.detail.lifespanLabel}</dt>
              <dd className="font-medium tabular-nums text-end">
                {breed.lifespanMin}–{breed.lifespanMax} {t.detail.yearsUnit}
              </dd>
            </div>
            <div className="py-3 flex justify-between gap-4">
              <dt className="text-[#5C5E58] dark:text-[#A7A89F]">{t.detail.coatLabel}</dt>
              <dd className="font-medium text-end">{t.catalog.coats[breed.coatType]}</dd>
            </div>
            <div className="py-3 flex justify-between gap-4">
              <dt className="text-[#5C5E58] dark:text-[#A7A89F]">{t.detail.popularityRank}</dt>
              <dd className="font-medium tabular-nums text-end">
                #{breed.popularityRank} / {allBreeds.length}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Visually Rich Behavioral & Technical Profile Sheet */}
      <section className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]">
        <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#161715] dark:text-[#F0EDE5] mb-6">
          {t.detail.specsTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricRows.map(({ key, label, value, Icon }) => (
            <div key={key} className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="inline-flex items-center gap-1.5 text-[#161715] dark:text-[#F0EDE5]">
                  <Icon className="w-3.5 h-3.5 text-[#4A6B57] dark:text-[#7BA38A]" />
                  <span>{label}</span>
                </span>
                <span className="tabular-nums text-[#5C5E58] dark:text-[#A7A89F]">
                  {value}/5
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`h-2 rounded-sm transition-colors ${
                      step <= value
                        ? 'bg-[#4A6B57] dark:bg-[#7BA38A]'
                        : 'bg-[#E2DDD0] dark:bg-[#2A2E28]'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Monograph Sections (Asymmetric Reading Layout) */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Essay Column */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
              {t.detail.sections.originHistory}
            </h2>
            <p className="mt-3 text-base text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
              {breed.originHistory[language]}
            </p>
          </motion.section>

          <section className="pt-8 border-t border-[#E2DDD0] dark:border-[#272B25]">
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
              {t.detail.sections.coatColors}
            </h2>
            <p className="mt-3 text-base text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
              {breed.coatColorsAndPatterns[language]}
            </p>
          </section>

          <section className="pt-8 border-t border-[#E2DDD0] dark:border-[#272B25]">
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
              {t.detail.sections.temperament}
            </h2>
            <p className="mt-3 text-base text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
              {breed.temperamentDetail[language]}
            </p>
            <h3 className="mt-6 font-editorial text-xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
              {t.detail.sections.familyBehavior}
            </h3>
            <p className="mt-2 text-base text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
              {breed.behaviorWithFamily[language]}
            </p>
          </section>

          <section className="pt-8 border-t border-[#E2DDD0] dark:border-[#272B25] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-editorial text-2xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
                {t.detail.sections.activity}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
                {breed.activityDetail[language]}
              </p>
            </div>
            <div>
              <h2 className="font-editorial text-2xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
                {t.detail.sections.grooming}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
                {breed.groomingDetail[language]}
              </p>
            </div>
          </section>

          {/* Documentary Video Presentation */}
          <section className="pt-8 border-t border-[#E2DDD0] dark:border-[#272B25]">
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#161715] dark:text-[#F0EDE5] mb-4">
              {t.detail.sections.videoPresentation}
            </h2>
            <DocumentaryPlayer
              title={`${breed.name[language]} — ${t.detail.sections.videoPresentation}`}
              summary={breed.videoSummary[language]}
              duration={breed.videoDuration}
              frames={breed.gallery.map((g) => g.url)}
              chapters={breed.videoChapters}
              language={language}
            />
          </section>
        </div>

        {/* Right Margin Notes: Nutrition, Health, Peculiarities, Advantages */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#4A6B57] dark:text-[#7BA38A]">
              <Utensils className="w-4 h-4" />
              <span>{t.detail.sections.nutrition}</span>
            </div>
            <p className="mt-3 text-sm text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
              {breed.nutritionAdvice[language]}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#9A5B25] dark:text-[#D4B05D]">
              <Stethoscope className="w-4 h-4" />
              <span>{t.detail.sections.health}</span>
            </div>
            <p className="mt-3 text-sm text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
              {breed.healthPredispositions[language]}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#4A6B57] dark:text-[#7BA38A]">
              <ShieldAlert className="w-4 h-4" />
              <span>{t.detail.sections.physicalPeculiarities}</span>
            </div>
            <p className="mt-3 text-sm text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
              {breed.physicalPeculiarities[language]}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#EFECE3]/70 dark:bg-[#1D211C] border border-[#E2DDD0] dark:border-[#272B25]">
            <h3 className="font-editorial text-xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
              {t.detail.sections.advantages}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {breed.advantagesAndTraits[language].map((trait) => (
                <li
                  key={trait}
                  className="flex items-start gap-2.5 text-sm text-[#353733] dark:text-[#D1CEC4]"
                >
                  <Check className="w-4 h-4 text-[#4A6B57] dark:text-[#7BA38A] shrink-0 mt-0.5" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Bottom Prev / Next Navigation */}
      <div className="mt-16 pt-8 border-t border-[#E2DDD0] dark:border-[#272B25] flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onSelectBreed(prevBreed.id)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[#D8D2C3] dark:border-[#2C312A] hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors text-start"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180 shrink-0" />
          <div>
            <span className="block text-[11px] text-[#5C5E58] dark:text-[#A7A89F]">
              {t.detail.previousBreed}
            </span>
            <span className="font-editorial text-lg font-semibold">
              {prevBreed.name[language]}
            </span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onSelectBreed(nextBreed.id)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[#D8D2C3] dark:border-[#2C312A] hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors text-end"
        >
          <div>
            <span className="block text-[11px] text-[#5C5E58] dark:text-[#A7A89F]">
              {t.detail.nextBreed}
            </span>
            <span className="font-editorial text-lg font-semibold">
              {nextBreed.name[language]}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
        </button>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-4 end-4 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeFrame.url}
              alt={activeFrame.caption[language]}
              referrerPolicy="no-referrer"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="mt-3 text-center text-sm text-[#E2DDD0] font-serif italic">
              {activeFrame.caption[language]}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
