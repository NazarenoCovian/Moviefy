import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import userContext from "../contexts/userContext"
import {signInUser} from '../connectors/connectors.js'
import { Button } from './button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../slices/usersSlices'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading,setIsLoading]=useState(false)
    const {users} = useSelector(state=>state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleFormSubmit = async(e) => {
        try {
            setIsLoading(true)
            e.preventDefault()
            const {data,status} = await signInUser({email,password})
            if(status===200){
                console.log('email',email)
                dispatch(addUser(email))
                navigate('/main')
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    useEffect(() => {
if(users.email!=='')
navigate('/main')
    }, [users])
    
    return (
    <>
        <div className="bg-cover imagen  h-screen" >
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
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className="text-white">Contraseña</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Tu contraseña'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <label className="text-white text-sm">¿Primera vez en Moviefy? <Link className="hover:text-blue-500" to="/register">Suscríbete</Link> </label>
                    <div className='flex justify-center items-center mt-6'>
                    <Button title='Ingresar' isLoading={isLoading} />
                    </div>
                </form>
            </div>
        </div>       
    </>
    )
}
