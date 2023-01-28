import { AxiosError } from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListResults from "../components/ListResults";
import * as Api from "../utils/api";
import { MovieDataTypes } from "../utils/types";

const Search: FC = () => {
  const [loading, setLoading] = useState(false);
  const [searchMovies, setSearchMovies] = useState<any>([]);
  // get query params from router dom
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (!searchTerm) {
          return;
        }

        const searchMoviesResult = await Api.getMovieSearch(searchTerm);
        setSearchMovies(searchMoviesResult);
      } catch (error: unknown | AxiosError) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <section className="bg-[#191b1f] text-white py-8 px-4 md:px-16 h-[600px]">
      <h1 className="text-lg md:text-3xl font-semibold">Resultados</h1>
      <ListResults searchMovies={searchMovies} loading={loading} />
    </section>
  );
};

export default Search;
