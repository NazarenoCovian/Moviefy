import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import userContext from "../contexts/userContext"
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Card } from '../components/Card'

const Main = () => {
    const {userUpdate, user}=useContext(userContext)
    const [movies,setMovies]=useState([])
    const [search,setSearch]=useState("")
    const history = useHistory()
    // https://www.omdbapi.com/?apikey=a6a89472&s=batman
    const APIKEY = "1d43e1c469a0f2c96ec348814ab22a84"
    const BASEURL = "https://api.themoviedb.org/3/"
    const SEARCHURL ="&query=Transporter&page=1&include_adult=false"

  
    useEffect(() => {
        axios.get(`${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`)
            .then(data=>setMovies(data.data.results))
       
    }, [])

    const handleClick=()=>{
        
        axios.get(`${BASEURL}search/movie?api_key=${APIKEY}&query=${search}`)
        .then(data=>{
            setMovies(data.data.results)
            setSearch("")
        })
    }

    
    if (user.email===null) history.push("/login")
    return (
        <div className="bg-gray-800 h-screen">
            {/* {console.log(movies)} */}
            <Header/>
            <div className="flex justify-center">
                <input className="border-black-100 rounded mx-10 text-sm w-1/3 px-1" placeholder={"Buscar pelicula..."} onSubmit={handleClick} onChange={(e)=>setSearch(e.target.value)} value={search}/>
                <button className="text-white" onClick={handleClick}>Buscar</button>
            </div>
            <Card movies={movies}/>


        </div>
    )
}

export default Main
