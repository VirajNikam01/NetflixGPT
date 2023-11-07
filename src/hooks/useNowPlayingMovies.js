import { useDispatch } from "react-redux";
import { addNowPlayngMovies } from "../utils/movieSlice";
import { API_CONSTANTS } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    //Fetch the nowPlayingMovies and store into the store
  const dispatch = useDispatch()
  const nowPlayingMovies = async () => {
    const now_playing = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_CONSTANTS
    );

    const json = await now_playing.json()
    dispatch(addNowPlayngMovies(json.results))
  };
  useEffect(() => {
    nowPlayingMovies()
  }, []);

}

export default useNowPlayingMovies;