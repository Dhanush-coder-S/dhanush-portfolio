import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[#070B18]">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;