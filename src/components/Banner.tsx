import { FC, useState } from "react";

import { BannerMovieTypes } from "../utils/types";

import { Carousel } from "react-responsive-carousel";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface BannerProps {
  bannerMovies: BannerMovieTypes[];
}

const Banner: React.FC<BannerProps> = ({ bannerMovies }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      selectedItem={activeSlide}
      onChange={(index) => setActiveSlide(index)}
    >
      {bannerMovies.map((movie, index) => (
        <div key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <p className="legend">{movie.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
