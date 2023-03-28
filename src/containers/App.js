import React from "react"
import { BrowserRouter, Navigate, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Login } from "../components/Login"
import Main from "./Main"
import Register from "../components/Register"
import { SingleMovie } from "../components/SingleMovie"
import { Favorites } from "./Favorites"
import Header from "../components/Header"
import store from "../store/store"
import { Provider } from "react-redux"

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<Main />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/info" element={<SingleMovie />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
