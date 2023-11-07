import { useEffect } from "react";
import { API_CONSTANTS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerBackground = (id)=>{
    const dispatch = useDispatch()

    const fetchTrailerVideo = async ()=>{
        const trailer = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_CONSTANTS);
        const json = await trailer.json()
        dispatch(addTrailerVideo(json.results))
      }
      useEffect(()=>{
        fetchTrailerVideo()
      },[])
}

export default useTrailerBackground