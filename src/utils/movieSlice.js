import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies: null,
        trailerBackgroundVideos: null
    },
    reducers:{
        addNowPlayngMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action)=>{
            state.trailerBackgroundVideos = action.payload
        }
    }
})

export const {addNowPlayngMovies, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer