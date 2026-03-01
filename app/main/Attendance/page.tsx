"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Dummy data with attendance percentages
const initialEmployees = [
    { id: 1, name: "Employee One", designation: "Frontend Developer", attendance: 95 },
    { id: 2, name: "Employee Two", designation: "UI/UX Designer", attendance: 88 },
    { id: 3, name: "Employee Three", designation: "Project Manager", attendance: 82 },
    { id: 4, name: "Employee Four", designation: "Backend Developer", attendance: 93 },
    { id: 5, name: "Employee Five", designation: "QA Engineer", attendance: 86 },
    { id: 6, name: "Employee Six", designation: "DevOps Engineer", attendance: 79 },
];

const designationOptions = ["All Roles", "Frontend Developer", "UI/UX Designer", "Project Manager", "Backend Developer", "QA Engineer", "DevOps Engineer"];

export default function EmployeeList() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const router = useRouter();

    // Logic for attendance color coding
    const getAttendanceStyle = (pct: number) => {
        if (pct >= 92) return "text-green-500 font-bold";
        if (pct >= 85) return "text-yellow-500 font-bold";
        return "text-red-500 font-bold";
    };

    const filteredData = initialEmployees.filter((emp) => {
        const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "" || filter === "All Roles" || emp.designation === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="w-full h-full p-6 lg:p-10 font-sans text-gray-200">

            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-10 gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Current Employees</h2>
                    <div className="h-[2px] w-16 bg-[#FBBF24] rounded-full"></div>
                </div>

                {/* Search and Filter bar */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Search employees..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2.5 rounded-lg border border-[#e2ca67]/50 bg-[#121824] text-white focus:border-[#FBBF24] outline-none transition-all w-full sm:w-64"
                    />
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-4 py-2.5 rounded-lg border border-[#e2ca67]/50 bg-[#121824] text-white focus:border-[#FBBF24] outline-none transition-all cursor-pointer"
                    >
                        {designationOptions.map((option) => (
                            <option key={option} value={option === "All Roles" ? "" : option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Main Data Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-800 bg-black/10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-800 bg-black/20">
                            <th className="p-5 text-sm font-bold text-[#FBBF24] uppercase tracking-wider">#</th>
                            <th className="p-5 text-sm font-bold text-[#FBBF24] uppercase tracking-wider">Employee Name</th>
                            <th className="p-5 text-sm font-bold text-[#FBBF24] uppercase tracking-wider">Designation</th>
                            <th className="p-5 text-sm font-bold text-[#FBBF24] uppercase tracking-wider">Attendance</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                        {filteredData.length > 0 ? (
                            filteredData.map((row) => (
                                <tr
                                    key={row.id}
                                    onClick={() => router.push('/main/Attendance/AttendanceDetail')}
                                    className="hover:bg-white/5 transition-colors group cursor-pointer"
                                >
                                    <td className="p-5 text-gray-400">{row.id}</td>
                                    <td className="p-5 text-white font-medium group-hover:text-[#FBBF24] transition-colors">
                                        {row.name}
                                    </td>
                                    <td className="p-5 text-gray-400">{row.designation}</td>
                                    <td className={`p-5 ${getAttendanceStyle(row.attendance)}`}>
                                        {row.attendance}%
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="p-20 text-center text-gray-500 italic">
                                    No employees found matching your criteria.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}