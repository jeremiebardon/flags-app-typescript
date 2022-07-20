export type Region =
  | "all"
  | "africa"
  | "americas"
  | "asia"
  | "europe"
  | "oceania";

export type CapitalInfos = {
  readonly latlng: number[];
};

export type CountryInfo = {
  readonly capital: string;
  readonly tld: string;
  readonly currencies: string;
  readonly languages: string;
  readonly subRegion?: string;
  readonly population?: string;
};

export type CarInfo = {
  readonly signs: string[];
  readonly side: string;
};

export type CoatOfArms = {
  readonly png: string;
  readonly svg: string;
};

export type CountryName = {
  readonly common: string;
  readonly official: string;
  readonly nativeName: { [key: string]: { common: string; official: string } };
};

export type FlagsImage = {
  readonly png: string;
  readonly svg: string;
};

export type Currencies = {
  readonly name: string;
  readonly symbol: string;
};

export interface Country {
  readonly altSpellings: string[];
  readonly area: number;
  readonly borders: string[];
  readonly capital?: string[];
  readonly capitalInfo: CapitalInfos;
  readonly currencies: { [key: string]: Currencies };
  readonly car: CarInfo;
  readonly cca2: string;
  readonly cca3: string;
  readonly ccn3: string;
  readonly cioc: string;
  readonly coatOfArms: CoatOfArms;
  readonly languages: { [key: string]: string };
  readonly name: CountryName;
  readonly flags: FlagsImage;
  readonly population?: number;
  readonly region: string;
  readonly subregion: string;
  readonly tld: string[];
}

export type BorderCountry = Pick<Country, "cca3" | "name">;
