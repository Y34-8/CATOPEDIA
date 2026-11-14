import { useEffect, useState } from 'react';
import { catService } from './services/catService';
import {
  CareArticle,
  CatBreed,
  CatFact,
  CatVideoItem,
  FaqEntry,
  Language,
  PageRoute,
} from './types/cat';
import { UI_TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { CatalogPage } from './components/CatalogPage';
import { BreedDetailPage } from './components/BreedDetailPage';
import { ComparePage } from './components/ComparePage';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { GalleryPage } from './components/GalleryPage';
import { VideosPage } from './components/VideosPage';
import { CarePage } from './components/CarePage';
import { AboutPage, ContactPage, FaqPage } from './components/SecondaryPages';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [breeds, setBreeds] = useState<CatBreed[]>([]);
  const [facts, setFacts] = useState<CatFact[]>([]);
  const [videos, setVideos] = useState<CatVideoItem[]>([]);
  const [careArticles, setCareArticles] = useState<CareArticle[]>([]);
  const [faqs, setFaqs] = useState<FaqEntry[]>([]);

  const [route, setRoute] = useState<PageRoute>('home');
  const [selectedBreedId, setSelectedBreedId] = useState<string>('maine-coon');
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('catopedia_lang');
    return saved === 'en' || saved === 'ar' || saved === 'fr' ? saved : 'fr';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('catopedia_theme') === 'dark';
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('catopedia_favorites');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [compareIds, setCompareIds] = useState<string[]>(['maine-coon', 'ragdoll']);

  // Load encyclopedic data via decoupled service layer
  useEffect(() => {
    let active = true;
    Promise.all([
      catService.getAllBreeds(),
      catService.getFacts(),
      catService.getVideos(),
      catService.getCareArticles(),
      catService.getFaqs(),
    ]).then(([b, f, v, c, q]) => {
      if (!active) return;
      setBreeds(b);
      setFacts(f);
      setVideos(v);
      setCareArticles(c);
      setFaqs(q);
    });
    return () => {
      active = false;
    };
  }, []);

  // Sync HTML lang & RTL direction
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('catopedia_lang', language);
  }, [language]);

  // Sync Dark Mode class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('catopedia_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('catopedia_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const navigate = (nextRoute: PageRoute) => {
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBreed = (id: string) => {
    setSelectedBreedId(id);
    setRoute('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 2) {
        return [prev[1], id];
      }
      return [...prev, id];
    });
  };

  const t = UI_TRANSLATIONS[language];
  const activeBreed =
    breeds.find((b) => b.id === selectedBreedId) || breeds[0];
  const favoriteBreeds = breeds.filter((b) => favorites.includes(b.id));

  if (breeds.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F3EC] dark:bg-[#111310] text-[#161715] dark:text-[#F0EDE5]">
        <span className="font-editorial text-2xl tracking-wide">CATOPEDIA</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#161715] dark:bg-[#111310] dark:text-[#F0EDE5] transition-colors duration-200">
      <Navbar
        currentRoute={route}
        onNavigate={navigate}
        language={language}
        onLanguageChange={setLanguage}
        isDark={isDark}
        onToggleTheme={() => setIsDark((d) => !d)}
        favoritesCount={favorites.length}
        compareCount={compareIds.length}
        onOpenFavorites={() => setFavoritesOpen(true)}
      />

      <main className="flex-1">
        {route === 'home' && (
          <HomePage
            breeds={breeds}
            facts={facts}
            careArticles={careArticles}
            language={language}
            favorites={favorites}
            compareIds={compareIds}
            onToggleFavorite={handleToggleFavorite}
            onToggleCompare={handleToggleCompare}
            onSelectBreed={handleSelectBreed}
            onNavigate={navigate}
          />
        )}

        {route === 'catalog' && (
          <CatalogPage
            breeds={breeds}
            language={language}
            favorites={favorites}
            compareIds={compareIds}
            onToggleFavorite={handleToggleFavorite}
            onToggleCompare={handleToggleCompare}
            onSelectBreed={handleSelectBreed}
          />
        )}

        {route === 'detail' && activeBreed && (
          <BreedDetailPage
            breed={activeBreed}
            allBreeds={breeds}
            language={language}
            isFavorite={favorites.includes(activeBreed.id)}
            isCompared={compareIds.includes(activeBreed.id)}
            onToggleFavorite={handleToggleFavorite}
            onToggleCompare={handleToggleCompare}
            onSelectBreed={handleSelectBreed}
            onBackToCatalog={() => navigate('catalog')}
          />
        )}

        {route === 'compare' && (
          <ComparePage
            breeds={breeds}
            selectedIds={compareIds}
            onChangeSelected={setCompareIds}
            onSelectBreed={handleSelectBreed}
            language={language}
          />
        )}

        {route === 'gallery' && (
          <GalleryPage
            breeds={breeds}
            language={language}
            onSelectBreed={handleSelectBreed}
          />
        )}

        {route === 'videos' && (
          <VideosPage
            videos={videos}
            language={language}
            onSelectBreed={handleSelectBreed}
          />
        )}

        {route === 'care' && (
          <CarePage articles={careArticles} language={language} />
        )}

        {route === 'about' && <AboutPage language={language} />}

        {route === 'faq' && <FaqPage faqs={faqs} language={language} />}

        {route === 'contact' && <ContactPage language={language} />}
      </main>

      <Footer
        language={language}
        onNavigate={navigate}
        onLanguageChange={setLanguage}
      />

      <FavoritesDrawer
        isOpen={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        favoriteBreeds={favoriteBreeds}
        language={language}
        onRemoveFavorite={handleToggleFavorite}
        onClearFavorites={() => setFavorites([])}
        onSelectBreed={handleSelectBreed}
        onCompareFavorites={(ids) => {
          setCompareIds(ids);
          navigate('compare');
        }}
        onNavigate={navigate}
      />

      <BackToTop label={t.footer.backToTop} />
    </div>
  );
}
