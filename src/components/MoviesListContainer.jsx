import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesListContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative z-0 -mt-64">
          <MovieList title="nowPlaying" movies={movies.nowPlayingMovies} />
          <MovieList title="topRated" movies={movies.topRatedMovies} />
          <MovieList title="popular" movies={movies.popularMovies} />
          <MovieList title="upcoming" movies={movies.upcomingMovies} />
          <MovieList title="horror" movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default MoviesListContainer;
