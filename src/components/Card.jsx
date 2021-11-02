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
                {/* <div className="text-center pb-4">
                    <h1 className="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-white">
                        Resultados encontrados ...           
                    </h1>
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* ////////////////////// */}
                    {
                    movies?movies.map((movie,i)=>{
                        return(
                            <div key={i} className="w-full bg-gray-900 rounded-lg shadow-lg py-12 flex flex-col justify-center items-center hover:bg-green-900 imgHover">
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded w-full" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt={movie.title}></img>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl text-white font-bold mb-2">{movie.title}</p>
                                    <p className="text-base text-gray-400 font-normal">{movie.vote_average}</p>
                                    <RatingStar rate={movie.vote_average}/>
                                </div>
                                <div>
                                <button onClick={()=>handleSeeMore(movie)} className={`py-1 px-4 rounded text-white hover:bg-green-300 bg-green-500`}><Link  to={`/movie/info`}>See more...</Link>
                                </button> 
                                
                                <BtnFavorites movieId={movie.movieId==undefined?movie.id:movie.movieId} movie={movie}/>
                                </div>
                            </div>
                        )
                    }):"Vacio"
                    }
                    
                    {/* ////////////////////// */}
                    
                </div>
            </section>
</div>
    )
}


