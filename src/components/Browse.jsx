import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Container from "./Container";
import MoviesListContainer from "./MoviesListContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative h-screen">
      <Header />
      <Container />
      <MoviesListContainer />
    </div>
  );
};

export default Browse;
