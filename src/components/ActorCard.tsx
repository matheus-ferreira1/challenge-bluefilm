import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ActorTypes } from "../utils/types";

interface PropsTypes {
  actor: ActorTypes;
}

const ActorCard: FC<PropsTypes> = ({ actor }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w200/";
  console.log(actor);

  return (
    <Link to={`/actorDetail/${actor.id}`}>
      <article className="flex flex-col items-center mx-3">
        <img
          className="rounded-full object-cover h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] md:h-[150px] md:w-[150px]"
          src={`${baseUrl}/${actor.profile_path}`}
          alt={actor.name}
        />
        <h3 className="font-normal text-sm md:text-lg sm:text-base text-center">
          {actor.name}
        </h3>
      </article>
    </Link>
  );
};

export default ActorCard;
