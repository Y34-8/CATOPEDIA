import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { CareArticle, Language } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { BreedImage } from './BreedImage';

interface CarePageProps {
  articles: CareArticle[];
  language: Language;
}

export function CarePage({ articles, language }: CarePageProps) {
  const t = UI_TRANSLATIONS[language];

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
          {t.care.kicker}
        </p>
        <h1 className="mt-2 font-editorial text-4xl sm:text-5xl font-semibold">
          {t.care.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
          {t.care.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {articles.map((article, idx) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden border border-[#E2DDD0] dark:border-[#272B25] bg-[#FCFBF7] dark:bg-[#191C18] grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div
              className={`lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:min-h-[320px] overflow-hidden bg-[#EBE5D8] dark:bg-[#222620] ${
                idx % 2 === 1 ? 'lg:order-2' : ''
              }`}
            >
              <BreedImage
                src={article.image}
                alt={article.title[language]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B58E3E] dark:text-[#D4B05D]">
                {article.number}. {article.category[language]}
              </div>
              <h2 className="mt-2 font-editorial text-2xl sm:text-3xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
                {article.title[language]}
              </h2>
              <p className="mt-3 text-sm sm:text-base font-medium text-[#161715] dark:text-[#F0EDE5] leading-relaxed">
                {article.lead[language]}
              </p>
              <p className="mt-2.5 text-sm text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
                {article.body[language]}
              </p>

              <div className="mt-6 pt-5 border-t border-[#EBE5D8] dark:border-[#272B25]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#4A6B57] dark:text-[#7BA38A] mb-3">
                  {t.care.keyChecklist}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {article.checklist[language].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#353733] dark:text-[#D1CEC4]"
                    >
                      <Check className="w-4 h-4 text-[#4A6B57] dark:text-[#7BA38A] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
