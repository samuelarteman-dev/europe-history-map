export const CATEGORIES = {
  GEOPOLITIQUE: 'Géopolitique',
  CATASTROPHES: 'Catastrophes',
  CULTUREL_SPORT: 'Culturel/Sport',
  TECH_ECONOMIE: 'Tech/Économie',
}

export const CATEGORY_COLORS = {
  [CATEGORIES.GEOPOLITIQUE]: '#ef4444',
  [CATEGORIES.CATASTROPHES]: '#f97316',
  [CATEGORIES.CULTUREL_SPORT]: '#22c55e',
  [CATEGORIES.TECH_ECONOMIE]: '#3b82f6',
}

const events = [
  // === GÉOPOLITIQUE ===
  {
    id: 1,
    title: 'Sommet de Nice — Traité de Nice',
    date: '26 février 2001',
    year: 2001,
    description:
      "Le traité de Nice réforme les institutions de l'Union européenne en vue de l'élargissement vers l'Est. Il modifie les règles de vote au Conseil et la composition de la Commission.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 43.7102,
    lng: 7.262,
  },
  {
    id: 2,
    title: "Élargissement de l'UE à 10 nouveaux membres",
    date: '1er mai 2004',
    year: 2004,
    description:
      "Dix pays rejoignent l'Union européenne : Pologne, République tchèque, Hongrie, Slovaquie, Slovénie, Lituanie, Lettonie, Estonie, Chypre et Malte. C'est le plus grand élargissement de l'histoire de l'UE.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 50.8503,
    lng: 4.3517,
  },
  {
    id: 3,
    title: 'Attentats de Madrid',
    date: '11 mars 2004',
    year: 2004,
    description:
      'Des bombes explosent dans des trains de banlieue à Madrid, tuant 193 personnes et blessant plus de 2 000. Ces attentats sont attribués à une cellule jihadiste liée à Al-Qaïda.',
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 40.4074,
    lng: -3.6893,
    linkedTo: 5,
  },
  {
    id: 4,
    title: 'Attentats de Londres',
    date: '7 juillet 2005',
    year: 2005,
    description:
      "Quatre kamikazes frappent le réseau de transports londonien (trois rames de métro et un bus), tuant 56 personnes. C'est l'attentat le plus meurtrier au Royaume-Uni.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 51.5178,
    lng: -0.0823,
    linkedTo: 3,
  },
  {
    id: 5,
    title: 'Attentats de Paris (Charlie Hebdo et Hyper Cacher)',
    date: '7-9 janvier 2015',
    year: 2015,
    description:
      "Des terroristes attaquent la rédaction de Charlie Hebdo puis un supermarché Hyper Cacher à Paris, faisant 17 morts. Ces attentats provoquent une vague d'émotion mondiale avec le slogan « Je suis Charlie ».",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 48.8593,
    lng: 2.3702,
    linkedTo: 6,
  },
  {
    id: 6,
    title: 'Attentats du 13 novembre à Paris',
    date: '13 novembre 2015',
    year: 2015,
    description:
      "Des attaques coordonnées frappent le Bataclan, des terrasses de cafés et le Stade de France, faisant 131 morts. C'est l'attentat le plus meurtrier en France depuis la Seconde Guerre mondiale.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 48.8631,
    lng: 2.3708,
    linkedTo: 7,
  },
  {
    id: 7,
    title: 'Attentats de Bruxelles',
    date: '22 mars 2016',
    year: 2016,
    description:
      "Deux explosions à l'aéroport de Bruxelles-Zaventem et une dans le métro de Maelbeek tuent 32 personnes. Les attaques sont liées au réseau responsable des attentats de Paris de novembre 2015.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 50.9014,
    lng: 4.4844,
    linkedTo: 6,
  },
  {
    id: 8,
    title: 'Référendum sur le Brexit',
    date: '23 juin 2016',
    year: 2016,
    description:
      "Le Royaume-Uni vote à 51,9 % pour quitter l'Union européenne. Ce résultat surprend l'Europe entière et ouvre une longue période de négociations qui aboutira au Brexit effectif en 2020.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 51.5074,
    lng: -0.1278,
    linkedTo: 13,
  },
  {
    id: 9,
    title: "Annexion de la Crimée par la Russie",
    date: 'Mars 2014',
    year: 2014,
    description:
      "La Russie annexe la péninsule de Crimée après un référendum controversé, provoquant une crise internationale majeure. L'UE et les États-Unis imposent des sanctions à la Russie.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 44.9521,
    lng: 34.1024,
    linkedTo: 14,
  },
  {
    id: 10,
    title: 'Crise migratoire européenne',
    date: 'Été 2015',
    year: 2015,
    description:
      "Plus d'un million de migrants et réfugiés arrivent en Europe, principalement via la Méditerranée et les Balkans. Cette crise provoque de profondes divisions au sein de l'UE sur la politique d'asile.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 37.9838,
    lng: 23.7275,
  },
  {
    id: 11,
    title: "Guerre en Géorgie",
    date: 'Août 2008',
    year: 2008,
    description:
      "Un conflit armé éclate entre la Russie et la Géorgie au sujet de l'Ossétie du Sud. La guerre dure cinq jours et se termine par un cessez-le-feu négocié par la France.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 42.2679,
    lng: 43.9636,
  },
  {
    id: 12,
    title: "Indépendance du Kosovo",
    date: '17 février 2008',
    year: 2008,
    description:
      "Le Kosovo déclare unilatéralement son indépendance de la Serbie, reconnue rapidement par les États-Unis et une majorité d'États européens. La Serbie et la Russie s'y opposent fermement.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 42.6629,
    lng: 21.1655,
  },
  {
    id: 13,
    title: 'Brexit effectif',
    date: '31 janvier 2020',
    year: 2020,
    description:
      "Le Royaume-Uni quitte officiellement l'Union européenne après 47 ans d'adhésion. Une période de transition est mise en place jusqu'à fin 2020 pour négocier les futures relations commerciales.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 51.5074,
    lng: -0.1278,
    linkedTo: 8,
  },
  {
    id: 14,
    title: "Invasion de l'Ukraine par la Russie",
    date: '24 février 2022',
    year: 2022,
    description:
      "La Russie lance une invasion à grande échelle de l'Ukraine, provoquant la plus grande guerre en Europe depuis 1945. L'UE impose des sanctions sans précédent et fournit un soutien massif à l'Ukraine.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 50.4501,
    lng: 30.5234,
    linkedTo: 9,
  },
  {
    id: 15,
    title: "Adhésion de la Finlande à l'OTAN",
    date: '4 avril 2023',
    year: 2023,
    description:
      "La Finlande devient le 31e membre de l'OTAN, doublant la frontière terrestre de l'Alliance avec la Russie. Cette adhésion est une conséquence directe de l'invasion russe de l'Ukraine.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 60.1699,
    lng: 24.9384,
    linkedTo: 14,
  },

  // === CATASTROPHES ===
  {
    id: 16,
    title: 'Canicule européenne',
    date: 'Août 2003',
    year: 2003,
    description:
      "Une vague de chaleur exceptionnelle frappe l'Europe, causant environ 70 000 décès. La France est le pays le plus touché avec près de 15 000 morts, révélant des failles dans le système de santé.",
    category: CATEGORIES.CATASTROPHES,
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: 17,
    title: "Éruption de l'Eyjafjallajökull",
    date: 'Avril 2010',
    year: 2010,
    description:
      "L'éruption du volcan islandais Eyjafjallajökull crée un immense nuage de cendres qui paralyse le trafic aérien européen pendant plusieurs semaines, affectant 10 millions de passagers.",
    category: CATEGORIES.CATASTROPHES,
    lat: 63.633,
    lng: -19.6218,
  },
  {
    id: 18,
    title: 'Catastrophe de Fukushima (impact européen)',
    date: '11 mars 2011',
    year: 2011,
    description:
      "L'accident nucléaire de Fukushima au Japon provoque une onde de choc en Europe. L'Allemagne décide la sortie du nucléaire d'ici 2022, transformant durablement la politique énergétique européenne.",
    category: CATEGORIES.CATASTROPHES,
    lat: 52.52,
    lng: 13.405,
  },
  {
    id: 19,
    title: 'Pandémie de COVID-19 en Europe',
    date: 'Mars 2020',
    year: 2020,
    description:
      "Le COVID-19 frappe l'Europe de plein fouet, l'Italie étant le premier épicentre. Des confinements généralisés sont imposés, provoquant la plus grave crise sanitaire et économique depuis la Seconde Guerre mondiale.",
    category: CATEGORIES.CATASTROPHES,
    lat: 41.9028,
    lng: 12.4964,
  },
  {
    id: 20,
    title: "Inondations meurtrières en Allemagne et Belgique",
    date: 'Juillet 2021',
    year: 2021,
    description:
      "Des pluies torrentielles provoquent des inondations catastrophiques en Allemagne et en Belgique, faisant plus de 220 morts. C'est l'une des pires catastrophes naturelles en Europe occidentale.",
    category: CATEGORIES.CATASTROPHES,
    lat: 50.5276,
    lng: 6.9314,
    linkedTo: 21,
  },
  {
    id: 21,
    title: 'Inondations en Belgique',
    date: 'Juillet 2021',
    year: 2021,
    description:
      "La Belgique est frappée simultanément par des inondations dévastatrices, particulièrement dans la province de Liège. Plus de 40 personnes perdent la vie dans cette catastrophe liée au changement climatique.",
    category: CATEGORIES.CATASTROPHES,
    lat: 50.6326,
    lng: 5.5797,
    linkedTo: 20,
  },
  {
    id: 22,
    title: 'Séismes en Turquie et Syrie',
    date: '6 février 2023',
    year: 2023,
    description:
      "Deux puissants séismes (magnitude 7,8 et 7,7) frappent le sud de la Turquie et le nord de la Syrie, causant plus de 50 000 morts. C'est l'une des pires catastrophes sismiques de l'histoire de la région.",
    category: CATEGORIES.CATASTROPHES,
    lat: 37.1746,
    lng: 37.0666,
  },
  {
    id: 23,
    title: 'Incendies en Grèce',
    date: 'Été 2023',
    year: 2023,
    description:
      "La Grèce fait face au plus grand incendie jamais enregistré dans l'UE, ravageant la région d'Évros. Plus de 80 000 hectares brûlent, illustrant l'impact croissant du changement climatique en Méditerranée.",
    category: CATEGORIES.CATASTROPHES,
    lat: 41.1172,
    lng: 26.3089,
  },

  // === CULTUREL/SPORT ===
  {
    id: 24,
    title: "Euro 2000 (Belgique/Pays-Bas)",
    date: 'Juin-Juillet 2000',
    year: 2000,
    description:
      "Le Championnat d'Europe de football est co-organisé par la Belgique et les Pays-Bas. La France remporte le titre en battant l'Italie en finale grâce au but en or de David Trezeguet.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 50.8954,
    lng: 4.3418,
  },
  {
    id: 25,
    title: "Jeux olympiques d'Athènes",
    date: 'Août 2004',
    year: 2004,
    description:
      "Les JO reviennent dans leur pays d'origine, la Grèce. La cérémonie d'ouverture retrace l'histoire de la civilisation grecque. Cependant, le coût des infrastructures contribuera à la future crise financière du pays.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 37.9693,
    lng: 23.7064,
  },
  {
    id: 26,
    title: 'Jeux olympiques de Londres',
    date: 'Juillet-Août 2012',
    year: 2012,
    description:
      "Londres accueille les JO pour la troisième fois. La cérémonie d'ouverture de Danny Boyle célèbre la culture britannique. Usain Bolt et Mo Farah marquent la compétition.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 51.5387,
    lng: -0.0165,
  },
  {
    id: 27,
    title: "Euro 2016 en France",
    date: 'Juin-Juillet 2016',
    year: 2016,
    description:
      "La France accueille l'Euro dans un contexte sécuritaire tendu après les attentats de 2015. Le Portugal crée la surprise en remportant la finale face à la France au Stade de France.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 48.9244,
    lng: 2.36,
  },
  {
    id: 28,
    title: "Eurovision — victoire de Conchita Wurst",
    date: 'Mai 2014',
    year: 2014,
    description:
      "Conchita Wurst remporte l'Eurovision à Copenhague pour l'Autriche avec « Rise Like a Phoenix ». Cette victoire devient un symbole de tolérance et de diversité en Europe.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 55.6286,
    lng: 12.5774,
  },
  {
    id: 29,
    title: 'Coupe du Monde 2018 — La France championne',
    date: 'Juillet 2018',
    year: 2018,
    description:
      "L'équipe de France remporte sa deuxième Coupe du monde en Russie, battant la Croatie 4-2 en finale. Les Bleus de Didier Deschamps, emmenés par Mbappé et Griezmann, déclenchent une fête nationale.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 55.7963,
    lng: 37.5414,
  },
  {
    id: 30,
    title: "Euro 2020 — Finale à Wembley",
    date: 'Juin-Juillet 2021',
    year: 2021,
    description:
      "Reporté d'un an à cause du COVID-19, l'Euro se joue dans 11 villes européennes. La finale à Wembley voit l'Angleterre s'incliner face à l'Italie aux tirs au but devant son public.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 51.556,
    lng: -0.2795,
    linkedTo: 50,
  },
  {
    id: 31,
    title: 'Jeux olympiques de Paris',
    date: 'Juillet-Août 2024',
    year: 2024,
    description:
      "Paris accueille les JO 100 ans après 1924. La cérémonie d'ouverture sur la Seine est spectaculaire. Léon Marchand devient le héros français avec ses médailles d'or en natation.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 48.8566,
    lng: 2.3522,
  },

  // === TECH/ÉCONOMIE ===
  {
    id: 32,
    title: "Passage à l'euro fiduciaire",
    date: '1er janvier 2002',
    year: 2002,
    description:
      "Les pièces et billets en euros entrent en circulation dans 12 pays de la zone euro. C'est le plus grand changement monétaire de l'histoire, touchant 300 millions de citoyens européens.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 50.1109,
    lng: 8.6821,
  },
  {
    id: 33,
    title: 'Crise financière mondiale',
    date: 'Septembre 2008',
    year: 2008,
    description:
      "La faillite de Lehman Brothers déclenche une crise financière mondiale. L'Europe est durement touchée : les banques vacillent, les plans de sauvetage se multiplient et la récession frappe le continent.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 51.5131,
    lng: -0.089,
    linkedTo: 34,
  },
  {
    id: 34,
    title: 'Crise de la dette grecque',
    date: '2010-2015',
    year: 2010,
    description:
      "La Grèce révèle l'ampleur de sa dette publique, déclenchant une crise existentielle pour la zone euro. Trois plans de sauvetage internationaux et des mesures d'austérité drastiques sont imposés.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 37.9838,
    lng: 23.7275,
    linkedTo: 33,
  },
  {
    id: 35,
    title: "Lancement de l'iPhone en Europe",
    date: 'Novembre 2007',
    year: 2007,
    description:
      "Apple lance l'iPhone en Europe, d'abord au Royaume-Uni, en Allemagne et en France. Ce smartphone révolutionnaire transforme le quotidien des Européens et lance l'ère du mobile.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: 36,
    title: 'Entrée en vigueur du RGPD',
    date: '25 mai 2018',
    year: 2018,
    description:
      "Le Règlement Général sur la Protection des Données entre en vigueur dans toute l'UE. Cette loi pionnière sur la vie privée numérique impose de nouvelles règles aux entreprises du monde entier.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 50.8503,
    lng: 4.3517,
  },
  {
    id: 37,
    title: 'Plan de relance NextGenerationEU',
    date: 'Juillet 2020',
    year: 2020,
    description:
      "L'UE adopte un plan de relance historique de 750 milliards d'euros pour faire face à la crise du COVID-19. Pour la première fois, l'UE émet une dette commune à grande échelle.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 50.8503,
    lng: 4.3517,
  },
  {
    id: 38,
    title: 'Crise énergétique européenne',
    date: '2022',
    year: 2022,
    description:
      "La guerre en Ukraine provoque une flambée des prix de l'énergie en Europe. La dépendance au gaz russe est brutalement remise en question, accélérant la transition vers les énergies renouvelables.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 52.52,
    lng: 13.405,
    linkedTo: 14,
  },
  {
    id: 39,
    title: "Digital Markets Act de l'UE",
    date: 'Mars 2024',
    year: 2024,
    description:
      "Le DMA entre pleinement en vigueur, imposant aux géants du numérique (Apple, Google, Meta, etc.) de nouvelles obligations de concurrence. L'UE se positionne comme régulateur mondial du numérique.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 50.8503,
    lng: 4.3517,
  },
  {
    id: 40,
    title: 'Skype lancé en Europe',
    date: 'Août 2003',
    year: 2003,
    description:
      "Skype, créé par les Estoniens Jaan Tallinn et Ahti Heinla et le Suédois Niklas Zennström, est lancé. Ce logiciel de VoIP révolutionne les communications et symbolise l'innovation tech européenne.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 59.437,
    lng: 24.7536,
  },

  // === 10 ÉVÉNEMENTS SUPPLÉMENTAIRES ===

  // Géopolitique
  {
    id: 41,
    title: "Référendum sur l'indépendance de l'Écosse",
    date: '18 septembre 2014',
    year: 2014,
    description:
      "L'Écosse organise un référendum sur son indépendance vis-à-vis du Royaume-Uni. Le « Non » l'emporte avec 55,3 % des voix, mais le débat relance la question de l'autonomie écossaise et des mouvements indépendantistes en Europe.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 55.9533,
    lng: -3.1883,
  },
  {
    id: 42,
    title: 'Mouvement des Gilets jaunes',
    date: 'Novembre 2018',
    year: 2018,
    description:
      "Un mouvement de protestation sociale éclate en France contre la hausse des taxes sur les carburants. Les manifestations, souvent violentes, se poursuivent pendant des mois et forcent le gouvernement à des concessions majeures.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 48.8738,
    lng: 2.295,
  },
  {
    id: 43,
    title: "Élection d'Emmanuel Macron",
    date: '7 mai 2017',
    year: 2017,
    description:
      "Emmanuel Macron est élu président de la République française à 39 ans, devenant le plus jeune président de l'histoire de France. Son mouvement En Marche ! bouleverse le paysage politique traditionnel français.",
    category: CATEGORIES.GEOPOLITIQUE,
    lat: 48.8566,
    lng: 2.3522,
    linkedTo: 42,
  },

  // Catastrophes
  {
    id: 44,
    title: "Éruption de l'Eyjafjallajökull — Chaos aérien",
    date: 'Avril 2010',
    year: 2010,
    description:
      "Le nuage de cendres du volcan islandais Eyjafjallajökull provoque la plus grande fermeture de l'espace aérien européen depuis la Seconde Guerre mondiale. Plus de 100 000 vols sont annulés en une semaine.",
    category: CATEGORIES.CATASTROPHES,
    lat: 48.3538,
    lng: 11.786,
    linkedTo: 17,
  },
  {
    id: 45,
    title: 'Incendies dévastateurs en Grèce',
    date: 'Été 2023',
    year: 2023,
    description:
      "La Grèce subit une vague d'incendies sans précédent, dont le plus grand feu de forêt jamais enregistré dans l'UE près d'Alexandroupolis. Des dizaines de milliers de personnes sont évacuées dans tout le pays.",
    category: CATEGORIES.CATASTROPHES,
    lat: 38.0,
    lng: 23.7275,
    linkedTo: 23,
  },

  // Culturel/Sport
  {
    id: 46,
    title: "Eurovision 2022 — Victoire de l'Ukraine",
    date: 'Mai 2022',
    year: 2022,
    description:
      "Le groupe ukrainien Kalush Orchestra remporte l'Eurovision à Turin avec « Stefania », dans un contexte de guerre en Ukraine. La victoire, portée par un élan de solidarité, devient un symbole de soutien à l'Ukraine.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 45.0703,
    lng: 7.6869,
    linkedTo: 14,
  },

  // Tech/Économie
  {
    id: 47,
    title: 'Lancement de Spotify',
    date: 'Octobre 2008',
    year: 2008,
    description:
      "La plateforme suédoise de streaming musical Spotify est lancée. Elle révolutionne l'industrie musicale en proposant un accès légal et illimité à la musique, devenant un leader mondial du streaming.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 59.3293,
    lng: 18.0686,
  },
  {
    id: 48,
    title: "RGPD — Mise en application effective",
    date: '25 mai 2018',
    year: 2018,
    description:
      "Le RGPD entre en application après deux ans de période transitoire. Les premières amendes record tombent : Google est condamné à 50 millions d'euros par la CNIL française pour manque de transparence.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 48.8566,
    lng: 2.3522,
    linkedTo: 36,
  },
  {
    id: 49,
    title: 'Faillite de FTX — Onde de choc crypto',
    date: 'Novembre 2022',
    year: 2022,
    description:
      "La plateforme d'échange de cryptomonnaies FTX fait faillite, entraînant des pertes de milliards de dollars. L'UE accélère le cadre réglementaire MiCA pour encadrer les cryptoactifs en Europe.",
    category: CATEGORIES.TECH_ECONOMIE,
    lat: 50.8503,
    lng: 4.3517,
  },
  {
    id: 50,
    title: "Euro 2020 — L'Italie championne d'Europe",
    date: 'Juillet 2021',
    year: 2021,
    description:
      "Reporté d'un an à cause du COVID, l'Euro 2020 se tient dans 11 villes européennes. L'Italie triomphe en battant l'Angleterre aux tirs au but à Wembley, couronnant un parcours spectaculaire.",
    category: CATEGORIES.CULTUREL_SPORT,
    lat: 41.8902,
    lng: 12.4922,
  },
]

export default events
