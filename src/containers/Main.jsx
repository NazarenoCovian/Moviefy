import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "../components/Card"
import { getAllMovies, getSearchMovies } from "../connectors/connectors"
import {Button} from '../components/button/Button'
import { useSelector } from "react-redux"

const Main = () => {
  const user = useSelector(state=>state.users)
  const {selectedMovie} = useSelector(state=>state.movies)
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const SEARCHURL = "&query=Transporter&page=1&include_adult=false"
  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setMovies(data.data.results)
      })
  }, [])

  const handleClick = () => {
    getSearchMovies(search)
      .then((data) => {
        setMovies(data.data.results)
        setSearch("")
      })
  }
  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex justify-center">
        <input
          className="border-black-100 rounded mx-4 md:mx-10 text-sm w-full md:w-1/3 px-2 md:px-4"
          placeholder={"Buscar pelicula..."}
          onSubmit={handleClick}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button title='Buscar' onClick={handleClick}/>
      </div>
      <Card movies={movies} />
    </div>
  )
}

export default Main
