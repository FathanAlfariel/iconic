import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="bg-white">
      <ul className="flex w-full rounded-full bg-gray-50 overflow-y-auto shadow-md">
        <li className="w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-200 cursor-pointer w-full flex justify-center items-center py-6.5 px-6 text-sm md:text-base font-medium rounded-full active:scale-95 whitespace-nowrap ${
                isActive
                  ? "text-[#21182b] bg-lime-300 hover:bg-lime-400 active:bg-lime-400"
                  : "text-[#4d4256] hover:text-[#21182b] hover:bg-lime-200 active:bg-lime-400"
              }`
            }
          >
            What's ICONIC
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/rules"
            className={({ isActive }) =>
              `transition duration-200 cursor-pointer w-full flex justify-center items-center py-6.5 px-6 text-sm md:text-base font-medium rounded-full active:scale-95 whitespace-nowrap ${
                isActive
                  ? "text-[#21182b] bg-lime-300 hover:bg-lime-400 active:bg-lime-400"
                  : "text-[#4d4256] hover:text-[#21182b] hover:bg-lime-200 active:bg-lime-400"
              }`
            }
          >
            Rules and Regulation
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/guidelines"
            className={({ isActive }) =>
              `transition duration-200 cursor-pointer w-full flex justify-center items-center py-6.5 px-6 text-sm md:text-base font-medium rounded-full active:scale-95 whitespace-nowrap ${
                isActive
                  ? "text-[#21182b] bg-lime-300 hover:bg-lime-400 active:bg-lime-400"
                  : "text-[#4d4256] hover:text-[#21182b] hover:bg-lime-200 active:bg-lime-400"
              }`
            }
          >
            Format and Guidelines
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
