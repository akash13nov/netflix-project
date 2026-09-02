import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Container from "./Container";
import MoviesListContainer from "./MoviesListContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="relative h-screen">
      <Header />
      <Container />
      <MoviesListContainer />
    </div>
  );
};

export default Browse;
