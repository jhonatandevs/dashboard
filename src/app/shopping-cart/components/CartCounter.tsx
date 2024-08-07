'use client'

import React, { useState } from 'react'

interface Props{
    value?:number
}
export const CartCounter = ({value=0}:Props) => {
    const [count, setCount] = useState(value)

    return (
       <>
        <span className="text-9xl">{count}</span>
            <div className="flex flex-row-reverse">
                <button onClick={() => setCount(prev => prev + 1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button onClick={() => setCount(prev => prev - 1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div></>
    )
}


