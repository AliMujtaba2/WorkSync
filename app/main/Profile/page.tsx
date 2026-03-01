"use client";

import React from 'react';

export default function Profile() {
    const menuItems = [
        { title: "Manage profile", icon: <UserIcon /> },
        { title: "Manage Notifications", icon: <BellIcon /> },
        { title: "Privacy Policy", icon: <LockIcon /> },
        { title: "Terms and Condition", icon: <InfoIcon /> },
        { title: "Office Accessories", icon: <BriefcaseIcon /> },
    ];

    return (
        <div className="w-full h-full p-6 lg:p-10 font-sans text-gray-200">

            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Profile</h1>
                {/* Profile Completion Bar */}
                <div className="relative w-full lg:w-1/2 h-3 bg-gray-800 rounded-full mt-4 overflow-hidden border border-gray-700">
                    <div
                        className="absolute top-0 left-0 h-full w-[65%] bg-gradient-to-r from-[#d9b85c] to-[#a38a3d] shadow-[0_0_10px_rgba(217,184,92,0.5)]"
                        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)' }}
                    ></div>
                    <div className="absolute left-[65%] -top-1 w-4 h-4 bg-[#FBBF24] rounded-full border-2 border-gray-900 shadow-sm"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left Section: User Bio */}
                <div className="lg:col-span-4 flex flex-col items-center p-8 bg-black/10 rounded-3xl border border-gray-800/50">
                    <div className="relative group">
                        {/* Profile Image Wrapper */}
                        <div className="w-40 h-40 rounded-full border-4 border-gray-800 p-1 bg-gradient-to-b from-gray-700 to-transparent">
                            <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                                {/* Replace with <img> tag for real user photo */}
                                <UserIcon className="w-20 h-20 text-gray-400" />
                            </div>
                        </div>
                        {/* Camera Edit Button */}
                        <button className="absolute bottom-2 right-2 p-2.5 bg-[#FBBF24] rounded-full text-black hover:bg-yellow-400 transition-transform hover:scale-110 shadow-lg">
                            <CameraIcon className="w-5 h-5" />
                        </button>
                    </div>

                    <h2 className="mt-6 text-3xl font-bold text-white">Melissa Peters</h2>
                    <p className="text-gray-500 font-medium">Administrator</p>

                    <div className="mt-8 w-full border-t border-gray-800 pt-8 space-y-4">
                        <button className="w-full py-3.5 bg-gradient-to-r from-[#d9b85c] to-[#a38a3d] hover:from-[#E5C158] hover:to-[#b39845] text-black font-bold text-lg rounded-full shadow-lg transition-all">
                            Sign Out
                        </button>
                        <button className="w-full py-2 text-gray-500 hover:text-red-500 transition-colors text-sm font-semibold uppercase tracking-widest">
                            Delete account
                        </button>
                    </div>
                </div>

                {/* Right Section: Settings Menu */}
                <div className="lg:col-span-8 bg-black/20 rounded-3xl border border-gray-800 overflow-hidden shadow-xl">
                    <div className="divide-y divide-gray-800">
                        {menuItems.map((item, idx) => (
                            <button
                                key={idx}
                                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors group text-left"
                            >
                                <div className="flex items-center space-x-5">
                                    <div className="p-3 bg-gray-800/50 rounded-xl text-gray-400 group-hover:text-[#FBBF24] transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="text-lg font-medium text-white group-hover:translate-x-1 transition-transform">
                                        {item.title}
                                    </span>
                                </div>
                                <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-300" />
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

/* --- Styled Icons --- */

const UserIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const BellIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
);

const LockIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const InfoIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 00-2.25-2.25H18.75V8.25A2.25 2.25 0 0016.5 6H7.5A2.25 2.25 0 005.25 8.25V11.9h-1.5a2.25 2.25 0 00-2.25 2.25m16.5 0a2.25 2.25 0 01-2.25 2.25H4.875a2.25 2.25 0 01-2.25-2.25M12 16.75a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
    </svg>
);

const CameraIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);