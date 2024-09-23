import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {

    const [images, setImages] = useState([
        { url: "https://i.pinimg.com/736x/36/ee/9a/36ee9aa3055b1e1b2c9e03fe0beef0dd.jpg", top: "50%", left: "50%", isActive: false },
        { url: "https://i.pinimg.com/564x/bf/16/66/bf1666e59674775e75f2e57342c55cb3.jpg", top: "56%", left: "44%", isActive: false },
        { url: "https://i.pinimg.com/564x/f5/04/9d/f5049d576c1c03cc1ce79fe8ff835b37.jpg", top: "45%", left: "56%", isActive: false },
        { url: "https://i.pinimg.com/564x/af/38/ee/af38ee3fb4f709e35e5b8f965c4b4c8b.jpg", top: "60%", left: "53%", isActive: false },
        { url: "https://i.pinimg.com/564x/66/f5/27/66f52715dfa3401551bebd6e75bc9ba6.jpg", top: "43%", left: "40%", isActive: false },
        { url: "https://i.pinimg.com/564x/6e/3e/1c/6e3e1c4ca1a6b7a3185ca5453072144c.jpg", top: "65%", left: "55%", isActive: false }
    ])


    const { scrollYProgress } = useScroll();



    scrollYProgress.on("change", (data) => {
        function imagesShow(arr) {
            setImages((prev) => 
                prev.map((item ,index) => (
                    arr.indexOf(index) === -1 ?
                    {...item , isActive: false} :
                    {...item , isActive:true}
                ))
            )

        }

        switch (Math.floor(data*100)) {
            case 0:
                imagesShow([]);
                break;
            case 1:
                imagesShow([0]);
                break;
            case 2:
                imagesShow([0, 1]);
                break;
            case 3:
                imagesShow([0, 1, 2]);
                break;
            case 4:
                imagesShow([0, 1, 2, 3]);
                break;
            case 5:
                imagesShow([0, 1, 2, 3, 4]);
                break;
            case 6:
                imagesShow([0, 1, 2, 3, 4, 5]);
                break;
        }
    })

    return (
        <div className='w-full mb-10'>
            <div className=' relative max-w-screen-md mx-auto text-white text-center mt-5'>
                <h1 className='font-["satoshi"] text-[29vw] leading-none select-none tracking-tight font-medium'>work</h1>
                <div className='absolute top-0 w-full h-full'>
                    {images.map((elem, index) => (
                        elem.isActive && (<img key={index}
                            className='absolute w-64 h-52 rounded-xl -translate-x-[50%] -translate-y-[50%] object-cover object-top '
                            style={{ top: elem.top, left: elem.left }}
                            src={elem.url}
                            alt="" />)
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work