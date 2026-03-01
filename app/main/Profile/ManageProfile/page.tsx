"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function EditProfile() {
    const router = useRouter();

    const profileFields = [
        { label: "Name", value: "Abdul Rehman", type: "text", hasChevron: true },
        { label: "E-Mail", value: "Rishi@gmail.com", type: "email", hasChevron: true },
        { label: "ID Card", value: "Attach Your ID Card", type: "file", hasPaperclip: true },
        { label: "Document", value: "Attach Degree & Documents", type: "file", hasPaperclip: true },
        { label: "Bill", value: "Attach Previous Home Electricity Bill", type: "file", hasPaperclip: true },
        { label: "Password", value: "Reset", type: "action", hasChevron: true, valueColor: "text-[#FBBF24]" },
    ];

    return (
        <div className="w-full h-full p-6 lg:p-10 font-sans text-gray-200">

            {/* Header & Back Button */}
            <div className="flex items-center justify-between mb-10">
                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Manage Profile</h1>
                    <div className="h-[2px] w-16 bg-[#FBBF24] rounded-full"></div>
                </div>

                <button
                    onClick={() => router.back()}
                    className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-[#d9b85c] to-[#a38a3d] rounded-full text-black font-bold shadow-lg hover:scale-105 transition-transform"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    <span>Back</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Left Column: Avatar & Role */}
                <div className="lg:col-span-4 flex flex-col items-center p-10 bg-black/10 rounded-3xl border border-gray-800/50 h-fit">
                    <div className="relative">
                        <div className="w-48 h-48 rounded-full border-4 border-gray-800 p-1 bg-gradient-to-b from-gray-700 to-transparent">
                            <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                                <UserIcon className="w-24 h-24 text-gray-400" />
                            </div>
                        </div>
                        <button className="absolute bottom-3 right-3 p-3 bg-[#FBBF24] rounded-full text-black hover:bg-yellow-400 shadow-xl transition-all">
                            <CameraIcon className="w-6 h-6" />
                        </button>
                    </div>

                    <h2 className="mt-8 text-3xl font-bold text-white text-center">Melissa Peters</h2>
                    <p className="text-gray-500 font-medium text-lg mt-1 uppercase tracking-widest">Role</p>

                    <div className="mt-10 w-full pt-8 border-t border-gray-800">
                        <button className="w-full py-4 bg-gradient-to-r from-[#d9b85c] to-[#a38a3d] hover:from-[#E5C158] hover:to-[#b39845] text-black font-bold text-lg rounded-full shadow-lg">
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* Right Column: Editable Fields & Documents */}
                <div className="lg:col-span-8 bg-black/20 rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
                    <div className="divide-y divide-gray-800">
                        {profileFields.map((field, idx) => (
                            <div
                                key={idx}
                                className="w-full flex items-center justify-between p-7 hover:bg-white/5 transition-colors cursor-pointer group"
                            >
                                <span className="text-lg font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                                    {field.label}
                                </span>

                                <div className="flex items-center space-x-4">
                                    <span className={`text-lg font-semibold ${field.valueColor || "text-white"}`}>
                                        {field.value}
                                    </span>

                                    {field.hasChevron && (
                                        <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-300" />
                                    )}
                                    {field.hasPaperclip && (
                                        <PaperclipIcon className="w-6 h-6 text-gray-500 group-hover:text-[#FBBF24] transition-colors" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

/* --- Profile Specific Icons --- */

const UserIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const CameraIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

const PaperclipIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728l-7.172 7.172a4 4 0 01-5.656-5.656l7.172-7.172a2 2 0 112.828 2.828l-7.172 7.172" />
    </svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);