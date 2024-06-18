import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaSkype } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
    return (
        <>
            <nav className="flex flex-col text-2xl w-[300px] h-screen bg-[#111418]">
                <div className='flex flex-col items-center justify-center h-[40%]'>
                    <img
                        className='w-[160px] h-[160px] my-3 rounded-full border-4 border-gray-500'
                        src="/MyPic.jpg"
                        alt="My Picture" />

                    <p className='text-white font-semibold'>ROHIT GOYTHALE</p>
                </div>
                <div className="flex flex-col text-center mx-2 h-[50%] text-gray-500">
                    <NavLink
                        to="/"
                        className="text-xl font-semibold p-2 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about-me"
                        className="text-xl font-semibold p-2 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/"
                        className="text-xl font-semibold p-2 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        What I Do
                    </NavLink>
                    <NavLink
                        to="/"
                        className="text-xl font-semibold p-2 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        to="/"
                        className="text-xl font-semibold p-2 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/"
                        className="text-xl font-semibold p-2 hover:text-blue-500"
                        activeclassname="tab-name text-blue-500"
                    >
                        Contact
                    </NavLink>
                </div>
                <div className='flex justify-evenly items-center text-gray-500 h-[10%]'>
                    <FaLinkedin className='size-5' />
                    <FaGithub className='size-5' />
                    <FaInstagram className='size-5' />
                    <FaXTwitter className='size-5' />
                    <FaSkype className='size-5' />
                </div>
            </nav>
        </>
    )
}
