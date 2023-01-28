import React, { FC } from "react";
import { MovieDataTypes } from "../utils/types";
import MovieCard from "./MovieCard";

interface PropsTypes {
  searchMovies: MovieDataTypes[];
  loading: boolean;
}

const ListResults: FC<PropsTypes> = ({ searchMovies, loading }) => {
  return (
    <section className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        searchMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </section>
  );
};

export default ListResults;
