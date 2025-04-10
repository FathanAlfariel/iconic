import React from "react";
import { Link } from "react-router-dom";

const HomeNavigation = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:gap-3 h-full">
        <div className="flex flex-col gap-y-2 md:gap-y-3">
          {/* What is ICONIC? */}
          <Link
            to={"/"}
            className="w-full h-full flex flex-col justify-center items-center gap-y-2 p-6 transition duration-200 bg-lime-300 hover:bg-lime-400 rounded-4xl hover:rounded-3xl hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer"
          >
            <h4 className="text-center text-2xl text-[#1c1b1d] font-medium">
              What is ICONIC?
            </h4>
            <p className="text-center text-[#1c1b1d] text-base">
              Pelajari lebih lanjut tentang ICONIC 2025 dan tujuannya
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-x-2 md:gap-x-3 w-full h-full">
          {/* Rules and Regulation */}
          <Link
            to={"/rules"}
            className="w-full h-full flex flex-col gap-y-2 p-6 transition duration-200 bg-lime-300 hover:bg-lime-400 rounded-4xl hover:rounded-3xl hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer"
          >
            <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
              Rules and Regulation
            </h4>
            <p className="text-left text-[#1c1b1d] text-base">
              Lihat informasi lengkap tentang Capstone Design Competition 2025
            </p>
          </Link>

          {/* Format and Guidelines */}
          <Link
            to={"/guidelines"}
            className="w-full h-full flex flex-col gap-y-2 p-6 transition duration-200 bg-lime-300 hover:bg-lime-400 rounded-4xl hover:rounded-3xl hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer"
          >
            <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
              Format and Guidelines
            </h4>
            <p className="text-left text-[#1c1b1d] text-base">
              Panduan lengkap untuk pendaftaran dan pengumpulan proposal
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeNavigation;
