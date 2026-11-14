import { Language } from '../types/cat';

export const UI_TRANSLATIONS: Record<
  Language,
  {
    brand: string;
    nav: {
      home: string;
      breeds: string;
      gallery: string;
      videos: string;
      care: string;
      about: string;
      faq: string;
      contact: string;
      exploreCta: string;
    };
    utility: {
      favorites: string;
      compare: string;
      lightMode: string;
      darkMode: string;
      languageLabel: string;
    };
    hero: {
      kicker: string;
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      featuredLabel: string;
      scrollHint: string;
    };
    home: {
      statsTitle: string;
      statBreeds: string;
      statCountries: string;
      statCoats: string;
      statSections: string;
      popularKicker: string;
      popularTitle: string;
      popularSubtitle: string;
      viewAllBreeds: string;
      bannerTitle: string;
      bannerText: string;
      bannerCta: string;
      factsKicker: string;
      factsTitle: string;
      latestKicker: string;
      latestTitle: string;
      latestSubtitle: string;
      discoverMore: string;
      carePreviewTitle: string;
      carePreviewSubtitle: string;
      readGuide: string;
    };
    catalog: {
      kicker: string;
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      filterOrigin: string;
      filterSize: string;
      filterCoat: string;
      filterTemperament: string;
      sortLabel: string;
      sortPopular: string;
      sortAlphaAsc: string;
      sortAlphaDesc: string;
      sortLifespan: string;
      allOrigins: string;
      allSizes: string;
      allCoats: string;
      allTemperaments: string;
      resetFilters: string;
      resultsCount: string;
      noResultsTitle: string;
      noResultsText: string;
      popularityLabel: string;
      discoverMore: string;
      addFavorite: string;
      removeFavorite: string;
      addToCompare: string;
      inCompare: string;
      origins: Record<string, string>;
      sizes: Record<string, string>;
      coats: Record<string, string>;
      temperaments: Record<string, string>;
    };
    detail: {
      backToCatalog: string;
      previousBreed: string;
      nextBreed: string;
      accession: string;
      originLabel: string;
      sizeLabel: string;
      weightLabel: string;
      lifespanLabel: string;
      coatLabel: string;
      yearsUnit: string;
      popularityRank: string;
      specsTitle: string;
      metrics: {
        affection: string;
        activity: string;
        intelligence: string;
        grooming: string;
        shedding: string;
        childFriendly: string;
        petFriendly: string;
        vocalization: string;
      };
      sections: {
        originHistory: string;
        generalDescription: string;
        coatColors: string;
        temperament: string;
        familyBehavior: string;
        activity: string;
        grooming: string;
        nutrition: string;
        health: string;
        physicalPeculiarities: string;
        advantages: string;
        videoPresentation: string;
        galleryTitle: string;
      };
      watchDocumentary: string;
      compareThisBreed: string;
    };
    compare: {
      kicker: string;
      title: string;
      subtitle: string;
      selectFirst: string;
      selectSecond: string;
      swapBreeds: string;
      physicalProfile: string;
      behavioralProfile: string;
      careAndHealth: string;
      emptyPrompt: string;
    };
    favorites: {
      title: string;
      subtitle: string;
      empty: string;
      browseCta: string;
      compareSelected: string;
      clearAll: string;
    };
    gallery: {
      kicker: string;
      title: string;
      subtitle: string;
      filterAll: string;
      openLightbox: string;
      viewBreed: string;
    };
    videos: {
      kicker: string;
      title: string;
      subtitle: string;
      allCategories: string;
      catBreed: string;
      catCare: string;
      catBehavior: string;
      playVideo: string;
      chaptersLabel: string;
      playingLabel: string;
      pauseLabel: string;
      restartLabel: string;
    };
    care: {
      kicker: string;
      title: string;
      subtitle: string;
      keyChecklist: string;
    };
    about: {
      kicker: string;
      title: string;
      subtitle: string;
      missionTitle: string;
      missionText1: string;
      missionText2: string;
      pillarsTitle: string;
      pillars: { title: string; text: string }[];
      architectureTitle: string;
      architectureText: string;
    };
    faq: {
      kicker: string;
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      allTopics: string;
      topics: Record<string, string>;
    };
    contact: {
      kicker: string;
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjects: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      successTitle: string;
      successText: string;
      sendAnother: string;
      editorialOffice: string;
      officeHours: string;
      responseTime: string;
    };
    footer: {
      tagline: string;
      encyclopediaCol: string;
      resourcesCol: string;
      connectCol: string;
      rights: string;
      backToTop: string;
    };
  }
> = {
  fr: {
    brand: 'CATOPEDIA',
    nav: {
      home: 'Accueil',
      breeds: 'Races',
      gallery: 'Galerie',
      videos: 'Vidéos',
      care: 'Soins',
      about: 'À propos',
      faq: 'FAQ',
      contact: 'Contact',
      exploreCta: 'Explorer',
    },
    utility: {
      favorites: 'Favoris',
      compare: 'Comparer',
      lightMode: 'Mode clair',
      darkMode: 'Mode sombre',
      languageLabel: 'Langue',
    },
    hero: {
      kicker: 'Encyclopédie Féline Internationale · 20 Races Documentées',
      title: 'Discover the Wonderful World of Cats',
      subtitle:
        'Explorez le patrimoine génétique, l’histoire et la sensibilité de vingt races félines emblématiques à travers des fiches scientifiques détaillées, des portraits haute définition et des guides de soin.',
      primaryCta: 'Explore Cat Breeds',
      secondaryCta: 'Comparer deux races',
      featuredLabel: 'Spécimen à la une',
      scrollHint: 'Découvrir l’encyclopédie',
    },
    home: {
      statsTitle: 'L’atlas félin en chiffres vérifiés',
      statBreeds: 'Races documentées',
      statCountries: 'Régions d’origine',
      statCoats: 'Types de pelage',
      statSections: 'Critères par fiche',
      popularKicker: 'Sélection éditoriale',
      popularTitle: 'Les races les plus populaires',
      popularSubtitle:
        'Des géants bienveillants du Nord aux lignées royales d’Asie et de Méditerranée, parcourez les races les plus appréciées des foyers contemporains.',
      viewAllBreeds: 'Voir tout le catalogue',
      bannerTitle: 'Comprendre chaque lignée avant d’adopter',
      bannerText:
        'Chaque race possède une morphologie, un rythme d’activité, des besoins nutritionnels et des prédispositions génétiques propres. Catopedia rassemble ces données de référence en un seul espace clair.',
      bannerCta: 'Ouvrir le comparateur',
      factsKicker: 'Observation & Éthologie',
      factsTitle: 'Did You Know?',
      latestKicker: 'Mises à jour encyclopédiques',
      latestTitle: 'Dernières nouveautés & dossiers',
      latestSubtitle:
        'Nouvelles monographies complétées, études comportementales et recommandations de toilettage.',
      discoverMore: 'Discover More',
      carePreviewTitle: 'L’art du soin félin au quotidien',
      carePreviewSubtitle:
        'Alimentation équilibrée, brossage adapté au sous-poil et enrichissement de l’habitat.',
      readGuide: 'Consulter les guides de soins',
    },
    catalog: {
      kicker: 'Répertoire mondial',
      title: 'Catalogue des races de chats',
      subtitle:
        'Recherchez, filtrez par origine, gabarit, pelage ou tempérament, et comparez les races côte à côte.',
      searchPlaceholder: 'Rechercher une race, un pays, un trait...',
      filterOrigin: 'Origine',
      filterSize: 'Taille',
      filterCoat: 'Pelage',
      filterTemperament: 'Caractère',
      sortLabel: 'Trier par',
      sortPopular: 'Popularité',
      sortAlphaAsc: 'Nom (A–Z)',
      sortAlphaDesc: 'Nom (Z–A)',
      sortLifespan: 'Espérance de vie',
      allOrigins: 'Toutes les régions',
      allSizes: 'Toutes les tailles',
      allCoats: 'Tous les pelages',
      allTemperaments: 'Tous les tempéraments',
      resetFilters: 'Réinitialiser',
      resultsCount: 'races affichées',
      noResultsTitle: 'Aucune race ne correspond à ces critères',
      noResultsText:
        'Essayez d’élargir votre recherche ou de réinitialiser les filtres actifs.',
      popularityLabel: 'Indice de popularité',
      discoverMore: 'Discover More',
      addFavorite: 'Ajouter aux favoris',
      removeFavorite: 'Retirer des favoris',
      addToCompare: 'Comparer',
      inCompare: 'Sélectionné',
      origins: {
        'north-america': 'Amérique du Nord',
        europe: 'Europe',
        asia: 'Asie',
        'middle-east': 'Moyen-Orient & Afrique du Nord',
      },
      sizes: {
        small: 'Petit',
        medium: 'Moyen',
        large: 'Grand',
      },
      coats: {
        short: 'Poil court',
        'semi-long': 'Poil mi-long',
        long: 'Poil long',
        curly: 'Poil frisé',
        hairless: 'Nu / Sans poil',
      },
      temperaments: {
        calm: 'Calme',
        active: 'Actif',
        affectionate: 'Affectueux',
        independent: 'Indépendant',
        social: 'Sociable',
      },
    },
    detail: {
      backToCatalog: 'Retour au catalogue',
      previousBreed: 'Race précédente',
      nextBreed: 'Race suivante',
      accession: 'Notice N°',
      originLabel: 'Origine',
      sizeLabel: 'Gabarit',
      weightLabel: 'Poids moyen',
      lifespanLabel: 'Espérance de vie',
      coatLabel: 'Type de pelage',
      yearsUnit: 'ans',
      popularityRank: 'Rang de popularité',
      specsTitle: 'Fiche technique & Profil comportemental',
      metrics: {
        affection: 'Affection',
        activity: 'Niveau d’activité',
        intelligence: 'Intelligence',
        grooming: 'Besoin en toilettage',
        shedding: 'Perte de poils',
        childFriendly: 'Entente enfants',
        petFriendly: 'Entente animaux',
        vocalization: 'Vocalisations',
      },
      sections: {
        originHistory: 'Origine et histoire de la race',
        generalDescription: 'Description générale',
        coatColors: 'Couleurs et motifs du pelage',
        temperament: 'Caractère et personnalité',
        familyBehavior: 'Comportement avec les enfants et les autres animaux',
        activity: 'Niveau d’activité et environnement',
        grooming: 'Besoins en toilettage',
        nutrition: 'Conseils d’alimentation',
        health: 'Santé et prédispositions génétiques',
        physicalPeculiarities: 'Particularités physiques',
        advantages: 'Avantages et caractéristiques spécifiques',
        videoPresentation: 'Présentation vidéo documentaire',
        galleryTitle: 'Galerie photographique HD',
      },
      watchDocumentary: 'Lancer la présentation vidéo',
      compareThisBreed: 'Ajouter au comparateur',
    },
    compare: {
      kicker: 'Analyse comparative',
      title: 'Comparateur de deux races',
      subtitle:
        'Sélectionnez deux races pour évaluer leurs caractéristiques morphologiques, leurs besoins de soin et leur compatibilité familiale.',
      selectFirst: 'Première race',
      selectSecond: 'Seconde race',
      swapBreeds: 'Inverser',
      physicalProfile: 'Données morphologiques',
      behavioralProfile: 'Profil comportemental & d’entretien',
      careAndHealth: 'Synthèse santé & alimentation',
      emptyPrompt: 'Sélectionnez deux races ci-dessus pour lancer la comparaison.',
    },
    favorites: {
      title: 'Vos races favorites',
      subtitle: 'Retrouvez ici les races que vous avez enregistrées pour comparaison ou consultation rapide.',
      empty: 'Aucune race enregistrée pour le moment. Cliquez sur le cœur d’une fiche pour l’ajouter.',
      browseCta: 'Parcourir le catalogue',
      compareSelected: 'Comparer 2 favoris',
      clearAll: 'Tout effacer',
    },
    gallery: {
      kicker: 'Photothèque éditoriale',
      title: 'Cat Gallery',
      subtitle: 'Portraits de studio en lumière naturelle célébrant la diversité des robes, des regards et des morphologies félines.',
      filterAll: 'Toutes les robes',
      openLightbox: 'Agrandir',
      viewBreed: 'Voir la fiche complète',
    },
    videos: {
      kicker: 'Médiathèque féline',
      title: 'Cat Videos',
      subtitle: 'Capsules documentaires interactives sur les races, l’éthologie et les gestes essentiels du soin félin.',
      allCategories: 'Toutes les vidéos',
      catBreed: 'Portraits de races',
      catCare: 'Soins & Toilettage',
      catBehavior: 'Comportement',
      playVideo: 'Lire la vidéo',
      chaptersLabel: 'Chapitres de la présentation',
      playingLabel: 'Lecture en cours',
      pauseLabel: 'Pause',
      restartLabel: 'Recommencer',
    },
    care: {
      kicker: 'Guide pratique & vétérinaire',
      title: 'Cat Care',
      subtitle: 'Recommandations fondamentales pour assurer bien-être physique, équilibre nutritionnel et stimulation mentale à chaque étape de la vie.',
      keyChecklist: 'Points essentiels à retenir',
    },
    about: {
      kicker: 'Manifeste éditorial',
      title: 'À propos de CATOPEDIA',
      subtitle: 'Une encyclopédie numérique indépendante dédiée à la connaissance respectueuse, rigoureuse et visuelle des races félines.',
      missionTitle: 'Notre mission documentaire',
      missionText1:
        'CATOPEDIA est née d’un constat simple : choisir ou comprendre un compagnon félin exige des informations fiables, nuancées et dénuées de clichés. Notre rédaction rassemble les standards morphologiques, l’histoire des lignées et les réalités médicales propres à chaque race.',
      missionText2:
        'Conçue comme un atlas de référence multilingue, la plateforme privilégie la clarté scientifique, la prévention vétérinaire et le respect profond du bien-être animal.',
      pillarsTitle: 'Nos trois engagements',
      pillars: [
        {
          title: 'Précision encyclopédique',
          text: 'Chaque monographie distingue clairement les traits héréditaires, les besoins d’entretien réels et les prédispositions de santé à surveiller.',
        },
        {
          title: 'Esthétique de musée',
          text: 'Des portraits photographiques épurés et une mise en page aérée pour apprécier chaque texture de pelage et chaque expression.',
        },
        {
          title: 'Architecture ouverte',
          text: 'Modèle de données typé et découplé, prêt à être connecté à une API REST ou une base de données relationnelle pour s’enrichir en continu.',
        },
      ],
      architectureTitle: 'Évolutivité technique',
      architectureText:
        'Les données de CATOPEDIA reposent sur une couche de services asynchrone permettant l’intégration transparente d’une base de données ou d’un CMS externe sans refonte de l’interface.',
    },
    faq: {
      kicker: 'Questions fréquentes',
      title: 'FAQ Féline',
      subtitle: 'Réponses claires aux interrogations les plus courantes sur l’adoption, les allergies, l’alimentation et la cohabitation.',
      searchPlaceholder: 'Filtrer les questions...',
      allTopics: 'Tous les sujets',
      topics: {
        adoption: 'Adoption',
        health: 'Santé',
        care: 'Toilettage & Soins',
        breeds: 'Races & Comportement',
      },
    },
    contact: {
      kicker: 'Correspondance éditoriale',
      title: 'Contactez CATOPEDIA',
      subtitle: 'Vous souhaitez proposer une race à documenter, signaler une précision vétérinaire ou échanger avec notre équipe éditoriale ?',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Camille Laurent',
      emailLabel: 'Adresse e-mail',
      emailPlaceholder: 'camille@exemple.fr',
      subjectLabel: 'Objet du message',
      subjects: [
        'Suggestion d’une nouvelle race',
        'Précision vétérinaire ou scientifique',
        'Partenariat photographique / vidéo',
        'Question générale',
      ],
      messageLabel: 'Votre message',
      messagePlaceholder: 'Décrivez votre demande avec précision...',
      submitBtn: 'Envoyer le message',
      successTitle: 'Message transmis avec succès',
      successText: 'Merci pour votre contribution. Notre équipe éditoriale examinera votre message sous 48 heures ouvrées.',
      sendAnother: 'Envoyer un autre message',
      editorialOffice: 'Rédaction & Archives',
      officeHours: 'Du lundi au vendredi · 09:00 – 18:00 CET',
      responseTime: 'Délai moyen de réponse : 24 à 48 heures',
    },
    footer: {
      tagline: 'Encyclopédie numérique internationale dédiée à l’étude, la préservation et la compréhension des races de chats.',
      encyclopediaCol: 'Encyclopédie',
      resourcesCol: 'Ressources',
      connectCol: 'Communauté',
      rights: 'CATOPEDIA · Atlas Félin Mondial. Tous droits réservés.',
      backToTop: 'Haut de page',
    },
  },
  en: {
    brand: 'CATOPEDIA',
    nav: {
      home: 'Home',
      breeds: 'Breeds',
      gallery: 'Gallery',
      videos: 'Videos',
      care: 'Cat Care',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      exploreCta: 'Explore',
    },
    utility: {
      favorites: 'Favorites',
      compare: 'Compare',
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
      languageLabel: 'Language',
    },
    hero: {
      kicker: 'International Feline Encyclopedia · 20 Documented Breeds',
      title: 'Discover the Wonderful World of Cats',
      subtitle:
        'Explore the genetic heritage, history, and temperament of twenty iconic cat breeds through curated monographs, studio photography, and practical care guides.',
      primaryCta: 'Explore Cat Breeds',
      secondaryCta: 'Compare Two Breeds',
      featuredLabel: 'Featured Specimen',
      scrollHint: 'Explore the encyclopedia',
    },
    home: {
      statsTitle: 'The Feline Atlas in Verified Figures',
      statBreeds: 'Documented Breeds',
      statCountries: 'Origin Regions',
      statCoats: 'Coat Families',
      statSections: 'Criteria per Profile',
      popularKicker: 'Curated Selection',
      popularTitle: 'Most Popular Cat Breeds',
      popularSubtitle:
        'From gentle northern forest giants to ancient royal lineages of Asia and the Mediterranean, discover the world’s most cherished companions.',
      viewAllBreeds: 'View Full Catalog',
      bannerTitle: 'Understand Every Lineage Before Adopting',
      bannerText:
        'Each breed carries distinct morphology, daily energy requirements, nutritional habits, and genetic predispositions. Catopedia brings these reference facts together clearly.',
      bannerCta: 'Open Breed Comparator',
      factsKicker: 'Ethology & History',
      factsTitle: 'Did You Know?',
      latestKicker: 'Encyclopedia Updates',
      latestTitle: 'Latest Additions & Features',
      latestSubtitle:
        'Newly completed monographs, behavioral dossiers, and coat maintenance guides.',
      discoverMore: 'Discover More',
      carePreviewTitle: 'The Art of Daily Feline Care',
      carePreviewSubtitle:
        'Balanced nutrition, coat-specific brushing, and thoughtful indoor enrichment.',
      readGuide: 'Read Cat Care Guides',
    },
    catalog: {
      kicker: 'Global Directory',
      title: 'Cat Breeds Catalog',
      subtitle:
        'Search and filter by origin region, size, coat type, or temperament, and compare breeds side by side.',
      searchPlaceholder: 'Search a breed, country, or trait...',
      filterOrigin: 'Origin',
      filterSize: 'Size',
      filterCoat: 'Coat',
      filterTemperament: 'Temperament',
      sortLabel: 'Sort by',
      sortPopular: 'Popularity',
      sortAlphaAsc: 'Name (A–Z)',
      sortAlphaDesc: 'Name (Z–A)',
      sortLifespan: 'Lifespan',
      allOrigins: 'All regions',
      allSizes: 'All sizes',
      allCoats: 'All coat types',
      allTemperaments: 'All temperaments',
      resetFilters: 'Reset',
      resultsCount: 'breeds shown',
      noResultsTitle: 'No breeds match these filters',
      noResultsText: 'Try broadening your search terms or clearing active filters.',
      popularityLabel: 'Popularity index',
      discoverMore: 'Discover More',
      addFavorite: 'Save to favorites',
      removeFavorite: 'Remove favorite',
      addToCompare: 'Compare',
      inCompare: 'Selected',
      origins: {
        'north-america': 'North America',
        europe: 'Europe',
        asia: 'Asia',
        'middle-east': 'Middle East & North Africa',
      },
      sizes: {
        small: 'Small',
        medium: 'Medium',
        large: 'Large',
      },
      coats: {
        short: 'Shorthair',
        'semi-long': 'Semi-longhair',
        long: 'Longhair',
        curly: 'Curly / Rex',
        hairless: 'Hairless',
      },
      temperaments: {
        calm: 'Calm',
        active: 'Active',
        affectionate: 'Affectionate',
        independent: 'Independent',
        social: 'Social',
      },
    },
    detail: {
      backToCatalog: 'Back to catalog',
      previousBreed: 'Previous breed',
      nextBreed: 'Next breed',
      accession: 'Entry No.',
      originLabel: 'Origin',
      sizeLabel: 'Size',
      weightLabel: 'Average weight',
      lifespanLabel: 'Lifespan',
      coatLabel: 'Coat type',
      yearsUnit: 'years',
      popularityRank: 'Popularity rank',
      specsTitle: 'Technical Sheet & Behavioral Profile',
      metrics: {
        affection: 'Affection',
        activity: 'Activity level',
        intelligence: 'Intelligence',
        grooming: 'Grooming needs',
        shedding: 'Shedding',
        childFriendly: 'Child friendly',
        petFriendly: 'Pet friendly',
        vocalization: 'Vocalization',
      },
      sections: {
        originHistory: 'Origin & History',
        generalDescription: 'General Description',
        coatColors: 'Coat Colors & Patterns',
        temperament: 'Temperament & Personality',
        familyBehavior: 'Behavior with Children & Other Pets',
        activity: 'Activity Level & Environment',
        grooming: 'Grooming Requirements',
        nutrition: 'Nutrition Advice',
        health: 'Health & Genetic Predispositions',
        physicalPeculiarities: 'Physical Peculiarities',
        advantages: 'Key Advantages & Specific Traits',
        videoPresentation: 'Documentary Video Presentation',
        galleryTitle: 'HD Photography Gallery',
      },
      watchDocumentary: 'Play Documentary',
      compareThisBreed: 'Add to Comparator',
    },
    compare: {
      kicker: 'Side-by-Side Analysis',
      title: 'Breed Comparator',
      subtitle:
        'Select any two breeds to compare morphology, care demands, and family compatibility.',
      selectFirst: 'First breed',
      selectSecond: 'Second breed',
      swapBreeds: 'Swap',
      physicalProfile: 'Morphological Data',
      behavioralProfile: 'Behavioral & Care Ratings',
      careAndHealth: 'Health & Nutrition Summary',
      emptyPrompt: 'Choose two breeds above to begin comparing.',
    },
    favorites: {
      title: 'Saved Favorite Breeds',
      subtitle: 'Quick access to the cat breeds you bookmarked for review or comparison.',
      empty: 'No favorite breeds saved yet. Click the heart icon on any breed card to save it.',
      browseCta: 'Browse Catalog',
      compareSelected: 'Compare 2 Favorites',
      clearAll: 'Clear all',
    },
    gallery: {
      kicker: 'Editorial Archive',
      title: 'Cat Gallery',
      subtitle: 'Natural-light studio portraits celebrating feline coat textures, eye colors, and distinctive silhouettes.',
      filterAll: 'All coats',
      openLightbox: 'Enlarge',
      viewBreed: 'Open full profile',
    },
    videos: {
      kicker: 'Feline Media Library',
      title: 'Cat Videos',
      subtitle: 'Interactive documentary capsules covering breed heritage, behavior, and everyday feline care.',
      allCategories: 'All videos',
      catBreed: 'Breed Portraits',
      catCare: 'Care & Grooming',
      catBehavior: 'Behavior',
      playVideo: 'Watch video',
      chaptersLabel: 'Presentation Chapters',
      playingLabel: 'Playing',
      pauseLabel: 'Pause',
      restartLabel: 'Restart',
    },
    care: {
      kicker: 'Practical Veterinary Guide',
      title: 'Cat Care',
      subtitle: 'Essential practices for lifelong physical vitality, balanced nutrition, and mental enrichment.',
      keyChecklist: 'Essential Takeaways',
    },
    about: {
      kicker: 'Editorial Manifesto',
      title: 'About CATOPEDIA',
      subtitle: 'An independent digital encyclopedia dedicated to accurate, respectful, and visual knowledge of cat breeds.',
      missionTitle: 'Our Documentary Mission',
      missionText1:
        'CATOPEDIA began with a clear goal: helping future guardians and enthusiasts understand cat breeds beyond stereotypes. Our editorial profiles unite breed history, anatomical traits, and preventive health guidance.',
      missionText2:
        'Built as a multilingual reference atlas, the platform prioritizes factual clarity, veterinary prevention, and deep respect for feline welfare.',
      pillarsTitle: 'Our Three Pillars',
      pillars: [
        {
          title: 'Encyclopedic Rigor',
          text: 'Every monograph clearly distinguishes inherited traits, realistic grooming commitments, and breed-specific health monitoring.',
        },
        {
          title: 'Curatorial Aesthetics',
          text: 'Calm museum-inspired layouts and natural studio portraiture that highlight coat structure and expression.',
        },
        {
          title: 'Extensible Data Layer',
          text: 'Strongly typed, async-ready service architecture designed to connect seamlessly to an external API or database.',
        },
      ],
      architectureTitle: 'Future API Readiness',
      architectureText:
        'CATOPEDIA relies on a decoupled service interface so live CMS or database backends can be wired in without altering UI components.',
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Feline FAQ',
      subtitle: 'Clear answers to common questions on adoption, allergies, grooming, nutrition, and indoor life.',
      searchPlaceholder: 'Filter questions...',
      allTopics: 'All topics',
      topics: {
        adoption: 'Adoption',
        health: 'Health',
        care: 'Grooming & Care',
        breeds: 'Breeds & Behavior',
      },
    },
    contact: {
      kicker: 'Editorial Desk',
      title: 'Contact CATOPEDIA',
      subtitle: 'Want to suggest a breed monograph, share veterinary feedback, or reach our editorial team?',
      nameLabel: 'Full name',
      namePlaceholder: 'Alex Morgan',
      emailLabel: 'Email address',
      emailPlaceholder: 'alex@example.com',
      subjectLabel: 'Subject',
      subjects: [
        'Suggest a new breed entry',
        'Veterinary or factual correction',
        'Photography or video collaboration',
        'General inquiry',
      ],
      messageLabel: 'Message',
      messagePlaceholder: 'Share the details of your inquiry...',
      submitBtn: 'Send Message',
      successTitle: 'Message Sent Successfully',
      successText: 'Thank you for reaching out. Our editorial team reviews all messages within 48 business hours.',
      sendAnother: 'Send another message',
      editorialOffice: 'Editorial & Archives',
      officeHours: 'Monday to Friday · 09:00 – 18:00 CET',
      responseTime: 'Average response time: 24–48 hours',
    },
    footer: {
      tagline: 'An international digital encyclopedia dedicated to documenting and understanding the world’s cat breeds.',
      encyclopediaCol: 'Encyclopedia',
      resourcesCol: 'Resources',
      connectCol: 'Community',
      rights: 'CATOPEDIA · World Feline Atlas. All rights reserved.',
      backToTop: 'Back to top',
    },
  },
  ar: {
    brand: 'CATOPEDIA',
    nav: {
      home: 'الرئيسية',
      breeds: 'السلالات',
      gallery: 'المعرض',
      videos: 'الفيديو',
      care: 'العناية',
      about: 'عن الموسوعة',
      faq: 'الأسئلة',
      contact: 'اتصل بنا',
      exploreCta: 'استكشف',
    },
    utility: {
      favorites: 'المفضلة',
      compare: 'مقارنة',
      lightMode: 'الوضع الفاتح',
      darkMode: 'الوضع الداكن',
      languageLabel: 'اللغة',
    },
    hero: {
      kicker: 'موسوعة القطط العالمية · ٢٠ سلالة موثقة',
      title: 'Discover the Wonderful World of Cats',
      subtitle:
        'استكشف التراث الوراثي وتاريخ وطباع عشرين سلالة من أشهر سلالات القطط في العالم عبر بطاقات علمية مفصلة وصور عالية الدقة وإرشادات رعاية شاملة.',
      primaryCta: 'Explore Cat Breeds',
      secondaryCta: 'قارن بين سلالتين',
      featuredLabel: 'سلالة مختارة',
      scrollHint: 'تصفح الموسوعة',
    },
    home: {
      statsTitle: 'الأطلس العالمي للقطط بالأرقام الموثقة',
      statBreeds: 'سلالة موثقة',
      statCountries: 'أقاليم الأصل',
      statCoats: 'أنواع الفراء',
      statSections: 'معايير لكل سلالة',
      popularKicker: 'اختيارات المحررين',
      popularTitle: 'أشهر سلالات القطط',
      popularSubtitle:
        'من عمالقة الغابات الشمالية الهادئة إلى السلالات الملكية القديمة في آسيا ومصر، تعرّف على أكثر السلالات محبةً حول العالم.',
      viewAllBreeds: 'عرض الدليل الكامل',
      bannerTitle: 'افهم كل سلالة قبل التبنّي',
      bannerText:
        'لكل سلالة بنية جسدية ومستوى نشاط واحتياجات غذائية واستعدادات وراثية خاصة. تجمع كاتوبيديا هذه المعلومات الموثوقة في مكان واحد.',
      bannerCta: 'افتح أداة المقارنة',
      factsKicker: 'علم السلوك والتاريخ',
      factsTitle: 'Did You Know?',
      latestKicker: 'تحديثات الموسوعة',
      latestTitle: 'أحدث الإضافات والدراسات',
      latestSubtitle: 'ملفات سلالات محدّثة وملاحظات سلوكية وإرشادات عناية بالفراء.',
      discoverMore: 'Discover More',
      carePreviewTitle: 'فن العناية اليومية بالقطط',
      carePreviewSubtitle: 'تغذية متوازنة، تمشيط مناسب لنوع الفراء، وإثراء البيئة المنزلية.',
      readGuide: 'استعرض أدلة العناية',
    },
    catalog: {
      kicker: 'الدليل العالمي',
      title: 'دليل سلالات القطط',
      subtitle: 'ابحث وصفِّ حسب الموطن أو الحجم أو نوع الفراء أو الطباع، وقارن بين السلالات جنباً إلى جنب.',
      searchPlaceholder: 'ابحث عن سلالة أو بلد أو صفة...',
      filterOrigin: 'الموطن',
      filterSize: 'الحجم',
      filterCoat: 'الفراء',
      filterTemperament: 'الطبع',
      sortLabel: 'ترتيب حسب',
      sortPopular: 'الأكثر شعبية',
      sortAlphaAsc: 'الاسم (أ–ي)',
      sortAlphaDesc: 'الاسم (ي–أ)',
      sortLifespan: 'متوسط العمر',
      allOrigins: 'كل المناطق',
      allSizes: 'كل الأحجام',
      allCoats: 'كل أنواع الفراء',
      allTemperaments: 'كل الطباع',
      resetFilters: 'إعادة ضبط',
      resultsCount: 'سلالات معروضة',
      noResultsTitle: 'لا توجد سلالات مطابقة للبحث',
      noResultsText: 'جرّب توسيع كلمات البحث أو إعادة ضبط المرشحات.',
      popularityLabel: 'مؤشر الشعبية',
      discoverMore: 'Discover More',
      addFavorite: 'إضافة للمفضلة',
      removeFavorite: 'إزالة من المفضلة',
      addToCompare: 'مقارنة',
      inCompare: 'محددة',
      origins: {
        'north-america': 'أمريكا الشمالية',
        europe: 'أوروبا',
        asia: 'آسيا',
        'middle-east': 'الشرق الأوسط وشمال أفريقيا',
      },
      sizes: {
        small: 'صغير',
        medium: 'متوسط',
        large: 'كبير',
      },
      coats: {
        short: 'شعر قصير',
        'semi-long': 'شعر متوسط الطول',
        long: 'شعر طويل',
        curly: 'شعر مجعد',
        hairless: 'بدون شعر',
      },
      temperaments: {
        calm: 'هادئ',
        active: 'نشيط',
        affectionate: 'حنون',
        independent: 'مستقل',
        social: 'اجتماعي',
      },
    },
    detail: {
      backToCatalog: 'العودة إلى الدليل',
      previousBreed: 'السلالة السابقة',
      nextBreed: 'السلالة التالية',
      accession: 'رقم السجل',
      originLabel: 'الموطن الأصلي',
      sizeLabel: 'الحجم',
      weightLabel: 'متوسط الوزن',
      lifespanLabel: 'متوسط العمر',
      coatLabel: 'نوع الفراء',
      yearsUnit: 'سنة',
      popularityRank: 'ترتيب الشعبية',
      specsTitle: 'البطاقة التقنية والملف السلوكي',
      metrics: {
        affection: 'المودة والحنان',
        activity: 'مستوى النشاط',
        intelligence: 'الذكاء',
        grooming: 'الحاجة للتمشيط',
        shedding: 'تساقط الشعر',
        childFriendly: 'التوافق مع الأطفال',
        petFriendly: 'التوافق مع الحيوانات',
        vocalization: 'المواء والتعبير',
      },
      sections: {
        originHistory: 'الأصل والتاريخ',
        generalDescription: 'الوصف العام',
        coatColors: 'ألوان وأنماط الفراء',
        temperament: 'الشخصية والطباع',
        familyBehavior: 'السلوك مع الأطفال والحيوانات الأخرى',
        activity: 'مستوى النشاط والبيئة المناسبة',
        grooming: 'متطلبات العناية والتمشيط',
        nutrition: 'نصائح التغذية',
        health: 'الصحة والاستعدادات الوراثية',
        physicalPeculiarities: 'الخصائص الجسدية المميزة',
        advantages: 'المزايا والصفات الخاصة',
        videoPresentation: 'عرض فيديو وثائقي',
        galleryTitle: 'معرض الصور عالي الدقة',
      },
      watchDocumentary: 'تشغيل العرض الوثائقي',
      compareThisBreed: 'إضافة للمقارنة',
    },
    compare: {
      kicker: 'تحليل مقارن',
      title: 'مقارنة بين سلالتين',
      subtitle: 'اختر سلالتين لمقارنة الصفات الجسدية ومتطلبات العناية والتوافق الأسري.',
      selectFirst: 'السلالة الأولى',
      selectSecond: 'السلالة الثانية',
      swapBreeds: 'تبديل',
      physicalProfile: 'البيانات الجسدية',
      behavioralProfile: 'التقييم السلوكي والرعاية',
      careAndHealth: 'ملخص الصحة والتغذية',
      emptyPrompt: 'اختر سلالتين أعلاه لبدء المقارنة.',
    },
    favorites: {
      title: 'السلالات المفضلة',
      subtitle: 'وصول سريع إلى السلالات التي قمت بحفظها للمراجعة أو المقارنة.',
      empty: 'لا توجد سلالات محفوظة بعد. اضغط على أيقونة القلب لحفظ أي سلالة.',
      browseCta: 'تصفح الدليل',
      compareSelected: 'قارن سلالتين مفضلتين',
      clearAll: 'مسح الكل',
    },
    gallery: {
      kicker: 'أرشيف الصور',
      title: 'Cat Gallery',
      subtitle: 'صور استوديو بإضاءة طبيعية تبرز جمال الفراء وتنوع الألوان والعيون.',
      filterAll: 'جميع أنواع الفراء',
      openLightbox: 'تكبير',
      viewBreed: 'عرض البطاقة الكاملة',
    },
    videos: {
      kicker: 'مكتبة الفيديو',
      title: 'Cat Videos',
      subtitle: 'عروض وثائقية تفاعلية حول تاريخ السلالات وسلوكها والعناية اليومية بها.',
      allCategories: 'كل الفيديوهات',
      catBreed: 'بورتريهات السلالات',
      catCare: 'العناية والتمشيط',
      catBehavior: 'السلوك',
      playVideo: 'مشاهدة الفيديو',
      chaptersLabel: 'فصول العرض',
      playingLabel: 'قيد التشغيل',
      pauseLabel: 'إيقاف مؤقت',
      restartLabel: 'إعادة التشغيل',
    },
    care: {
      kicker: 'دليل العناية البيطرية',
      title: 'Cat Care',
      subtitle: 'إرشادات أساسية لضمان صحة القطط وتغذيتها المتوازنة ونشاطها الذهني في كل مراحل العمر.',
      keyChecklist: 'نقاط أساسية للرعاية',
    },
    about: {
      kicker: 'الرسالة التحريرية',
      title: 'عن CATOPEDIA',
      subtitle: 'موسوعة رقمية مستقلة مكرسة للمعرفة الدقيقة والمرئية بسلالات القطط حول العالم.',
      missionTitle: 'رسالتنا التوثيقية',
      missionText1:
        'انطلقت كاتوبيديا بهدف مساعدة محبي القطط والمربين على فهم كل سلالة بعيداً عن الصور النمطية، من خلال دمج التاريخ والخصائص الجسدية والوقاية البيطرية.',
      missionText2:
        'صُممت المنصة كأطلس متعدد اللغات يضع الوضوح العلمي ورفاهية الحيوان في صميم كل بطاقة.',
      pillarsTitle: 'ركائزنا الثلاث',
      pillars: [
        {
          title: 'دقة موسوعية',
          text: 'تميّز كل دراسة بين الصفات الوراثية والتزامات العناية الواقعية والفحوصات الوقائية الموصى بها.',
        },
        {
          title: 'جمالية متحفية',
          text: 'تصميم هادئ وصور استوديو طبيعية تُظهر تفاصيل الفراء والبنية الجسدية بوضوح.',
        },
        {
          title: 'بنية قابلة للتوسع',
          text: 'طبقة خدمات منظمة وجاهزة للربط المستقبلي بواجهات برمجة التطبيقات أو قواعد البيانات.',
        },
      ],
      architectureTitle: 'الجاهزية التقنية المستقبلية',
      architectureText:
        'تعتمد كاتوبيديا على خدمة بيانات غير متزامنة تتيح الاتصال السلس بأي قاعدة بيانات أو نظام إدارة محتوى مستقبلاً.',
    },
    faq: {
      kicker: 'الأسئلة الشائعة',
      title: 'الأسئلة المتكررة',
      subtitle: 'إجابات واضحة حول التبني والحساسية والتغذية والعناية والحياة المنزلية.',
      searchPlaceholder: 'ابحث في الأسئلة...',
      allTopics: 'كل المواضيع',
      topics: {
        adoption: 'التبنّي',
        health: 'الصحة',
        care: 'العناية والتمشيط',
        breeds: 'السلالات والسلوك',
      },
    },
    contact: {
      kicker: 'المراسلة التحريرية',
      title: 'تواصل مع CATOPEDIA',
      subtitle: 'هل ترغب في اقتراح سلالة جديدة أو إرسال ملاحظة علمية أو التواصل مع فريق التحرير؟',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'سارة المنصور',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'sara@example.com',
      subjectLabel: 'الموضوع',
      subjects: [
        'اقتراح إضافة سلالة جديدة',
        'ملاحظة بيطرية أو علمية',
        'تعاون في الصور أو الفيديو',
        'استفسار عام',
      ],
      messageLabel: 'رسالتك',
      messagePlaceholder: 'اكتب تفاصيل رسالتك هنا...',
      submitBtn: 'إرسال الرسالة',
      successTitle: 'تم إرسال رسالتك بنجاح',
      successText: 'شكراً لتواصلك معنا. سيقوم فريق التحرير بمراجعة رسالتك خلال ٤٨ ساعة عمل.',
      sendAnother: 'إرسال رسالة أخرى',
      editorialOffice: 'مكتب التحرير والأرشيف',
      officeHours: 'الإثنين إلى الجمعة · 09:00 – 18:00 CET',
      responseTime: 'متوسط وقت الرد: ٢٤ إلى ٤٨ ساعة',
    },
    footer: {
      tagline: 'موسوعة رقمية عالمية مخصصة لتوثيق سلالات القطط وفهم خصائصها واحتياجاتها.',
      encyclopediaCol: 'الموسوعة',
      resourcesCol: 'الموارد',
      connectCol: 'المجتمع',
      rights: 'CATOPEDIA · أطلس القطط العالمي. جميع الحقوق محفوظة.',
      backToTop: 'العودة للأعلى',
    },
  },
};
