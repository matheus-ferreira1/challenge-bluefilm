import { FC, useState } from "react";

import { BannerMovieTypes } from "../utils/types";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface BannerProps {
  bannerMovies: BannerMovieTypes[];
}

const Banner: FC<BannerProps> = ({ bannerMovies }) => {
  console.log(bannerMovies);

  const [activeSlide, setActiveSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCurrentIndex = (): number => {
    return bannerMovies.findIndex(
      (bannerMovie) => bannerMovie.id === currentIndex
    );
  };

  const handleNextSlide = () => {
    // go to next slide if it exists
    if (activeSlide < bannerMovies.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    setCurrentIndex(getCurrentIndex() - 1);
    setActiveSlide(getCurrentIndex());
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setActiveSlide(index);
  };

  return (
    <section className="w-full h-[80%] m-auto relative overflow-hidden">
      <div>
        <button
          type="button"
          onClick={handlePrevSlide}
          className="absolute left-8 top-[45%] z-40 bg-black/40 text-white rounded-full p-2"
        >
          <BsChevronCompactLeft size={50} />
        </button>
        <div className="relative">
          <div className="relative overflow-hidden">
            {/* <div className="flex items-center justify-center w-full h-full">
              {bannerMovies.map((movie, index) => (
                <div
                  key={movie.id}
                  className={`w-full h-screen bg-cover transition duration-500 ease-in-out transform ${
                    index === activeSlide ? "block" : "hidden"
                  }`}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                  }}
                >
                  <p className="legend">{movie.title}</p>
                </div>
              ))}
            </div> */}
            <div className="flex items-center justify-center w-full h-full">
              {bannerMovies.map((movie, index) => (
                <div
                  key={movie.id}
                  className={`w-full h-screen bg-cover transition duration-500 ease-in-out transform ${
                    index === activeSlide ? "block" : "hidden"
                  }`}
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${bannerMovies[activeSlide].backdrop_path})`,
                  }}
                >
                  <p className="legend">{movie.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handlePrevSlide}
          className="absolute right-8 top-[45%] z-40 bg-black/40 text-white rounded-full p-2"
        >
          <BsChevronCompactRight size={50} />
        </button>
      </div>
    </section>

    //   <div className="relative">
    //     <div className="relative overflow-hidden">
    //       <div className="flex items-center justify-center w-full h-full">
    //         {bannerMovies.map((movie, index) => (
    //           <div
    //             key={index}
    //             className={`transition duration-500 ease-in-out transform ${
    //               index === activeSlide ? "opacity-100" : "opacity-0"
    //             }`}
    //             style={{
    //               backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
    //             }}
    //           ></div>
    //         ))}
    //       </div>
    //     </div>
    //     <div className="hidden sm:block">
    //       <button
    //         type="button"
    //         className="absolute top-0 right-0 -mt-20 -mr-20 z-10 p-2 rounded-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
    //         onClick={() => setActiveSlide(activeSlide + 1)}
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M9 5l7 7-7 7"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
