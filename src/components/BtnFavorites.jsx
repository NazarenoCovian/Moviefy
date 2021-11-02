import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import favoritesMoviesContext from "../contexts/favoritesMoviesContext"
import userContext from "../contexts/userContext"

export default function BtnFavorites({movieId,movie}) {
    const {favoritesMovies,favoritesUpdate}=useContext(favoritesMoviesContext)
    const {user}=useContext(userContext)
    const [btnState, setBtnState]=useState(false)

    const axiosFavs =()=>axios.get("http://localhost:3001/api/favorites", {params:{userId:user.userId}})
            .then(data=>favoritesUpdate(data.data))

    useEffect(() => {
        axiosFavs()
    }, [])

    const findFavorite =(id)=>{
        for(let i=0;i<favoritesMovies.length;i++){
            if(id==favoritesMovies[i].movieId)return true
        }        
    }
    const handleDelete = (movieId)=>{
        console.log(movieId,user.userId)
        axios.delete("http://localhost:3001/api/favorites",{data:{userId:user.userId, movieId:movieId}})
            .then(()=>axiosFavs())
    }
    const handleAdd =()=>{
        axios.post("http://localhost:3001/api/favorites", 
        {
            movieId:movie.id,
            userId:user.userId,
            title:movie.title,
            year:movie.release_date,
            poster_path:movie.poster_path,
            vote_average:movie.vote_average,
            overview:movie.overview,
            adult:movie.adult,

            })
            .then(data=>data)
    }
    return (
        <div>
            {findFavorite(movieId)?
            <button  onClick={()=>handleDelete(movieId)} className="text-white p-1"><span className="border text-white p-1">-</span><span className="border text-white p-1">Favoritos</span></button>
            :
            <button onClick={handleAdd} className="text-white p-1"><span className="border text-white p-1">+</span><span className="border text-white p-1">Favoritos</span></button>
            }
        </div>
    )
}
