import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import userContext from "../contexts/userContext"

export default function Header() {
    const [open,setOpen] = useState(false)
    const {user} =useContext(userContext)
    const color_principal = "green-500"
    const color_principal_hover ="green-400"
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Hamburger Menu */}
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" onClick={()=>setOpen(!open)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <span className={`text-${color_principal} font-serif text-xl `}>MOVIEFY</span>
                            </div>
                            {/* Nav Items */}
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <Link to="/main" className="bg-turquoise text-white hover:bg-turquoise-dark px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                    <Link to="/favorites" className="text-white hover:bg-turquoise hover:text-white px-3 py-2 rounded-md text-sm font-medium">Favorites</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* BTN SESION */}
                            {user.email!==null?
                             <span className={`font-sans text-${color_principal} rounded`}><Link to="/login">Cerrar sesión</Link></span>     
                             :
                             <button className={` p-1 rounded text-white hover:bg-${color_principal_hover} bg-${color_principal}`}><Link to="/login">Iniciar sesión</Link>
                            </button>                     
                            }
                            
                        </div>
                    </div>
                </div>
                <div className={`${open==true?null:"hidden"} sm:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="/" className="bg-blue text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="/favorites" className="text-white hover:bg-turquoise hover:text-white block px-3 py-2 rounded-md text-base font-medium">Favorites</a>
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};