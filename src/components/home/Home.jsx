import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Sidebar from '../sidebar/Sidebar';

export default function Home() {
    const [open, setOpen] = useState(false);

    return (

        <div className='w-full h-screen' style={{ backgroundImage: 'url(./home-bg-img.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='md:hidden'>
                <IoIosMenu className='size-9 z-10 absolute top-3 left-3 text-[#20c997] bg-gray-500 rounded-full cursor-pointer md:hidden' onClick={() =>
                    setOpen(!open)} />
                <Sidebar className='' open={open} setOpen={setOpen} />
            </div>
            <div className='text-white min-h-screen flex flex-col justify-center text-center'>
                <h1 className='text-4xl font-semibold my-5'>Welcome</h1>
                <div className={`flex flex-col justify-center items-center text-4xl md:text-6xl font-semibold my-2 duration-500 "left-0" : "left-[-100%]"}`}>
                    <p>I'm</p>
                    <span className='mr-4' />
                    <Typewriter
                        className=''
                        options={{
                            strings: ['Rohit Goythale.', 'a MERN Stack Developer.', 'Software Developer.'],
                            autoStart: true,
                            loop: true
                        }} />
                </div>
                <p className='text-2xl my-5'>Based in Ratnagiri, Maharashtra.</p>
                <Link to='/contact' className='border-2 border-green-300 text-xl font-medium w-36 my-2 mx-auto p-3 rounded-full text-green-400 transition duration-300 ease-in-out transform hover:bg-green-500 hover:text-white hover:border-green-400'>
                    Hire Me
                </Link>
            </div>
        </div>
    )
}
