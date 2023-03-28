import { configureStore } from '@reduxjs/toolkit'
import favoritesSlices from '../slices/favoritesSlices'
import moviesSlices from '../slices/moviesSlices'
import usersSlices from '../slices/usersSlices'
// ...
const store = configureStore({
  reducer:{
    favorites:favoritesSlices,
    users:usersSlices,
    movies:moviesSlices
  }
})

export default store