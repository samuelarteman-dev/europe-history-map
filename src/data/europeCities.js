// Capitals and major cities of European countries
// Each country has its capital (always shown) and up to 3 major cities (shown on zoom)

const europeCities = [
  // Albania
  { name: 'Tirana', country: 'Albania', lat: 41.3275, lng: 19.8187, isCapital: true },
  { name: 'Durrës', country: 'Albania', lat: 41.3233, lng: 19.4542, isCapital: false },
  { name: 'Vlorë', country: 'Albania', lat: 40.4667, lng: 19.4897, isCapital: false },

  // Austria
  { name: 'Vienne', country: 'Austria', lat: 48.2082, lng: 16.3738, isCapital: true },
  { name: 'Graz', country: 'Austria', lat: 47.0707, lng: 15.4395, isCapital: false },
  { name: 'Linz', country: 'Austria', lat: 48.3069, lng: 14.2858, isCapital: false },
  { name: 'Salzbourg', country: 'Austria', lat: 47.8095, lng: 13.055, isCapital: false },

  // Belgium
  { name: 'Bruxelles', country: 'Belgium', lat: 50.8503, lng: 4.3517, isCapital: true },
  { name: 'Anvers', country: 'Belgium', lat: 51.2194, lng: 4.4025, isCapital: false },
  { name: 'Gand', country: 'Belgium', lat: 51.0543, lng: 3.7174, isCapital: false },
  { name: 'Charleroi', country: 'Belgium', lat: 50.4108, lng: 4.4446, isCapital: false },

  // Bosnia
  { name: 'Sarajevo', country: 'Bosnia', lat: 43.8563, lng: 18.4131, isCapital: true },
  { name: 'Banja Luka', country: 'Bosnia', lat: 44.772, lng: 17.1909, isCapital: false },

  // Bulgaria
  { name: 'Sofia', country: 'Bulgaria', lat: 42.6977, lng: 23.3219, isCapital: true },
  { name: 'Plovdiv', country: 'Bulgaria', lat: 42.1354, lng: 24.7453, isCapital: false },
  { name: 'Varna', country: 'Bulgaria', lat: 43.2141, lng: 27.9147, isCapital: false },

  // Croatia
  { name: 'Zagreb', country: 'Croatia', lat: 45.815, lng: 15.9819, isCapital: true },
  { name: 'Split', country: 'Croatia', lat: 43.5081, lng: 16.4402, isCapital: false },
  { name: 'Rijeka', country: 'Croatia', lat: 45.3271, lng: 14.4422, isCapital: false },

  // Czech Republic
  { name: 'Prague', country: 'Czechia', lat: 50.0755, lng: 14.4378, isCapital: true },
  { name: 'Brno', country: 'Czechia', lat: 49.1951, lng: 16.6068, isCapital: false },
  { name: 'Ostrava', country: 'Czechia', lat: 49.8209, lng: 18.2625, isCapital: false },

  // Denmark
  { name: 'Copenhague', country: 'Denmark', lat: 55.6761, lng: 12.5683, isCapital: true },
  { name: 'Aarhus', country: 'Denmark', lat: 56.1629, lng: 10.2039, isCapital: false },
  { name: 'Odense', country: 'Denmark', lat: 55.4038, lng: 10.4024, isCapital: false },

  // Estonia
  { name: 'Tallinn', country: 'Estonia', lat: 59.437, lng: 24.7536, isCapital: true },
  { name: 'Tartu', country: 'Estonia', lat: 58.378, lng: 26.7291, isCapital: false },

  // Finland
  { name: 'Helsinki', country: 'Finland', lat: 60.1699, lng: 24.9384, isCapital: true },
  { name: 'Tampere', country: 'Finland', lat: 61.4978, lng: 23.761, isCapital: false },
  { name: 'Turku', country: 'Finland', lat: 60.4518, lng: 22.2666, isCapital: false },

  // France
  { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, isCapital: true },
  { name: 'Marseille', country: 'France', lat: 43.2965, lng: 5.3698, isCapital: false },
  { name: 'Lyon', country: 'France', lat: 45.764, lng: 4.8357, isCapital: false },
  { name: 'Toulouse', country: 'France', lat: 43.6047, lng: 1.4442, isCapital: false },

  // Germany
  { name: 'Berlin', country: 'Germany', lat: 52.52, lng: 13.405, isCapital: true },
  { name: 'Munich', country: 'Germany', lat: 48.1351, lng: 11.582, isCapital: false },
  { name: 'Hambourg', country: 'Germany', lat: 53.5511, lng: 9.9937, isCapital: false },
  { name: 'Francfort', country: 'Germany', lat: 50.1109, lng: 8.6821, isCapital: false },

  // Greece
  { name: 'Athènes', country: 'Greece', lat: 37.9838, lng: 23.7275, isCapital: true },
  { name: 'Thessalonique', country: 'Greece', lat: 40.6401, lng: 22.9444, isCapital: false },
  { name: 'Patras', country: 'Greece', lat: 38.2466, lng: 21.7346, isCapital: false },

  // Hungary
  { name: 'Budapest', country: 'Hungary', lat: 47.4979, lng: 19.0402, isCapital: true },
  { name: 'Debrecen', country: 'Hungary', lat: 47.5316, lng: 21.6273, isCapital: false },
  { name: 'Szeged', country: 'Hungary', lat: 46.253, lng: 20.1414, isCapital: false },

  // Iceland
  { name: 'Reykjavik', country: 'Iceland', lat: 64.1466, lng: -21.9426, isCapital: true },

  // Ireland
  { name: 'Dublin', country: 'Ireland', lat: 53.3498, lng: -6.2603, isCapital: true },
  { name: 'Cork', country: 'Ireland', lat: 51.8969, lng: -8.4863, isCapital: false },
  { name: 'Galway', country: 'Ireland', lat: 53.2707, lng: -9.0568, isCapital: false },

  // Italy
  { name: 'Rome', country: 'Italy', lat: 41.9028, lng: 12.4964, isCapital: true },
  { name: 'Milan', country: 'Italy', lat: 45.4642, lng: 9.19, isCapital: false },
  { name: 'Naples', country: 'Italy', lat: 40.8518, lng: 14.2681, isCapital: false },
  { name: 'Turin', country: 'Italy', lat: 45.0703, lng: 7.6869, isCapital: false },

  // Latvia
  { name: 'Riga', country: 'Latvia', lat: 56.9496, lng: 24.1052, isCapital: true },

  // Lithuania
  { name: 'Vilnius', country: 'Lithuania', lat: 54.6872, lng: 25.2797, isCapital: true },
  { name: 'Kaunas', country: 'Lithuania', lat: 54.8985, lng: 23.9036, isCapital: false },

  // Luxembourg
  { name: 'Luxembourg', country: 'Luxembourg', lat: 49.6117, lng: 6.13, isCapital: true },

  // Montenegro
  { name: 'Podgorica', country: 'Montenegro', lat: 42.4304, lng: 19.2594, isCapital: true },

  // Netherlands
  { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lng: 4.9041, isCapital: true },
  { name: 'Rotterdam', country: 'Netherlands', lat: 51.9244, lng: 4.4777, isCapital: false },
  { name: 'La Haye', country: 'Netherlands', lat: 52.0705, lng: 4.3007, isCapital: false },

  // North Macedonia
  { name: 'Skopje', country: 'North Macedonia', lat: 41.9973, lng: 21.428, isCapital: true },

  // Norway
  { name: 'Oslo', country: 'Norway', lat: 59.9139, lng: 10.7522, isCapital: true },
  { name: 'Bergen', country: 'Norway', lat: 60.3913, lng: 5.3221, isCapital: false },
  { name: 'Trondheim', country: 'Norway', lat: 63.4305, lng: 10.3951, isCapital: false },

  // Poland
  { name: 'Varsovie', country: 'Poland', lat: 52.2297, lng: 21.0122, isCapital: true },
  { name: 'Cracovie', country: 'Poland', lat: 50.0647, lng: 19.945, isCapital: false },
  { name: 'Wrocław', country: 'Poland', lat: 51.1079, lng: 17.0385, isCapital: false },
  { name: 'Gdańsk', country: 'Poland', lat: 54.352, lng: 18.6466, isCapital: false },

  // Portugal
  { name: 'Lisbonne', country: 'Portugal', lat: 38.7223, lng: -9.1393, isCapital: true },
  { name: 'Porto', country: 'Portugal', lat: 41.1579, lng: -8.6291, isCapital: false },
  { name: 'Braga', country: 'Portugal', lat: 41.5518, lng: -8.4229, isCapital: false },

  // Romania
  { name: 'Bucarest', country: 'Romania', lat: 44.4268, lng: 26.1025, isCapital: true },
  { name: 'Cluj-Napoca', country: 'Romania', lat: 46.7712, lng: 23.6236, isCapital: false },
  { name: 'Timișoara', country: 'Romania', lat: 45.7489, lng: 21.2087, isCapital: false },

  // Serbia
  { name: 'Belgrade', country: 'Serbia', lat: 44.7866, lng: 20.4489, isCapital: true },
  { name: 'Novi Sad', country: 'Serbia', lat: 45.2671, lng: 19.8335, isCapital: false },
  { name: 'Niš', country: 'Serbia', lat: 43.3209, lng: 21.8954, isCapital: false },

  // Slovakia
  { name: 'Bratislava', country: 'Slovakia', lat: 48.1486, lng: 17.1077, isCapital: true },
  { name: 'Košice', country: 'Slovakia', lat: 48.7164, lng: 21.2611, isCapital: false },

  // Slovenia
  { name: 'Ljubljana', country: 'Slovenia', lat: 46.0569, lng: 14.5058, isCapital: true },
  { name: 'Maribor', country: 'Slovenia', lat: 46.5547, lng: 15.6459, isCapital: false },

  // Spain
  { name: 'Madrid', country: 'Spain', lat: 40.4168, lng: -3.7038, isCapital: true },
  { name: 'Barcelone', country: 'Spain', lat: 41.3874, lng: 2.1686, isCapital: false },
  { name: 'Valence', country: 'Spain', lat: 39.4699, lng: -0.3763, isCapital: false },
  { name: 'Séville', country: 'Spain', lat: 37.3891, lng: -5.9845, isCapital: false },

  // Sweden
  { name: 'Stockholm', country: 'Sweden', lat: 59.3293, lng: 18.0686, isCapital: true },
  { name: 'Göteborg', country: 'Sweden', lat: 57.7089, lng: 11.9746, isCapital: false },
  { name: 'Malmö', country: 'Sweden', lat: 55.605, lng: 13.0038, isCapital: false },

  // Switzerland
  { name: 'Berne', country: 'Switzerland', lat: 46.948, lng: 7.4474, isCapital: true },
  { name: 'Zurich', country: 'Switzerland', lat: 47.3769, lng: 8.5417, isCapital: false },
  { name: 'Genève', country: 'Switzerland', lat: 46.2044, lng: 6.1432, isCapital: false },

  // Turkey (European part)
  { name: 'Ankara', country: 'Turkey', lat: 39.9334, lng: 32.8597, isCapital: true },
  { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784, isCapital: false },
  { name: 'Izmir', country: 'Turkey', lat: 38.4237, lng: 27.1428, isCapital: false },

  // Ukraine
  { name: 'Kyiv', country: 'Ukraine', lat: 50.4501, lng: 30.5234, isCapital: true },
  { name: 'Kharkiv', country: 'Ukraine', lat: 49.9935, lng: 36.2304, isCapital: false },
  { name: 'Odessa', country: 'Ukraine', lat: 46.4825, lng: 30.7233, isCapital: false },
  { name: 'Lviv', country: 'Ukraine', lat: 49.8397, lng: 24.0297, isCapital: false },

  // United Kingdom
  { name: 'Londres', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, isCapital: true },
  { name: 'Birmingham', country: 'United Kingdom', lat: 52.4862, lng: -1.8904, isCapital: false },
  { name: 'Manchester', country: 'United Kingdom', lat: 53.4808, lng: -2.2426, isCapital: false },
  { name: 'Édimbourg', country: 'United Kingdom', lat: 55.9533, lng: -3.1883, isCapital: false },

  // Moldova
  { name: 'Chișinău', country: 'Moldova', lat: 47.0105, lng: 28.8638, isCapital: true },

  // Belarus
  { name: 'Minsk', country: 'Belarus', lat: 53.9045, lng: 27.5615, isCapital: true },

  // Russia (European part)
  { name: 'Moscou', country: 'Russia', lat: 55.7558, lng: 37.6173, isCapital: true },
  { name: 'Saint-Pétersbourg', country: 'Russia', lat: 59.9343, lng: 30.3351, isCapital: false },

  // Kosovo
  { name: 'Pristina', country: 'Kosovo', lat: 42.6629, lng: 21.1655, isCapital: true },

  // Cyprus
  { name: 'Nicosie', country: 'Cyprus', lat: 35.1856, lng: 33.3823, isCapital: true },

  // Malta
  { name: 'La Valette', country: 'Malta', lat: 35.8989, lng: 14.5146, isCapital: true },
]

export default europeCities
