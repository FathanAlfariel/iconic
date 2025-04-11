import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <div className="bg-white p-2 md:p-3">
        <ul className="flex w-full rounded-full bg-gray-50 overflow-y-auto shadow-md">
          <li className="w-full">
            <Link
              to={"/"}
              className="cursor-pointer w-full transition duration-200 flex justify-center items-center py-6.5 px-6 text-sm md:text-base font-medium text-[#21182b] rounded-full bg-lime-300 hover:bg-lime-400 active:bg-lime-400 active:scale-95 whitespace-nowrap"
            >
              What's ICONIC
            </Link>
          </li>
          <li className="w-full">
            <Link
              to={"/rules"}
              className="cursor-pointer w-full transition duration-200 flex justify-center items-center py-6.5 px-6 text-sm md:text-base font-medium text-[#4d4256] hover:text-[#21182b] rounded-full hover:bg-lime-200 active:bg-lime-400 active:scale-95 whitespace-nowrap"
            >
              Rules and Regulation
            </Link>
          </li>

          <li className="w-full">
            <button className="cursor-pointer w-full transition duration-200 flex justify-center items-center py-6.5 px-6 text-sm md:text-base font-medium text-[#4d4256] hover:text-[#21182b] rounded-full hover:bg-lime-200 active:bg-lime-400 active:scale-95 whitespace-nowrap">
              Format and Guidelines
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
