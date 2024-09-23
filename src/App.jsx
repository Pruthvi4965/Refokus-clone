import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const locomotiveScroll =new LocomotiveScroll();
  return (
    <div className='bg-zinc-950 w-full min-h-screen font-sans'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App