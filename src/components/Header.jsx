import React from 'react';
import logo from '../assets/logo.png'
import arrow from '../assets/arrow-right.png'

function Header() {

    return (
        <div className='w-full bg-white sticky top-0 z-50 border shadow-sm font-Montserrat'>
            <div className='flex justify-between max-w-[90%] px-4 w-full items-center m-auto py-[1.5vw]'>
                <img src={logo} alt="" className='w-[20vw]' />
                <div className='flex gap-[5vw] items-center'>
                    <ul className='list-none flex gap-[2vw] text-[1.4vw] font-semibold '>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                    </ul>
                    <div className='border-2 border-purple-500 text-[1.4vw] font-semibold md:px-6 md:py-3 px-4 py-2 flex items-center text-purple-500 gap-2 rounded-2xl cursor-pointer hover:shadow-md hover:scale-[1.1]'>
                        <p>Register </p>
                        <img src={arrow} alt="" className='w-[1.4vw]' />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Header
