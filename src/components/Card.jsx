import React from "react"
import { useNavigate } from "react-router-dom"
import { RatingStar } from "./RatingStar"
import { useDispatch } from "react-redux"
import { selectMovie } from "../slices/moviesSlices"
import { Button } from "./button/Button"

export const Card = ({ movies }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSeeMore = (movie) => {
    dispatch(selectMovie(movie))
    navigate('/movie/info')
  }
  return (
    <div className="w-full bg-gray-800">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {movies &&
            movies.map((movie, i) => {
              return (
                <div
                  key={i}
                  onClick={()=>handleSeeMore(movie)}
                  className="w-full bg-gray-900 rounded-lg shadow-lg flex flex-col justify-center items-center hover:bg-green-900 imgHover cursor-pointer"
                >
                  <div className="mb-2 w-full">
                    <img
                      className="object-center object-cover rounded w-full"
                      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
                      alt={movie.title}
                    ></img>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-white font-bold">
                      {movie.title}
                    </p>
                    <RatingStar rate={movie.vote_average} />
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </div>
  )
}
