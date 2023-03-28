import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        adult: false,
        backdrop_path: '/y5Z0WesTjvn59jP6yo459eUsbli.jpg',
        genre_ids: [
          27,
          53
        ],
        id: 663712,
        original_language: 'en',
        original_title: 'Terrifier 2',
        overview: 'After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art\'s evil intent.',
        popularity: 7866.782,
        poster_path: '/b6IRp6Pl2Fsq37r9jFhGoLtaqHm.jpg',
        release_date: '2022-10-06',
        title: 'Terrifier 2',
        video: false,
        vote_average: 7.1,
        vote_count: 445
      }
]
export const favoritesSlices = createSlice({
    name:'favorites',
    initialState:initialState,
    reducers:{
        addFavorite:(state,action)=>{
            state.push(action.payload)
        },
        removeFavorite:(state,action)=>{
            const found = state.find(st=>st.id ===action.payload)
            if(found)state.splice(state.indexOf(found),1)
        }
    }
})

export const {addFavorite,removeFavorite}= favoritesSlices.actions
export default favoritesSlices.reducer