import React from 'react'

function Footer() {
    return (
        <div className='w-full mt-16 flex flex-col'>
            <div className='max-w-screen-lg mx-auto pt-10 flex align-top gap-16 text-white'>
                <div className='basis-1/2 '>
                    <h1 className='text-[10.5rem] leading-none tracking-tight font-semibold mb-5'>refokus.</h1>

                </div>
                <div className='basis-1/2 flex mt-10 '>
                    <div className='mr-10'>
                        <h4 className='mb-5 text-zinc-300 text-sm '>socials</h4>
                        {["instagram", "twitter (X?)", "LinkedIn"].map((item, index) => (
                            <a key={index} className='block mb-0.5 text-sm  text-zinc-600 capitalize' href=''>{item}</a>
                        ))}
                    </div>
                    <div className='mr-10 '>
                        <h4 className='mb-5 text-zinc-600 text-sm '>Sitemap</h4>
                        {["home", "work", "careers", "contacts"].map((item, index) => (
                            <a key={index} className='block mb-0.5 text-zinc-300 text-sm capitalize' href=''>{item}</a>
                        ))}
                    </div>
                    <div className='ml-7 flex flex-col items-end' >
                        <p className='text-zinc-300 text-sm text-right'>refokus is a pioneering digital agency driven by design and empowered by technology</p>
                        <img className='w-32 mt-5 ml-4' src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
                    </div>
                </div>

            </div>
            <div className='max-w-screen-lg mx-44 text-sm flex mb-5 gap-10 text-white'>
                {["Privacy Policy", "Cookie Policy", "impressum", "Terms"].map((item, index) => <a key={index} href=''>{item}</a>
                )}
            </div>
        </div>
    )
}

export default Footer