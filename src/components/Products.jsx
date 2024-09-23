import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";

function Products() {
    var products = [
        {
            title: "arqitel",
            description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false
        },
        {
            title: "TTR",
            description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: true
        },
        {
            title: "YIR 2024",
            description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: true
        },
        {
            title: "Yahoo!",
            description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true
        },
        {
            title: "Rainfall",
            description: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            case: true
        }
    ];

    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val * 18)
    }

    return (
        <div className='relative mt-24'>
            {products.map((val, index) =>
                (<Product key={index} data={val} mover={mover} count={index} />)
            )}
            <div className=' absolute top-0 w-full h-full pointer-events-none'>
                <motion.div
                    initial={{ y: pos, x: "-50%" }}
                    animate={{ y: pos + `rem` }}
                    transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.4 }}
                    className='window absolute left-[45%] w-96 h-[18rem] overflow-hidden'>
                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.3 }}
                        className='window w-full h-full '
                    >
                        <video
                            className='absolute object-cover rounded-3xl pb-2'
                            autoPlay
                            muted
                            loop
                            src={arqitel}></video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.3 }}
                        className='window w-full h-full '
                    >
                        <video
                            className='absolute object-cover rounded-3xl pb-2'
                            autoPlay
                            muted
                            loop
                            src={ttr}></video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.3 }}
                        className='window w-full h-full '
                    >
                        <video
                            className='absolute object-cover rounded-3xl pb-2'
                            autoPlay
                            muted
                            loop
                            src={yir}></video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.3 }}
                        className='window w-full h-full '
                    >
                        <video
                            className='absolute object-cover rounded-3xl pb-2'
                            autoPlay
                            muted
                            loop
                            src={yahoo}></video>
                    </motion.div>

                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.3 }}
                        className='window w-full h-full '
                    >
                        <video
                            className='absolute object-cover rounded-3xl pb-2'
                            autoPlay
                            muted
                            loop
                            src={rainfall}></video>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}

export default Products
