import { Country, CountryInfo } from "../types/countries.type";
import { formatNumberWithComma } from "./math";

export function filterCountries(
  countries: Country[] | undefined,
  searchTerm: string
): Country[] {
  if (!countries) {
    return [];
  }

  return !!searchTerm.length
    ? countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            searchTerm
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          );
      })
    : countries;
}

export function formatInfos(country: Country): CountryInfo {
  const subRegion = country.subregion ?? "Unknown";
  const population = formatNumberWithComma(country.population);
  const capital = country.capital?.join(", ") ?? "Unknown";
  const tld = country.tld?.join(", ") ?? "Unknown";
  const currencies = !!country.currencies
    ? Object.values(country.currencies)
        ?.map((currency) => currency.name)
        .join(", ")
    : "Unknown";
  const languages = !!country.languages
    ? Object.values(country.languages)?.join(", ")
    : "Unknown";

  return { capital, tld, currencies, languages, population, subRegion };
}
