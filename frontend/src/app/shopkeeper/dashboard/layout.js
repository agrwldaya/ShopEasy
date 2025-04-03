"use client";

import { useState } from "react";
import Navbar from "@/components/shopkeeper/Navbar";
import Sidebar from "@/components/shopkeeper/Sidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed for mobile

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Full-width Navbar */}
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Sidebar & Main Content */}
      <div className="flex flex-1">
        {/* Pass Sidebar state */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
