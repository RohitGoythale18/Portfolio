import React from 'react';
import { Badge, Card, List, ListItem } from '@tremor/react';

export default function Resume() {
    return (
        <>
            <div className='h-[100vh]'>
                <div className='bg-[#212529]'>
                    <p className='text-9xl font-bold text-white text-center relative top-[80px] opacity-10'>SUMMARY</p>
                    <div className='text-center relative'>
                        <p className="text-white text-4xl font-semibold pt-0">
                            Resume
                        </p>
                        <div className='flex pt-10 text-white'>
                            <div className='text-start px-10 w-[50%]'>
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

                            <div className='text-start px-10 w-[50%]'>
                                <h2 className='text-2xl font-semibold mb-5'>My Internships</h2>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>10th Jan - 10th Apr 2024</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">SLASH MARK</p>
                                    <List className='list-disc'>
                                        <ListItem className='flex flex-col items-start px-5'>
                                            <li>Create a Clone of Discord.com landing page.</li>
                                            <li>Developed an own portfolio website.</li>
                                            <li>Developed a Weather Forecasting app.</li>
                                        </ListItem>
                                    </List>
                                </Card>
                                <Card
                                    className="mx-auto max-w-[100%] rounded-lg my-5"
                                    decoration="top"
                                    style={{ borderTopColor: '#20c997' }}
                                >
                                    <Badge className='bg-[#20c997] rounded-md'>5th Feb - 5th Mar 2024</Badge>
                                    <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold mt-4">PLACEMENT DOST</p>
                                    <List className='list-disc'>
                                        <ListItem className='flex flex-col items-start px-5'>
                                            <li>Developed an E-Commerce website using MERN.</li>
                                            <li>Build a web-based Task Management Application.</li>
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
