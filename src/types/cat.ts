export type Language = 'fr' | 'en' | 'ar';

export type PageRoute =
  | 'home'
  | 'catalog'
  | 'detail'
  | 'gallery'
  | 'videos'
  | 'care'
  | 'about'
  | 'faq'
  | 'contact'
  | 'compare';

export type CoatCategory = 'short' | 'semi-long' | 'long' | 'curly' | 'hairless';
export type SizeCategory = 'small' | 'medium' | 'large';
export type TemperamentTag = 'calm' | 'active' | 'affectionate' | 'independent' | 'social';

export interface LocalizedText {
  fr: string;
  en: string;
  ar: string;
}

export interface LocalizedList {
  fr: string[];
  en: string[];
  ar: string[];
}

export interface BreedMetrics {
  affection: number; // 1 to 5
  activity: number; // 1 to 5
  intelligence: number; // 1 to 5
  grooming: number; // 1 to 5
  shedding: number; // 1 to 5
  childFriendly: number; // 1 to 5
  petFriendly: number; // 1 to 5
  vocalization: number; // 1 to 5
}

export interface BreedGalleryFrame {
  url: string;
  caption: LocalizedText;
  focusClass?: string;
}

export interface BreedVideoChapter {
  time: string;
  title: LocalizedText;
  note: LocalizedText;
}

export interface CatBreed {
  id: string;
  accessionCode: string;
  name: LocalizedText;
  originCountry: LocalizedText;
  originRegion: 'north-america' | 'europe' | 'asia' | 'middle-east';
  coatType: CoatCategory;
  sizeCategory: SizeCategory;
  temperamentTags: TemperamentTag[];
  popularityRank: number; // 1 = most popular
  popularityScore: number; // 1 to 100 for sorting
  lifespanMin: number;
  lifespanMax: number;
  weightRangeKg: string;
  heightRangeCm: string;
  image: string;
  gallery: BreedGalleryFrame[];
  shortDescription: LocalizedText;
  originHistory: LocalizedText;
  generalDescription: LocalizedText;
  coatColorsAndPatterns: LocalizedText;
  temperamentDetail: LocalizedText;
  behaviorWithFamily: LocalizedText;
  activityDetail: LocalizedText;
  groomingDetail: LocalizedText;
  nutritionAdvice: LocalizedText;
  healthPredispositions: LocalizedText;
  physicalPeculiarities: LocalizedText;
  advantagesAndTraits: LocalizedList;
  metrics: BreedMetrics;
  videoSummary: LocalizedText;
  videoDuration: string;
  videoChapters: BreedVideoChapter[];
}

export interface CatFact {
  id: string;
  category: LocalizedText;
  title: LocalizedText;
  fact: LocalizedText;
}

export interface CatVideoItem {
  id: string;
  breedId: string;
  title: LocalizedText;
  category: 'breed-portrait' | 'care-guide' | 'behavior';
  duration: string;
  thumbnail: string;
  frames: string[];
  summary: LocalizedText;
  chapters: BreedVideoChapter[];
}

export interface CareArticle {
  id: string;
  number: string;
  category: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
  checklist: LocalizedList;
  image: string;
}

export interface FaqEntry {
  id: string;
  category: 'adoption' | 'health' | 'care' | 'breeds';
  question: LocalizedText;
  answer: LocalizedText;
}
