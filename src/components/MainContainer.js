import React, { useState } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movie) return;

  let randomIndex = Math.floor(Math.random()*10)
  const mainMovie = movie[randomIndex];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
