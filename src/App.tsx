import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { BannerMovieTypes } from "./utils/types";

import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";
import ActorDetail from "./pages/ActorDetail";

import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bannerMovies, setBannerMovies] = useState<BannerMovieTypes[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );

        const { results } = data;
        setBannerMovies(results.slice(0, 10));
      } catch (error) {
        // const err = error as AxiosError;
        // console.log(err.response?.data);
        // setError(err.response?.data);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="/actor-detail/:id" element={<ActorDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
