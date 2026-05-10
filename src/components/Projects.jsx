import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from "../variants"
import {projects} from '../projectData'
import { Link } from "react-router-dom"


function Projects() {
  return (
    <div name="projects" className='w-full md:h-screen bg-[#F9F9F9]' >
        <div className='flex flex-col justify-center w-full h-full max-w-[1000px] mx-auto px-10 lg:px-20'>
            <div className=''>
                    <p className='inline hover:animate-bounce text-3xl sm:text-5xl text-[#1a1919] border-b-2 border-[#464343] font-light py-3'>Projects</p>
                    <p className='py-8 text-[14px] sm:text-[16px]'>These are some of the projects I've created. All of these are made for a single purpose which is providing even a small service with high quality performance. </p>
            </div>
            <motion.div
                variants={fadeIn("left, 0.2")}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='grid gap-y-6 gap-x-10 sm:grid grid-cols-2 md:grid-cols-3 md:gap-x-20 mb-4'>
                    {
                        projects.map((item)=>(
                            
                            <div className='group flex flex-col relative md:hover:scale-110 transition-all duration-500 text-[#F9F9F9] rounded cursor-pointer'>
                                <Link to={item.link}>
                                <div className='bg-gradient-to-t from-black/80 via-black/40 to-transparent md:from-transparent md:via-transparent md:to-transparent md:group-hover:bg-black/70 md:bg-gradient-to-t w-full h-full absolute z-40 transition-all duration-500 rounded-lg'>
                                </div>
                                <img src={item.src} alt="" className='rounded-lg w-full' />
                                <div className='absolute right-4 bottom-3 md:bottom-5 md:invisible md:group-hover:visible transition-all duration-500 z-50 text-right'>
                                    <p className='text-[14px] sm:text-[16px] md:text-2xl font-medium'>{item.title}</p>
                                    <p className='text-[10px] md:text-[12px] hidden md:block'>{item.desc}</p>
                                </div>
                                </Link>
                            </div>
                           
                        ))
                    }
                
            </motion.div>
        </div>
    </div>
  )
}

export default Projects