import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  return (
    <div
      className="flex shrink-0 w-60 pr-3 transition-transform duration-300 ease-out
                 hover:scale-110 hover:z-10 cursor-pointer"
    >
      <img className="rounded-md" src={IMG_CDN_URL + posterPath} alt={title} />
    </div>
  );
};

export default MovieCard;
