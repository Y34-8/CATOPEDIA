import { GitCompareArrows, Trash2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CatBreed, Language, PageRoute } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { BreedImage } from './BreedImage';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteBreeds: CatBreed[];
  language: Language;
  onRemoveFavorite: (id: string) => void;
  onClearFavorites: () => void;
  onSelectBreed: (id: string) => void;
  onCompareFavorites: (ids: string[]) => void;
  onNavigate: (route: PageRoute) => void;
}

export function FavoritesDrawer({
  isOpen,
  onClose,
  favoriteBreeds,
  language,
  onRemoveFavorite,
  onClearFavorites,
  onSelectBreed,
  onCompareFavorites,
  onNavigate,
}: FavoritesDrawerProps) {
  const t = UI_TRANSLATIONS[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative z-10 w-full max-w-md bg-[#F6F3EC] dark:bg-[#141713] text-[#161715] dark:text-[#F0EDE5] h-full flex flex-col border-s border-[#E2DDD0] dark:border-[#272B25] shadow-2xl"
          >
            <div className="p-5 sm:p-6 border-b border-[#E2DDD0] dark:border-[#272B25] flex items-start justify-between gap-4">
              <div>
                <h2 className="font-editorial text-2xl font-semibold">
                  {t.favorites.title}
                </h2>
                <p className="mt-1 text-xs text-[#5C5E58] dark:text-[#A7A89F]">
                  {t.favorites.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] flex items-center justify-center hover:bg-[#EBE5D8] dark:hover:bg-[#1E221D]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
              {favoriteBreeds.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-sm text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
                    {t.favorites.empty}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onNavigate('catalog');
                    }}
                    className="mt-5 px-5 py-2.5 rounded-lg bg-[#4A6B57] text-white dark:bg-[#7BA38A] dark:text-[#111310] text-sm font-semibold"
                  >
                    {t.favorites.browseCta}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {favoriteBreeds.map((breed) => (
                    <div
                      key={breed.id}
                      className="p-3 rounded-xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25] flex items-center gap-3.5"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelectBreed(breed.id);
                        }}
                        className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[#EBE5D8] dark:bg-[#222620]"
                      >
                        <BreedImage
                          src={breed.image}
                          alt={breed.name[language]}
                          className="w-full h-full object-cover"
                        />
                      </button>
                      <div className="min-w-0 flex-1">
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onSelectBreed(breed.id);
                          }}
                          className="font-editorial text-lg font-semibold hover:text-[#4A6B57] dark:hover:text-[#7BA38A] text-start block truncate w-full"
                        >
                          {breed.name[language]}
                        </button>
                        <p className="text-xs text-[#5C5E58] dark:text-[#A7A89F] truncate">
                          {breed.originCountry[language]} ·{' '}
                          {t.catalog.coats[breed.coatType]}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveFavorite(breed.id)}
                        aria-label={t.catalog.removeFavorite}
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-[#5C5E58] hover:text-[#9A3412] dark:text-[#A7A89F] dark:hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {favoriteBreeds.length > 0 && (
              <div className="p-5 sm:p-6 border-t border-[#E2DDD0] dark:border-[#272B25] flex flex-col gap-2.5">
                {favoriteBreeds.length >= 2 && (
                  <button
                    type="button"
                    onClick={() => {
                      onCompareFavorites([
                        favoriteBreeds[0].id,
                        favoriteBreeds[1].id,
                      ]);
                      onClose();
                    }}
                    className="w-full py-3 px-4 rounded-lg bg-[#4A6B57] text-white dark:bg-[#7BA38A] dark:text-[#111310] text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <GitCompareArrows className="w-4 h-4" />
                    <span>{t.favorites.compareSelected}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={onClearFavorites}
                  className="w-full py-2.5 px-4 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] text-xs font-medium text-[#5C5E58] dark:text-[#A7A89F] hover:text-[#161715] dark:hover:text-[#F0EDE5]"
                >
                  {t.favorites.clearAll}
                </button>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
