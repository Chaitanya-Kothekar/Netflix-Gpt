import { createSlice } from "@reduxjs/toolkit";




const moviesSlice = createSlice({
    name : 'movies',
    initialState: {
        nowPlayingMovies:null ,
        nowPopularMovies:null,
        nowTopRattedMovies:null,
        nowUpcomingMovies:null,
        trailerVideo :null ,
    },
    reducers:{
        addNowPlayingMovies :(state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :(state , action) => {
            state.nowPopularMovies = action.payload;
        },
        addTopRattedMovies :(state , action) => {
            state.nowTopRattedMovies = action.payload;
        },
        addUpcomingMovies :(state , action) => {
            state.nowUpcomingMovies = action.payload;
        },

        addTrailerVideo: (state , action) => {
            state.trailerVideo =action.payload;
        }
    }
});

export const {addNowPlayingMovies , addTrailerVideo ,addPopularMovies ,addTopRattedMovies , addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;