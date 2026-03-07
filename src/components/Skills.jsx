
import { motion } from 'framer-motion'
import { fadeIn } from "../variants"
import { skills, currentLearning } from '../skillsData'

function Skills() {
  return (
    <div name="skills" className='w-full min-h-screen bg-[#F9F9F9] py-20'>
        <div className='flex flex-col justify-center max-w-[1000px] mx-auto px-10 lg:px-20'>
            {/* Main Skills Section */}
            <div className=''>
                <p className='inline text-3xl sm:text-5xl text-[#1a1919] border-b-2 border-[#464343] font-light py-3'>Skills & Technologies</p>
                <p className='py-8 text-[14px] sm:text-[16px]'>Modern technologies and tools I use to build scalable, performant web applications with excellent user experience.</p>
            </div>
            <motion.div 
                variants={fadeIn("left, 0.2")}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center py-6'>
                    {skills.map((item, index) =>(
                        <div key={index} className='hover:scale-[1.20] duration-500 pb-3 group flex flex-col items-center'>
                            <div className='text-4xl mb-2 text-[#1a1919] group-hover:text-[#464343] transition-colors duration-300'>
                                {item.icon}
                            </div>
                            <small className='text-xs font-medium'>{item.title}</small>
                        </div>
                    ))}
            </motion.div>
            
            {/* Current Learning Section */}
            <div className='mt-16'>
                <p className='inline text-2xl sm:text-4xl text-[#1a1919] border-b-2 border-[#464343] font-light py-3'>Currently Learning</p>
                <p className='py-6 text-[14px] sm:text-[16px]'>Technologies I'm currently mastering to expand my full-stack development capabilities.</p>
            </div>
            <motion.div 
                variants={fadeIn("right, 0.2")}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center py-6'>
                    {currentLearning.map((item, index) =>(
                        <div key={index} className='hover:scale-[1.15] duration-500 pb-3 group flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity'>
                            <div className='text-3xl mb-2 text-[#464343] group-hover:text-[#1a1919] transition-colors duration-300'>
                                {item.icon}
                            </div>
                            <small className='text-xs font-medium'>{item.title}</small>
                        </div>
                    ))}
            </motion.div>
        </div>   
    </div>
  )
}

export default Skills