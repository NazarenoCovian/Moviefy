import { createContext, useState } from "react"

const Context = createContext({})

export function FavoritesMoviesProvider({ children }) {
    const [favoritesMovies,setFavoritesMovies]= useState([])
 
    const favoritesUpdate=(movie) => setFavoritesMovies(movie) 
    return (
      <Context.Provider value={{ favoritesUpdate,favoritesMovies }}>
        {children}
      </Context.Provider>
    );
  }
  
  export default Context;