import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import { BannerMovieTypes } from "../utils/types";
import Tmdb from "../assets/tmdb.svg";

interface CardProps {
  bannerMovie: {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    backdrop_path: string | null;
    poster_path?: string | null;
  };
}

const TrendingCard: FC<CardProps> = ({ bannerMovie }) => {
  return (
    <article
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${bannerMovie.backdrop_path})`,
      }}
      className="h-[250px] md:h-[500px] bg-cover bg-center w-screen bg-no-repeat py-3.5 px-4 md:px-16 text-white flex items-end relative"
    >
      <h4 className="font-semibold mt-2 text-xl flex items-center gap-2 absolute top-5 right-4 sm:right-20">
        <AiFillStar size={24} className="text-[#ffb800]" />{" "}
        {bannerMovie?.vote_average.toFixed(1)}/10{" "}
        <img src={Tmdb} alt="TMDB Logo" className="w-14" />
        {/* <span className="text-black bg-[#ffb800] px-3 rounded-md">IMDb</span> */}
      </h4>
      <div className="mb-4 backdrop-filter backdrop-brightness-50 w-full sm:w-[60%] p-4 rounded-md">
        <h1 className="text-lg sm:text-2xl md:text-3xl uppercase font-bold">
          {bannerMovie.title}
        </h1>
        <p className="hidden md:block text-lg">{bannerMovie.overview}</p>
      </div>
    </article>
  );
};

export default TrendingCard;
