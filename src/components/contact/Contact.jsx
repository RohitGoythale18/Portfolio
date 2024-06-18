import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaSkype } from 'react-icons/fa';
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <>
            <div className='h-[100vh]'>
                <div className='bg-[#343a40] min-h-screen'>
                    <p className='text-9xl font-bold text-white text-center relative top-[80px] opacity-10'>CONTACT</p>
                    <div className='text-center relative'>
                        <p className="text-white text-4xl font-semibold">
                            Get In Touch
                        </p>
                        <div className='flex pt-20 text-white'>
                            <div className='text-start pl-10 pr-3 w-[30%]'>
                                <h2 className='text-2xl font-semibold mb-3'>ADDRESS</h2>
                                <p className='w-[70%] leading-7 mb-4'>1 - 87D, Khalchapat, Guhagar, Ratnagiri, Maharashtra - 415703</p>
                                <div>
                                    <div className='flex justify-start items-center leading-8'>
                                        <FaPhone className='text-[#20c997] size-4' />
                                        <span className='pl-2'>+91 7774966707</span>
                                    </div>
                                    <div className='flex justify-start items-center leading-8'>
                                        <MdEmail className='text-[#20c997] size-4' />
                                        <span className='pl-2'>rohitgoythale23@gmail.com</span>
                                    </div>
                                    <div className='flex justify-start items-center leading-8'>
                                        <TbWorld className='text-[#20c997] size-4' />
                                        <Link
                                            to='https://rohitgoythale.netlify.app'
                                            target='_blank'
                                            className='pl-2 hover:underline hover:text-[#20c997]'>
                                            https://rohitgoythale.netlify.app
                                        </Link>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h2 className='text-2xl font-semibold'>FOLLOW ME</h2>
                                    <div className='flex justify-between items-center text-gray-500 mr-14 my-3'>
                                        <FaLinkedin className='size-5 hover:text-[#20c997]' />
                                        <FaGithub className='size-5 hover:text-[#20c997]' />
                                        <FaInstagram className='size-5 hover:text-[#20c997]' />
                                        <FaXTwitter className='size-5 hover:text-[#20c997]' />
                                        <FaSkype className='size-5 hover:text-[#20c997]' />
                                    </div>
                                </div>
                            </div>
                            <div className='text-start px-10 w-[80%]'>
                                <h2 className='text-2xl font-semibold mb-5'>SEND US A NOTE</h2>
                                <div className='text-center'>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full py-3 pl-4 mr-3 text-sm text-gray-700 focus:text-white focus:font-semibold bg-[#232a31] rounded-md"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full py-3 pl-4 ml-3 text-sm text-gray-700 focus:text-white focus:font-semibold bg-[#232a31] rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder="Tell us more about your needs........"
                                            className="w-full p-2 pl-4 mt-3 text-sm text-gray-700 focus:text-white focus:font-semibold
                                        bg-[#232a31] rounded-md h-44"
                                        />
                                    </div>
                                    <button
                                        className="text-white font-bold my-3 py-3 px-10 rounded-full bg-green-400 transition duration-300 ease-in-out transform hover:bg-green-500">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
