import { ArrowLeftRight, ArrowRight } from 'lucide-react';
import { CatBreed, Language } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { BreedImage } from './BreedImage';

interface ComparePageProps {
  breeds: CatBreed[];
  selectedIds: string[];
  onChangeSelected: (ids: string[]) => void;
  onSelectBreed: (id: string) => void;
  language: Language;
}

export function ComparePage({
  breeds,
  selectedIds,
  onChangeSelected,
  onSelectBreed,
  language,
}: ComparePageProps) {
  const t = UI_TRANSLATIONS[language];

  const firstId = selectedIds[0] || breeds[0]?.id;
  const secondId = selectedIds[1] || breeds[4]?.id;

  const breedA = breeds.find((b) => b.id === firstId) || breeds[0];
  const breedB = breeds.find((b) => b.id === secondId) || breeds[1];

  const handleSelectA = (id: string) => {
    onChangeSelected([id, breedB.id]);
  };

  const handleSelectB = (id: string) => {
    onChangeSelected([breedA.id, id]);
  };

  const handleSwap = () => {
    onChangeSelected([breedB.id, breedA.id]);
  };

  const metricKeys: (keyof CatBreed['metrics'])[] = [
    'affection',
    'activity',
    'intelligence',
    'grooming',
    'shedding',
    'childFriendly',
    'petFriendly',
    'vocalization',
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl mb-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
          {t.compare.kicker}
        </p>
        <h1 className="mt-2 font-editorial text-4xl sm:text-5xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
          {t.compare.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F]">
          {t.compare.subtitle}
        </p>
      </div>

      {/* Selector Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25] grid grid-cols-1 md:grid-cols-11 gap-4 items-end mb-10">
        <div className="md:col-span-5">
          <label className="block text-xs font-semibold text-[#5C5E58] dark:text-[#A7A89F] mb-1.5">
            {t.compare.selectFirst}
          </label>
          <select
            value={breedA.id}
            onChange={(e) => handleSelectA(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
          >
            {breeds.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name[language]} ({b.originCountry[language]})
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-1 flex justify-center">
          <button
            type="button"
            onClick={handleSwap}
            title={t.compare.swapBreeds}
            aria-label={t.compare.swapBreeds}
            className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>

        <div className="md:col-span-5">
          <label className="block text-xs font-semibold text-[#5C5E58] dark:text-[#A7A89F] mb-1.5">
            {t.compare.selectSecond}
          </label>
          <select
            value={breedB.id}
            onChange={(e) => handleSelectB(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
          >
            {breeds.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name[language]} ({b.originCountry[language]})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-Side Hero Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
        {[breedA, breedB].map((b, idx) => (
          <div
            key={`${b.id}-${idx}`}
            className="rounded-2xl overflow-hidden border border-[#E2DDD0] dark:border-[#272B25] bg-[#FCFBF7] dark:bg-[#191C18]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#EBE5D8] dark:bg-[#222620]">
              <BreedImage
                src={b.image}
                alt={b.name[language]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-[#4A6B57] dark:text-[#7BA38A] font-medium">
                {b.originCountry[language]} · #{b.popularityRank}
              </div>
              <h2 className="mt-1 font-editorial text-3xl font-semibold">
                {b.name[language]}
              </h2>
              <p className="mt-2 text-sm text-[#5C5E58] dark:text-[#A7A89F]">
                {b.shortDescription[language]}
              </p>
              <button
                type="button"
                onClick={() => onSelectBreed(b.id)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A6B57] dark:text-[#7BA38A] hover:underline"
              >
                <span>{t.catalog.discoverMore}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Physical Data Comparison Table */}
      <div className="rounded-2xl border border-[#E2DDD0] dark:border-[#272B25] bg-[#FCFBF7] dark:bg-[#191C18] overflow-hidden mb-10">
        <div className="px-6 py-4 border-b border-[#E2DDD0] dark:border-[#272B25] bg-[#EFECE3]/60 dark:bg-[#1F231E]">
          <h3 className="font-editorial text-xl font-semibold">
            {t.compare.physicalProfile}
          </h3>
        </div>
        <div className="divide-y divide-[#E2DDD0] dark:divide-[#272B25] text-sm">
          {[
            {
              label: t.detail.originLabel,
              a: breedA.originCountry[language],
              b: breedB.originCountry[language],
            },
            {
              label: t.detail.sizeLabel,
              a: `${t.catalog.sizes[breedA.sizeCategory]} (${breedA.heightRangeCm})`,
              b: `${t.catalog.sizes[breedB.sizeCategory]} (${breedB.heightRangeCm})`,
            },
            {
              label: t.detail.weightLabel,
              a: breedA.weightRangeKg,
              b: breedB.weightRangeKg,
            },
            {
              label: t.detail.lifespanLabel,
              a: `${breedA.lifespanMin}–${breedA.lifespanMax} ${t.detail.yearsUnit}`,
              b: `${breedB.lifespanMin}–${breedB.lifespanMax} ${t.detail.yearsUnit}`,
            },
            {
              label: t.detail.coatLabel,
              a: t.catalog.coats[breedA.coatType],
              b: t.catalog.coats[breedB.coatType],
            },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-3.5"
            >
              <div className="font-medium text-[#5C5E58] dark:text-[#A7A89F]">
                {row.label}
              </div>
              <div className="font-medium tabular-nums">{row.a}</div>
              <div className="font-medium tabular-nums">{row.b}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Behavioral & Care Metrics Dual Bars */}
      <div className="rounded-2xl border border-[#E2DDD0] dark:border-[#272B25] bg-[#FCFBF7] dark:bg-[#191C18] overflow-hidden mb-10">
        <div className="px-6 py-4 border-b border-[#E2DDD0] dark:border-[#272B25] bg-[#EFECE3]/60 dark:bg-[#1F231E]">
          <h3 className="font-editorial text-xl font-semibold">
            {t.compare.behavioralProfile}
          </h3>
        </div>
        <div className="divide-y divide-[#E2DDD0] dark:divide-[#272B25] p-6 flex flex-col gap-5">
          {metricKeys.map((key) => {
            const valA = breedA.metrics[key];
            const valB = breedB.metrics[key];
            return (
              <div
                key={key}
                className="pt-4 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-4 text-sm font-medium text-[#161715] dark:text-[#F0EDE5]">
                  {t.detail.metrics[key]}
                </div>
                <div className="md:col-span-4 flex items-center gap-3">
                  <span className="text-xs font-semibold truncate w-24 text-[#4A6B57] dark:text-[#7BA38A]">
                    {breedA.name[language]}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-[#E2DDD0] dark:bg-[#2A2E28] overflow-hidden">
                    <div
                      className="h-full bg-[#4A6B57] dark:bg-[#7BA38A]"
                      style={{ width: `${(valA / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs tabular-nums w-8 text-end">
                    {valA}/5
                  </span>
                </div>
                <div className="md:col-span-4 flex items-center gap-3">
                  <span className="text-xs font-semibold truncate w-24 text-[#B58E3E] dark:text-[#D4B05D]">
                    {breedB.name[language]}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-[#E2DDD0] dark:bg-[#2A2E28] overflow-hidden">
                    <div
                      className="h-full bg-[#B58E3E] dark:bg-[#D4B05D]"
                      style={{ width: `${(valB / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs tabular-nums w-8 text-end">
                    {valB}/5
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Care & Health Synthesis */}
      <div className="rounded-2xl border border-[#E2DDD0] dark:border-[#272B25] bg-[#FCFBF7] dark:bg-[#191C18] p-6">
        <h3 className="font-editorial text-xl font-semibold mb-4">
          {t.compare.careAndHealth}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
          <div>
            <h4 className="font-semibold text-[#161715] dark:text-[#F0EDE5] mb-2">
              {breedA.name[language]}
            </h4>
            <p className="mb-2">{breedA.groomingDetail[language]}</p>
            <p>{breedA.healthPredispositions[language]}</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#161715] dark:text-[#F0EDE5] mb-2">
              {breedB.name[language]}
            </h4>
            <p className="mb-2">{breedB.groomingDetail[language]}</p>
            <p>{breedB.healthPredispositions[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
