import { FC } from "react";

import { BannerMovieTypes } from "../utils/types";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Slider } from "./slider/Slider";
import TrendingCard from "./TrendingCard";

import "./slider/slider.css";

interface BannerProps {
  bannerMovies: BannerMovieTypes[];
}

const CustomNextArrow = ({ className, style, onClick, children }: any) => {
  return (
    <button
      className={`${className}   z-50 block`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

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
        pauseOnHover={false}
        nextArrow={<CustomNextArrow />}
      >
        {bannerMovies.map((bannerMovie) => (
          <TrendingCard key={bannerMovie.id} bannerMovie={bannerMovie} />
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
