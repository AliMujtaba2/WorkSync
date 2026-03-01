'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'My Teams', href: '/main/Dashboard' },
    { name: 'Task Management', href: '/main/TaskManagement' },
    { name: 'Attendance', href: '/main/Attendance' },
    { name: 'Office Settings', href: '/main/OfficeSettings' },
    { name: 'Scoreboard (future)', href: '#' },
    { name: 'Announcement', href: '#' },
    { name: 'My Profile', href: '/main/Profile' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">WorkSync</div>

      <div className="profileCard">
        <div className="avatar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="profileInfo">
          <h3>Your Name</h3>
          <p>Admin</p>
        </div>
      </div>

      <ul className="navList">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={index}
              className={`navItem ${isActive ? 'active' : ''}`}
            >
              <Link href={item.href} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                <div className="iconPlaceholder">x</div>
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        .sidebar {
          width: 280px;
          background-color: #121824;
          border-right: 1px solid #1f2937;
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #e2ca67; 
          margin-bottom: 32px;
          letter-spacing: 1px;
        }

        .profileCard {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background-color: rgba(226, 202, 103, 0.05);
          border: 1px solid rgba(226, 202, 103, 0.2);
          border-radius: 12px;
          margin-bottom: 32px;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #e2ca67;
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
        }

        .profileInfo h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .profileInfo p {
          margin: 4px 0 0;
          font-size: 12px;
          color: #e2ca67;
        }

        .navList {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .navItem {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          color: #9ca3af;
          transition: all 0.2s ease;
        }

        .navItem:hover, .navItem.active {
          background-color: rgba(226, 202, 103, 0.1);
          color: #e2ca67;
        }

        .iconPlaceholder {
          width: 20px;
          height: 20px;
          border: 1px solid currentColor;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }
      `}</style>
    </aside>
  );
}
