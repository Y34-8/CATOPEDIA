import { useEffect, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { BreedVideoChapter, Language } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { BreedImage } from './BreedImage';

interface DocumentaryPlayerProps {
  title: string;
  summary: string;
  duration: string;
  frames: string[];
  chapters: BreedVideoChapter[];
  language: Language;
  autoPlay?: boolean;
}

export function DocumentaryPlayer({
  title,
  summary,
  duration,
  frames,
  chapters,
  language,
  autoPlay = false,
}: DocumentaryPlayerProps) {
  const t = UI_TRANSLATIONS[language];
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsPlaying(autoPlay);
    setActiveChapterIdx(0);
    setProgress(0);
  }, [title, autoPlay]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.25;
        if (next >= 100) {
          setIsPlaying(false);
          return 100;
        }
        const chapterCount = Math.max(1, chapters.length);
        const computedIdx = Math.min(
          chapterCount - 1,
          Math.floor((next / 100) * chapterCount)
        );
        setActiveChapterIdx(computedIdx);
        return next;
      });
    }, 180);

    return () => window.clearInterval(interval);
  }, [isPlaying, chapters.length]);

  const activeFrame = frames[activeChapterIdx % frames.length] || frames[0];
  const currentChapter = chapters[activeChapterIdx] || chapters[0];

  const handleSelectChapter = (idx: number) => {
    setActiveChapterIdx(idx);
    const pct = Math.round((idx / Math.max(1, chapters.length)) * 100);
    setProgress(pct);
    setIsPlaying(true);
  };

  const handleRestart = () => {
    setProgress(0);
    setActiveChapterIdx(0);
    setIsPlaying(true);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#E2DDD0] dark:border-[#2A2E28] bg-[#161715] text-[#F6F3EC]">
      {/* Animated Ken Burns Video Stage */}
      <div className="relative aspect-video overflow-hidden bg-[#111310]">
        <motion.div
          key={`${activeFrame}-${activeChapterIdx}`}
          initial={{ scale: 1.0, x: 0 }}
          animate={
            isPlaying
              ? { scale: 1.09, x: activeChapterIdx % 2 === 0 ? -12 : 12 }
              : { scale: 1.03, x: 0 }
          }
          transition={{ duration: 8, ease: 'linear' }}
          className="w-full h-full"
        >
          <BreedImage
            src={activeFrame}
            alt={title}
            className="w-full h-full object-cover"
            fallbackTitle={title}
            priority
          />
        </motion.div>

        {/* Measured Gradient Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

        {/* Center Play Trigger when paused */}
        {!isPlaying && (
          <button
            type="button"
            onClick={() => {
              if (progress >= 100) setProgress(0);
              setIsPlaying(true);
            }}
            aria-label={t.videos.playVideo}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span className="w-16 h-16 rounded-full bg-[#F6F3EC]/92 text-[#161715] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105">
              <Play className="w-6 h-6 ms-0.5 fill-current" />
            </span>
          </button>
        )}

        {/* Live Subtitle & Chapter Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col gap-3">
          {currentChapter && (
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-widest text-[#D4B05D] font-medium mb-1">
                {currentChapter.time} · {currentChapter.title[language]}
              </p>
              <p className="text-sm sm:text-base text-[#F6F3EC] leading-snug">
                {currentChapter.note[language]}
              </p>
            </div>
          )}

          {/* Progress Bar & Controls */}
          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => {
                if (progress >= 100) {
                  handleRestart();
                } else {
                  setIsPlaying((p) => !p);
                }
              }}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label={isPlaying ? t.videos.pauseLabel : t.videos.playVideo}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handleRestart}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label={t.videos.restartLabel}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div
              className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                const nextPct = ratio * 100;
                setProgress(nextPct);
                const idx = Math.min(
                  chapters.length - 1,
                  Math.floor(ratio * chapters.length)
                );
                setActiveChapterIdx(Math.max(0, idx));
              }}
            >
              <div
                className="h-full bg-[#D4B05D] transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-xs tabular-nums text-[#E2DDD0] whitespace-nowrap">
              {duration}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Chapters List */}
      <div className="p-4 sm:p-5 bg-[#1B1E1A] border-t border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h4 className="font-editorial text-lg font-medium text-[#F6F3EC]">
            {title}
          </h4>
          <span className="text-xs text-[#A7A89F]">
            {t.videos.chaptersLabel}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#C6C3B8] mb-4 leading-relaxed">
          {summary}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {chapters.map((chap, idx) => {
            const active = idx === activeChapterIdx;
            return (
              <button
                key={chap.time}
                type="button"
                onClick={() => handleSelectChapter(idx)}
                className={`text-start p-3 rounded-lg border transition-colors ${
                  active
                    ? 'border-[#D4B05D] bg-[#D4B05D]/12 text-[#F6F3EC]'
                    : 'border-white/10 bg-white/5 text-[#C6C3B8] hover:border-white/25'
                }`}
              >
                <div className="text-[11px] tabular-nums text-[#D4B05D] font-medium">
                  {chap.time}
                </div>
                <div className="text-xs font-semibold mt-0.5 line-clamp-1">
                  {chap.title[language]}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
