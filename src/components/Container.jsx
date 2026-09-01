import React from "react";
import { useSelector } from "react-redux";
import VideoDetails from "./VideoDetails";
import VideoBackground from "./VideoBackground";

const Container = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovie = movies[0];
  //console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative h-screen">
      <VideoDetails title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default Container;
