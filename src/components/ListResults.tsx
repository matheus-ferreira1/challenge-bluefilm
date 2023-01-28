import React, { FC } from "react";
import { MovieDataTypes } from "../utils/types";
import MovieCard from "./MovieCard";

interface PropsTypes {
  searchMovies: MovieDataTypes[];
}

const ListResults: FC<PropsTypes> = ({ searchMovies }) => {
  return (
    <section className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {searchMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default ListResults;
