import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import HomeNavigation from "./components/HomeNavigation";
import NavigationBar from "./components/NavigationBar";

const Layout = () => {
  // Ref untuk Head Content
  const headContentRef = useRef(null);

  // State untuk melacak visibilitas Head Content
  const [isHeadContentVisible, setIsHeadContentVisible] = useState(true);

  // IntersectionObserver untuk memantau Head Content
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeadContentVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Head Content dianggap tidak terlihat jika kurang dari 10% terlihat
      }
    );

    if (headContentRef.current) {
      observer.observe(headContentRef.current);
    }

    // Cleanup
    return () => {
      if (headContentRef.current) {
        observer.unobserve(headContentRef.current);
      }
    };
  }, []);

  return (
    <>
      <main className="p-2 md:p-3 w-full h-full">
        {/* Head Content */}
        <div ref={headContentRef} className="grid grid-cols-12 gap-2 md:gap-3">
          <div className="col-span-12 md:col-span-5">
            <div className="flex flex-col justify-start items-start w-full p-8 md:p-14 rounded-4xl bg-gray-50">
              <h1 className="text-6xl md:text-8xl font-semibold text-start mb-6">
                ICONIC
              </h1>

              <h4 className="text-base md:text-xl font-normal text-start">
                Kenali lebih dalam Capstone Design Competition 2025 – dari
                panduan inovasi dan alat bantu hingga komponen desain yang dapat
                digunakan kembali serta implementasi proyek berbasis teknologi
                dan rekayasa.
              </h4>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <HomeNavigation />
          </div>
        </div>

        {/* Navigation Bar - Hanya terlihat saat Head Content tidak terlihat */}
        <div
          className={`transition-opacity duration-300 fixed top-0 left-0 w-full z-10 ${
            isHeadContentVisible
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
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
