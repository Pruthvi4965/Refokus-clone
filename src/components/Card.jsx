import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion"
import { h3 } from 'framer-motion/client';

function Card({ width, start, para, hover = "false", data }) {

    return (
        <motion.div whileHover={{ backgroundColor: hover === "true" ? "#7443ff" : "#323034", padding: "25px" }}
            className={`${width} bg-zinc-800 p-5 duration-50 mt-20 rounded-xl text-white min-h-[25rem] flex flex-col justify-between`}>
            <div>
                <div className='w-full flex justify-between items-center'>
                    {start === false ? <h3>{data.h1}</h3> : <h3>{data.h2}</h3>}
                    <IoIosArrowRoundForward />
                </div>
                {para === true ? <h1 className='text-3xl font-semibold mt-4'>{data.m1}</h1> : <h1 className='text-3xl font-semibold mt-4'>{data.m2}</h1>}
            </div>
            <div className='down w-full '>
                {start === true && (
                    <>
                        <h1 className='text-6xl fony-bold tracking-tight leading-none '>start a project</h1>
                        <button className='rounded-full py-1.5 px-4 border-[1px] mt-5'>Contact Us</button>
                    </>
                )}



                {para === true && (<p className='text-sm text-zinc-500 font-medium '>{data.foot}</p>)}

            </div>
        </motion.div>
    )
}

export default Card