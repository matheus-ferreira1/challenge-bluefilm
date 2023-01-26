import axios from "axios";
import { BannerMovieTypes, ActorTypes, MovieDataTypes } from "./types";

export const getTrendingMovies = async (): Promise<BannerMovieTypes[]> => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?language=pt-BR&api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    return data.results.slice(0, 10);
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async (): Promise<MovieDataTypes[]> => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getComingSoonMovies = async (): Promise<MovieDataTypes[]> => {
  try {
    const brazilDate = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
    const parsedDate = brazilDate.split(" ")[0].split("/");

    const day = parsedDate[0];
    const month = parsedDate[1];
    const year = parsedDate[2];

    const initialDate = `${year}-${month}-${day}`;
    const finalDate = `${parseInt(year) + 1}-${month}-${day}`;

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?language=pt-BR&api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&page=1&region=BR&sort_by=primary_release_date.asc&include_adult=false&primary_release_date.gte=${initialDate}&primary_release_date.lte=${finalDate}&with_release_type=2|3`
    );
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getPopularActors = async (): Promise<ActorTypes[]> => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/popular?language=pt-BR&api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    return data.results;
  } catch (error) {
    throw error;
  }
};
