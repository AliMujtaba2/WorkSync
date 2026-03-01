"use client";

import React, { useState } from 'react';

export default function OfficeSettings() {
    const [locations, setLocations] = useState(["Studio 93 - Valencia", "Studio 93 - Gulberg"]);
    const [ips, setIps] = useState(["192.168.18.2"]);

    const [locationInput, setLocationInput] = useState('');
    const [ipInput, setIpInput] = useState('');

    const handleLocationKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && locationInput.trim()) {
            e.preventDefault();
            if (!locations.includes(locationInput.trim())) {
                setLocations([...locations, locationInput.trim()]);
            }
            setLocationInput('');
        }
    };

    const removeLocation = (idxToRemove: number) => {
        setLocations(locations.filter((_, idx) => idx !== idxToRemove));
    };

    const updateLocation = (idxToUpdate: number, newVal: string) => {
        const newLocs = [...locations];
        newLocs[idxToUpdate] = newVal;
        setLocations(newLocs);
    };

    const handleLocBlur = (idx: number, val: string) => {
        if (!val.trim()) {
            removeLocation(idx);
        }
    };

    const addIp = () => {
        if (ipInput.trim() && !ips.includes(ipInput.trim())) {
            setIps([...ips, ipInput.trim()]);
        }
        setIpInput('');
    };

    const handleIpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && ipInput.trim()) {
            e.preventDefault();
            addIp();
        }
    };

    const removeIp = (idxToRemove: number) => {
        setIps(ips.filter((_, idx) => idx !== idxToRemove));
    };

    const updateIp = (idxToUpdate: number, newVal: string) => {
        const newIps = [...ips];
        newIps[idxToUpdate] = newVal;
        setIps(newIps);
    };

    const handleIpBlur = (idx: number, val: string) => {
        if (!val.trim()) {
            removeIp(idx);
        }
    };

    return (
        // Removed the background colors; making it w-full to fill your existing container
        <div className="w-full h-full p-6 lg:p-10 font-sans text-gray-200">

            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Office Settings</h1>
                <div className="h-[2px] w-16 bg-[#FBBF24] rounded-full"></div>
            </div>

            {/* Two-Column Web Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* Left Column: Location & IPs */}
                <div className="space-y-10">

                    {/* Section: Location */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-6">Location:</h2>

                        {/* Office Name Input */}
                        <div className="relative border border-gray-600 hover:border-gray-400 focus-within:border-[#FBBF24] transition-colors rounded-lg p-3.5 mb-5">
                            {/* Note: Update 'bg-[#0d121c]' below to match your exact dashboard background hex so the line hides perfectly */}
                            <label className="absolute -top-3 left-3 bg-[#0d121c] px-2 text-sm text-gray-300">
                                Office Name
                            </label>
                            <input
                                type="text"
                                placeholder="Add office and press Enter"
                                value={locationInput}
                                onChange={(e) => setLocationInput(e.target.value)}
                                onKeyDown={handleLocationKeyDown}
                                className="w-full bg-transparent outline-none text-white placeholder-gray-600"
                            />
                        </div>

                        {/* Location Tags */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {locations.map((loc, idx) => (
                                <div key={idx} className="flex items-center space-x-2 border border-gray-600 rounded-full px-4 py-1.5 text-sm text-gray-300 bg-black/20 focus-within:ring-1 focus-within:ring-[#FBBF24]">
                                    <input
                                        type="text"
                                        value={loc}
                                        onChange={(e) => updateLocation(idx, e.target.value)}
                                        onBlur={(e) => handleLocBlur(idx, e.target.value)}
                                        className="bg-transparent outline-none text-gray-300 min-w-[30px] p-0 border-none focus:text-white"
                                        style={{ width: `${Math.max(1, loc.length)}ch` }}
                                    />
                                    <button onClick={() => removeLocation(idx)} className="text-[#FBBF24] hover:text-yellow-300 transition-colors">
                                        <XIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Radius Input */}
                        <div className="relative border border-gray-600 hover:border-gray-400 focus-within:border-[#FBBF24] transition-colors rounded-lg p-3.5">
                            <label className="absolute -top-3 left-3 bg-[#0d121c] px-2 text-sm text-gray-300">
                                Radius (meters)
                            </label>
                            <input
                                type="text"
                                defaultValue="20.00"
                                className="w-full bg-transparent outline-none text-white placeholder-gray-600"
                            />
                        </div>
                    </section>

                    {/* Section: Configure Wi-Fi IPs */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-6">Configure Wi-Fi IPs:</h2>

                        <div className="relative border border-gray-600 hover:border-gray-400 focus-within:border-[#FBBF24] transition-colors rounded-lg p-3.5 mb-5 flex justify-between items-center">
                            <label className="absolute -top-3 left-3 bg-[#0d121c] px-2 text-sm text-gray-300">
                                Add New IP Address
                            </label>
                            <input
                                type="text"
                                placeholder="New IP Address"
                                value={ipInput}
                                onChange={(e) => setIpInput(e.target.value)}
                                onKeyDown={handleIpKeyDown}
                                className="w-full bg-transparent outline-none text-white placeholder-gray-600 pr-10"
                            />
                            <button onClick={addIp} className="text-black bg-[#FBBF24] hover:bg-yellow-400 rounded-sm p-0.5 absolute right-3 transition-colors">
                                <PlusIcon className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {ips.map((ip, idx) => (
                                <div key={idx} className="flex items-center space-x-2 border border-gray-600 rounded-full px-4 py-1.5 text-sm text-gray-300 bg-black/20 focus-within:ring-1 focus-within:ring-[#FBBF24]">
                                    <input
                                        type="text"
                                        value={ip}
                                        onChange={(e) => updateIp(idx, e.target.value)}
                                        onBlur={(e) => handleIpBlur(idx, e.target.value)}
                                        className="bg-transparent outline-none text-gray-300 min-w-[30px] p-0 border-none focus:text-white"
                                        style={{ width: `${Math.max(1, ip.length)}ch` }}
                                    />
                                    <button onClick={() => removeIp(idx)} className="text-[#FBBF24] hover:text-yellow-300 transition-colors">
                                        <XIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Time Settings */}
                <div className="space-y-10">

                    {/* Section: Office Hours */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">Office Hours:</h2>
                        <div className="space-y-3">
                            <TimeBlock icon={<ClockIcon />} label="Office Start Time" time="10:00 AM" />
                            <TimeBlock icon={<ClockIcon />} label="Office End Time" time="07:00 PM" />
                        </div>
                    </section>

                    {/* Section: Break Time */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">Break Time:</h2>
                        <div className="space-y-3">
                            <TimeBlock icon={<CoffeeIcon />} label="Break Start Time" time="02:00 PM" />
                            <TimeBlock icon={<CoffeeIcon />} label="Break End Time" time="03:00 PM" />
                        </div>
                    </section>

                    {/* Section: Friday Break Time */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">Friday Break Time:</h2>
                        <div className="space-y-3">
                            <TimeBlock icon={<MosqueIcon />} label="Break Start Time" time="01:00 PM" />
                            <TimeBlock icon={<CoffeeIcon />} label="Break End Time" time="03:00 PM" />
                        </div>
                    </section>

                    {/* Submit Button (Aligned to bottom right for web layout) */}
                    <div className="pt-8 flex justify-end">
                        <button className="w-full lg:w-auto px-12 py-3.5 bg-gradient-to-r from-[#d9b85c] to-[#a38a3d] hover:from-[#E5C158] hover:to-[#b39845] text-black font-semibold text-lg rounded-full shadow-lg transition-all duration-300">
                            Save Changes
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

/* --- Reusable Components & Icons --- */

function TimeBlock({ icon, label, time }: { icon: React.ReactNode; label: string; time: string }) {
    return (
        <div className="flex items-center justify-between border border-gray-600 hover:border-gray-400 bg-black/10 hover:bg-black/30 transition-colors rounded-xl p-4 cursor-pointer group">
            <div className="flex items-center space-x-4">
                <div className="text-gray-300 group-hover:text-white transition-colors">
                    {icon}
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400">{label}</span>
                    <span className="text-sm font-semibold text-white mt-0.5">{time}</span>
                </div>
            </div>
            {/* <ChevronRightIcon className="w-5 h-5 text-gray-500 group-hover:text-gray-300" /> */}
        </div>
    );
}

const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const CoffeeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
);

const MosqueIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l-3 5h6z" />
        <path d="M9 7v15H3V12l3-3" />
        <path d="M15 7v15h6V12l-3-3" />
        <path d="M9 22h6" />
        <path d="M12 10v12" />
    </svg>
);

const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const PlusIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);