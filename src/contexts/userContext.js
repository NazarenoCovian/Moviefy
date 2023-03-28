import { createContext, useState } from "react"

const Context = createContext({})

export function UserProvider({ children }) {
    const [user,setUser]= useState({email:null,fullName:null,userId:null})
    const userUpdate=(usuario) => setUser({email:usuario.email,userId:usuario.id,fullName:'Naza'}) 
    return (
      <Context.Provider value={{ userUpdate,user }}>
        {children}
      </Context.Provider>
    );
  }
  
  export default Context;
  