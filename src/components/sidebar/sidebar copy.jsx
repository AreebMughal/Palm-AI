import React from 'react';
import { SvgDashboardIcon, SvgNotificationIcon, SvgPeopleIcon, SvgSettingIcon, SvgLogoutIcon, SvgBlockIcon, SvgPieChartIcon, SvgReportIcon } from '../../style/svgIcons';
import logo from '../../logo.png';

const Sidebar = () => {
    return (
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
                <div className="flex items-center justify-center h-16 py-14 font-medium text-2xl mx-4">
                    <img src={logo} alt='Logo' className='w-3/4' />
                </div>
                <div className='py-3 bg-green-500 mx-5 text-center text-white font-medium text-base rounded-md'>
                    + New Research
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow scrollbar-hide">
                    <ul className="flex flex-col py-4 space-y-1">
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-md font-medium tracking-wide text-gray-400">Menu</div>
                            </div>
                        </li>
                        <li>
                            <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4 ">
                                    {SvgBlockIcon}
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Library</span>
                            </span>
                        </li>
                        <li>
                            <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4 ">
                                    {SvgPieChartIcon}
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Search</span>
                            </span>
                        </li>
                        <li>
                            <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4 ">
                                    {SvgReportIcon}
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Report</span>
                                <span className="px-3 py-0.5 ml-auto text-xs font-medium tracking-wide text-white bg-green-500 rounded-md">4</span>
                            </span>
                        </li>
                        <li>
                            <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4 ">
                                    {SvgPeopleIcon}
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Team</span>
                                {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span> */}
                            </span>
                        </li>
                        <li>
                            <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4 ">
                                    {SvgNotificationIcon}
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                                <span className="px-3 py-0.5 ml-auto text-xs font-medium tracking-wide text-white bg-green-500 rounded-md">4</span>
                            </span>
                        </li>
                        <li>
                            <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-4 ">
                                    {SvgSettingIcon}
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                            </span>
                        </li>

                        <div className='border-b border-gray-300' style={{ marginBottom: '1rem' }}></div>
                        <div className='mx-5 py-1 mt-10 bg-gray-200 grid place-items-center text-black font-medium text-base rounded-md hover:bg-gray-300'>
                            <span className='flex'>
                                <span className="inline-flex justify-center items-center">
                                    {SvgLogoutIcon}
                                </span>
                                <span className='ml-2'>
                                    Logout
                                </span>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div >

    );
}

// export default Sidebar;
