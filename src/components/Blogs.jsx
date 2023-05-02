import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { blogs } from '../blogData'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <div name="blogs" className='w-full md:h-screen bg-[#F9F9F9]' >
        <div className='flex flex-col justify-center w-full h-full max-w-[1000px] mx-auto px-10 lg:px-20'>
            <div>
                <p className='inline hover:animate-bounce text-3xl sm:text-5xl text-[#1a1919] border-b-2 border-[#464343] font-light py-3'>Blogs</p>
                <p className='py-8 text-[14px] sm:text-[16px]'>These are some of the technical blogs that I've written in a layman language so that anybody, even from a non-tech background or a new-comer can understand it and make use of it.</p>
            </div>
            <motion.div
                variants={fadeIn("left, 0.6")}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='grid gap-10 md:grid-cols-3'>
                    {
                        blogs.map((item)=>(
                            <div className='flex flex-col cursor-pointer border-b border-[#1a1919]'>
                                <p className='border-t border-[#1a1919]  text-2xl'>{item.title}</p>
                                <small className=' max-w-full p-1'>{item.desc}</small>
                                <p className=' text-[15px] self-end'>
                                    <Link to={item.link}>
                                    <button className='flex flex-row gap-2 items-center hover:animate-ping '>Read <HiArrowNarrowRight/></button>
                                    </Link>
                                </p>
                            </div>
                        ))
                    }
                    
            </motion.div>

        </div>
    </div>
  )
}

export default Blogs