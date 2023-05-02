
import { motion } from 'framer-motion'
import { fadeIn } from "../variants"
import { skills } from '../skillsData'

function Skills() {
  return (
    <div name="skills" className='w-full h-screen bg-[#F9F9F9]'>
        <div className='flex flex-col justify-center h-full max-w-[1000px] mx-auto px-10 lg:px-20'>
            <div className=''>
                <p className='inline text-3xl sm:text-5xl text-[#1a1919] border-b-2 border-[#464343] font-light py-3'>Skills</p>
                <p className='py-8'>These are the technologies I've worked with</p>
            </div>
            <motion.div 
                variants={fadeIn("left, 0.2")}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-6'>
                    {skills.map((item)=>(
                        <div className='hover:scale-[1.20] duration-500 pb-3 group'>
                            <img className='w-20 mx-auto' src={item.src} alt={item.alt}/>
                            <small>{item.title}</small>
                        </div>
                    ))}
            </motion.div>
        </div>   
    </div>
  )
}

export default Skills