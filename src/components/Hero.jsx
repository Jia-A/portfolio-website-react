import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { HiArrowNarrowRight } from "react-icons/hi"

function Hero() {
  let [text] = useTypewriter({
    words : ['FrontEnd Developer'],
    loop : {},
    typeSpeed : 120,
    deleteSpeed : 80
  })
  return (
    <div name="hero" className='w-full h-screen bg-[#F9F9F9]'>
      <div className='flex flex-col justify-center h-full max-w-[1000px] mx-auto px-10 lg:px-20'>
        <p className='text-2xl sm:text-3xl font-bold text-[#464343] px-2'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-5xl font-bold text-[#1a1919]'>Jiya Agrawal</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#464343]'>I'm a {" "} 
          <span style={{color: "#1a1919", fontWeight:"bolder"}}> {text}<Cursor/></span>
        </h2>
        <p className='max-w-[650px] py-4 text-[#464343]'>I'm a frontend developer working towards providing smooth UI experience to users by making optimized and responsive websites with excellent performance.</p>
        <div>
          <button className='flex items-center gap-1 p-2 bg-[rgba(0,0,0,0.1)] hover:border-b border-[#1a1919]'>Projects <HiArrowNarrowRight/></button>
        </div>
        
      </div>
    </div>
  )
}

export default Hero