import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Hexagon } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WorkSync",
  description: "WorkSync App",
};

const layoutStyles = `
  .app-bg {
    min-height: 100vh;
    background-color: #0a0f1c;
    font-family: sans-serif;
    position: relative;
    overflow: hidden;
  }

  .hex-group-left {
    position: absolute;
    top: 71px;
    left: 20px;
    width: 175px;
    height: 200px;
    color: #1e293b;
  }

  .hex-item {
    position: absolute;
    transform: rotate(-90deg);
  }

  .hex-item-1 { top: 5px;   left: 0px;  }
  .hex-item-2 { top: 50px;  left: 75px; }
  .hex-item-3 { top: 100px; left: 0px;  }

  .hex-top-right {
    position: absolute;
    top: 0;
    right: 0;
    color: rgba(30, 41, 59, 0.2);
    transform: translate(33%, -25%);
  }

  .hex-mid-right {
    position: absolute;
    top: 160px;
    right: 0;
    color: rgba(30, 41, 59, 0.2);
    transform: translateX(25%);
  }

  .app-content {
    position: relative;
    z-index: 10;
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{layoutStyles}</style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="app-bg">
          {/* Decorative Hexagons — left (Figma stagger) */}
          <div className="hex-group-left">
            <Hexagon size={100} fill="currentColor" strokeWidth={0} className="hex-item hex-item-1" />
            <Hexagon size={100} fill="currentColor" strokeWidth={0} className="hex-item hex-item-2" />
            <Hexagon size={100} fill="currentColor" strokeWidth={0} className="hex-item hex-item-3" />
          </div>

          {/* Decorative Hexagons — right */}
          <div className="hex-top-right">
            <Hexagon size={300} fill="currentColor" />
          </div>
          <div className="hex-mid-right">
            <Hexagon size={250} fill="currentColor" />
          </div>

          {/* Page Content */}
          <div className="app-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
