import React from 'react';
import { Badge, Card, List, ListItem } from '@tremor/react';
import { Link } from 'react-router-dom';

export default function WhatIDid() {
    return (
        <>
            <div className='h-[100vh]'>
                <div className='bg-[#212529] min-h-screen'>
                    <p className='text-9xl font-bold text-white text-center relative top-[80px] opacity-10'>PORTFOLIO</p>
                    <div className='text-center relative'>
                        <p className="text-white text-4xl font-semibold">
                            My Work
                        </p>
                        <div className='flex pt-10 text-white'>
                            <div className='text-start px-10 w-[50%]'>
                                <h2 className='text-2xl font-semibold mb-5'>My Projects</h2>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    decorationColor="indigo"
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
                                    decorationColor="indigo"
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
                            <div className='text-start px-10 w-[50%]'>
                                <h2 className='text-2xl font-semibold mb-5'>My Certificates</h2>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    decorationColor="indigo"
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>2023</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">FULL STACK JAVA</p>
                                    <List className='list-disc'>
                                        <ListItem className='flex flex-col items-start px-5'>
                                            Symbiosis Skills & Professional University and Capgemini 2023
                                        </ListItem>
                                    </List>
                                </Card>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    decorationColor="indigo"
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
            </div>
        </>
    )
}
