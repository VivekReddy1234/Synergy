import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import React from "react";

const Layout = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-[#0b1220] text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-[#0a0f1f]">
        <Outlet />
      </div>

    </div>
  );
};

export default Layout;