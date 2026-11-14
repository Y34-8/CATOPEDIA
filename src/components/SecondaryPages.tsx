import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  Search,
  Send,
} from 'lucide-react';
import { FaqEntry, Language } from '../types/cat';
import { UI_TRANSLATIONS } from '../data/translations';
import { HERO_BANNER_IMAGE } from '../data/mediaAndContent';
import { BreedImage } from './BreedImage';

export function AboutPage({ language }: { language: Language }) {
  const t = UI_TRANSLATIONS[language];

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
          {t.about.kicker}
        </p>
        <h1 className="mt-2 font-editorial text-4xl sm:text-5xl font-semibold">
          {t.about.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
          {t.about.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
        <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#E2DDD0] dark:border-[#272B25] aspect-[16/10] lg:aspect-auto lg:min-h-[340px]">
          <BreedImage
            src={HERO_BANNER_IMAGE}
            alt="Catopedia Editorial Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-6 flex flex-col justify-center p-6 sm:p-8 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]">
          <h2 className="font-editorial text-3xl font-semibold">
            {t.about.missionTitle}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#353733] dark:text-[#D1CEC4] leading-relaxed">
            {t.about.missionText1}
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
            {t.about.missionText2}
          </p>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="font-editorial text-3xl font-semibold mb-6">
          {t.about.pillarsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.about.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]"
            >
              <span className="text-xs font-semibold tabular-nums text-[#B58E3E] dark:text-[#D4B05D]">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-editorial text-2xl font-semibold">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-2xl bg-[#EFECE3]/80 dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]">
        <h2 className="font-editorial text-2xl font-semibold">
          {t.about.architectureTitle}
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F] max-w-3xl leading-relaxed">
          {t.about.architectureText}
        </p>
      </div>
    </section>
  );
}

export function FaqPage({
  faqs,
  language,
}: {
  faqs: FaqEntry[];
  language: Language;
}) {
  const t = UI_TRANSLATIONS[language];
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState<'all' | FaqEntry['category']>('all');
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const filtered = faqs.filter((item) => {
    if (topic !== 'all' && item.category !== topic) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      item.question[language].toLowerCase().includes(q) ||
      item.answer[language].toLowerCase().includes(q)
    );
  });

  return (
    <section className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
          {t.faq.kicker}
        </p>
        <h1 className="mt-2 font-editorial text-4xl sm:text-5xl font-semibold">
          {t.faq.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F]">
          {t.faq.subtitle}
        </p>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#5C5E58] dark:text-[#A7A89F] absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.faq.searchPlaceholder}
            className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#FCFBF7] dark:bg-[#191C18] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
          />
        </div>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value as 'all' | FaqEntry['category'])}
          className="px-3.5 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#FCFBF7] dark:bg-[#191C18] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
        >
          <option value="all">{t.faq.allTopics}</option>
          <option value="adoption">{t.faq.topics.adoption}</option>
          <option value="health">{t.faq.topics.health}</option>
          <option value="care">{t.faq.topics.care}</option>
          <option value="breeds">{t.faq.topics.breeds}</option>
        </select>
      </div>

      {/* Accordion */}
      <div className="rounded-2xl border border-[#E2DDD0] dark:border-[#272B25] bg-[#FCFBF7] dark:bg-[#191C18] divide-y divide-[#E2DDD0] dark:divide-[#272B25]">
        {filtered.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="w-full text-start px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#EFECE3]/45 dark:hover:bg-[#1F231E] transition-colors"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B58E3E] dark:text-[#D4B05D] block mb-1">
                    {t.faq.topics[item.category]}
                  </span>
                  <span className="font-editorial text-xl sm:text-2xl font-semibold text-[#161715] dark:text-[#F0EDE5]">
                    {item.question[language]}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#5C5E58] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F] leading-relaxed">
                  {item.answer[language]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ContactPage({ language }: { language: Language }) {
  const t = UI_TRANSLATIONS[language];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(t.contact.subjects[0]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl mb-10">
        <p className="text-xs uppercase tracking-[0.16em] text-[#4A6B57] dark:text-[#7BA38A] font-semibold">
          {t.contact.kicker}
        </p>
        <h1 className="mt-2 font-editorial text-4xl sm:text-5xl font-semibold">
          {t.contact.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#5C5E58] dark:text-[#A7A89F]">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]">
          {submitted ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#4A6B57] dark:text-[#7BA38A] mx-auto" />
              <h2 className="mt-4 font-editorial text-3xl font-semibold">
                {t.contact.successTitle}
              </h2>
              <p className="mt-2 text-sm text-[#5C5E58] dark:text-[#A7A89F] max-w-md mx-auto">
                {t.contact.successText}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="mt-6 px-5 py-2.5 rounded-lg bg-[#161715] text-[#F6F3EC] dark:bg-[#F0EDE5] dark:text-[#111310] text-sm font-semibold"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5">
                  {t.contact.subjectLabel}
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
                >
                  {t.contact.subjects.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8D2C3] dark:border-[#2C312A] bg-[#F6F3EC] dark:bg-[#111310] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6B57]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4A6B57] text-white dark:bg-[#7BA38A] dark:text-[#111310] text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        <aside className="lg:col-span-5 flex flex-col gap-5">
          <div className="p-6 rounded-2xl bg-[#FCFBF7] dark:bg-[#191C18] border border-[#E2DDD0] dark:border-[#272B25]">
            <h2 className="font-editorial text-2xl font-semibold">
              {t.contact.editorialOffice}
            </h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#5C5E58] dark:text-[#A7A89F]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4A6B57] dark:text-[#7BA38A]" />
                <span>editorial@catopedia-atlas.org</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#4A6B57] dark:text-[#7BA38A]" />
                <span>{t.contact.officeHours}</span>
              </div>
            </div>
            <p className="mt-4 pt-4 border-t border-[#EBE5D8] dark:border-[#272B25] text-xs text-[#5C5E58] dark:text-[#A7A89F]">
              {t.contact.responseTime}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
