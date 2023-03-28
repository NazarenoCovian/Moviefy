import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    selectedMovie: {
            adult: true,
            backdrop_path: '',
            genre_ids: [
              0,
              0
            ],
            id: 0,
            original_language: '',
            original_title: '',
            overview:'',
            popularity: 7866.782,
            poster_path: '',
            release_date: '',
            title: '',
            video: false,
            vote_average: 0,
            vote_count: 0
          
    },
  }

export const moviesSlices = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    selectMovie:(state,action)=>{
        state.selectedMovie = action.payload
    }
  },
})

export const {selectMovie}= moviesSlices.actions
export default moviesSlices.reducer
