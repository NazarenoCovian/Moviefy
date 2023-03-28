import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Card } from '../components/Card'
import Header from "../components/Header"
import { RatingStar } from '../components/RatingStar'
import userContext from "../contexts/userContext"
import favoritesMoviesContext from "../contexts/favoritesMoviesContext"
import { useSelector } from 'react-redux'

export const Favorites = () => {
    // const [favs, setFavs] = React.useState([])
    // const {user}=useContext(userContext)
    const favoritesMovies = useSelector(state=>state.favorites)
    // const {favoritesMovies,favoritesUpdate}=useContext(favoritesMoviesContext)

    // const axiosFavs =()=> axios.get("http://localhost:3001/api/favorites", {params:{userId:user.userId}})
    // .then(data=>favoritesUpdate(data.data))
    
    // useEffect(() => {
    //     axiosFavs()
    // }, [])

    // const handleDelete = (movieId)=>{
    //     console.log(movieId,user.userId)
    //     axios.delete("http://localhost:3001/api/favorites",{data:{userId:user.userId, movieId:movieId}})
    //         .then(()=>axiosFavs())
    // }
    return (
        <div className="bg-gray-800 h-screen">
            <Card movies={favoritesMovies}/>
        </div>
    )
}
