import React from 'react'
import grid from '../img/grid.png'

const Hero = () => {

  return (
   
    <section className='hero'>
        <img className='hero--grid' src= {grid} alt="" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>


  )
}

export default Hero