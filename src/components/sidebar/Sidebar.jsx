import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaSkype } from "react-icons/fa";
import { FaXTwitter, FaRegUser } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { IoDocumentOutline } from "react-icons/io5";
import { RiBookReadLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

export default function Sidebar() {
    return (
        <>
            <nav className="flex flex-col text-2xl w-[300px] h-screen bg-[#111418]">
                <div className='flex flex-col items-center justify-center mt-5'>
                    <img
                        className='w-[170px] h-[170px] my-3 rounded-full border-[6px] border-gray-500'
                        src="/MyPic.jpg"
                        alt="My Picture" />

                    <Link to='/' className='text-white font-semibold'>ROHIT GOYTHALE</Link>
                </div>
                <div className='flex justify-evenly items-center text-gray-500 h-[10%]'>
                    <Link to='https://www.linkedin.com/in/rohit-goythale-622399245' target='_blank'><FaLinkedin className='size-5 hover:text-[#20c997]' /></Link>
                    <Link to='https://github.com/RohitGoythale18' target='_blank'><FaGithub className='size-5 hover:text-[#20c997]' /></Link>
                    <Link to='https://www.instagram.com/roya_18_02' target='_blank'><FaInstagram className='size-5 hover:text-[#20c997]' /></Link>
                    <Link to='https://twitter.com/RohitGoythale18' target='_blank'><FaXTwitter className='size-5 hover:text-[#20c997]' /></Link>
                    <Link to='' target='_blank'><FaSkype className='size-5 hover:text-[#20c997]' /></Link>
                </div>
                <div className="flex flex-col text-center mx-2 my-2 h-[50%] text-gray-500">
                    <NavLink
                        to="/"
                        className="flex items-center text-xl font-semibold p-2 hover:text-[#20c997]"
                        activeclassname="tab-name text-blue-500"
                    >
                        <TiHomeOutline className='mx-5 size-6'/>
                        Home
                    </NavLink>
                    <NavLink
                        to="/about-me"
                        className="flex items-center text-xl font-semibold p-2 hover:text-[#20c997]"
                        activeclassname="tab-name text-blue-500"
                    >
                        <FaRegUser className='mx-5 size-6'/>
                        About Me
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className="flex items-center text-xl font-semibold p-2 hover:text-[#20c997]"
                        activeclassname="tab-name text-blue-500"
                    >
                        <IoDocumentOutline className='mx-5 size-6'/>
                        Resume
                    </NavLink>
                    <NavLink
                        to="/what-i-did"
                        className="flex items-center text-xl font-semibold p-2 hover:text-[#20c997]"
                        activeclassname="tab-name text-blue-500"
                    >
                        <RiBookReadLine className='mx-5 size-6'/>
                        What I Do
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="flex items-center text-xl font-semibold p-2 hover:text-[#20c997]"
                        activeclassname="tab-name text-blue-500"
                    >
                        <MdOutlineEmail className='mx-5 size-6'/>
                        Contact
                    </NavLink>
                </div>
                <div className='text-white text-center py-2'>
                    <p className='text-base font-normal my-1'>&copy; Copyright <strong>Portfolio</strong></p>
                    <p className='text-sm font-normal my-1'>Designed by <Link to='/' className='text-green-300 transition duration-300 ease-in-out transform hover:text-green-500 hover:underline'>Rohit Goythale</Link>.</p>
                </div>
            </nav>
        </>
    )
}
