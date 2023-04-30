import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from "../variants"
import {projects} from '../projectData'


function Projects() {
  return (
    <div name="projects" className='w-full md:h-full bg-[#F9F9F9]' >
        <div className='flex flex-col justify-center w-full h-full max-w-[1000px] mx-auto px-10 lg:px-20'>
            <div className=''>
                    <p className='inline hover:animate-bounce text-3xl sm:text-5xl text-[#1a1919] border-b-2 border-[#464343] font-light py-3'>Projects</p>
                    <p className='py-8'>These are some of the projects I've created</p>
            </div>
            <motion.div
                variants={fadeIn("left, 0.2")}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='grid sm:grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5'>
                    {
                        projects.map((item)=>(
                            <div className='group flex flex-col relative hover:scale-110 transition-all duration-500 text-[#F9F9F9] rounded'>
                                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500 rounded'>   
                                </div>
                                <img src={item.src} alt="" className='rounded' />
                                <div className='invisible group-hover:visible absolute left-6 bottom-5 transition-all duration-500 z-50'>
                                    <p className='text-2xl'>{item.title}</p>
                                    <p className='text-[12px]'>{item.desc}</p>
                                </div> 
                            </div>
                        ))
                    }
                
            </motion.div>
        </div>
    </div>
  )
}

export default Projects