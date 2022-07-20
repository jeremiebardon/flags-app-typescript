import { Country } from "../../types/countries.type";
import { filterCountries, formatInfos } from "../country";

const countries = [
  {
    name: {
      common: "Algéria",
    },
  },
  {
    name: {
      common: "Belgium",
    },
  },
] as any as Country[];

const country = {
  subregion: "Polynesia",
  population: 55197,
  capital: ["Pago Pago"],
  tld: [".as"],
  currencies: {
    USD: { name: "United States dollar", symbol: "$" },
  },
  languages: {
    eng: "English",
    smo: "Samoan",
  },
} as any as Country;

describe("country helpers test", () => {
  describe(".filterCountries", () => {
    it("should filter countries", () => {
      const result = filterCountries(countries, "alge");

      expect(result).toEqual([
        {
          name: {
            common: "Algéria",
          },
        },
      ]);
    });

    it("should render empty country", () => {
      const result = filterCountries(undefined, "alge");

      expect(result).toEqual([]);
    });

    it("should return all countries", () => {
      const result = filterCountries(countries, "");

      expect(result).toEqual(countries);
    });
  });

  describe(".formatCountryInfo", () => {
    it("should format country infos", () => {
      const result = formatInfos(country);
      expect(result).toEqual({
        subRegion: "Polynesia",
        population: "55,197",
        capital: "Pago Pago",
        tld: ".as",
        currencies: "United States dollar",
        languages: "English, Samoan",
      });
    });

    it("should return unknown from null field", () => {
      const countryWithNullFields = {
        ...country,
        subregion: undefined,
        capital: undefined,
        tld: undefined,
        currencies: undefined,
        languages: undefined,
      } as any as Country;

      const result = formatInfos(countryWithNullFields);

      expect(result).toEqual({
        subRegion: "Unknown",
        population: "55,197",
        capital: "Unknown",
        tld: "Unknown",
        currencies: "Unknown",
        languages: "Unknown",
      });
    });
  });
});
