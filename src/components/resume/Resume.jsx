import React, { useState } from 'react';
import { Badge, Card, List, ListItem } from '@tremor/react';
import { IoIosMenu } from 'react-icons/io';
import Sidebar from '../sidebar/Sidebar';

export default function Resume() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='h-[100vh]'>
                <div className='bg-[#212529]'>
                    <div className='md:hidden'>
                        <IoIosMenu className='size-9 absolute top-3 left-3 rounded-full text-white cursor-pointer hover:bg-[#20c997] md:hidden' onClick={() =>
                            setOpen(!open)} />
                        <Sidebar className='' open={open} setOpen={setOpen} />
                    </div>
                    <p className='text-7xl font-bold text-white text-center relative top-[80px] opacity-10 md:text-9xl'>
                        SUMMARY
                    </p>
                    <div className='text-center relative'>
                        <p className="text-white text-4xl font-semibold pt-6 md:pt-0">
                            Resume
                        </p>
                        <div className='flex flex-col pt-10 text-white md:flex md:flex-row'>
                            <div className='text-center px-10 py-10 md:py-10 md:w-[50%] md:text-start'>
                                <h2 className='text-2xl font-semibold mb-5'>My Education</h2>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>2021 - 2024</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">BACHELOR OF COMPUTER ENGINEERING</p>
                                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-2">Gharda Institute of Technology, Lavel, Khed</p>
                                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-2">CGPA: 7.70</p>
                                </Card>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>2019 - 2021</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">Diploma in Computer Engineering</p>
                                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-2">Sahyadri Polytechnic, Sawarde</p>
                                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-2">Percentage: 83.60%</p>
                                </Card>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>2019</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">H.S.C</p>
                                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-2">Junior College, Guhagar</p>
                                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-2">Percentage: 53.69%</p>
                                </Card>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>2017</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">S.S.C</p>
                                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-2">S D G K M V High School, Guhagar</p>
                                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-2">Percentage: 78.20%</p>
                                </Card>
                            </div>

                            <div className='text-center px-10 py-10 md:py-10 md:w-[50%] md:text-start'>
                                <h2 className='text-2xl font-semibold mb-5'>My Internships</h2>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>10th Jan - 10th Apr 2024</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">SLASH MARK</p>
                                    <List className='list-disc pl-5'>
                                        <ListItem>Create a Clone of Discord.com landing page.</ListItem>
                                        <ListItem>Developed an own portfolio website.</ListItem>
                                        <ListItem>Developed a Weather Forecasting app.</ListItem>
                                    </List>
                                </Card>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>5th Feb - 5th Mar 2024</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">PLACEMENT DOST</p>
                                    <List className='list-disc pl-5'>
                                        <ListItem>Developed an E-Commerce website using MERN.</ListItem>
                                        <ListItem>Build a web-based Task Management Application.</ListItem>
                                    </List>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
