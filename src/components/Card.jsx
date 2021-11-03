import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RatingStar } from './RatingStar'
import movieSelectedContext from "../contexts/movieSelectedContext"
import BtnFavorites from './BtnFavorites'

export const Card = ({movies}) => {
    const {movieSelectedUpdate}=useContext(movieSelectedContext)

    const handleSeeMore =(movie)=>{
        movieSelectedUpdate(movie)
    }

    return (
        <div className="w-full bg-gray-800">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {/* ////////////////////// */}
                    {
                    movies&&movies.map((movie,i)=>{
                        return(
                            <div key={i} className="w-full bg-gray-900 rounded-lg shadow-lg flex flex-col justify-center items-center hover:bg-green-900 imgHover">
                                <div className="mb-2 w-full">
                                    <img className="object-center object-cover rounded w-full" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt={movie.title}></img>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-white font-bold">{movie.title}</p>
                                    <RatingStar rate={movie.vote_average}/>
                                </div>
                                <div className="mb-1">
                                <BtnFavorites movieId={movie.movieId==undefined?movie.id:movie.movieId} movie={movie}/>
                                <button onClick={()=>handleSeeMore(movie)} ><Link  to={`/movie/info`}><span className="text-xs px-1 rounded text-white hover:bg-green-300 bg-green-500">See more...</span></Link>
                                </button> 
                                </div>
                            </div>
                        )
                    })
                    }
                    
                    {/* ////////////////////// */}
                    
                </div>
            </section>
</div>
    )
}


