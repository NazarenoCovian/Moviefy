import React from 'react'

export const RatingStar = ({rate}) => {
    const rating = Math.floor(rate/2)
    let filled=[]
    let empty=[]
    for(let i=0;i<rating;i++){
        filled.push("1")
    }
    let total = 5-filled.length
    for(let i=0;i<total;i++){
        empty.push("1")
    }
    
    return (
        <div class="flex justify-center items-center">
            <div class="flex items-center mt-2 mb-4">
                {filled.length>0?filled.map(()=>{
                    return(
                        <svg class="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    )
                }):<span className="text-gray-500">Sin valoraciones</span>}
                {empty.length>0&&empty.length<5&&empty.map(()=>{
                    return(
                        <svg class="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                    )
                })}
               
            </div>
        </div>
    )
}
