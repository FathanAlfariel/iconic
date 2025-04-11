import React from "react";
import { Outlet } from "react-router-dom";
import HomeNavigation from "./components/HomeNavigation";
import NavigationBar from "./components/NavigationBar";

const Layout = () => {
  return (
    <>
      <main className="p-2 md:p-3 w-full h-full">
        {/* Head Content */}
        <div className="grid grid-cols-12 gap-2 md:gap-3">
          <div className="col-span-12 md:col-span-8 h-full">
            <div className="h-full flex flex-col justify-center items-start w-full p-8 md:p-14 rounded-4xl bg-gray-50">
              <h1 className="text-6xl md:text-8xl font-semibold text-start mb-6">
                ICONIC
              </h1>

              <h4 className="text-base md:text-2xl font-normal text-start">
                Kenali lebih dalam Capstone Design Competition 2025 – dari
                panduan inovasi dan alat bantu hingga komponen desain yang dapat
                digunakan kembali serta implementasi proyek berbasis teknologi
                dan rekayasa.
              </h4>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            {/* <HomeNavigation /> */}
            <div className="w-full h-[542px]">
              <img
                src="logo_ft.png"
                alt="ft_logo"
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>
          </div>
        </div>

        {/* Navigation Bar - Hanya terlihat saat Head Content tidak terlihat */}
        <div className={`sticky top-0 left-0 max-w-7xl mx-auto`}>
          <NavigationBar />
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
