import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { motion } from 'motion/react';
import { CatBreed, CoatCategory, Language } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { BreedImage } from './BreedImage';

interface GalleryPageProps {
  breeds: CatBreed[];
  language: Language;
  onSelectBreed: (id: string) => void;
}

export function GalleryPage({
  breeds,
  language,
  onSelectBreed,
}: GalleryPageProps) {
  const t = UI_TRANSLATIONS[language];
  const [coatFilter, setCoatFilter] = useState<'all' | CoatCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    coatFilter === 'all'
      ? breeds
      : breeds.filter((b) => b.coatType === coatFilter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((p) => (p === null ? 0 : (p + 1) % filtered.length));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((p) =>
          p === null ? 0 : (p - 1 + filtered.length) % filtered.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filtered.length]);

  const activeItem =
    lightboxIndex !== null ? filtered[lightboxIndex] || null : null;

  const tabs: { key: 'all' | CoatCategory; label: string }[] = [
    { key: 'all', label: t.gallery.filterAll },
    { key: 'short', label: t.catalog.coats.short },
    { key: 'semi-long', label: t.catalog.coats['semi-long'] },
    { key: 'long', label: t.catalog.coats.long },
    { key: 'curly', label: t.catalog.coats.curly },
    { key: 'hairless', label: t.catalog.coats.hairless },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl mb-8">
        <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
          {t.gallery.kicker}
        </p>
        <h1 className="mt-2 font-editorial text-4xl sm:text-5xl font-semibold">
          {t.gallery.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F]">
          {t.gallery.subtitle}
        </p>
      </div>

      {/* Functional Segmented Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#EFECE3] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25] w-fit mb-10">
        {tabs.map((tab) => {
          const active = coatFilter === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setCoatFilter(tab.key);
                setLightboxIndex(null);
              }}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                active
                  ? 'bg-[#FCFBF7] dark:bg-[#262B24] text-[#161715] dark:text-[#F0EDE5] shadow-xs'
                  : 'text-[#5C5E58] dark:text-[#A7A89F] hover:text-[#161715] dark:hover:text-[#F0EDE5]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((breed, idx) => (
          <motion.figure
            key={breed.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.2) }}
            className="group rounded-xl overflow-hidden bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE5D8] dark:bg-[#222620]">
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="block w-full h-full cursor-zoom-in"
                aria-label={breed.name[language]}
              >
                <BreedImage
                  src={breed.image}
                  alt={breed.name[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={t.gallery.openLightbox}
                className="absolute bottom-3 end-3 w-9 h-9 rounded-lg bg-[#111310]/75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Expand className="w-4 h-4" />
              </button>
            </div>
            <figcaption className="p-4 flex items-center justify-between gap-3">
              <div>
                <div className="font-editorial text-xl font-semibold">
                  {breed.name[language]}
                </div>
                <div className="text-xs text-[#5C5E58] dark:text-[#A7A89F]">
                  {breed.originCountry[language]} · {t.catalog.coats[breed.coatType]}
                </div>
              </div>
              <button
                type="button"
                onClick={() => onSelectBreed(breed.id)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#4A6B57] dark:text-[#7BA38A] hover:underline whitespace-nowrap shrink-0"
              >
                <span>{t.gallery.viewBreed}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Lightbox */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
            className="absolute top-4 end-4 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + filtered.length) % filtered.length
              );
            }}
            aria-label="Previous"
            className="absolute start-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25"
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filtered.length);
            }}
            aria-label="Next"
            className="absolute end-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25"
          >
            <ChevronRight className="w-5 h-5 rtl:rotate-180" />
          </button>

          <div
            className="max-w-4xl w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeItem.image}
              alt={activeItem.name[language]}
              referrerPolicy="no-referrer"
              className="w-full max-h-[78vh] object-contain rounded-lg mx-auto"
            />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-white">
              <span className="font-editorial text-2xl font-semibold">
                {activeItem.name[language]}
              </span>
              <span className="text-xs text-[#C6C3B8]">
                {activeItem.originCountry[language]}
              </span>
              <button
                type="button"
                onClick={() => {
                  setLightboxIndex(null);
                  onSelectBreed(activeItem.id);
                }}
                className="px-4 py-1.5 rounded-lg bg-[#D4B05D] text-[#111310] text-xs font-semibold"
              >
                {t.gallery.viewBreed}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
