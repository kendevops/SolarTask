import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen bg-white md:bg-primary">
      <Sidebar />
      <main className="w-full flex flex-col">
        <TopBar />
        <div className="flex-1 p-5 md:px-10 md:py-5 overflow-y-auto hide-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
