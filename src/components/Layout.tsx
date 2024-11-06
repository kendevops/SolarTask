import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen bg-primary">
      <Sidebar />
      <main className="w-full flex flex-col">
        <TopBar />
        <div className="flex-1 px-10 py-5 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
