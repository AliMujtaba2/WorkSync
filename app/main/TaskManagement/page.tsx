"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Dummy data
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

	// Get current date to compare deadlines
	const currentDate = new Date("2026-02-26");

	const filteredTasks = initialTasks.filter((task) => {
		if (activeTab === "All") return true;
		return task.status.toLowerCase() === activeTab.toLowerCase();
	});

	return (
		<div className="min-h-screen bg-[#0d121c] p-8 font-sans text-gray-200">
			<div className="max-w-5xl mx-auto bg-[#141b2a] rounded-xl p-6 shadow-lg border border-gray-800">

				{/* Header, Tabs & Action Button */}
				<div className="flex justify-between items-end border-b border-gray-700 pb-4 mb-6">

					{/* Left Side: Title and Tabs */}
					<div className="flex flex-col space-y-5">
						<h2 className="text-2xl font-semibold text-white">Assigned Tasks</h2>
						<div className="flex space-x-6">
							{tabs.map((tab) => (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`pb-2 text-sm font-medium transition-colors duration-200 relative ${activeTab === tab
										? "text-[#FBBF24]"
										: "text-white hover:text-gray-300"
										}`}
								>
									{tab}
									{activeTab === tab && (
										<span className="absolute left-0 bottom-[-17px] w-full h-[2px] bg-[#FBBF24] rounded-t-md"></span>
									)}
								</button>
							))}
						</div>
					</div>

					{/* Right Side: Create Task Button */}
					<button className="bg-[#FBBF24] hover:bg-yellow-500 text-[#0d121c] font-bold py-2.5 px-5 rounded-lg shadow-md transition-all duration-200 mb-1 flex items-center space-x-2"
						onClick={() => router.push('/main/TaskManagement/createTask')}
					>
						<span>+</span>
						<span>Create New Task</span>
					</button>

				</div>

				{/* Task List */}
				<div className="flex flex-col space-y-4">
					{filteredTasks.length > 0 ? (
						filteredTasks.map((task) => {
							const taskDeadline = new Date(task.deadline);
							const isOverdue = taskDeadline < currentDate;

							return (
								<div
									key={task.id}
									className="flex justify-between items-center p-5 bg-[#1a2333] hover:bg-[#1e293b] transition-colors rounded-lg border border-gray-700/50"
								>
									<div className="flex flex-col space-y-2">
										<h3 className="text-md font-semibold text-blue-400 hover:underline cursor-pointer">
											{task.title}
										</h3>
										<p className="text-sm text-gray-400">
											{task.description}
										</p>
										<div className="text-xs text-gray-500 flex items-center mt-1">
											<span className="font-medium mr-2 text-gray-400">Assigned to:</span>
											{task.employees.join(", ")}
										</div>
									</div>

									<div className="flex flex-col items-end min-w-[120px]">
										<span className={`font-bold text-sm tracking-wide mb-2 uppercase ${task.status.toLowerCase() === 'todo' ? 'text-red-500' :
												task.status.toLowerCase() === 'inprogress' ? 'text-yellow-500' :
													task.status.toLowerCase() === 'pending' ? 'text-blue-500' :
														task.status.toLowerCase() === 'approved' ? 'text-green-500' :
															'text-[#FBBF24]'
											}`}>
											{task.status}
										</span>
										<span
											className={`text-xs font-medium ${isOverdue ? "text-red-500" : "text-gray-400"
												}`}
										>
											Deadline: {task.deadline}
										</span>
									</div>
								</div>
							);
						})
					) : (
						<div className="text-center py-10 text-gray-500">
							No tasks found for "{activeTab}".
						</div>
					)}
				</div>
			</div>
		</div>
	);
}