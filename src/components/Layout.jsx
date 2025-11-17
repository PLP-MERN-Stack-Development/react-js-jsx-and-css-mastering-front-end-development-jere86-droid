import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
