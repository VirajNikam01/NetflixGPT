import { useDispatch } from "react-redux";
import { API_CONSTANTS } from "../utils/constant"
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies= ()=>{
    const dispatch = useDispatch()
    const topRatedMovies = async ()=>{
        const req = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_CONSTANTS);
        const resp = await req.json()
        dispatch(addTopRatedMovies(resp.results))
    }
    useEffect(()=>{
        topRatedMovies()
    },[])
}

export default useTopRatedMovies;