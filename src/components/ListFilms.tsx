import { FC } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MovieDataTypes } from "../utils/types";
import MovieCard from "./MovieCard";

interface ListFilmsProps {
  popularMovies?: MovieDataTypes[];
  comingSoon?: MovieDataTypes[];
  loading: boolean;
  title: string;
}

const ListFilms: FC<ListFilmsProps> = ({
  popularMovies,
  comingSoon,
  loading,
  title,
}) => {
  return (
    <section className="bg-[#191b1f] text-white py-8 px-4 md:px-16">
      <div className="populars-container">
        <h1 className="text-lg md:text-3xl font-semibold mb-4">{title}</h1>
        {loading ? (
          <div className="flex justify-center items-center h-full w-full">
            Loading...
          </div>
        ) : (
          <div className="">
            <Slider
              infinite={false}
              speed={500}
              slidesToShow={6}
              responsive={[
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
              ]}
            >
              {popularMovies &&
                popularMovies.map((movie) => (
                  <Link key={movie.id} to={`/movieDetail/${movie.id}`}>
                    <article className="bg-[#3f4756] mx-3 rounded-md overflow-hidden  flex flex-col ">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover"
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
                ))}
            </Slider>
          </div>
        )}
      </div>
      <div className="upcoming-container mt-10">
        <h1 className="text-lg md:text-3xl font-semibold mb-4">{title}</h1>
        {loading ? (
          <div className="flex justify-center items-center h-full w-full">
            Loading...
          </div>
        ) : (
          <div className="">
            <Slider
              infinite={false}
              speed={500}
              slidesToShow={6}
              responsive={[
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
              ]}
            >
              {comingSoon &&
                comingSoon.map((movie) => (
                  <Link key={movie.id} to={`/movieDetail/${movie.id}`}>
                    <article className="bg-[#3f4756] mx-3 rounded-md overflow-hidden  flex flex-col ">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover"
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
                ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListFilms;
