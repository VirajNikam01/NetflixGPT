import { useEffect } from "react";
import { API_CONSTANTS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
    const dispatch = useDispatch()
  const topRatedMovies = async () => {
    const req = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_CONSTANTS
    );
    const resp = await req.json();
    dispatch(addUpcomingMovies(resp.results))
  };

  useEffect(()=>{
    topRatedMovies()
  },[])
};

export default useUpComingMovies;
