import axios from 'axios'
const BASE_URL = 'http://localhost:3000'
  // https://www.omdbapi.com/?apikey=a6a89472&s=batman
  const APIKEY = "1d43e1c469a0f2c96ec348814ab22a84"
  const MOVIE_URL = "https://api.themoviedb.org/3/"

export const signUpUser =(user)=>{
    return axios.post(`${BASE_URL}/api/register`,user)
} 

export const signInUser =(user)=>{
    return axios.post(`${BASE_URL}/api/login`,user)
} 

export const getUsers =()=>{
    return axios.get(`${BASE_URL}/api/users`)
}

export const getAllMovies =()=>{
    return axios
      .get(`${MOVIE_URL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`)
}
export const getSearchMovies =(search)=>{
    return axios
      .get(`${MOVIE_URL}search/movie?api_key=${APIKEY}&query=${search}`)
}