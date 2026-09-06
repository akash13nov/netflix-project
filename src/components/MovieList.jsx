import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import lang from "../utils/languageConstants";

const MovieList = ({ title, movies }) => {
  //console.log(title, movies);
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
      <div className="flex flex-col px-5">
        <h1 className="text-xl font-bold my-3 text-[#D8D5CE] md:text-3xl md:my-6 md:pt-3">
          {lang[langKey]?.sections[title] || title}
        </h1>
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
