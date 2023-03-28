import React from 'react'
import { color_principal, color_principal_hover } from '../../utils/colors'

export const Button = ({isLoading, title, onClick}) => {
  return (
    <button 
      className={`p-1.5 px-4 rounded text-white hover:bg-${color_principal_hover} bg-${color_principal}`}
      onClick={onClick}
      >
        {isLoading?"Cargando":title}
    </button>
  )
}
