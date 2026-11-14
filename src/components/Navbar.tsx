import { useState } from 'react';
import {
  GitCompareArrows,
  Heart,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Language, PageRoute } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { CatLogo } from './CatLogo';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  favoritesCount: number;
  compareCount: number;
  onOpenFavorites: () => void;
}

export function Navbar({
  currentRoute,
  onNavigate,
  language,
  onLanguageChange,
  isDark,
  onToggleTheme,
  favoritesCount,
  compareCount,
  onOpenFavorites,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = UI_TRANSLATIONS[language];

  const primaryLinks: { id: PageRoute; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'catalog', label: t.nav.breeds },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'videos', label: t.nav.videos },
    { id: 'care', label: t.nav.care },
  ];

  const secondaryLinks: { id: PageRoute; label: string }[] = [
    { id: 'about', label: t.nav.about },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Strict 3-Zone Sticky Header (compact height on mobile < 8% viewport) */}
      <header className="sticky top-0 z-40 border-b border-[#E2DDD0] dark:border-[#272B25] bg-[#F6F3EC]/92 dark:bg-[#111310]/92 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Mark (single-line) */}
          <button
            type="button"
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 text-[#161715] dark:text-[#F0EDE5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6B57]"
            aria-label="CATOPEDIA Home"
          >
            <CatLogo className="w-8 h-8 shrink-0" />
            <span className="font-editorial text-xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap shrink-0">
              {t.brand}
            </span>
          </button>

          {/* Zone 2: 5 concise single-line text nav links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {primaryLinks.map((item) => {
              const active =
                currentRoute === item.id ||
                (item.id === 'catalog' && currentRoute === 'detail');
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6B57] ${
                    active
                      ? 'text-[#161715] dark:text-[#F0EDE5]'
                      : 'text-[#5C5E58] dark:text-[#A7A89F] hover:text-[#161715] dark:hover:text-[#F0EDE5]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#4A6B57] dark:bg-[#7BA38A] transition-transform duration-200 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action on desktop + mobile hamburger trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNav('catalog')}
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide rounded-lg bg-[#161715] text-[#F6F3EC] dark:bg-[#F0EDE5] dark:text-[#111310] hover:bg-[#4A6B57] dark:hover:bg-[#7BA38A] dark:hover:text-[#111310] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58E3E]"
            >
              {t.nav.exploreCta}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#161715] dark:text-[#F0EDE5] hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D] transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Non-sticky Operational Editorial Utility Bar (languages, theme, favorites, compare, about/faq/contact) */}
      <div className="border-b border-[#E2DDD0] dark:border-[#272B25] bg-[#EFECE3]/75 dark:bg-[#161915]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Secondary editorial destinations */}
          <div className="flex items-center gap-4 sm:gap-6">
            {secondaryLinks.map((link) => {
              const active = currentRoute === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className={`whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'text-[#4A6B57] dark:text-[#7BA38A] font-semibold'
                      : 'text-[#5C5E58] dark:text-[#A7A89F] hover:text-[#161715] dark:hover:text-[#F0EDE5]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Interactive Tools: Favorites, Compare, Theme, Language */}
          <div className="flex items-center gap-3 sm:gap-4 ms-auto">
            <button
              type="button"
              onClick={onOpenFavorites}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[#161715] dark:text-[#F0EDE5] hover:bg-[#E2DDD0]/70 dark:hover:bg-[#232721] transition-colors whitespace-nowrap shrink-0"
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  favoritesCount > 0
                    ? 'fill-[#B58E3E] text-[#B58E3E] dark:fill-[#D4B05D] dark:text-[#D4B05D]'
                    : 'text-[#5C5E58] dark:text-[#A7A89F]'
                }`}
              />
              <span>{t.utility.favorites}</span>
              <span className="tabular-nums text-[#5C5E58] dark:text-[#A7A89F]">
                ({favoritesCount})
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleNav('compare')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 ${
                currentRoute === 'compare'
                  ? 'bg-[#4A6B57] text-white dark:bg-[#7BA38A] dark:text-[#111310]'
                  : 'text-[#161715] dark:text-[#F0EDE5] hover:bg-[#E2DDD0]/70 dark:hover:bg-[#232721]'
              }`}
            >
              <GitCompareArrows className="w-3.5 h-3.5" />
              <span>{t.utility.compare}</span>
              <span className="tabular-nums opacity-80">({compareCount}/2)</span>
            </button>

            <span className="h-3.5 w-px bg-[#D6D0C1] dark:bg-[#2E332C]" aria-hidden="true" />

            {/* Theme Switch */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? t.utility.lightMode : t.utility.darkMode}
              className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[#5C5E58] dark:text-[#A7A89F] hover:text-[#161715] dark:hover:text-[#F0EDE5] hover:bg-[#E2DDD0]/70 dark:hover:bg-[#232721] transition-colors whitespace-nowrap shrink-0"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-[#D4B05D]" /> : <Moon className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">
                {isDark ? t.utility.lightMode : t.utility.darkMode}
              </span>
            </button>

            {/* Language Selector FR / EN / AR */}
            <div
              role="group"
              aria-label={t.utility.languageLabel}
              className="inline-flex items-center rounded-md border border-[#D8D2C3] dark:border-[#2C312A] p-0.5 bg-[#FAF8F3] dark:bg-[#111310]"
            >
              {(['fr', 'en', 'ar'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-1 rounded text-[11px] font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 ${
                    language === lang
                      ? 'bg-[#4A6B57] text-white dark:bg-[#7BA38A] dark:text-[#111310]'
                      : 'text-[#5C5E58] dark:text-[#A7A89F] hover:text-[#161715] dark:hover:text-[#F0EDE5]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed inset-x-0 top-14 bottom-0 z-30 bg-[#F6F3EC] dark:bg-[#111310] overflow-y-auto px-5 py-6 border-t border-[#E2DDD0] dark:border-[#272B25]"
          >
            <div className="flex flex-col gap-1">
              {[...primaryLinks, ...secondaryLinks].map((item) => {
                const active = currentRoute === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`w-full text-start px-4 py-3.5 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? 'bg-[#4A6B57]/12 text-[#4A6B57] dark:bg-[#7BA38A]/15 dark:text-[#7BA38A]'
                        : 'text-[#161715] dark:text-[#F0EDE5] hover:bg-[#EBE5D8] dark:hover:bg-[#1A1D19]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-[#E2DDD0] dark:border-[#272B25] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleNav('compare')}
                className="w-full py-3 px-4 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] text-sm font-medium flex items-center justify-between"
              >
                <span>{t.utility.compare}</span>
                <span className="tabular-nums text-[#4A6B57] dark:text-[#7BA38A]">
                  {compareCount}/2
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenFavorites();
                }}
                className="w-full py-3 px-4 rounded-lg bg-[#161715] text-[#F6F3EC] dark:bg-[#F0EDE5] dark:text-[#111310] text-sm font-semibold flex items-center justify-between"
              >
                <span>{t.utility.favorites}</span>
                <span className="tabular-nums">{favoritesCount}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
