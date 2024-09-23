import React from 'react'

function Stripe({ val, index }) {
  return (
    <div className='w-1/6 h-[4vw] border-t-2 border-r-2 border-b-2 border-zinc-500 text-white flex justify-between p-3 items-center'>
      {index === 0 || index === 3 ? <img className='w-[10vw]' src={val.url} alt="" /> : <img className='w-[7.5vw]' src={val.url} alt="" />}
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe