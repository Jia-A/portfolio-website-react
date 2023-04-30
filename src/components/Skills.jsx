import React from 'react'
import HTML from "../assets/html.png"
import ReactLogo from "../assets/react.png"
import CSS from "../assets/css.png"
import JS from "../assets/javascript.png"
import Github  from "../assets/github.png"
import Tailwind from "../assets/tailwind.png"

function Skills() {
  return (
    <div name="skills" className='w-full h-screen bg-[#F9F9F9]'>
        <div className='flex flex-col justify-center h-full max-w-[1000px] mx-auto px-10 lg:px-20'>
            <div className=''>
                <p className='inline text-3xl sm:text-5xl text-[#1a1919] border-b-2 border-[#464343] font-light py-3'>Experience</p>
                <p className='py-8'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-6'>
                <div className='hover:scale-110 duration-500 pb-3'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="react logo"/>
                    <small>ReactJS</small>
                </div>
                <div className='hover:scale-110 duration-500 pb-3'>
                    <img className='w-20 mx-auto' src={JS} alt="js logo"/>
                    <small>JavaScript</small>
                </div>
                <div className='hover:scale-110 duration-500 pb-3'>
                    <img className='w-20 mx-auto' src={HTML} alt="html logo"/>
                    <small>HTML5</small>
                </div>
                <div className='hover:scale-110 duration-500 pb-3'>
                    <img className='w-20 mx-auto' src={CSS} alt="css logo"/>
                    <small>CSS3</small>
                </div>
                <div className='hover:scale-110 duration-500 pb-3'>
                    <img className='w-20 mx-auto' src={Github} alt="github logo"/>
                    <small>GitHub</small>
                </div>
                <div className='hover:scale-110 duration-500 pb-3'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="tailwind logo"/>
                    <small>Tailwind CSS</small>
                </div>
                
            </div>
        </div>   
    </div>
  )
}

export default Skills