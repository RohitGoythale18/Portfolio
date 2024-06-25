import React, { useState } from 'react';
import { FaDownload } from "react-icons/fa";
import { IoIosMenu } from 'react-icons/io';
import Sidebar from '../sidebar/Sidebar';

export default function AboutMe() {
    const [open, setOpen] = useState(false);

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resources/Rohit Goythale - Resume.pdf';
        link.download = 'Rohit Goythale - Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className='h-[100vh] bg-[#212529]'>
                <div className='md:hidden'>
                    <IoIosMenu className='size-9 absolute top-3 left-3 rounded-full text-white cursor-pointer hover:bg-[#20c997] md:hidden' onClick={() =>
                        setOpen(!open)} />
                    <Sidebar className='' open={open} setOpen={setOpen} />
                </div>
                <p className='text-7xl font-bold text-white text-center relative top-[80px] opacity-10 md:text-9xl'>ABOUT ME</p>
                <div className='text-center relative'>
                    <p className="text-white text-4xl font-semibold pt-6 md:pt-0">
                        Know Me More
                    </p>
                    <div className='md:flex justify-evenly pt-20'>
                        <div className="flex flex-col md:text-start md:w-[60%] px-5">
                            <p className="text-white my-2 px-2 leading-7">
                                I am a passionate MERN Stack developer with a keen interest in building scalable and efficient website development. I have a solid understanding of web development principles. I am proficient in a range of programming languages, including React.js, HTML5, JavaScript, CSS3, Tailwind CSS as well as Java. i am also proficient in MySQL and MongoDB databases.
                            </p>
                            <p className='text-white my-2 px-2 leading-7'>
                                I am also familiar with various frameworks and libraries, such as React.js, Express.js and Node.js. I am a quick learner, and I thrive in fast-paced environments where no two days are the same. I am excited to bring my skills and experience to a dynamic team and contribute to the development of innovative web development and software solutions.
                            </p>
                        </div>
                        <div className='flex flex-col bg-[#212529] text-white md:w-[35%] md:mt-0 mt-14 md:px-0 px-5'>
                            <div className='flex'>
                                <div className='flex flex-col w-[40%]'>
                                    <label className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>Name :</label>
                                    <label className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>Email :</label>
                                    <label className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>Mobile :</label>
                                    <label className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>Freelance :</label>
                                    <label className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>From :</label>
                                </div>
                                <div className='flex flex-col w-[100%]'>
                                    <p className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>Rohit Goythale</p>
                                    <p className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>rohitgoythale23@gmail.com</p>
                                    <p className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>+91 7774966707</p>
                                    <p className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>Available</p>
                                    <p className='border-b-2 border-green-600 mt-1 px-2 py-2 text-start'>Guhagar, Ratnagiri</p>
                                </div>
                            </div>
                            <button
                                onClick={downloadResume}
                                className='flex items-center justify-center text-lg text-white font-semibold md:my-5 p-3 my-5 mb-14  rounded-full bg-green-400 transition duration-300 ease-in-out transform hover:bg-green-600'
                            >
                                <FaDownload className='mr-3' />
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
