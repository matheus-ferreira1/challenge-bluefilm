import { FC, useState } from "react";
import Slick, { Settings } from "react-slick";

import { BannerMovieTypes } from "../utils/types";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Slider } from "./slider/Slider";
import TrendingCard from "./TrendingCard";

interface BannerProps {
  bannerMovies: BannerMovieTypes[];
}

const Banner: FC<BannerProps> = ({ bannerMovies }) => {
  return (
    <section className="w-full m-auto overflow-hidden">
      <Slider
        className="slick-trending"
        slidesToShow={1}
        slidesToScroll={1}
        fade={true}
        arrows={true}
        autoplay={true}
      >
        {bannerMovies.map((bannerMovie) => (
          <TrendingCard key={bannerMovie.id} bannerMovie={bannerMovie} />
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
