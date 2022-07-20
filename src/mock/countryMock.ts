import { BorderCountry, Country } from "../types/countries.type";

export const countryMockFrance = {
  name: {
    common: "France",
    official: "French Republic",
    nativeName: {
      fra: {
        official: "République française",
        common: "France",
      },
    },
  },
  tld: [".fr"],
  cca2: "FR",
  ccn3: "250",
  cca3: "FRA",
  cioc: "FRA",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    EUR: {
      name: "Euro",
      symbol: "€",
    },
  },
  idd: {
    root: "+3",
    suffixes: ["3"],
  },
  capital: ["Paris"],
  altSpellings: ["FR", "French Republic", "République française"],
  region: "Europe",
  subregion: "Western Europe",
  languages: {
    fra: "French",
  },
  translations: {
    ara: {
      official: "الجمهورية الفرنسية",
      common: "فرنسا",
    },
    ces: {
      official: "Francouzská republika",
      common: "Francie",
    },
    cym: {
      official: "French Republic",
      common: "France",
    },
    deu: {
      official: "Französische Republik",
      common: "Frankreich",
    },
    est: {
      official: "Prantsuse Vabariik",
      common: "Prantsusmaa",
    },
    fin: {
      official: "Ranskan tasavalta",
      common: "Ranska",
    },
    fra: {
      official: "République française",
      common: "France",
    },
    hrv: {
      official: "Francuska Republika",
      common: "Francuska",
    },
    hun: {
      official: "Francia Köztársaság",
      common: "Franciaország",
    },
    ita: {
      official: "Repubblica francese",
      common: "Francia",
    },
    jpn: {
      official: "フランス共和国",
      common: "フランス",
    },
    kor: {
      official: "프랑스 공화국",
      common: "프랑스",
    },
    nld: {
      official: "Franse Republiek",
      common: "Frankrijk",
    },
    per: {
      official: "جمهوری فرانسه",
      common: "فرانسه",
    },
    pol: {
      official: "Republika Francuska",
      common: "Francja",
    },
    por: {
      official: "República Francesa",
      common: "França",
    },
    rus: {
      official: "Французская Республика",
      common: "Франция",
    },
    slk: {
      official: "Francúzska republika",
      common: "Francúzsko",
    },
    spa: {
      official: "República francés",
      common: "Francia",
    },
    swe: {
      official: "Republiken Frankrike",
      common: "Frankrike",
    },
    urd: {
      official: "جمہوریہ فرانس",
      common: "فرانس",
    },
    zho: {
      official: "法兰西共和国",
      common: "法国",
    },
  },
  latlng: [46, 2],
  landlocked: false,
  borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
  area: 551695,
  demonyms: {
    eng: {
      f: "French",
      m: "French",
    },
    fra: {
      f: "Française",
      m: "Français",
    },
  },
  flag: "🇫🇷",
  maps: {
    googleMaps: "https://goo.gl/maps/g7QxxSFsWyTPKuzd7",
    openStreetMaps: "https://www.openstreetmap.org/relation/1403916",
  },
  population: 67391582,
  gini: {
    "2018": 32.4,
  },
  fifa: "FRA",
  car: {
    signs: ["F"],
    side: "right",
  },
  timezones: [
    "UTC-10:00",
    "UTC-09:30",
    "UTC-09:00",
    "UTC-08:00",
    "UTC-04:00",
    "UTC-03:00",
    "UTC+01:00",
    "UTC+02:00",
    "UTC+03:00",
    "UTC+04:00",
    "UTC+05:00",
    "UTC+10:00",
    "UTC+11:00",
    "UTC+12:00",
  ],
  continents: ["Europe"],
  flags: {
    png: "https://flagcdn.com/w320/fr.png",
    svg: "https://flagcdn.com/fr.svg",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/fr.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/fr.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [48.87, 2.33],
  },
  postalCode: {
    format: "#####",
    regex: "^(\\d{5})$",
  },
} as Country;

export const borderCountries = [
  {
    name: {
      common: "Andorra",
      official: "Principality of Andorra",
      nativeName: {
        cat: {
          official: "Principat d'Andorra",
          common: "Andorra",
        },
      },
    },
    cca3: "AND",
  },
  {
    name: {
      common: "Spain",
      official: "Kingdom of Spain",
      nativeName: {
        spa: {
          official: "Reino de España",
          common: "España",
        },
      },
    },
    cca3: "ESP",
  },
  {
    name: {
      common: "Switzerland",
      official: "Swiss Confederation",
      nativeName: {
        fra: {
          official: "Confédération suisse",
          common: "Suisse",
        },
        gsw: {
          official: "Schweizerische Eidgenossenschaft",
          common: "Schweiz",
        },
        ita: {
          official: "Confederazione Svizzera",
          common: "Svizzera",
        },
        roh: {
          official: "Confederaziun svizra",
          common: "Svizra",
        },
      },
    },
    cca3: "CHE",
  },
  {
    name: {
      common: "Italy",
      official: "Italian Republic",
      nativeName: {
        ita: {
          official: "Repubblica italiana",
          common: "Italia",
        },
      },
    },
    cca3: "ITA",
  },
  {
    name: {
      common: "Monaco",
      official: "Principality of Monaco",
      nativeName: {
        fra: {
          official: "Principauté de Monaco",
          common: "Monaco",
        },
      },
    },
    cca3: "MCO",
  },
  {
    name: {
      common: "Germany",
      official: "Federal Republic of Germany",
      nativeName: {
        deu: {
          official: "Bundesrepublik Deutschland",
          common: "Deutschland",
        },
      },
    },
    cca3: "DEU",
  },
  {
    name: {
      common: "Belgium",
      official: "Kingdom of Belgium",
      nativeName: {
        deu: {
          official: "Königreich Belgien",
          common: "Belgien",
        },
        fra: {
          official: "Royaume de Belgique",
          common: "Belgique",
        },
        nld: {
          official: "Koninkrijk België",
          common: "België",
        },
      },
    },
    cca3: "BEL",
  },
  {
    name: {
      common: "Luxembourg",
      official: "Grand Duchy of Luxembourg",
      nativeName: {
        deu: {
          official: "Großherzogtum Luxemburg",
          common: "Luxemburg",
        },
        fra: {
          official: "Grand-Duché de Luxembourg",
          common: "Luxembourg",
        },
        ltz: {
          official: "Groussherzogtum Lëtzebuerg",
          common: "Lëtzebuerg",
        },
      },
    },
    cca3: "LUX",
  },
] as BorderCountry[];
