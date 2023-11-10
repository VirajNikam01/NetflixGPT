import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerBackgroundVideos: null,
  },
  reducers: {
    addNowPlayngMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies:(state, action)=>{
      state.topRatedMovies = action.payload
    },
    addUpcomingMovies: (state, action)=>{
      state.upcomingMovies = action.payload
    },
    addTrailerVideo: (state, action) => {
      state.trailerBackgroundVideos = action.payload;
    },
  },
});

export const { addNowPlayngMovies, addPopularMovies, addTrailerVideo, addUpcomingMovies, addTopRatedMovies } =
  movieSlice.actions;

export default movieSlice.reducer;
