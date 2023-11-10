import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

  return (
    <div className="p-3 mt-2">
        <h1 className="text-2xl font-semi-bold pb-1 text-white">{title}</h1>
      <div className=" flex overflow-x-scroll overflow-y-hidden">
        <div className="flex gap-4">
          {movies && movies.map((Movie, i) => (
            <MovieCard key={i} poster={Movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
