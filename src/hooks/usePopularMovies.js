import { useDispatch } from "react-redux";
import { API_CONSTANTS } from "../utils/constant";
import { useEffect } from "react";
import {addPopularMovies} from '../utils/movieSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch()
  const popularMovies = async () => {
    const req = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_CONSTANTS
    );
    const resp = await req.json();
    console.log(resp.results);
    dispatch(addPopularMovies(resp.results))
  };

useEffect(()=>{
    popularMovies()
}, [])

};

export default usePopularMovies;
