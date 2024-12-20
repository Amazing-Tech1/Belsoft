import React from 'react'
import bg from '../assets/Vector1.png'
import frame1 from '../assets/Frame-16-1.png'
import frame2 from '../assets/Frame-17-1.png'
import frame3 from '../assets/Frame-20.png'
import frame4 from '../assets/Frame-22.png'
import right_arrow from '../assets/Right-arrow.svg'
import ellipse1 from '../assets/Ellipse1.png'
import ellipse2 from '../assets/Ellipse2.png'
import ellipse3 from '../assets/Ellipse3.png'
import ellipse4 from '../assets/Ellipse4.png'
import ellipse5 from '../assets/Ellipse5.png'
import BAUR from '../assets/BoxArrowUpRight.svg'

function Hero() {
    return (
        <section className='w-full relative scroll-smooth scroll-mt-[16vw]' id='home'>
            <img src={bg} alt="background graphics" className='absolute top-[-8vw] right-[8vw] z-[-1] w-[50vw]' />
            <div className="w-[90%] flex flex-row m-auto mt-[7vw]">
                {/* Left Section */}
                <div className=' animate-slide-in basis-[55%] font-Montserrat mt-[1vw]'>
                    <span className='font-bold text-[1vw] leading-tight'>Join our premier monthly meetup for startup founders and tech visionaries</span>
                    <h2 className=' text-[2.8vw] text-purple-700 font-bold '>Connect, Collaborate, Innovate!</h2>
                    <p className='mt-[2vw] text-[1.28vw] font-medium w-[79%] leading-normal'>Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey. Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities</p>
                    <div className='mt-[3vw]'>
                        <button className="text-purple-500 p-[1.2vw] rounded-[50px] border border-purple-500 flex items-center gap-2 text-[1.8vw]  hover:bg-purple-500 hover:text-white">
                            Register for our next event <img src={right_arrow} alt="" className='w-[1.8vw]' />
                        </button>
                        <p className='mt-[1vw] font-semibold text-[0.9vw] text-purple-900'>Join Us for our next meetup on the 26th of July 2024</p>
                    </div>
                    <div>
                        <div className="flex gap-[2vw] mt-[4vw]">
                            <img src={ellipse1} alt="" className='w-[5vw] h-auto' />
                            <img src={ellipse2} alt="" className='w-[5vw] h-auto' />
                            <img src={ellipse3} alt="" className='w-[5vw] h-auto' />
                            <img src={ellipse4} alt="" className='w-[5vw] h-auto' />
                            <img src={ellipse5} alt="" className='w-[5vw] h-auto' />
                        </div>
                        <div className="flex mt-[1.2vw] gap-[0.8vw] font-bold text-[0.8vw]">
                            <p>Become a collaborator today</p>
                            <img src={BAUR} alt="" className='w-[0.8vw]' />
                        </div>

                    </div>
                </div>

                {/* Right Section */}
                <div className=' relative basis-[45%] animate-fade-in'>
                    <img src={frame1} alt="" className="absolute z-[-1] w-[23vw] left-0 top-[-0.5vw]" />
                    <img src={frame2} alt="" className=" w-[24vw] ml-[15vw] mt-[7vw] z-2 " />
                    <img src={frame3} alt="" className=" w-[14vw] mt-[-7vw]" />
                    <img src={frame4} alt="" className="ml-[17vw] mt-[-5vw] w-[7vw]" />
                </div>
            </div>
        </section>
    )
}

export default Hero
