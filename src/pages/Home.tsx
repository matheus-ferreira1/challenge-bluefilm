import { FC, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { ActorTypes, BannerMovieTypes, MovieDataTypes } from "../utils/types";
import * as Api from "../utils/api";

const Home: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null | unknown>(null);
  const [bannerMovies, setBannerMovies] = useState<BannerMovieTypes[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieDataTypes[]>([]);
  const [comingSoon, setComingSoon] = useState<MovieDataTypes[]>([]);
  const [popularActors, setPopularActors] = useState<ActorTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const trendingMovies = await Api.getTrendingMovies();
        setBannerMovies(trendingMovies);
        console.log(trendingMovies);

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

  return <div>Home</div>;
};

export default Home;
