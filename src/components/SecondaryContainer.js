import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  if (!movies) return;

  return (
    <div className="bg-black ">
      <div className=" pt-16 lg:-mt-[26%] z-20 relative">
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Tranding Now"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
