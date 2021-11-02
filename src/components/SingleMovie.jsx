import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { RatingStar } from './RatingStar'
import movieSelectedContext from "../contexts/movieSelectedContext"
import axios from 'axios'
import userContext from "../contexts/userContext"

export const SingleMovie = () => {
    const {selectedMovie}=useContext(movieSelectedContext)
    const movie= selectedMovie
    const {user}=useContext(userContext)

    const handleClick=()=>{
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


    if(movie!=={})
    return (
        <div className="bg-gray-800 h-screen">
            {console.log(movie)}
            <Header />
            <div class="w-full bg-gray-800">
                <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
                        <div class="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row ">
                            <div class="p-4 w-1/3 self-center">
                                <img class="object-center object-cover rounded w-full" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt={movie.title}></img>
                            </div>
                            <div class=" text-center w-2/3 text-left p-6 md:p-4 space-y-2 self-center ">
                                <p class="text-xl text-white font-bold">{movie.title}</p>
                                <p class="text-xl text-white font-bold">({movie.release_date})</p>
                                <RatingStar rate={movie.vote_average}/>
                                <span class="text-2 text-white border">{movie.adult?"+18":"+13"}</span>
                                <p class="text-base leading-relaxed text-gray-500 font-normal">{movie.overview}</p>
                                <div class="flex justify-start space-x-2">
                                </div>
                                <button onClick={handleClick} className="text-white p-1"><span className="border text-white p-1">+</span><span className="border text-white p-1">Favoritos</span></button>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}

