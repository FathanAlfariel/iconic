import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Heading_Img from "./components/Heading_Img";

const Layout = () => {
  return (
    <>
      <main className="p-2 md:p-3 w-full h-full">
        {/* Head Content */}
        <div className="grid grid-cols-12 gap-2 md:gap-3">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 h-full">
            <div className="h-full flex flex-col justify-center items-start w-full p-8 lg:p-14 rounded-4xl bg-gray-50">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-start mb-7">
                ICONIC
              </h1>

              <h4 className="text-base md:text-lg lg:text-xl font-normal text-start">
                Get to know the Capstone Design Competition 2025 in depth – from
                innovation guides and tools to reusable design components and
                the implementation of technology and engineering-based projects.
              </h4>
            </div>
          </div>

          <div className="hidden md:block col-span-12 md:col-span-6 lg:col-span-3">
            {/* FT LOGO */}
            <div className="w-full min-h-80 h-80 md:min-h-full md:h-full lg:min-h-[400px] lg:h-[400px]">
              <img
                src="logo_ft.png"
                alt="ft_logo"
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-12 lg:col-span-4">
            <Heading_Img />
          </div>
        </div>

        {/* Main Content */}
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-8 py-6 bg-gray-200 text-black text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ICONIC Capstone Design
            Competition. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
