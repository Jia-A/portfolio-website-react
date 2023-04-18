import React, {useState} from 'react' 

import { FaBars, FaTimes} from "react-icons/fa"

const Navbar=()=> {
 const [bar, setBar] = useState(false)
 const handleNav = () => setBar(!bar)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
    hello
      </div>
      
        <ul className='hidden md:flex'>
          <li className='px-4 cursor-pointer font-medium'>Home</li>
          <li className='px-4 cursor-pointer font-medium'>Work</li>
          <li className='px-4 cursor-pointer font-medium'>Blogs</li>
          <li className='px-4 cursor-pointer font-medium'>Contact</li>
        </ul>
      
      <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
        {!bar ? <FaBars/> : <FaTimes/>}
      </div>
      
      <ul className={!bar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl px-4 cursor-pointer'>Home</li>
          <li className='py-6 text-4xl px-4 cursor-pointer'>Work</li>
          <li className='py-6 text-4xl px-4 cursor-pointer'>Blogs</li>
          <li className='py-6 text-4xl px-4 cursor-pointer'>Contact</li>
        </ul>
    </div>
    
  )
}

export {Navbar}