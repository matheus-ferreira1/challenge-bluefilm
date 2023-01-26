import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

import { ActorTypes, BannerMovieTypes, MovieDataTypes } from "./utils/types";
import * as Api from "./utils/api";

import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";
import ActorDetail from "./pages/ActorDetail";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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

  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="/actor-detail/:id" element={<ActorDetail />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
