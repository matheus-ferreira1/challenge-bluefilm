import { FC } from "react";
import ActorCard from "./ActorCard";
import { ActorTypes } from "../utils/types";
import Slider from "react-slick";

interface PropsTypes {
  popularActors: ActorTypes[];
}

const ListActors: FC<PropsTypes> = ({ popularActors }) => {
  return (
    <section className="bg-[#191b1f] text-white py-8 px-4 md:px-16">
      <h1 className="text-lg md:text-3xl font-semibold mb-4">
        Atores Populares
      </h1>
      <div>
        <Slider
          infinite={false}
          speed={500}
          slidesToShow={6}
          responsive={[
            {
              breakpoint: 950,
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
              breakpoint: 500,
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
          {popularActors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ListActors;
