import React, { useRef, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaSkype } from 'react-icons/fa';
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [formErrors, setFormErrors] = useState({});

    const validate = () => {
        const errors = {};
        const formData = form.current;

        if (!formData["name"].value.trim()) {
            errors.name = "Name is required";
        }

        const email = formData["email"].value;
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }

        if (!formData["message"].value.trim()) {
            errors.message = "Message is required";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        emailjs.sendForm('service_u8n7k86', 'template_sp3sw0a', form.current, '2Wp7OPoked3vGXruR')
            .then((result) => {
                console.log(result.text);
                window.alert("Message sent successfully");
            }, (error) => {
                console.log(error.text);
                window.alert("Message not sent");
            });
    };

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
                                <p className='w-[70%] leading-7 mb-4'>1 - 87D, Khalchapat, Guhagar, Ratnagiri, Maharashtra - 415703.</p>
                                <div>
                                    <div className='flex justify-start items-center leading-8'>
                                        <FaPhone className='text-[#20c997] size-5' />
                                        <span className='pl-3'>+91 7774966707</span>
                                    </div>
                                    <div className='flex justify-start items-center leading-8'>
                                        <MdEmail className='text-[#20c997] size-5' />
                                        <span className='pl-3'>rohitgoythale23@gmail.com</span>
                                    </div>
                                    <div className='flex justify-start items-center leading-8'>
                                        <TbWorld className='text-[#20c997] size-5' />
                                        <Link
                                            to='https://rohitgoythale.netlify.app'
                                            target='_blank'
                                            className='pl-3 hover:underline hover:text-[#20c997]'>
                                            https://rohitgoythale.netlify.app
                                        </Link>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h2 className='text-2xl font-semibold'>FOLLOW ME</h2>
                                    <div className='flex justify-between items-center text-gray-500 mr-14 my-3'>
                                        <Link to='https://www.linkedin.com/in/rohit-goythale-622399245' target='_blank'><FaLinkedin className='size-5 hover:text-[#20c997]' /></Link>
                                        <Link to='https://github.com/RohitGoythale18' target='_blank'><FaGithub className='size-5 hover:text-[#20c997]' /></Link>
                                        <Link to='https://www.instagram.com/roya_18_02' target='_blank'><FaInstagram className='size-5 hover:text-[#20c997]' /></Link>
                                        <Link to='https://twitter.com/RohitGoythale18' target='_blank'><FaXTwitter className='size-5 hover:text-[#20c997]' /></Link>
                                        <Link to='https://join.skype.com/invite/v1ELMAhCGpHR' target='_blank'><FaSkype className='size-5 hover:text-[#20c997]' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className='text-start px-10 w-[80%]'>
                                <h2 className='text-2xl font-semibold mb-5'>SEND US A NOTE</h2>
                                <form ref={form} className='text-center'>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            name='name'
                                            placeholder="Name"
                                            className="w-full py-3 pl-4 mr-3 text-sm text-gray-700 focus:text-white focus:font-semibold bg-[#232a31] rounded-md"
                                        />
                                        {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder="Email"
                                            className="w-full py-3 pl-4 ml-3 text-sm text-gray-700 focus:text-white focus:font-semibold bg-[#232a31] rounded-md"
                                        />
                                        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                                    </div>
                                    <div>
                                        <textarea
                                            name='message'
                                            placeholder="Tell us more about your needs........"
                                            className="w-full p-2 pl-4 mt-3 text-sm text-gray-700 focus:text-white focus:font-semibold bg-[#232a31] rounded-md h-44"
                                        />
                                        {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                                    </div>
                                    <button
                                        onClick={sendEmail}
                                        className="text-white font-bold my-3 py-3 px-10 rounded-full bg-green-400 transition duration-300 ease-in-out transform hover:bg-green-500">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
