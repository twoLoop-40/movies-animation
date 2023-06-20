export enum MovieRoute {
  popular = "",
  commingSoon = "comming-soon",
  nowPlayng = "now-playng"
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetail extends IMovie {
  belongs_to_collection: BelongsToCollection;
  budget: number;
  homepage: string;
  genres: Genre[];
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

export const propsForDetail = [
  "budget",
  "homepage",
  "runtime",
  "revenue",
  "popularity",
  "overview",
  "id",
  "backdrop_path",
  "title"
];

export interface MovieDetailProps {
  budget: number;
  homepage: string;
  runtime: number;
  revenue: number;
  popularity: number;
  overview: string;
  id: number;
  backdrop_path: string;
  title: string;
}
interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IAPIResponse {
  page: number;
  results: IMovie[];
}

export interface CardProps {
  title: string;
  poster_path: string;
  id: number;
}
