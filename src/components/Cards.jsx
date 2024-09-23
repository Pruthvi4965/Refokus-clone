import React from 'react'
import Card from './Card'

function Cards() {

    var cardata = 
        {h1:"Up Next : Culture",h2:"Get in touch",m1:"Who we are",m2:"Let's go to it, together.",foot:"Explore what drive us our team." }
    

    return (
        <div className='w-full '>
            <div className='max-w-screen-lg mx-auto gap-1 flex '>
                <Card width={"basis-1/3"} data={cardata} start={false} para={true} hover ="false"/>
                <Card width={"basis-2/3"} data={cardata} start={true} para={false} hover="true" />
            </div>
        </div>
    )
}

export default Cards


