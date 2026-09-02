import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesListContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative z-0 -mt-64">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Action Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default MoviesListContainer;
