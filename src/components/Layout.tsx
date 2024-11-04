import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full bg-primary">
      <Sidebar />
      <main className="w-full">
        <TopBar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
