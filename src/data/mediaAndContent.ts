import heroImg from '../assets/images/hero_cat_editorial_1794674538775.jpg';
import maineCoonImg from '../assets/images/breed_maine_coon_1794674539108.jpg';
import persianImg from '../assets/images/breed_persian_1794674538719.jpg';
import siameseImg from '../assets/images/breed_siamese_1794674539580.jpg';
import bengalImg from '../assets/images/breed_bengal_1794674543064.jpg';
import ragdollImg from '../assets/images/breed_ragdoll_1794674542980.jpg';
import sphynxImg from '../assets/images/breed_sphynx_1794674544486.jpg';
import turkishAngoraImg from '../assets/images/breed_turkish_angora_1794674545802.jpg';
import egyptianMauImg from '../assets/images/breed_egyptian_mau_1794674550360.jpg';
import russianBlueImg from '../assets/images/breed_russian_blue_1794674545311.jpg';
import abyssinianImg from '../assets/images/breed_abyssinian_1794674546170.jpg';

import { CareArticle, CatFact, CatVideoItem, FaqEntry } from '../types/cat';

export const HERO_BANNER_IMAGE = heroImg;

export const CAT_FACTS: CatFact[] = [
  {
    id: 'fact-1',
    category: { fr: 'Anatomie sensorielle', en: 'Sensory Anatomy', ar: 'التشريح الحسي' },
    title: {
      fr: 'Une empreinte nasale aussi unique qu’une empreinte digitale',
      en: 'A Nose Print as Unique as a Human Fingerprint',
      ar: 'بصمة أنف فريدة كبصمة الإصبع',
    },
    fact: {
      fr: 'La surface du truffe d’un chat présente un relief de crêtes et de sillons strictement individuel : aucun deux chats au monde ne possèdent exactement le même dessin nasal.',
      en: 'Every cat’s nose leather has a distinct pattern of bumps and ridges, making each feline’s nose print completely unique.',
      ar: 'يمتلك أنف كل قط نمطاً فريداً من التعرجات والنتوءات لا يتطابق مع أي قط آخر في العالم.',
    },
  },
  {
    id: 'fact-2',
    category: { fr: 'Acoustique & Bien-être', en: 'Acoustics & Wellness', ar: 'الصوت والشفاء' },
    title: {
      fr: 'Le ronronnement vibre entre 25 et 150 Hertz',
      en: 'Purring Vibrates Between 25 and 150 Hertz',
      ar: 'خرخرة القط تتردد بين ٢٥ و١٥٠ هرتز',
    },
    fact: {
      fr: 'Les chats ronronnent non seulement par contentement mais aussi pour s’auto-apaiser. Ces fréquences basses favorisent le relâchement musculaire et la stimulation osseuse.',
      en: 'Cats purr both in contentment and for self-soothing; those low-frequency vibrations support tissue recovery and stress relief.',
      ar: 'لا يخرخر القط عند السعادة فقط، بل لتهدئة نفسه أيضاً؛ فهذه الترددات المنخفضة تساعد على استرخاء العضلات وتقليل التوتر.',
    },
  },
  {
    id: 'fact-3',
    category: { fr: 'Génétique des robes', en: 'Coat Genetics', ar: 'وراثة الفراء' },
    title: {
      fr: 'Le secret thermique des robes Colourpoint',
      en: 'The Thermal Secret Behind Colourpoint Coats',
      ar: 'السر الحراري وراء ألوان القطط محددة الأطراف',
    },
    fact: {
      fr: 'Chez le Siamois, le Ragdoll ou le Sacré de Birmanie, l’enzyme tyrosinase est sensible à la chaleur : elle ne produit du pigment sombre que sur les extrémités plus fraîches (oreilles, museau, pattes, queue).',
      en: 'In Siamese, Ragdoll, and Birman cats, a heat-sensitive enzyme produces dark pigment only on cooler extremities such as ears, face, paws, and tail.',
      ar: 'في السيامي والراغدول والبيرمان، ينشط إنزيم الصبغة في المناطق الأبرد فقط من الجسم كالأذنين والأنف والأطراف.',
    },
  },
  {
    id: 'fact-4',
    category: { fr: 'Éthologie', en: 'Ethology', ar: 'علم السلوك' },
    title: {
      fr: 'Le clignement lent : un « sourire » de confiance',
      en: 'The Slow Blink: A Feline Smile of Trust',
      ar: 'الرمش البطيء: ابتسامة ثقة قططية',
    },
    fact: {
      fr: 'Des études comportementales ont démontré qu’en fermant lentement les yeux devant un chat avant de les rouvrir doucement, on lui envoie un signal apaisant qu’il renvoie fréquemment en retour.',
      en: 'Behavioral research confirms that slow-blinking toward a cat signals calm friendliness, and cats often mirror the gesture back.',
      ar: 'أثبتت الدراسات السلوكية أن إغماض العينين ببطء أمام القط يرسل إشارة أمان ومودة يبادلها القط غالباً بالمثل.',
    },
  },
];

export const CAT_VIDEOS: CatVideoItem[] = [
  {
    id: 'vid-maine-coon',
    breedId: 'maine-coon',
    title: {
      fr: 'Maine Coon & Géants du Nord : morphologie et vie en intérieur',
      en: 'Maine Coon & Northern Giants: Anatomy and Indoor Life',
      ar: 'الماين كون وعمالقة الشمال: البنية والحياة المنزلية',
    },
    category: 'breed-portrait',
    duration: '03:45',
    thumbnail: maineCoonImg,
    frames: [maineCoonImg, heroImg, maineCoonImg],
    summary: {
      fr: 'Exploration détaillée des adaptations climatiques du Maine Coon, de sa croissance lente sur 4 ans et de ses besoins articulaires.',
      en: 'A close look at the Maine Coon’s cold-weather adaptations, four-year growth curve, and joint support.',
      ar: 'نظرة مفصلة على تكيف الماين كون مع البرد ونموه البطيء واحتياجات مفاصله.',
    },
    chapters: [
      { time: '00:00', title: { fr: 'Origines maritimes', en: 'Maritime Origins', ar: 'الأصول البحرية' }, note: { fr: 'Nouvelle-Angleterre et sélection naturelle.', en: 'New England natural selection.', ar: 'الانتخاب الطبيعي في نيو إنجلاند.' } },
      { time: '01:15', title: { fr: 'Collerette & pattes', en: 'Ruff & Snowshoe Paws', ar: 'الطوق والأقدام' }, note: { fr: 'Anatomie hivernale expliquée.', en: 'Winter anatomy explained.', ar: 'تفسير البنية الشتوية.' } },
      { time: '02:30', title: { fr: 'Nutrition & HCM', en: 'Nutrition & HCM', ar: 'التغذية وصحة القلب' }, note: { fr: 'Prévention vétérinaire.', en: 'Preventive veterinary screening.', ar: 'الفحص البيطري الوقائي.' } },
    ],
  },
  {
    id: 'vid-grooming-long',
    breedId: 'persian',
    title: {
      fr: 'L’art du toilettage sans stress : Persan, Ragdoll et Birman',
      en: 'Stress-Free Coat Grooming: Persian, Ragdoll & Birman',
      ar: 'فن التمشيط دون توتر: الفارسي والراغدول والبيرمان',
    },
    category: 'care-guide',
    duration: '04:10',
    thumbnail: persianImg,
    frames: [persianImg, ragdollImg, turkishAngoraImg],
    summary: {
      fr: 'Choisir le bon peigne métallique, démêler les zones sensibles sans tirer et entretenir le contour des yeux au quotidien.',
      en: 'Selecting wide-tooth combs, detangling friction zones gently, and maintaining clean eyes.',
      ar: 'اختيار المشط المناسب وفك التشابكات بلطف والعناية اليومية بمحيط العينين.',
    },
    chapters: [
      { time: '00:00', title: { fr: 'Outils essentiels', en: 'Essential Tools', ar: 'الأدوات الأساسية' }, note: { fr: 'Peigne rotatif vs brosse douce.', en: 'Steel comb vs. soft slicker.', ar: 'المشط المعدني والفرشاة الناعمة.' } },
      { time: '01:30', title: { fr: 'Zones critiques', en: 'Friction Zones', ar: 'المناطق الحساسة' }, note: { fr: 'Collerette, aisselles et culottes.', en: 'Behind ears, armpits, and britches.', ar: 'خلف الأذنين وتحت الإبطين.' } },
      { time: '02:55', title: { fr: 'Soin oculaire', en: 'Eye Hygiene', ar: 'نظافة العينين' }, note: { fr: 'Compresse tiède et sérum.', en: 'Warm sterile wipe routine.', ar: 'المسح اللطيف بمحلول دافئ.' } },
    ],
  },
  {
    id: 'vid-communication',
    breedId: 'siamese',
    title: {
      fr: 'Décoder le langage félin : Siamois, Abyssin et Mau Égyptien',
      en: 'Decoding Feline Language: Siamese, Abyssinian & Egyptian Mau',
      ar: 'فهم لغة القطط: السيامي والحبشي والماو المصري',
    },
    category: 'behavior',
    duration: '03:30',
    thumbnail: siameseImg,
    frames: [siameseImg, abyssinianImg, egyptianMauImg],
    summary: {
      fr: 'Postures de queue, orientation des moustaches, trilles vocaux et clignement lent expliqués image par image.',
      en: 'Tail carriage, whisker posture, vocal trills, and slow-blink cues broken down clearly.',
      ar: 'تفسير وضعيات الذيل والشارب والأصوات التغريدية والرمش البطيء.',
    },
    chapters: [
      { time: '00:00', title: { fr: 'Signaux visuels', en: 'Visual Cues', ar: 'الإشارات البصرية' }, note: { fr: 'Oreilles et queue en point d’interrogation.', en: 'Ear angles and question-mark tail.', ar: 'زوايا الأذن ووضعية الذيل.' } },
      { time: '01:15', title: { fr: 'Répertoire vocal', en: 'Vocal Repertoire', ar: 'التعبير الصوتي' }, note: { fr: 'Pourquoi certains chats parlent plus.', en: 'Why oriental breeds converse more.', ar: 'لماذا تتحدث السلالات الشرقية أكثر.' } },
      { time: '02:25', title: { fr: 'Enrichissement', en: 'Play Enrichment', ar: 'التنشيط الذهني' }, note: { fr: 'Transformer l’énergie en complicité.', en: 'Channeling energy into bonding.', ar: 'تحويل النشاط إلى تفاعل إيجابي.' } },
    ],
  },
  {
    id: 'vid-wild-elegance',
    breedId: 'bengal',
    title: {
      fr: 'Félins athlétiques en appartement : aménager pour le Bengal',
      en: 'Athletic Cats Indoors: Designing Spaces for the Bengal',
      ar: 'القطط الرياضية في المنزل: تهيئة البيئة للبنغالي',
    },
    category: 'behavior',
    duration: '03:55',
    thumbnail: bengalImg,
    frames: [bengalImg, abyssinianImg, russianBlueImg],
    summary: {
      fr: 'Parcours muraux sécurisés, jeux d’eau, stimulation olfactive et gestion saine de l’instinct de poursuite.',
      en: 'Safe vertical highways, water fountains, scent enrichment, and healthy chase routines.',
      ar: 'مسارات تسلق آمنة ونوافير مياه وتوجيه غريزة المطاردة بشكل صحي.',
    },
    chapters: [
      { time: '00:00', title: { fr: 'Territoire en 3D', en: '3D Territory', ar: 'الإقليم ثلاثي الأبعاد' }, note: { fr: 'Exploiter la hauteur des murs.', en: 'Using vertical wall shelves.', ar: 'استغلال الارتفاعات الجدارية.' } },
      { time: '01:20', title: { fr: 'Cycle chasse-repas', en: 'Hunt-Eat-Sleep Cycle', ar: 'دورة الصيد والأكل' }, note: { fr: 'Jouer avant le dîner.', en: 'Structured play before meals.', ar: 'اللعب المنظم قبل الوجبات.' } },
      { time: '02:40', title: { fr: 'Roues et harnais', en: 'Exercise Wheels & Leash', ar: 'عجلات الجري والتنزه' }, note: { fr: 'Sorties encadrées sans risque.', en: 'Safe supervised outdoor time.', ar: 'التنزه الآمن تحت الإشراف.' } },
    ],
  },
  {
    id: 'vid-sphynx-care',
    breedId: 'sphynx',
    title: {
      fr: 'Prendre soin des races nues et frisées : Sphynx & Rex',
      en: 'Caring for Hairless & Curly Breeds: Sphynx & Rex',
      ar: 'العناية بالسلالات الصلعاء والمجعدة: سفينكس وريكس',
    },
    category: 'care-guide',
    duration: '03:25',
    thumbnail: sphynxImg,
    frames: [sphynxImg, heroImg, sphynxImg],
    summary: {
      fr: 'Hygiène cutanée douce, nettoyage des oreilles, régulation thermique et apports énergétiques spécifiques.',
      en: 'Gentle skin cleansing, ear care, thermal comfort, and elevated caloric nutrition.',
      ar: 'تنظيف الجلد بلطف والعناية بالأذنين وتوفير الدفء والسعرات المناسبة.',
    },
    chapters: [
      { time: '00:00', title: { fr: 'Sébum & bain tiède', en: 'Sebum & Warm Baths', ar: 'الزيوت والاستحمام' }, note: { fr: 'Produits au pH félin neutre.', en: 'Using cat-safe pH-balanced cleansers.', ar: 'استخدام منظفات مخصصة للقطط.' } },
      { time: '01:15', title: { fr: 'Protection soleil & froid', en: 'Sun & Cold Safety', ar: 'الحماية من الشمس والبرد' }, note: { fr: 'Textiles respirants et coins chauds.', en: 'Breathable cotton and sunny naps.', ar: 'الأقمشة القطنية والأماكن الدافئة.' } },
      { time: '02:20', title: { fr: 'Métabolisme actif', en: 'High Metabolism', ar: 'الأيض المرتفع' }, note: { fr: 'Adapter la ration quotidienne.', en: 'Calorie adjustment for warmth.', ar: 'تعديل الحصص الغذائية.' } },
    ],
  },
];

export const CARE_ARTICLES: CareArticle[] = [
  {
    id: 'care-nutrition',
    number: '01',
    category: { fr: 'Nutrition Féline', en: 'Feline Nutrition', ar: 'تغذية القطط' },
    title: {
      fr: 'Hydratation et alimentation du carnivore strict',
      en: 'Hydration & Obligate Carnivore Nutrition',
      ar: 'الترطيب وتغذية آكل اللحوم الإلزامي',
    },
    lead: {
      fr: 'Le chat tire naturellement une grande partie de son eau de ses proies. Combiner alimentation humide et sèche soutient durablement ses reins.',
      en: 'Cats naturally absorb most moisture from prey; pairing wet food with measured dry kibble protects urinary and renal health.',
      ar: 'يستمد القط معظم حاجته للماء من غذائه؛ لذا فإن الجمع بين الطعام الرطب والجاف يحمي الكلى والمسالك البولية.',
    },
    body: {
      fr: 'Privilégiez des protéines animales clairement identifiées en tête de composition, limitez les glucides excessifs et multipliez les points d’eau fraîche loin de la litière et de la gamelle alimentaire.',
      en: 'Choose named animal proteins as primary ingredients, keep carbohydrate fillers low, and place fresh water bowls or fountains away from litter boxes and food bowls.',
      ar: 'اختر أغذية تتصدرها البروتينات الحيوانية الواضحة، وقلل الكربوهيدرات، وضع أوعية الماء أو النوافير بعيداً عن صندوق الرمل والطعام.',
    },
    checklist: {
      fr: [
        'Proposer de la pâtée quotidienne en complément des croquettes',
        'Installer une fontaine d’eau filtrée ou des bols larges en céramique',
        'Fractionner les rations en plusieurs petits repas (ou gamelle ludique)',
        'Éviter strictement oignon, ail, raisin, chocolat et lys toxiques',
      ],
      en: [
        'Include daily wet food alongside measured kibble',
        'Offer wide ceramic bowls or a filtered water fountain',
        'Divide meals into small portions or puzzle feeders',
        'Strictly avoid toxic foods and lilies',
      ],
      ar: [
        'تقديم طعام رطب يومياً إلى جانب الحبوب الجافة الموزونة',
        'استخدام أوعية سيراميك واسعة أو نافورة ماء مفلتر',
        'تقسيم الوجبات إلى حصص صغيرة متفرقة',
        'إبعاد البصل والثوم والشوكولاتة ونبات الزنبق السام تماماً',
      ],
    },
    image: heroImg,
  },
  {
    id: 'care-grooming',
    number: '02',
    category: { fr: 'Toilettage & Pelage', en: 'Coat & Grooming', ar: 'العناية بالفراء' },
    title: {
      fr: 'Adapter le brossage à chaque texture de robe',
      en: 'Tailoring Brushing to Each Coat Architecture',
      ar: 'تكييف التمشيط حسب بنية الفراء',
    },
    lead: {
      fr: 'Un pelage de Persan, un double poil de Bleu Russe ou une peau de Sphynx exigent des gestes radicalement différents.',
      en: 'A Persian’s dense undercoat, a Russian Blue’s plush double fur, and a Sphynx’s suede skin each require distinct techniques.',
      ar: 'يختلف روتين العناية جذرياً بين فراء الفارسي الكثيف وفراء الروسي المزدوج وجلد السفينكس.',
    },
    body: {
      fr: 'Un brossage régulier réduit drastiquement l’ingestion de poils lors de la toilette, prévient les bourres douloureuses qui tirent sur la peau et devient un moment de complicité s’il reste court et récompensé.',
      en: 'Consistent gentle grooming curbs hairballs, prevents painful skin-pulling mats, and builds trust when kept brief and positive.',
      ar: 'يقلل التمشيط المنتظم من كرات الشعر ويمنع العقد المؤلمة ويعزز الثقة إذا بقي لطيفاً وقصيراً.',
    },
    checklist: {
      fr: [
        'Poil long (Persan) : peigne métallique quotidien jusqu’à la racine',
        'Poil mi-long (Maine Coon, Ragdoll) : 2 à 3 fois par semaine',
        'Poil court / Rex : gant doux ou chamois pour ne pas casser le poil',
        'Vérifier griffes, oreilles et dents lors d’une routine hebdomadaire calme',
      ],
      en: [
        'Longhair (Persian): daily steel-comb detangling to skin level',
        'Semi-long (Maine Coon, Ragdoll): 2–3 gentle sessions weekly',
        'Shorthair / Rex: soft mitt or chamois to protect delicate shafts',
        'Inspect claws, ears, and teeth calmly each week',
      ],
      ar: [
        'الشعر الطويل (الفارسي): مشط معدني يومي حتى الجذور',
        'الشعر المتوسط: ٢ إلى ٣ مرات أسبوعياً',
        'الشعر القصير والمجعد: قفاز ناعم لحماية الشعرة',
        'فحص المخالب والأذنين والأسنان بهدوء أسبوعياً',
      ],
    },
    image: persianImg,
  },
  {
    id: 'care-enrichment',
    number: '03',
    category: { fr: 'Habitat & Éthologie', en: 'Habitat & Enrichment', ar: 'البيئة والإثراء' },
    title: {
      fr: 'Concevoir un territoire d’intérieur en trois dimensions',
      en: 'Designing a Three-Dimensional Indoor Territory',
      ar: 'تصميم بيئة منزلية ثلاثية الأبعاد',
    },
    lead: {
      fr: 'Pour un chat, la surface d’un logement ne se mesure pas qu’au sol : la verticalité multiplie son sentiment de sécurité.',
      en: 'A cat measures territory vertically as well as horizontally—elevated walkways dramatically lower indoor stress.',
      ar: 'لا يقيس القط مساحته بالأرضية فقط؛ فالمسارات المرتفعة تضاعف شعوره بالأمان وتقلل التوتر.',
    },
    body: {
      fr: 'Respecter la règle du N+1 pour les bacs à litière (un bac par chat plus un supplémentaire), placer des griffoirs verticaux stables près des zones de passage et prévoir deux séances de jeu structuré par jour.',
      en: 'Follow the N+1 litter box rule (one per cat plus one extra), anchor tall sisal scratching posts near entryways, and schedule two interactive play sessions daily.',
      ar: 'تطبيق قاعدة صندوق رمل لكل قط مع صندوق إضافي، وتثبيت أعمدة خدش متينة، وتخصيص جلستي لعب يومياً.',
    },
    checklist: {
      fr: [
        'Règle des bacs : nombre de chats + 1, placés au calme',
        'Postes d’observation près des fenêtres sécurisées (filets de protection)',
        'Griffoirs hauts permettant l’étirement complet du dos',
        'Rotation hebdomadaire des jouets pour maintenir la nouveauté',
      ],
      en: [
        'Litter boxes: number of cats + 1 in quiet accessible spots',
        'Window perches with secure screens or catio netting',
        'Tall scratching posts enabling full spinal stretch',
        'Rotate interactive toys weekly to preserve novelty',
      ],
      ar: [
        'صناديق الرمل: عدد القطط + ١ في أماكن هادئة',
        'نقاط مراقبة عند النوافذ المؤمّنة بشبك حماية',
        'أعمدة خدش طويلة تسمح بتمدد العمود الفقري كاملاً',
        'تدوير الألعاب أسبوعياً للحفاظ على الحماس',
      ],
    },
    image: bengalImg,
  },
  {
    id: 'care-health',
    number: '04',
    category: { fr: 'Prévention Vétérinaire', en: 'Preventive Health', ar: 'الوقاية البيطرية' },
    title: {
      fr: 'Dépistage génétique et suivi annuel silencieux',
      en: 'Genetic Screening & Annual Preventive Checkups',
      ar: 'الفحص الوراثي والمتابعة البيطرية الدورية',
    },
    lead: {
      fr: 'Les chats masquent instinctivement la douleur. Une visite annuelle (semestrielle après 8 ans) permet d’agir avant l’apparition de symptômes.',
      en: 'Cats instinctively mask discomfort; annual checkups—and semi-annual visits after age 8—catch subtle changes early.',
      ar: 'تخفي القطط الألم غريزياً؛ لذا تكشف الفحوصات السنوية (ونصف السنوية بعد سن الثامنة) أي تغير مبكراً.',
    },
    body: {
      fr: 'Avant toute adoption de race pure, demandez les tests génétiques des parents (HCM pour Maine Coon/Ragdoll/Sphynx, PKD pour Persan/Exotic, GSD IV pour Norvégien, PRA pour Abyssin/Bengal).',
      en: 'Before adopting a pedigree cat, verify parental DNA and cardiac screenings tailored to the breed (HCM, PKD, PRA, GSD IV).',
      ar: 'قبل تبني أي قط أصيل، تحقق من الفحوصات الوراثية والقلبية الخاصة بسلالته مثل HCM وPKD وPRA.',
    },
    checklist: {
      fr: [
        'Bilan dentaire, poids et auscultation cardiaque chaque année',
        'Vaccins et antiparasitaires adaptés au mode de vie (intérieur/extérieur)',
        'Identification par puce électronique et stérilisation recommandée',
        'Bilan sanguin rénal régulier à partir de 7–8 ans',
      ],
      en: [
        'Annual dental, weight, and heart auscultation check',
        'Lifestyle-appropriate vaccinations and parasite protection',
        'Microchipping and timely spay/neuter care',
        'Senior renal blood panels starting around age 7–8',
      ],
      ar: [
        'فحص سنوي للأسنان والوزن وسماع نبض القلب',
        'تطعيمات ومضادات طفيليات مناسبة لنمط الحياة',
        'التعريف بالشريحة الإلكترونية والتعقيم الموصى به',
        'تحاليل وظائف الكلى دورياً بدءاً من سن السابعة',
      ],
    },
    image: russianBlueImg,
  },
];

export const FAQ_ENTRIES: FaqEntry[] = [
  {
    id: 'faq-1',
    category: 'breeds',
    question: {
      fr: 'Quelle race de chat convient le mieux à la vie en appartement calme ?',
      en: 'Which cat breeds are best suited to quiet apartment living?',
      ar: 'ما هي أفضل السلالات للعيش في شقة هادئة؟',
    },
    answer: {
      fr: 'Le Ragdoll, le British Shorthair, le Persan, l’Exotic Shorthair, le Bleu Russe et le Sacré de Birmanie s’épanouissent particulièrement bien en appartement, à condition de leur offrir des griffoirs, un poste d’observation sécurisé et des moments de jeu quotidiens.',
      en: 'The Ragdoll, British Shorthair, Persian, Exotic Shorthair, Russian Blue, and Birman adapt smoothly to apartments when provided with scratching posts, safe window views, and daily play.',
      ar: 'تتكيف سلالات الراغدول والبريطاني قصير الشعر والفارسي والإكزوتيك والروسي الأزرق والبيرمان بامتياز مع الشقق عند توفر أعمدة الخدش والنوافذ الآمنة واللعب اليومي.',
    },
  },
  {
    id: 'faq-2',
    category: 'health',
    question: {
      fr: 'Existe-t-il une race de chat réellement 100 % hypoallergénique ?',
      en: 'Is any cat breed truly 100% hypoallergenic?',
      ar: 'هل توجد سلالة قطط خالية تماماً من مسببات الحساسية؟',
    },
    answer: {
      fr: 'Non. La principale protéine allergène (Fel d 1) est produite dans la salive et les glandes sébacées, pas uniquement dans les poils. Certaines lignées de Sibérien, de Balinais ou de Bleu Russe en produisent parfois moins, et le Sphynx disperse moins de poils dans l’air, mais il est toujours recommandé de passer du temps au contact du chat avant d’adopter.',
      en: 'No. The primary allergen (Fel d 1) originates in saliva and skin glands rather than fur alone. Some Siberian, Russian Blue, or Rex lines produce lower amounts, so spending time with the specific cat beforehand is always wise.',
      ar: 'لا؛ فالمسبب الرئيسي للحساسية (بروتين Fel d 1) يوجد في اللعاب والجلد وليس في الشعر فقط. تنتج بعض خطوط السيبيري والروسي كميات أقل، لذا يُنصح بتجربة الاحتكاك بالقط قبل التبني.',
    },
  },
  {
    id: 'faq-3',
    category: 'breeds',
    question: {
      fr: 'Comment différencier un Maine Coon, un Norvégien et un Sibérien ?',
      en: 'How can I tell a Maine Coon, Norwegian Forest Cat, and Siberian apart?',
      ar: 'كيف أميز بين الماين كون وقط الغابات النرويجي والسيبيري؟',
    },
    answer: {
      fr: 'Trois indices morphologiques aident immédiatement : le Maine Coon a un museau carré et une silhouette rectangulaire allongée ; le Norvégien possède un profil parfaitement droit et une tête en triangle équilatéral ; le Sibérien affiche des courbes douces et rondes avec un corps massif en tonneau.',
      en: 'Three quick cues: the Maine Coon has a square muzzle and rectangular body; the Norwegian Forest Cat has a straight nose profile and triangular head; the Siberian features softer rounded contours and a barrel chest.',
      ar: 'ثلاث علامات واضحة: الماين كون له خطم مربع وجسم مستطيل، والنرويجي له أنف مستقيم ورأس مثلثي، والسيبيري ملامحه مستديرة وصدره ممتلئ.',
    },
  },
  {
    id: 'faq-4',
    category: 'care',
    question: {
      fr: 'À quelle fréquence faut-il brosser un chat à poil long ou mi-long ?',
      en: 'How often should long-haired or semi-long-haired cats be brushed?',
      ar: 'كم مرة يجب تمشيط القطط ذات الشعر الطويل أو المتوسط؟',
    },
    answer: {
      fr: 'Un Persan à fourrure laineuse dense demande un démêlage quotidien au peigne métallique. Les races à poil mi-long avec peu de sous-poil comme le Ragdoll, le Birman ou l’Angora Turc se contentent généralement de 2 à 3 brossages doux par semaine (plus en période de mue).',
      en: 'Dense woolly Persians require daily combing to the skin. Silkier semi-long breeds such as Ragdoll, Birman, and Turkish Angora usually need 2 to 3 sessions weekly, increasing during seasonal molts.',
      ar: 'يحتاج الفارسي إلى تمشيط يومي دقيق، بينما يكفي ٢ إلى ٣ مرات أسبوعياً للسلالات الحريرية كالراغدول والبيرمان والأنجورا التركي.',
    },
  },
  {
    id: 'faq-5',
    category: 'adoption',
    question: {
      fr: 'À quel âge un chaton de race peut-il rejoindre son nouveau foyer ?',
      en: 'At what age should a pedigree kitten join its new home?',
      ar: 'في أي عمر يمكن للقط الصغير الانتقال إلى منزله الجديد؟',
    },
    answer: {
      fr: 'L’âge idéal se situe entre 12 et 14 semaines minimum (3 mois à 3 mois et demi). Ce délai permet au chaton de recevoir sa primovaccination complète et surtout d’achever son apprentissage social (inhibition de la morsure, propreté, codes félins) auprès de sa mère et de sa fratrie.',
      en: 'Between 12 and 14 weeks is ideal, ensuring full early vaccinations and vital maternal socialization such as bite inhibition and litter habits.',
      ar: 'العمر المثالي بين ١٢ و١٤ أسبوعاً لإتمام التطعيمات الأولية واكتساب المهارات الاجتماعية والنظافة من الأم.',
    },
  },
  {
    id: 'faq-6',
    category: 'breeds',
    question: {
      fr: 'Quelles sont les races les plus adaptées aux familles avec jeunes enfants ?',
      en: 'Which breeds are most compatible with families with children?',
      ar: 'ما السلالات الأكثر توافقاً مع العائلات التي لديها أطفال؟',
    },
    answer: {
      fr: 'Le Maine Coon, le Ragdoll, le Sacré de Birmanie, l’American Shorthair, le Burmese et le Sibérien se distinguent par leur patience et leur sociabilité. Quelle que soit la race, il reste essentiel d’apprendre aux enfants à respecter le repos du chat.',
      en: 'Maine Coon, Ragdoll, Birman, American Shorthair, Burmese, and Siberian cats are renowned for patience. Regardless of breed, always teach children to respect a cat’s resting space.',
      ar: 'تشتهر سلالات الماين كون والراغدول والبيرمان والأمريكي قصير الشعر والبورمي والسيبيري بالصبر، مع ضرورة تعليم الأطفال احترام وقت راحة القط.',
    },
  },
  {
    id: 'faq-7',
    category: 'health',
    question: {
      fr: 'Qu’est-ce que la HCM et pourquoi faut-il la dépister ?',
      en: 'What is HCM and why is screening important?',
      ar: 'ما هو اعتلال عضلة القلب الضخامي (HCM) ولماذا يُفحص؟',
    },
    answer: {
      fr: 'La cardiomyopathie hypertrophique (HCM) est une affection cardiaque fréquente chez le chat (notamment chez le Maine Coon, le Ragdoll, le Sphynx et le British Shorthair) caractérisée par un épaississement du muscle cardiaque. Les tests ADN (quand disponibles) et les échographies cardiaques des reproducteurs réduisent fortement le risque.',
      en: 'Hypertrophic cardiomyopathy (HCM) is a thickening of the heart muscle seen across breeds like Maine Coon, Ragdoll, Sphynx, and British Shorthair. Parental DNA tests and cardiac ultrasounds significantly reduce inherited risk.',
      ar: 'هو تضخم في عضلة القلب يظهر لدى بعض السلالات كالماين كون والراغدول والسفينكس. وتساعد الفحوصات الوراثية وتصوير القلب في الحد من انتقاله.',
    },
  },
  {
    id: 'faq-8',
    category: 'care',
    question: {
      fr: 'Un chat d’intérieur peut-il vivre pleinement épanoui sans sortir ?',
      en: 'Can an indoor-only cat live a happy, fulfilled life?',
      ar: 'هل يمكن لقط يعيش داخل المنزل فقط أن يكون سعيداً؟',
    },
    answer: {
      fr: 'Oui, à condition d’enrichir son environnement : arbre à chat stable près d’une fenêtre sécurisée, cachettes en hauteur, séances de jeu simulant la chasse avant les repas, et éventuellement un balcon sécurisé par un filet.',
      en: 'Yes—when provided with tall cat trees near screened windows, elevated resting spots, daily interactive hunt-style play before meals, and safe balcony netting where possible.',
      ar: 'نعم، بشرط إثراء بيئته بأشجار تسلق قرب نوافذ محمية، وأماكن استرخاء مرتفعة، وجلسات لعب يومية تحاكي الصيد قبل الوجبات.',
    },
  },
];
