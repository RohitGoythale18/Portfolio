import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        
        <div className='min-h-screen' style={{ backgroundImage: 'url(./comp-bg-img.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='text-white min-h-screen flex flex-col justify-center text-center'>
                <h1 className='text-4xl font-semibold my-5'>Welcome</h1>
                <p className='flex justify-center text-6xl font-semibold my-2'>
                    I'm
                    <span className='mr-4' />
                    <Typewriter options={{
                        strings: ['Rohit Goythale.', 'a MERN Stack Developer.', 'Software Developer.'],
                        autoStart: true,
                        loop: true
                    }} />
                </p>
                <p className='text-2xl my-5'>Based in Ratnagiri, Maharashtra.</p>
                <button className='border-2 border-green-300 text-xl font-medium w-36 my-2 mx-auto p-3 rounded-full text-green-400 transition duration-300 ease-in-out transform hover:bg-green-500 hover:text-white hover:border-green-400'>
                    Hire Me
                </button>
            </div>
        </div>
    )
}