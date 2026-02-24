
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TaskManagementEmployees() {
	// Employee data
	const tableData = [
		{ id: 1, name: 'Employee One', designation: 'Web Developer' },
		{ id: 2, name: 'Employee Two', designation: 'UI UX Designer' },
		{ id: 3, name: 'Employee Three', designation: 'App Developer' },
		{ id: 4, name: 'Employee Four', designation: 'Tester' },
		{ id: 5, name: 'Employee Five', designation: 'Web Developer' },
		{ id: 6, name: 'Employee Six', designation: 'UI UX Designer' },
		{ id: 7, name: 'Employee Seven', designation: 'Tester' },
	];

	const router = useRouter();
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('');
	const [selectedIds, setSelectedIds] = useState<number[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [taskData, setTaskData] = useState({ title: '', details: '', comment: '' });

	const designationOptions = [
		'',
		'Web Developer',
		'UI UX Designer',
		'App Developer',
		'Tester',
	];


	const filteredData = tableData.filter(row => {
		const matchesSearch = row.name.toLowerCase().includes(search.toLowerCase());
		const matchesFilter = filter ? row.designation === filter : true;
		return matchesSearch && matchesFilter;
	});

	const toggleSelectAll = () => {
		if (selectedIds.length === filteredData.length) {
			setSelectedIds([]);
		} else {
			setSelectedIds(filteredData.map(row => row.id));
		}
	};

	const toggleSelect = (id: number) => {
		setSelectedIds(prev =>
			prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
		);
	};

	const handleAssignTask = () => {
		if (selectedIds.length === 0) {
			alert('Please select at least one employee.');
			return;
		}
		setIsModalOpen(true);
	};

	

	return (
		<div style={{ maxWidth: 900, margin: '40px auto', background: '#121824', borderRadius: 16, padding: 24, border: '1px solid #1f2937' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
				<h2 style={{ color: '#e2ca67', margin: 0 }}>Current Employees</h2>
				<div style={{ display: 'flex', gap: 12 }}>
					<input
						type="text"
						placeholder="Search employees..."
						value={search}
						onChange={e => setSearch(e.target.value)}
						style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e2ca67', background: '#121824', color: '#fff', outline: 'none' }}
					/>
					<select
						value={filter}
						onChange={e => setFilter(e.target.value)}
						style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e2ca67', background: '#121824', color: '#fff', outline: 'none' }}
					>
						<option value="">All Roles</option>
						{designationOptions.filter(option => option).map(option => (
							<option key={option} value={option}>{option}</option>
						))}
					</select>
				</div>
			</div>
			<table style={{ width: '100%', borderCollapse: 'collapse' }}>
				<thead>
					<tr>
						<th style={{ color: '#9ca3af', fontSize: 14, fontWeight: 500, padding: 16, textAlign: 'left', borderBottom: '1px solid #1f2937', width: 40 }}>
							<input
								type="checkbox"
								checked={filteredData.length > 0 && selectedIds.length === filteredData.length}
								onChange={toggleSelectAll}
								style={{ cursor: 'pointer' }}
							/>
						</th>
						<th style={{ color: '#9ca3af', fontSize: 14, fontWeight: 500, padding: 16, textAlign: 'left', borderBottom: '1px solid #1f2937' }}>#</th>
						<th style={{ color: '#9ca3af', fontSize: 14, fontWeight: 500, padding: 16, textAlign: 'left', borderBottom: '1px solid #1f2937' }}>Employee Name</th>
						<th style={{ color: '#9ca3af', fontSize: 14, fontWeight: 500, padding: 16, textAlign: 'left', borderBottom: '1px solid #1f2937' }}>Designation</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((row) => (
						<tr key={row.id} style={{ background: selectedIds.includes(row.id) ? '#1e293b' : 'transparent' }}>
							<td style={{ fontSize: 14, padding: 16, borderBottom: '1px solid #1f2937' }}>
								<input
									type="checkbox"
									checked={selectedIds.includes(row.id)}
									onChange={() => toggleSelect(row.id)}
									style={{ cursor: 'pointer' }}
								/>
							</td>
							<td style={{ fontSize: 14, padding: 16, borderBottom: '1px solid #1f2937', color: '#fff' }}>{row.id}</td>
							<td style={{ fontSize: 14, padding: 16, borderBottom: '1px solid #1f2937', color: '#fff' }}>{row.name}</td>
							<td style={{ fontSize: 14, padding: 16, borderBottom: '1px solid #1f2937', color: '#fff' }}>{row.designation}</td>
						</tr>
					))}
					{filteredData.length === 0 && (
						<tr>
							<td colSpan={4} style={{ textAlign: 'center', color: '#e2ca67', padding: 16 }}>No employees found.</td>
						</tr>
					)}
				</tbody>
			</table>
			<div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
				<button
					style={{
						padding: '12px 24px',
						borderRadius: 8,
						border: 'none',
						background: 'linear-gradient(135deg, #fde047, #a16207)',
						color: '#000',
						fontWeight: 700,
						fontSize: 16,
						cursor: 'pointer',
						boxShadow: '0 4px 14px 0 rgba(234, 179, 8, 0.39)',
						transition: 'transform 0.2s',
					}}
					onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
					onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
					onClick={handleAssignTask}
				>
					Assign Task
				</button>
			</div>

			{isModalOpen && (
				<div style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0,0,0,0.8)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					zIndex: 1000,
					backdropFilter: 'blur(4px)'
				}}>
					<div style={{
						backgroundColor: '#121824',
						padding: '32px',
						borderRadius: '16px',
						width: '400px',
						border: '1px solid #1f2937',
						display: 'flex',
						flexDirection: 'column',
						gap: '20px'
					}}>
						<h2 style={{ color: '#e2ca67', margin: 0, fontSize: '24px' }}>Assign New Task</h2>

						<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
							<label style={{ color: '#9ca3af', fontSize: '14px' }}>Task Title</label>
							<input
								type="text"
								placeholder="Enter title"
								value={taskData.title}
								onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
								style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #1f2937', background: '#0b101a', color: '#fff', outline: 'none' }}
							/>
						</div>

						<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
							<label style={{ color: '#9ca3af', fontSize: '14px' }}>Details</label>
							<textarea
								placeholder="Enter task details"
								value={taskData.details}
								onChange={(e) => setTaskData({ ...taskData, details: e.target.value })}
								style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #1f2937', background: '#0b101a', color: '#fff', outline: 'none', minHeight: '80px', resize: 'vertical' }}
							/>
						</div>

						<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
							<label style={{ color: '#9ca3af', fontSize: '14px' }}>Comment</label>
							<input
								type="text"
								placeholder="Enter comment"
								value={taskData.comment}
								onChange={(e) => setTaskData({ ...taskData, comment: e.target.value })}
								style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #1f2937', background: '#0b101a', color: '#fff', outline: 'none' }}
							/>
						</div>

						<div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
							<button
								onClick={() => {
									setIsModalOpen(false)
								
								}}
								style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #1f2937', background: 'transparent', color: '#9ca3af', cursor: 'pointer', fontWeight: 600 }}
							>
								Cancel
							</button>
							<button
								onClick={() => {
									setIsModalOpen(false)
									router.push('/main/TaskManagement/1')

								}}
								style={{
									flex: 1,
									padding: '12px',
									borderRadius: '8px',
									border: 'none',
									background: 'linear-gradient(135deg, #fde047, #a16207)',
									color: '#000',
									cursor: 'pointer',
									fontWeight: 700
								}}
							>
								Confirm
							</button>
						</div>
					</div>
				</div>
			)
			}
		</div >
	);
}
