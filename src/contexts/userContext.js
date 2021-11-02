import { createContext, useState } from "react"

const Context = createContext({})

export function UserProvider({ children }) {
    const [user,setUser]= useState({email:null,fullName:null,userId:null})
    // const infoLocalStorage = JSON.parse(
    //   window.localStorage.getItem(
    //     "firebase:authUser:AIzaSyDXJswXts6IIne3tPEGQAWjm4QqoswFDCk:[DEFAULT]"
    //   )
    // );
    const userUpdate=(usuario) => setUser({email:usuario.email,userId:usuario.id}) 
    return (
      <Context.Provider value={{ userUpdate,user }}>
        {children}
      </Context.Provider>
    );
  }
  
  export default Context;
  