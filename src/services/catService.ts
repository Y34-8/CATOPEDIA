import { CAT_BREEDS } from '../data/breeds';
import { CareArticle, CatBreed, CatFact, CatVideoItem, FaqEntry } from '../types/cat';
import { CARE_ARTICLES, CAT_FACTS, CAT_VIDEOS, FAQ_ENTRIES } from '../data/mediaAndContent';

/**
 * Decoupled data repository layer.
 * Currently backed by curated local encyclopedic modules and ready
 * to be swapped for REST/GraphQL/PostgreSQL endpoints without altering UI components.
 */
export const catService = {
  async getAllBreeds(): Promise<CatBreed[]> {
    return CAT_BREEDS;
  },

  async getBreedById(id: string): Promise<CatBreed | undefined> {
    return CAT_BREEDS.find((b) => b.id === id);
  },

  async getPopularBreeds(limit = 6): Promise<CatBreed[]> {
    return [...CAT_BREEDS]
      .sort((a, b) => a.popularityRank - b.popularityRank)
      .slice(0, limit);
  },

  async getFacts(): Promise<CatFact[]> {
    return CAT_FACTS;
  },

  async getVideos(): Promise<CatVideoItem[]> {
    return CAT_VIDEOS;
  },

  async getCareArticles(): Promise<CareArticle[]> {
    return CARE_ARTICLES;
  },

  async getFaqs(): Promise<FaqEntry[]> {
    return FAQ_ENTRIES;
  },
};
