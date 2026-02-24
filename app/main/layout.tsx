'use client';

import Sidebar from '../../components/Sidebar';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="layout-container">
            <Sidebar />
            <main className="main-content">
                {children}
            </main>

            <style jsx>{`
        .layout-container {
          display: flex;
          min-height: 100vh;
          background-color: transparent;
          color: #ffffff;
        }
        .main-content {
          flex: 1;
          overflow-y: auto;
        }
      `}</style>
        </div>
    );
}
