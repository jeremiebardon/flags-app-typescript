import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BorderCountry, Country, Region } from "../types/countries.type";

const filterCountries = (countries: Country[]): Country[] => {
  return countries.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  tagTypes: ["Country"],
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], Region>({
      query: (region) =>
        region && region !== "all" ? `region/${region}` : "all",
      providesTags: (result = [], error, arg) =>
        result
          ? [
              ...result.map(({ cca3 }) => ({ type: "Country" as const, cca3 })),
              "Country",
            ]
          : ["Country"],
      transformResponse: (response: Country[], meta, arg) => {
        return response ? filterCountries(response) : [];
      },
    }),
    getCountryByCode: builder.query<Country[], string>({
      query: (code) => `alpha/${code}`,
      providesTags: (result, error, arg) => [{ type: "Country", id: arg }],
    }),
    getBorderCountries: builder.query<BorderCountry[], string[]>({
      query: (code) => `alpha?codes=${code.join(",")}&fields=name,cca3`,
    }),
  }),
});

export const {
  useLazyGetCountriesQuery,
  useGetCountryByCodeQuery,
  useGetBorderCountriesQuery,
} = api;
