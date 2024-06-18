import React from 'react';
import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function HomeLayout() {
    return (
        <>
            <div className='flex h-max--[100vh]'>
                <Sidebar />
                <div className='w-[100%] min-h-screen overflow-auto'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
