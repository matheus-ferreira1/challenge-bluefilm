import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDataTypes } from "../utils/types";

import { AiFillStar } from "react-icons/ai";

const MovieDetail: FC = () => {
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const [movieData, setMovieData] = useState<MovieDataTypes | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <section className="flex flex-col">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`}
        alt={movieData?.title}
        className="w-full sm:h-[244px] md:h-[464px] object-cover"
      />
      <div className="bg-[#191b1f] text-white py-8 px-4 md:px-16">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w200${movieData?.poster_path}`}
            alt={movieData?.title}
            className="-mt-32 sm:-mt-36 md:-mt-44 w-[125px] sm:w-[150px] md:w-[200px] object-cover"
          />
          <div className="">
            <h2 className="text-2xl font-semibold">
              {movieData?.title} {movieData?.release_date.slice(0, 4)}
            </h2>
            <h4 className="font-semibold mt-2 text-xl flex items-center gap-2">
              <AiFillStar size={24} className="text-[#ffb800]" />{" "}
              {movieData?.vote_average.toFixed(1)}/10{" "}
              <span className="text-black bg-[#ffb800] px-3 rounded-md">
                IMDb
              </span>
            </h4>
          </div>
        </div>
        <h1 className="font-bold text-3xl my-6">Visao geral</h1>
        <p className="text-lg w-[80%]">{movieData?.overview}</p>
      </div>
    </section>
  );
};

export default MovieDetail;
