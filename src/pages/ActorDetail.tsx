import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { ActorTypes, MovieDataTypes } from "../utils/types";
import moment from "moment";

interface Props {
  cast: MovieDataTypes[];
}

const ActorDetail = () => {
  const [loading, setLoading] = useState(false);
  const [actorData, setActorData] = useState<ActorTypes | null>(null);
  const [relatedMovies, setRelatedMovies] = useState<Props | null>(null);
  const { actorId } = useParams();
  const baseUrl = `https://image.tmdb.org/t/p/w200`;

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setActorData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setRelatedMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [actorId]);

  if (loading) {
    return (
      <div className="w-full h-screen full flex justify-center items-center text-white text-3xl bg-[#191b1f]">
        Carregando...
      </div>
    );
  }

  return (
    <section className="bg-[#191b1f] text-white py-8 px-4 md:px-16">
      <div className="flex items-center gap-8">
        <img
          className="rounded-full h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] object-cover"
          src={`${baseUrl}/${actorData?.profile_path}`}
          alt={actorData?.name}
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-[#ffb800]">
            {actorData?.name}
          </h2>
          <h4>{moment().diff(actorData?.birthday, "years", false)} anos</h4>
          <h4>{actorData?.place_of_birth}</h4>
        </div>
      </div>
      <h1 className="text-lg md:text-3xl font-semibold my-4">Biografia</h1>
      <p className="text-justify">
        {actorData?.biography
          ? actorData.biography
          : "Biografia nao encontrada"}
      </p>
      <div>
        <h1 className="text-lg md:text-3xl font-semibold my-8">Filmografia</h1>
        <div>
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
                {relatedMovies &&
                  relatedMovies.cast.map((movie) => (
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
      </div>
    </section>
  );
};

export default ActorDetail;
