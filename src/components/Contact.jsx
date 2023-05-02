import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Contact() {
  return (
    <div name="contact" className='w-full md:h-screen bg-[#F9F9F9]' >
        <div className='flex flex-col justify-center w-full h-full max-w-[1000px] mx-auto px-10 lg:px-20'>
            <div className=''>
                    <p className='inline hover:animate-bounce text-3xl sm:text-5xl text-[#1a1919] border-b-2 border-[#464343] font-light py-3'>Contact</p>
                    <p className='py-8 text-[14px] sm:text-[16px]'>Contact me here</p>
            </div>
            <div className='grid md:grid-cols-2 gap-10 pb-10'>
                <form action="https://getform.io/f/aca6ee8e-5f67-4750-84ed-4db5b868fdeb" method="POST" className='flex flex-col gap-2'>
                        <input type="text" name='Name' placeholder='Enter full name here' className=' resize p-3 bg-slate-200 focus:outline-none focus:border border-slate-400 focus:bg-slate-100 appearance-none text-[#464343] rounded'/>
                        <input type="email" name="Email"  placeholder='Enter your email here' className=' resize p-3 bg-slate-200 focus:outline-none focus:border border-slate-400 focus:bg-slate-100 appearance-none text-[#464343] rounded'/>
                        <textarea name="Message" className='resize p-3  bg-slate-200 focus:outline-none focus:border border-slate-400 focus:bg-slate-100 appearance-none text-[#464343] rounded' placeholder='Write your message here'></textarea>
                        <button type='submit' className=' self-start flex items-center gap-1 p-2 text-[#1a1919] bg-[rgba(0,0,0,0.1)] hover:border-b border-[#1a1919]'>Lets collaborate <HiArrowNarrowRight/></button>
                </form>
                <div>
                    <p className='text-2xl'>Mail me at</p>
                    <p className='inline border-b border-[#1a1919]'>agrawaljiya2011@gmail.com</p>
                    <p className='pt-5'>Call me at : <span className='text-[18px] border-b border-[#1a1919]'> 8269659518</span></p>
                </div>
            </div>
        </div> 
    </div>   
  )
}

export default Contact