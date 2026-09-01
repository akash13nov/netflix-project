import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Container from "./Container";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="relative h-screen">
      <Header />
      <Container />
    </div>
  );
};

export default Browse;
