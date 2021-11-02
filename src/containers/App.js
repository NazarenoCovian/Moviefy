
import React from 'react'
import { Switch } from 'react-router-dom'
import { Redirect, Route } from 'react-router-dom'
import {Login}  from '../components/Login'
import Main from "./Main"
import Register from "../components/Register"
import { UserProvider } from '../contexts/userContext'
import { SingleMovie } from '../components/SingleMovie'
import { MovieSelectedProvider } from '../contexts/movieSelectedContext'
import { Favorites } from './Favorites'
import { FavoritesMoviesProvider } from '../contexts/favoritesMoviesContext'

const App = () => {
    return (
        <div className="App"> 
        <UserProvider>
            <MovieSelectedProvider>
                <FavoritesMoviesProvider>
                    <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/main" component={Main}/>
                    <Route exact path="/favorites" component={Favorites}/>
                    <Route exact path="/movie/info" component={SingleMovie}/>
                    <Redirect to="/login"/>
                    </Switch>
                </FavoritesMoviesProvider>
            </MovieSelectedProvider>
        </UserProvider>
        </div>
    )
}

export default App
