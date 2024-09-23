import React from 'react'
import { IoIosReturnRight } from "react-icons/io";


function Button({title ="Get Started"}) {
  return (
    <div className='w-40 px-3 py-1.5 bg-zinc-100 text-zinc-900/70 rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium flex self-center '>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button