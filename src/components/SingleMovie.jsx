import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { RatingStar } from './RatingStar'
import movieSelectedContext from "../contexts/movieSelectedContext"
import BtnFavorites from './BtnFavorites'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './button/Button'
import { addFavorite, removeFavorite } from '../slices/favoritesSlices'

export const SingleMovie = () => {
    const [isFavorite, setIsFavorite] = useState(false)
    const {selectedMovie} = useSelector(state=>state.movies)
    const favorites = useSelector(state=>state.favorites)
    const dispatch = useDispatch()
    const movie = selectedMovie
    const handleClick =()=>isFavorite?dispatch(addFavorite(movie)):dispatch(removeFavorite(movie.id))
    const findById = (id)=>{
        return favorites.some(fav=>fav.id === id)
    }

    useEffect(() => {
        if(findById(movie.id))setIsFavorite(false)
        else setIsFavorite(true)
        console.log(movie)
    }, [movie.id, favorites])

    if(movie!=={})
    return (
        <div className="bg-gray-800 h-screen">
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
                                <span class="text-2 text-white border p-1.5">{movie.adult?"+18":"+13"}</span>
                                <p class="text-base leading-relaxed text-gray-500 font-normal">{movie.overview}</p>
                                <div class="flex justify-start space-x-2">
                                </div>
                                {/* <BtnFavorites movieId={movie.movieId==undefined?movie.id:movie.movieId} movie={movie}/> */}
                                <Button title={`${isFavorite?'Add to favorites':'Delete favorite'}`} onClick={handleClick} />
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}

