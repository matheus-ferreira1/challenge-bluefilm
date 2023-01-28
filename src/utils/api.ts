import axios from "axios";
import { BannerMovieTypes, ActorTypes, MovieDataTypes } from "./types";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "pt-BR",
  },
});

export const getTrendingMovies = async (): Promise<BannerMovieTypes[]> => {
  try {
    const { data } = await api.get("trending/movie/week");
    return data.results.slice(0, 10);
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async (): Promise<MovieDataTypes[]> => {
  try {
    const { data } = await api.get("movie/popular");
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getComingSoonMovies = async (): Promise<MovieDataTypes[]> => {
  try {
    const { data } = await api.get("movie/upcoming");
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getPopularActors = async (): Promise<ActorTypes[]> => {
  try {
    const { data } = await api.get("person/popular");
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieSearch = async (
  searchInput: string
): Promise<MovieDataTypes> => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&query=${searchInput}`
    );
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id: string): Promise<MovieDataTypes> => {
  try {
    // const { data } = await api.get(`movie/${id}`);
    // return data.results;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=pt-BR`
    );
    return data.results;
  } catch (error) {
    throw error;
  }
};
