import { ArrowUp, Globe, Instagram, Mail, Youtube } from 'lucide-react';
import { Language, PageRoute } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { CatLogo } from './CatLogo';

interface FooterProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
  onLanguageChange: (lang: Language) => void;
}

export function Footer({
  language,
  onNavigate,
  onLanguageChange,
}: FooterProps) {
  const t = UI_TRANSLATIONS[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[#E2DDD0] dark:border-[#272B25] bg-[#EFECE3]/65 dark:bg-[#141713] text-[#161715] dark:text-[#F0EDE5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2.5"
            >
              <CatLogo className="w-8 h-8" />
              <span className="font-editorial text-2xl font-semibold tracking-tight">
                {t.brand}
              </span>
            </button>
            <p className="mt-4 text-sm text-[#5C5E58] dark:text-[#A7A89F] max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="mt-6 flex items-center gap-2">
              {(['fr', 'en', 'ar'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onLanguageChange(lang)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider border transition-colors ${
                    language === lang
                      ? 'border-[#4A6B57] bg-[#4A6B57] text-white dark:border-[#7BA38A] dark:bg-[#7BA38A] dark:text-[#111310]'
                      : 'border-[#D8D2C3] dark:border-[#2C312A] text-[#5C5E58] dark:text-[#A7A89F]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Encyclopedia Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#5C5E58] dark:text-[#A7A89F] mb-4">
              {t.footer.encyclopediaCol}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button type="button" onClick={() => onNavigate('home')} className="hover:text-[#4A6B57] dark:hover:text-[#7BA38A]">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('catalog')} className="hover:text-[#4A6B57] dark:hover:text-[#7BA38A]">
                  {t.nav.breeds}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('compare')} className="hover:text-[#4A6B57] dark:hover:text-[#7BA38A]">
                  {t.utility.compare}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('gallery')} className="hover:text-[#4A6B57] dark:hover:text-[#7BA38A]">
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('videos')} className="hover:text-[#4A6B57] dark:hover:text-[#7BA38A]">
                  {t.nav.videos}
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#5C5E58] dark:text-[#A7A89F] mb-4">
              {t.footer.resourcesCol}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button type="button" onClick={() => onNavigate('care')} className="hover:text-[#4A6B57] dark:hover:text-[#7BA38A]">
                  {t.nav.care}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about')} className="hover:text-[#4A6B57] dark:hover:text-[#7BA38A]">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('faq')} className="hover:text-[#4A6B57] dark:hover:text-[#7BA38A]">
                  {t.nav.faq}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact')} className="hover:text-[#4A6B57] dark:hover:text-[#7BA38A]">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#5C5E58] dark:text-[#A7A89F] mb-4">
                {t.footer.connectCol}
              </h3>
              <div className="flex items-center gap-2.5">
                <a
                  href="#instagram"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('gallery');
                  }}
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center hover:bg-[#4A6B57] hover:text-white hover:border-[#4A6B57] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#youtube"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('videos');
                  }}
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center hover:bg-[#4A6B57] hover:text-white hover:border-[#4A6B57] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#editorial"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  aria-label="Email"
                  className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center hover:bg-[#4A6B57] hover:text-white hover:border-[#4A6B57] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#atlas"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  aria-label="Atlas"
                  className="w-10 h-10 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center hover:bg-[#4A6B57] hover:text-white hover:border-[#4A6B57] transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#4A6B57] dark:text-[#7BA38A] hover:underline w-fit"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#D8D2C3] dark:border-[#272B25] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5C5E58] dark:text-[#A7A89F]">
          <p>{t.footer.rights}</p>
          <span className="tabular-nums">© {new Date().getFullYear()} CATOPEDIA</span>
        </div>
      </div>
    </footer>
  );
}
