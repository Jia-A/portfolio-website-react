import React, {useState} from 'react' 
import { FaBars, FaGithub, FaLinkedin, FaTimes} from "react-icons/fa"
import { HiOutlineDocumentText } from "react-icons/hi"

const Navbar=()=> {
 const [bar, setBar] = useState(false)
 const handleNav = () => setBar(!bar)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#A6A57A]'>
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

      <div className='flex fixed flex-col top-[40%] left-0 '>
        <ul>
          <li className='w-[140px] h-[35px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
            <a href="https://www.linkedin.com/in/jiyaagrawal/" className='flex justify-around items-center w-full '> LinkedIn <FaLinkedin size={20}/>
            </a>
          </li>
          <li className='w-[140px] h-[35px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
            <a href="https://github.com/Jia-A" className='flex justify-around items-center w-full'> GitHub <FaGithub size={20}/>
            </a>
          </li>
          <li className='w-[140px] h-[35px] flex justify-between items-center ml-[-91px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
            <a href="https://drive.google.com/file/d/1Q9sW6s-HciMOEqE1zoJ1AIxc4Gn6LsdJ/view?usp=drivesdk" className='flex justify-around items-center w-full'> Resume <HiOutlineDocumentText size={20}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  )
}

export {Navbar}