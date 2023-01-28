import { FC } from "react";
import { Link } from "react-router-dom";
import { MovieDataTypes } from "../utils/types";

interface PropsTypes {
  movie: MovieDataTypes;
}

const MovieCard: FC<PropsTypes> = ({ movie }) => {
  return (
    <Link to={`/movieDetail/${movie.id}`}>
      <article className="bg-[#3f4756] rounded-md overflow-hidden w-full flex flex-col">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-48 object-cover"
        />
        <div className="px-4 py-2 flex flex-col justify-center w-full h-16">
          <h4 className="font-bold text-sm sm:text-base truncate">
            {movie.title}
          </h4>
          <p className="text-gray-200 text-xs md:text-sm">
            {movie.release_date.slice(0, 4)}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
