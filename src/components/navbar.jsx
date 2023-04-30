import React, {useState} from 'react' 
import { FaBars, FaGithub, FaLinkedin, FaTimes} from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Navbar=()=> {
 const [bar, setBar] = useState(false)
 const handleNav = () => setBar(!bar)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-[#1a1919]'>
      <div>
    hello
      </div>
      
        <ul className='hidden md:flex'>
          <li className='px-4 cursor-pointer font-medium hover:font-bold hover:border-b-2 border-[#1a1919]'>Home</li>
          <li className='px-4 cursor-pointer font-medium hover:font-bold hover:border-b-2 border-[#1a1919]'>Work</li>
          <li className='px-4 cursor-pointer font-medium hover:font-bold hover:border-b-2 border-[#1a1919]'>Blogs</li>
          <li className='px-4 cursor-pointer font-medium hover:font-bold hover:border-b-2 border-[#1a1919]'>Contact</li>
        </ul>
      
      <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
        {!bar ? <FaBars/> : <FaTimes/>}
      </div>
      
      <ul className={!bar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl px-4 cursor-pointer'>Home</li>
          <li className='py-6 text-4xl px-4 cursor-pointer'>Work</li>
          <li className='py-6 text-4xl px-4 cursor-pointer'>Blogs</li>
          <li className='py-6 text-4xl px-4 cursor-pointer'>Contact</li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[40%] left-0 '>
        <ul>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 '>
            <a href="https://www.linkedin.com/in/jiyaagrawal/" className='flex justify-around items-center w-full font-semibold '> LinkedIn <FaLinkedin size={20}/>
            </a>
          </li>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 '>
            <a href="https://github.com/Jia-A" className='flex justify-around items-center w-full font-semibold'> GitHub <FaGithub size={20}/>
            </a>
          </li>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 '>
            <a href="https://drive.google.com/file/d/1Q9sW6s-HciMOEqE1zoJ1AIxc4Gn6LsdJ/view?usp=drivesdk" className='flex justify-around items-center w-full font-semibold'> Resume <BsFillPersonLinesFill size={20}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  )
}

export {Navbar}