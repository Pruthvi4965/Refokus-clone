import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='max-w-screen-lg mx-auto p-3 py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
            <div className='nleft flex items-center'>
                <img className='' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className='links flex gap-14 ml-14 text-white'>
                    {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                        elem.length === 0 ? (<span key={index} className='w-[1.5px] h-7 bg-zinc-600'></span>) :
                            <a href="#" key={index} className='font-sans text-sm flex items-center gap-0.5'>
                                {index === 1 && (<span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-1.5 h-1.5 rounded-full bg-green-600 mr-0.4'></span>)}
                                {elem}
                            </a>
                    ))}
                </div>
            </div>
            <div className='nright'>
<Button/>
            </div>
        </div>
    )
}

export default Navbar