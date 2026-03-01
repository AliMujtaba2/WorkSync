"use client";

import React, { useState } from 'react';

// Dummy Attendance Data for April 2026
const attendanceData = [
    { id: 1, date: "01", day: "Wed", checkIn: "10:00 am", checkOut: "07:00 pm", status: "Present", type: "work" },
    { id: 2, date: "02", day: "Thu", checkIn: "11:00 am", checkOut: "07:00 pm", status: "Late", type: "late" },
    { id: 3, isWeekend: true, dateRange: "04 Saturday & 05 Sunday" },
    { id: 4, date: "06", day: "Mon", checkIn: "--:--", checkOut: "--:--", status: "Absent", type: "absent" },
    { id: 5, date: "07", day: "Tue", checkIn: "10:00 am", checkOut: "05:30 pm", status: "Early Leave", type: "late" },
    { id: 6, date: "08", day: "Wed", checkIn: "10:00 am", checkOut: "07:00 pm", status: "08:00 Hr's", type: "work" },
    { id: 7, date: "09", day: "Thu", checkIn: "10:00 am", checkOut: "08:00 pm", status: "09:00 Hr's", type: "work" },
];

export default function AttendanceHistory() {
    const [currentMonth, setCurrentMonth] = useState("April, 2026");

    return (
        <div className="w-full h-full p-6 lg:p-10 font-sans text-gray-200">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-2">Attendance</h2>
                    <div className="h-[2px] w-16 bg-[#FBBF24] rounded-full"></div>
                </div>

                <button className="bg-gradient-to-r from-[#d9b85c] to-[#a38a3d] hover:from-[#E5C158] hover:to-[#b39845] text-black font-bold py-2 px-6 rounded-full flex items-center space-x-2 shadow-lg transition-all">
                    <FileIcon className="w-4 h-4" />
                    <span className="text-sm">Generate Report</span>
                </button>
            </div>

            {/* Month Navigation */}
            <div className="flex items-center justify-center space-x-8 mb-8">
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors border border-gray-700">
                    <ChevronIcon className="w-5 h-5 rotate-180 text-white" />
                </button>
                <span className="text-xl font-bold text-white tracking-wide">{currentMonth}</span>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors border border-gray-700">
                    <ChevronIcon className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Attendance Table */}
            <div className="w-full overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-4 md:grid-cols-5 border-b border-gray-800 pb-4 mb-4 px-4 text-gray-400 font-bold text-sm tracking-widest uppercase">
                    <div>Date</div>
                    <div className="text-center">Check In</div>
                    <div className="text-center">Check Out</div>
                    <div className="text-right md:text-center">Status</div>
                    <div className="hidden md:block"></div> {/* Spacer for spread */}
                </div>

                {/* List Content */}
                <div className="space-y-4">
                    {attendanceData.map((item) => (
                        item.isWeekend ? (
                            /* Weekend Divider Row */
                            <div key={item.id} className="w-full bg-gradient-to-r from-[#d9b85c]/80 to-[#a38a3d]/80 py-3 rounded-lg text-center text-black font-bold shadow-md">
                                Weekend: {item.dateRange}
                            </div>
                        ) : (
                            /* Standard Attendance Row */
                            <div key={item.id} className="grid grid-cols-4 md:grid-cols-5 items-center p-4 bg-black/10 hover:bg-black/30 rounded-xl transition-all border border-transparent hover:border-gray-800 group">

                                {/* Date Box */}
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white rounded-lg p-2 w-12 h-12 flex flex-col items-center justify-center text-black shadow-inner">
                                        <span className="text-lg font-bold leading-none">{item.date}</span>
                                        <span className="text-[10px] font-semibold uppercase">{item.day}</span>
                                    </div>
                                </div>

                                {/* Check In */}
                                <div className="flex items-center justify-center space-x-2">
                                    <ArrowIcon className="w-4 h-4 text-green-500 rotate-135" />
                                    <span className={`text-sm font-medium ${item.checkIn === "--:--" ? "text-red-500" : "text-green-500/80"}`}>
                                        {item.checkIn}
                                    </span>
                                </div>

                                {/* Check Out */}
                                <div className="flex items-center justify-center space-x-2">
                                    <ArrowIcon className="w-4 h-4 text-green-500 -rotate-45" />
                                    <span className={`text-sm font-medium ${item.checkOut === "--:--" ? "text-red-500" : "text-green-500/80"}`}>
                                        {item.checkOut}
                                    </span>
                                </div>

                                {/* Status */}
                                <div className="text-right md:text-center">
                                    <span className={`text-sm font-bold uppercase tracking-tight ${item.type === 'work' ? 'text-green-500' :
                                        item.type === 'late' ? 'text-yellow-500' :
                                            'text-red-600'
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>

                                {/* Desktop Decorative Visual */}
                                <div className="hidden md:flex justify-end pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-2 h-2 rounded-full bg-[#FBBF24]"></div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

/* --- Icons --- */

const FileIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
);