'use client';

import React, { useState } from 'react';

export default function WorkSyncDashboard() {
  // Placeholder table data based on wireframe numbering
  const tableData = [
    { id: 1, name: 'Employee One', designation: 'Web Developer' },
    { id: 2, name: 'Employee Two', designation: 'UI UX Designer' },
    { id: 3, name: 'Employee Three', designation: 'App Developer' },
    { id: 4, name: 'Employee Four', designation: 'Tester' },
    { id: 5, name: 'Employee Five', designation: 'Web Developer' },
    { id: 6, name: 'Employee Six', designation: 'UI UX Designer' },
    { id: 7, name: 'Employee Seven', designation: 'Tester' },
  ];

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

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

  return (
    <>
      {/* Main Content Area */}
      <section className="dashboardContent">
        <header className="header">
          <h1>My Teams</h1>
        </header>

        {/* Top Stat Boxes */}
        <div className="statsGrid">
          <div className="statCard">
            <h4>Total Employee</h4>
            <p>150</p>
          </div>
          <div className="statCard">
            <h4>Approved</h4>
            <p>120</p>
          </div>
          <div className="statCard">
            <h4>UnApproved</h4>
            <p>30</p>
          </div>
        </div>

        {/* Budget and Filter Row */}
        <div className="controlsRow">
          <div className="budget">
            Total Budget = <span>$500,000</span>
          </div>
        </div>

        {/* Main Data Table with Search and Filter */}
        <div className="tableContainer">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2>Current Employees</h2>
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
                {designationOptions.slice(1).map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <table className="dataTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Employee Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.designation}</td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', color: '#e2ca67' }}>No employees found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Embedded CSS for Dashboard specificity */}
      <style jsx>{`
      .dashboardContent {
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 32px;
      }

      .header h1 {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
      }

      .statsGrid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .statCard {
        background-color: #121824;
        border: 1px solid #1f2937;
        border-radius: 16px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        position: relative;
        overflow: hidden;
      }

      .statCard::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background-color: #e2ca67;
      }

      .statCard h4 {
        margin: 0;
        font-size: 14px;
        color: #9ca3af;
        font-weight: 500;
      }

      .statCard p {
        margin: 0;
        font-size: 32px;
        font-weight: 700;
        color: #ffffff;
      }

      .controlsRow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #121824;
        padding: 16px 24px;
        border-radius: 12px;
        border: 1px solid #1f2937;
      }

      .budget {
        font-size: 18px;
        font-weight: 500;
      }

      .budget span {
        color: #e2ca67;
        font-weight: 700;
      }

      .tableContainer {
        background-color: #121824;
        border: 1px solid #1f2937;
        border-radius: 16px;
        padding: 24px;
      }

      .tableContainer h2 {
        margin: 0 0 20px 0;
        font-size: 18px;
        color: #e2ca67;
      }

      .dataTable {
        width: 100%;
        border-collapse: collapse;
      }

      .dataTable th, .dataTable td {
        padding: 16px;
        text-align: left;
        border-bottom: 1px solid #1f2937;
      }

      .dataTable th {
        color: #9ca3af;
        font-size: 14px;
        font-weight: 500;
      }

      .dataTable td {
        font-size: 14px;
      }

      .dataTable tr:last-child td {
        border-bottom: none;
      }
    `}</style>
    </>
  );
}
