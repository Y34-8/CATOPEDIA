import { useMemo, useState } from 'react';
import { RotateCcw, Search } from 'lucide-react';
import {
  CatBreed,
  CoatCategory,
  Language,
  SizeCategory,
  TemperamentTag,
} from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { BreedCard } from './BreedCard';

interface CatalogPageProps {
  breeds: CatBreed[];
  language: Language;
  favorites: string[];
  compareIds: string[];
  onToggleFavorite: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelectBreed: (id: string) => void;
}

type SortKey = 'popular' | 'alpha-asc' | 'alpha-desc' | 'lifespan';

export function CatalogPage({
  breeds,
  language,
  favorites,
  compareIds,
  onToggleFavorite,
  onToggleCompare,
  onSelectBreed,
}: CatalogPageProps) {
  const t = UI_TRANSLATIONS[language];

  const [query, setQuery] = useState('');
  const [originFilter, setOriginFilter] = useState<string>('all');
  const [sizeFilter, setSizeFilter] = useState<string>('all');
  const [coatFilter, setCoatFilter] = useState<string>('all');
  const [temperamentFilter, setTemperamentFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortKey>('popular');

  const hasActiveFilters =
    query.trim() !== '' ||
    originFilter !== 'all' ||
    sizeFilter !== 'all' ||
    coatFilter !== 'all' ||
    temperamentFilter !== 'all';

  const resetAll = () => {
    setQuery('');
    setOriginFilter('all');
    setSizeFilter('all');
    setCoatFilter('all');
    setTemperamentFilter('all');
    setSortBy('popular');
  };

  const filteredBreeds = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = breeds.filter((b) => {
      if (originFilter !== 'all' && b.originRegion !== originFilter) return false;
      if (sizeFilter !== 'all' && b.sizeCategory !== (sizeFilter as SizeCategory)) return false;
      if (coatFilter !== 'all' && b.coatType !== (coatFilter as CoatCategory)) return false;
      if (
        temperamentFilter !== 'all' &&
        !b.temperamentTags.includes(temperamentFilter as TemperamentTag)
      ) {
        return false;
      }
      if (!q) return true;
      const haystack = [
        b.name.fr,
        b.name.en,
        b.name.ar,
        b.originCountry[language],
        b.shortDescription[language],
        b.coatColorsAndPatterns[language],
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });

    return [...list].sort((a, b) => {
      if (sortBy === 'popular') return a.popularityRank - b.popularityRank;
      if (sortBy === 'alpha-asc') {
        return a.name[language].localeCompare(b.name[language], language);
      }
      if (sortBy === 'alpha-desc') {
        return b.name[language].localeCompare(a.name[language], language);
      }
      return b.lifespanMax - a.lifespanMax;
    });
  }, [
    breeds,
    query,
    originFilter,
    sizeFilter,
    coatFilter,
    temperamentFilter,
    sortBy,
    language,
  ]);

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page Header */}
      <div className="max-w-2xl mb-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
          {t.catalog.kicker}
        </p>
        <h1 className="mt-2 font-editorial text-4xl sm:text-5xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
          {t.catalog.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
          {t.catalog.subtitle}
        </p>
      </div>

      {/* Search, Filters & Sort Controls */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25] mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Search Input */}
          <div className="lg:col-span-4 relative">
            <Search className="w-4 h-4 text-[#5C5E58] dark:text-[#A7A89F] absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.catalog.searchPlaceholder}
              className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-sm text-[#161715] dark:text-[#F0EDE5] placeholder:text-[#7A7C74] focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
            />
          </div>

          {/* 4 Filters + Sort */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <select
              aria-label={t.catalog.filterOrigin}
              value={originFilter}
              onChange={(e) => setOriginFilter(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-xs sm:text-sm text-[#161715] dark:text-[#F0EDE5] focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
            >
              <option value="all">{t.catalog.allOrigins}</option>
              <option value="north-america">{t.catalog.origins['north-america']}</option>
              <option value="europe">{t.catalog.origins.europe}</option>
              <option value="asia">{t.catalog.origins.asia}</option>
              <option value="middle-east">{t.catalog.origins['middle-east']}</option>
            </select>

            <select
              aria-label={t.catalog.filterSize}
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-xs sm:text-sm text-[#161715] dark:text-[#F0EDE5] focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
            >
              <option value="all">{t.catalog.allSizes}</option>
              <option value="small">{t.catalog.sizes.small}</option>
              <option value="medium">{t.catalog.sizes.medium}</option>
              <option value="large">{t.catalog.sizes.large}</option>
            </select>

            <select
              aria-label={t.catalog.filterCoat}
              value={coatFilter}
              onChange={(e) => setCoatFilter(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-xs sm:text-sm text-[#161715] dark:text-[#F0EDE5] focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
            >
              <option value="all">{t.catalog.allCoats}</option>
              <option value="short">{t.catalog.coats.short}</option>
              <option value="semi-long">{t.catalog.coats['semi-long']}</option>
              <option value="long">{t.catalog.coats.long}</option>
              <option value="curly">{t.catalog.coats.curly}</option>
              <option value="hairless">{t.catalog.coats.hairless}</option>
            </select>

            <select
              aria-label={t.catalog.filterTemperament}
              value={temperamentFilter}
              onChange={(e) => setTemperamentFilter(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-xs sm:text-sm text-[#161715] dark:text-[#F0EDE5] focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
            >
              <option value="all">{t.catalog.allTemperaments}</option>
              <option value="calm">{t.catalog.temperaments.calm}</option>
              <option value="active">{t.catalog.temperaments.active}</option>
              <option value="affectionate">{t.catalog.temperaments.affectionate}</option>
              <option value="independent">{t.catalog.temperaments.independent}</option>
              <option value="social">{t.catalog.temperaments.social}</option>
            </select>

            <select
              aria-label={t.catalog.sortLabel}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="col-span-2 sm:col-span-1 px-3 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-xs sm:text-sm font-medium text-[#161715] dark:text-[#F0EDE5] focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
            >
              <option value="popular">{t.catalog.sortPopular}</option>
              <option value="alpha-asc">{t.catalog.sortAlphaAsc}</option>
              <option value="alpha-desc">{t.catalog.sortAlphaDesc}</option>
              <option value="lifespan">{t.catalog.sortLifespan}</option>
            </select>
          </div>
        </div>

        {/* Status / Reset row */}
        <div className="mt-4 pt-4 border-t border-[#EBE5D8] dark:border-[#272B25] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-[#5C5E58] dark:text-[#A7A89F] tabular-nums">
            <strong className="text-[#161715] dark:text-[#F0EDE5]">
              {filteredBreeds.length}
            </strong>{' '}
            / {breeds.length} {t.catalog.resultsCount}
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 text-[#4A6B57] dark:text-[#7BA38A] font-semibold hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.catalog.resetFilters}</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Grid or Empty State */}
      {filteredBreeds.length === 0 ? (
        <div className="py-16 px-6 text-center rounded-2xl border border-[#E2DDD0] dark:border-[#272B25] bg-[#FCFBF7] dark:bg-[#191C18]">
          <h3 className="font-editorial text-2xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
            {t.catalog.noResultsTitle}
          </h3>
          <p className="mt-2 text-sm text-[#5C5E58] dark:text-[#A7A89F]">
            {t.catalog.noResultsText}
          </p>
          <button
            type="button"
            onClick={resetAll}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4A6B57] text-white dark:bg-[#7BA38A] dark:text-[#111310] text-sm font-semibold"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.catalog.resetFilters}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBreeds.map((breed, idx) => (
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
      )}
    </section>
  );
}
