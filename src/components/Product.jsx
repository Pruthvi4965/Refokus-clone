import React from 'react'
import Button from './Button'

function Product({ data ,mover,count}) {
    return (
        <div className='w-full py-20 h-[18rem] text-white '>
            <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-lg mx-auto flex items-center justify-between'>
                <h1 className='text-6xl capitalize font-semibold'>{data.title}</h1>
                <div className='dets w-1/3'>
                    <p className='mb-10'>{data.description}</p>

                    <div className='flex items-center gap-x-5'>
                        {data.live && <Button title='Live project' />}
                        {data.case && <Button title='Case study' />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product