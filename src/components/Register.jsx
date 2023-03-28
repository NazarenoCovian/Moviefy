import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  signUpUser } from '../connectors/connectors'
import { Button } from './button/Button'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading,setIsLoading]=useState(false)
    const navigate = useNavigate()

    const handleFormSubmit = async(e) => {
        try {
            e.preventDefault();
            setIsLoading(true)
            let full_name = "Naza"
            let user = {email,password,full_name}
            const data = await signUpUser(user)
            setIsLoading(false)
            navigate('/login')
        } catch (error) {
            setIsLoading(false)
        }
    };
    return (
        <>
        <div className="bg-cover imagen bg-green-500 bg-opacity-50 h-screen" >
            {/* <div className='h-screen flex bg-gray-bg1'> */}
            <div className='w-full max-w-md m-auto bg-gray-700 bg-opacity-90 rounded-lg my-10 py-6 px-16'>
                <h1 className='text-2xl font-medium text-white mt-4 mb-12 text-center'>
                    Nuevo usuario
                    {/* 🔐 */}
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email' className="text-white">Email</label>
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
                   
                    <div className='flex justify-center items-center mt-6'>
                        <Button title='Registrar' isLoading={isLoading} />
                    </div>
                </form>
            </div>
        {/* </div> */}
        </div>       
    </>
 
    )
}
