import axios, { AxiosError } from "axios";
import { FC, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as Api from "../utils/api";
import { MovieDataTypes } from "../utils/types";

const MovieDetail: FC = () => {
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const [movieData, setMovieData] = useState<MovieDataTypes | null>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.log(error));
  }, [movieId]);

  console.log(movieData);

  return (
    <section className="bg-[#191b1f] text-white py-8 px-4 md:px-16">
      <div
        className="w-[300px] h-[300px]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieData?.backdrop_path})`,
        }}
      />
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
          alt={movieData?.title}
        />
        <div>
          <h2>
            {movieData?.title} {movieData?.release_date.slice(0, 4)}
          </h2>
          <h4>star {movieData?.vote_average.toFixed(1)}/10 IMDB</h4>
        </div>
      </div>
      <h1>Visao geral</h1>
      <p>{movieData?.overview}</p>
    </section>
  );
};

export default MovieDetail;
