import React, { useContext, useState } from 'react'
import Header from './Header'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"
import userContext from "../contexts/userContext"

export const Login = () => {
    const color_principal = "green-500"
    const color_principal_hover ="green-400"
    const history = useHistory()
    const {userUpdate}=useContext(userContext)
    const [loading,setLoading]=useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
        let user= {email,password}
        axios.post("http://localhost:3001/api/login",user)
        .then(data=>{
            // console.log(data.data)
            userUpdate(data.data)
            history.push("/main")
        })
        .catch(err=>{
            setLoading(false)
            console.log(err)})
        }
    return (
    <>
        <div className="bg-cover imagen  h-screen" >
            <Header />
            <div className='w-full max-w-md m-auto bg-gray-700 bg-opacity-90 rounded-lg my-10 py-6 px-14'>
                <h1 className='text-2xl font-medium text-white mt-4 mb-12 text-center'>
                    Iniciar sesíon
                    {/* 🔐 */}
                </h1>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email' className="text-white">E-mail</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Tu e-mail'
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className="text-white">Contraseña</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Tu contraseña'
                        />
                    </div>
                    <label className="text-white text-sm">¿Primera vez en Moviefy? <Link className="hover:text-blue-500" to="/register">Suscríbete</Link> </label>
                    <div className='flex justify-center items-center mt-6'>
                        <button className={`p-1 rounded text-white hover:bg-${color_principal_hover} bg-${color_principal}`}>{loading===true?"Cargando...":"Ingresar"}
                            </button>
                    </div>
                </form>
            </div>
        </div>       
    </>
    )
}
