import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMoviesName:null,
        gptMovies: null,
    },
    reducers: {
        toggleGptSearchView : (state, action) => {
            state.showGptSearch  = !state.showGptSearch
        },
        addMoviesResult: (state,action) => {
            const {movieName, movieResult} = action.payload;
            state.gptMoviesName= movieName;
            state.gptMovies = movieResult;
        }
    }
})


export const {toggleGptSearchView, addMoviesResult} = gptSlice.actions;
export default gptSlice.reducer;