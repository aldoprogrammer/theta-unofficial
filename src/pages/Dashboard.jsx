import React from 'react';
import { Topbar } from '../components/Topbar';
import { SidebarDefault } from '../components/SidebarDefault';
import { VideoCard } from '../components/VideoCard';

const Dashboard = () => {
    return (
        <div className='flex flex-col'>
            <Topbar />
            <div className='flex'>
            <SidebarDefault />
            <div className='flex flex-col w-full'>
                <div className='grid grid-cols-2 items-center p-4 border-b gap-5 border-blue-gray-200'>
                    <VideoCard />
                    <VideoCard />
                </div>
                <div className='p-4'>
                    <h1 className='text-xl font-semibold text-blue-gray-900'>Dashboard Content</h1>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;