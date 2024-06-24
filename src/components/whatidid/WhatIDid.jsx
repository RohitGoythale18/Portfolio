import React from 'react';
import { Badge, Card, List, ListItem } from '@tremor/react';
import { Link } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';

export default function WhatIDid() {
    return (
        <>
            <div className='md:h-[100vh]'>
                <div className='bg-[#212529]'>
                    <p className='text-7xl font-bold text-white text-center relative top-[80px] opacity-10 md:text-9xl'>PORTFOLIO</p>
                    <div className='text-center relative'>
                        <p className="text-white text-4xl font-semibold pt-6 md:pt-0">
                            My Work
                        </p>
                        <div className='flex flex-col pt-10 text-white md:flex md:flex-row'>
                            <div className='text-center px-10 py-10 md:py-10 md:w-[50%] md:text-start'>
                                <h2 className='text-2xl font-semibold mb-5'>My Projects</h2>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>10th Jan - 10th Apr 2024</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">Food Blog Website</p>
                                    <List className='list-disc'>
                                        <ListItem className='flex flex-col items-start px-5'>
                                            <Link
                                                to='https://foodmania-foodblog.netlify.app'
                                                target='_blank'
                                                className='hover:underline hover:text-[#20c997]'>
                                                https://foodmania-foodblog.netlify.app
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Card>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>5th Feb - 5th Mar 2024</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">Online Nagar Panchayat</p>
                                    <List className='list-disc'>
                                        <ListItem className='flex flex-col items-start px-5'>
                                            <Link
                                                to='https://online-nagar-panchayat.netlify.app'
                                                target='_blank'
                                                className='hover:underline hover:text-[#20c997]'>
                                                https://online-nagar-panchayat.netlify.app
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Card>
                            </div>
                            <div className='text-center px-10 py-10 md:py-10 md:w-[50%] md:text-start'>
                                <h2 className='text-2xl font-semibold mb-5'>My Certificates</h2>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>2023</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">FULL STACK JAVA</p>
                                    <List className='list-disc'>
                                        <ListItem className='flex flex-col items-start px-5'>
                                            Symbiosis Skills & Professional University and Capgemini
                                        </ListItem>
                                    </List>
                                </Card>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>2023</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">THE COMPLETE REACT DEVELOPER COURSE (W/HOOKS AND REDUX)</p>
                                    <List className='list-disc'>
                                        <ListItem className='flex flex-col items-start px-5'>
                                            Udemy
                                        </ListItem>
                                    </List>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#212529] md:text-center md:pt-20'>
                    <p className="text-white text-4xl text-center font-semibold">
                        My Skills
                    </p>
                    <div className='md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-5 grid grid-cols-1 gap-y-5 px-10 py-16 text-white'>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">ReactJS</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={90}
                            />
                        </Card>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">ExpressJS</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={85}
                            />
                        </Card>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">JavaScript</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={85}
                            />
                        </Card>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Java</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={70}
                            />
                        </Card>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">NodeJS</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={85}
                            />
                        </Card>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">HTML5</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={95}
                            />
                        </Card>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Tailwind CSS</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={90}
                            />
                        </Card>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">CSS3</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={95}
                            />
                        </Card>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">MySQL</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={90}
                            />
                        </Card>
                        <Card
                            className="text-white mx-auto my-auto py-2 rounded-lg"
                            decoration="left"
                            style={{ borderLeftColor: '#20c997' }}
                        >
                            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">MongoDB</p>
                            <ProgressBar
                                className='my-4'
                                bgColor="#20c997"
                                height='16px'
                                completed={90}
                            />
                        </Card>
                    </div>
                </div>
            </div>

        </>
    )
}
