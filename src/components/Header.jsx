import React, { useState } from 'react';
import logo from '../assets/logo.png'
import arrow from '../assets/arrow-right.png'

function Header() {
    const [activeMenu, setActiveMenu] = useState("home")

    return (
        <div className='w-full bg-white sticky top-0 z-50 border shadow-sm font-Montserrat'>
            <div className='flex justify-between max-w-[90%] w-full items-center m-auto py-[1.5vw]'>
                <img src={logo} alt="" className=' w-[120px] md:w-[20vw]' />
                <div className='flex gap-[5vw] items-center'>
                    <ul className='list-none sm:flex hidden gap-[2vw] text-[1.4vw] font-semibold '>
                        <li onClick={(e) => setActiveMenu("home")} className={`${activeMenu === 'home' ? 'text-purple-500' : ''}`}> <a href='#home'>Home</a></li>
                        <li onClick={(e) => setActiveMenu("about")} className={`${activeMenu === 'about' ? 'text-purple-500' : ''}`}> <a href='#about'>About Us</a></li>
                        <li onClick={(e) => setActiveMenu("gallery")} className={`${activeMenu === 'gallery' ? 'text-purple-500' : ''}`}> <a href='#gallery'>Gallery</a></li>
                        <li onClick={(e) => setActiveMenu("contact")} className={`${activeMenu === 'contact' ? 'text-purple-500' : ''}`}> <a href='#contact'>Contact Us</a></li>
                    </ul>
                    <div className='border-2 border-purple-500 text-sm sm:text-[1.4vw] font-semibold px-[1.4vw] py-[0.6vw]  flex items-center text-purple-500 gap-[0.7vw] rounded-2xl cursor-pointer hover:shadow-md hover:scale-[1.1]'>
                        <p>Register </p>
                        <img src={arrow} alt="" className='sm:w-[1.4vw] w-3' />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Header
