import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Register() {
    const color_principal = "green-500"
    const color_principal_hover ="green-400"
    const history = useHistory()
    const [loading,setLoading]=useState(false)



    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
        let full_name = "Naza"
        let user = {email:email,password:password,full_name:full_name}
        axios.post("http://localhost:3001/api/register",user)
            .then(history.push("/login"))
            .catch(e=>console.log(e))

        console.log(email, password);
    };
    return (
        <>
        <div className="bg-cover imagen bg-green-500 bg-opacity-50 h-screen" >
            <Header />
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
                   
                    <div className='flex justify-center items-center mt-6'>
                        <button className={`p-1 rounded text-white hover:bg-${color_principal_hover} bg-${color_principal}`}>{loading==true?"Cargando":"Registrar"}
                            </button>
                    </div>
                </form>
            </div>
        {/* </div> */}
        </div>       
    </>
 
    )
}
