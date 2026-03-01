"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Dummy data based on the provided context
const initialTasks = [
	{
		id: 1,
		title: "Idemia - Face & ID Capture Testing (Round 75 - All Regions)",
		description: "#521086 - Idemia France - Global Data Capture",
		employees: ["Employee One", "Employee Four"],
		status: "Inprogress",
		deadline: "2026-03-31",
	},
	{
		id: 2,
		title: "Amazon PI - Prime Video & Studios CoreTech Passive and Split",
		description: "#505874 - A Company - Amazon PI - Passive/Split",
		employees: ["Employee Two", "Employee Three"],
		status: "Pending",
		deadline: "2026-04-30",
	},
	{
		id: 3,
		title: "Legacy System Database Migration",
		description: "Migrate user authentication database to the new secure server.",
		employees: ["Employee Five"],
		status: "Todo",
		deadline: "2026-02-20",
	},
	{
		id: 4,
		title: "UI/UX Dashboard Redesign",
		description: "Implement the new dark theme across all dashboard components.",
		employees: ["Employee Six", "Employee Seven"],
		status: "Approved",
		deadline: "2026-02-25",
	}
];

const tabs = ["All", "Todo", "Inprogress", "Pending", "Approved"];

export default function TaskManagement() {
	const [activeTab, setActiveTab] = useState("All");
	const router = useRouter();

	// Get current date to compare deadlines (Current date: 2026-03-02)
	const currentDate = new Date("2026-03-02");

	const filteredTasks = initialTasks.filter((task) => {
		if (activeTab === "All") return true;
		return task.status.toLowerCase() === activeTab.toLowerCase();
	});

	return (
		// Removed bg-[#0d121c] and p-8 wrapper to let it cover the whole screen naturally
		<div className="w-full h-full p-6 lg:p-10 font-sans text-gray-200">

			{/* Header, Tabs & Action Button - Optimized for Full Width */}
			<div className="flex flex-col lg:flex-row justify-between lg:items-end border-b border-gray-700 pb-6 mb-8 gap-6">

				{/* Left Side: Title and Tabs */}
				<div className="flex flex-col space-y-6">
					<div>
						<h2 className="text-3xl font-bold text-white mb-2">Assigned Tasks</h2>
						<div className="h-[2px] w-16 bg-[#FBBF24] rounded-full"></div>
					</div>

					<div className="flex space-x-8 overflow-x-auto scrollbar-hide">
						{tabs.map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`pb-2 text-sm font-semibold transition-all duration-200 relative whitespace-nowrap ${activeTab === tab
										? "text-[#FBBF24]"
										: "text-white hover:text-gray-400"
									}`}
							>
								{tab}
								{activeTab === tab && (
									<span className="absolute left-0 bottom-[-25px] w-full h-[3px] bg-[#FBBF24] rounded-t-md z-10"></span>
								)}
							</button>
						))}
					</div>
				</div>

				{/* Right Side: Create Task Button */}
				<button
					className="bg-[#FBBF24] hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 lg:mb-1"
					onClick={() => router.push('/main/TaskManagement/createTask')}
				>
					<span className="text-xl">+</span>
					<span>Create New Task</span>
				</button>

			</div>

			{/* Task List - Spread layout */}
			<div className="flex flex-col space-y-4">
				{filteredTasks.length > 0 ? (
					filteredTasks.map((task) => {
						const taskDeadline = new Date(task.deadline);
						const isOverdue = taskDeadline < currentDate;

						return (
							<div
								key={task.id}
								className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-black/20 hover:bg-black/40 transition-all duration-300 rounded-xl border border-gray-800 group"
							>
								{/* Task Info */}
								<div className="flex flex-col space-y-2 mb-4 md:mb-0">
									<h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors cursor-pointer">
										{task.title}
									</h3>
									<p className="text-sm text-gray-400 max-w-3xl">
										{task.description}
									</p>
									<div className="flex items-center pt-1">
										<div className="flex -space-x-2 mr-3">
											{/* Placeholder for avatars if needed */}
											<div className="w-6 h-6 rounded-full bg-gray-700 border border-gray-800"></div>
											<div className="w-6 h-6 rounded-full bg-gray-600 border border-gray-800"></div>
										</div>
										<span className="text-xs text-gray-500">
											Assigned to: <span className="text-gray-300 font-medium">{task.employees.join(", ")}</span>
										</span>
									</div>
								</div>

								{/* Status & Deadline */}
								<div className="flex flex-col items-start md:items-end min-w-[150px]">
									<span className="text-[#FBBF24] font-bold text-sm tracking-widest mb-2 uppercase">
										{task.status}
									</span>
									<div className="flex items-center space-x-2">
										<ClockIcon className={`w-4 h-4 ${isOverdue ? "text-red-500" : "text-gray-500"}`} />
										<span
											className={`text-xs font-semibold ${isOverdue ? "text-red-500" : "text-gray-400"
												}`}
										>
											Deadline: {task.deadline}
										</span>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-black/10 rounded-xl border border-dashed border-gray-800">
						<p className="text-lg">No tasks found for "{activeTab}"</p>
					</div>
				)}
			</div>
		</div>
	);
}

// Icon helper
const ClockIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>
);