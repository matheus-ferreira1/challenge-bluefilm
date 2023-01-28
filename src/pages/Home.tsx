import { FC, useEffect, useState } from "react";
import { AxiosError } from "axios";

import { ActorTypes, BannerMovieTypes, MovieDataTypes } from "../utils/types";
import * as Api from "../utils/api";

import Banner from "../components/Banner";
import ListFilms from "../components/ListFilms";
import ListActors from "../components/ListActors";

const Home: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null | unknown>(null);
  const [bannerMovies, setBannerMovies] = useState<BannerMovieTypes[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieDataTypes[]>([]);
  const [comingSoon, setComingSoon] = useState<MovieDataTypes[]>([]);
  const [popularActors, setPopularActors] = useState<ActorTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const trendingMovies = await Api.getTrendingMovies();
        setBannerMovies(trendingMovies);
        const popularMovies = await Api.getPopularMovies();
        setPopularMovies(popularMovies);
        const comingSoonMovies = await Api.getComingSoonMovies();
        setComingSoon(comingSoonMovies);
        const popularActors = await Api.getPopularActors();
        setPopularActors(popularActors);
      } catch (error: unknown | AxiosError) {
        console.log(error);
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen full flex justify-center items-center text-white text-3xl bg-[#191b1f]">
        Carregando...
      </div>
    );
  }

  return (
    <main>
      <Banner bannerMovies={bannerMovies} />
      <ListFilms
        title="Filmes Populares"
        loading={loading}
        popularMovies={popularMovies}
        comingSoon={comingSoon}
      />

      <ListActors />
    </main>
  );
};

export default Home;
