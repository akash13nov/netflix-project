import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Container from "./Container";
import MoviesListContainer from "./MoviesListContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearchContainer from "./GptSearchContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative h-screen">
      <Header />
      {showGptSearch ? (
        <GptSearchContainer />
      ) : (
        <>
          <Container />
          <MoviesListContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
