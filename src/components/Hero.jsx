import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Hero() {
  let [text] = useTypewriter({
    words : ['FrontEnd Developer'],
    loop : {},
    typeSpeed : 120,
    deleteSpeed : 80
  })
  return (
    // <div className='w-full h-screen bg-[#1A1A1D]'>Hero</div>
    // <div className='w-full h-screen bg-[#17252A]'>Hero</div>
    // <div className='w-full h-screen bg-[#222629]'>Hero</div>
    // <div className='w-full h-screen bg-[#182628]'>Hero</div>
    <div name="hero" className='w-full h-screen bg-[#19181A]'>
      <div className='flex flex-col justify-center h-full mx-w-[1000px] mx-auto px-10'>
        <p>Hi, my name is</p>
        <h1>Jiya Agrawal</h1>
        <h2>I'm a {" "} 
          <span style={{color:"red", fontWeight:"bolder"}}> {text}<Cursor/></span>
        </h2>
        
      </div>
    </div>
  )
}

export default Hero