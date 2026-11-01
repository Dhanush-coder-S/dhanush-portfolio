
import React, { Fragment } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-[#070B18]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default RootLayout;
