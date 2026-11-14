import { ArrowRight, GitCompareArrows, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { CatBreed, Language } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { BreedImage } from './BreedImage';

interface BreedCardProps {
  breed: CatBreed;
  language: Language;
  isFavorite: boolean;
  isCompared: boolean;
  onToggleFavorite: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelectBreed: (id: string) => void;
  index?: number;
}

export function BreedCard({
  breed,
  language,
  isFavorite,
  isCompared,
  onToggleFavorite,
  onToggleCompare,
  onSelectBreed,
  index = 0,
}: BreedCardProps) {
  const t = UI_TRANSLATIONS[language];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.24) }}
      className="group flex flex-col rounded-xl overflow-hidden bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25] transition-transform duration-200 hover:-translate-y-0.5"
    >
      {/* Large 4:3 Studio Portrait */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE5D8] dark:bg-[#222620]">
        <button
          type="button"
          onClick={() => onSelectBreed(breed.id)}
          className="block w-full h-full text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4A6B57]"
          aria-label={breed.name[language]}
        >
          <BreedImage
            src={breed.image}
            alt={breed.name[language]}
            fallbackTitle={breed.name[language]}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </button>

        {/* Functional Quick Actions overlaid discreetly */}
        <div className="absolute top-3 end-3 flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onToggleCompare(breed.id)}
            aria-label={isCompared ? t.catalog.inCompare : t.catalog.addToCompare}
            title={isCompared ? t.catalog.inCompare : t.catalog.addToCompare}
            className={`w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-md transition-colors duration-150 ${
              isCompared
                ? 'bg-[#4A6B57] text-white dark:bg-[#7BA38A] dark:text-[#111310]'
                : 'bg-[#F6F3EC]/88 dark:bg-[#111310]/80 text-[#161715] dark:text-[#F0EDE5] hover:bg-[#F6F3EC] dark:hover:bg-[#1E221D]'
            }`}
          >
            <GitCompareArrows className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onToggleFavorite(breed.id)}
            aria-label={isFavorite ? t.catalog.removeFavorite : t.catalog.addFavorite}
            title={isFavorite ? t.catalog.removeFavorite : t.catalog.addFavorite}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#F6F3EC]/88 dark:bg-[#111310]/80 text-[#161715] dark:text-[#F0EDE5] hover:bg-[#F6F3EC] dark:hover:bg-[#1E221D] backdrop-blur-md transition-colors duration-150"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite
                  ? 'fill-[#B58E3E] text-[#B58E3E] dark:fill-[#D4B05D] dark:text-[#D4B05D]'
                  : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Editorial Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Clean unboxed metadata with typographic separators */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#5C5E58] dark:text-[#A7A89F]">
          <span className="font-medium text-[#4A6B57] dark:text-[#7BA38A]">
            {breed.originCountry[language]}
          </span>
          <span aria-hidden="true">·</span>
          <span>{t.catalog.coats[breed.coatType]}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">
            #{breed.popularityRank}
          </span>
        </div>

        <h3 className="mt-2 font-editorial text-2xl font-semibold text-[#161715] dark:text-[#F0EDE5] leading-tight">
          <button
            type="button"
            onClick={() => onSelectBreed(breed.id)}
            className="text-start hover:text-[#4A6B57] dark:hover:text-[#7BA38A] transition-colors"
          >
            {breed.name[language]}
          </button>
        </h3>

        <p className="mt-2.5 text-sm text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed line-clamp-3 flex-1">
          {breed.shortDescription[language]}
        </p>

        {/* Popularity Subtle Meter + CTA */}
        <div className="mt-5 pt-4 border-t border-[#EBE5D8] dark:border-[#272B25] flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-[#5C5E58] dark:text-[#A7A89F]">
              {t.catalog.popularityLabel}
            </span>
            <div className="w-20 h-1.5 rounded-full bg-[#E2DDD0] dark:bg-[#2A2E28] overflow-hidden">
              <div
                className="h-full bg-[#B58E3E] dark:bg-[#D4B05D]"
                style={{ width: `${breed.popularityScore}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectBreed(breed.id)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#161715] text-[#F6F3EC] dark:bg-[#F0EDE5] dark:text-[#111310] hover:bg-[#4A6B57] dark:hover:bg-[#7BA38A] dark:hover:text-[#111310] transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <span>{t.catalog.discoverMore}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
