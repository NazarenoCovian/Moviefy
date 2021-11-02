import { createContext, useState } from "react"

const Context = createContext({})

export function MovieSelectedProvider({ children }) {
    const [selectedMovie,setSelectedMovie]= useState({})
 
    const movieSelectedUpdate=(movie) => setSelectedMovie(movie) 
    return (
      <Context.Provider value={{ movieSelectedUpdate,selectedMovie }}>
        {children}
      </Context.Provider>
    );
  }
  
  export default Context;