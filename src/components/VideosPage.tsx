import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { CatVideoItem, Language } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { BreedImage } from './BreedImage';
import { DocumentaryPlayer } from './DocumentaryPlayer';

interface VideosPageProps {
  videos: CatVideoItem[];
  language: Language;
  onSelectBreed: (breedId: string) => void;
}

export function VideosPage({
  videos,
  language,
  onSelectBreed,
}: VideosPageProps) {
  const t = UI_TRANSLATIONS[language];
  const [category, setCategory] = useState<
    'all' | 'breed-portrait' | 'care-guide' | 'behavior'
  >('all');
  const [activeVideo, setActiveVideo] = useState<CatVideoItem>(videos[0]);

  const filtered =
    category === 'all'
      ? videos
      : videos.filter((v) => v.category === category);

  const tabs: {
    key: 'all' | 'breed-portrait' | 'care-guide' | 'behavior';
    label: string;
  }[] = [
    { key: 'all', label: t.videos.allCategories },
    { key: 'breed-portrait', label: t.videos.catBreed },
    { key: 'care-guide', label: t.videos.catCare },
    { key: 'behavior', label: t.videos.catBehavior },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl mb-8">
        <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
          {t.videos.kicker}
        </p>
        <h1 className="mt-2 font-editorial text-4xl sm:text-5xl font-semibold">
          {t.videos.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F]">
          {t.videos.subtitle}
        </p>
      </div>

      {/* Main Active Documentary Theater */}
      {activeVideo && (
        <div className="mb-12">
          <DocumentaryPlayer
            title={activeVideo.title[language]}
            summary={activeVideo.summary[language]}
            duration={activeVideo.duration}
            frames={activeVideo.frames}
            chapters={activeVideo.chapters}
            language={language}
          />
        </div>
      )}

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#EFECE3] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25] w-fit mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setCategory(tab.key)}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              category === tab.key
                ? 'bg-[#FCFBF7] dark:bg-[#262B24] text-[#161715] dark:text-[#F0EDE5] shadow-xs'
                : 'text-[#5C5E58] dark:text-[#A7A89F] hover:text-[#161715] dark:hover:text-[#F0EDE5]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((video) => {
          const isCurrent = activeVideo?.id === video.id;
          return (
            <article
              key={video.id}
              className={`rounded-xl overflow-hidden border bg-[#FCFBF7] dark:bg-[#191C18] transition-colors ${
                isCurrent
                  ? 'border-[#4A6B57] dark:border-[#7BA38A]'
                  : 'border-[#E2DDD0] dark:border-[#272B25]'
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setActiveVideo(video);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative block w-full aspect-video overflow-hidden bg-[#141513] group"
              >
                <BreedImage
                  src={video.thumbnail}
                  alt={video.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-[#F6F3EC]/90 text-[#161715] flex items-center justify-center shadow-md">
                    <Play className="w-5 h-5 ms-0.5 fill-current" />
                  </span>
                </div>
                <span className="absolute bottom-2.5 end-2.5 px-2 py-0.5 rounded bg-black/75 text-white text-[11px] tabular-nums">
                  {video.duration}
                </span>
              </button>

              <div className="p-5">
                <h3 className="font-editorial text-xl font-semibold leading-snug">
                  {video.title[language]}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5C5E58] dark:text-[#A7A89F] line-clamp-2">
                  {video.summary[language]}
                </p>
                <div className="mt-4 pt-3 border-t border-[#EBE5D8] dark:border-[#272B25] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveVideo(video);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#4A6B57] dark:text-[#7BA38A] hover:underline"
                  >
                    {t.videos.playVideo}
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectBreed(video.breedId)}
                    className="inline-flex items-center gap-1 text-xs text-[#5C5E58] dark:text-[#A7A89F] hover:text-[#161715] dark:hover:text-[#F0EDE5]"
                  >
                    <span>{t.gallery.viewBreed}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
