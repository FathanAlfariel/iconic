import React from "react";
import { NavLink } from "react-router-dom";

const BottomNavBar = ({ navigationList }) => {
  return (
    <>
      <ul className="block md:hidden w-full fixed bottom-0 left-0 flex items-center gap-x-2 bg-[#f2ecee] px-2">
        {navigationList?.map((data, key) => {
          return (
            <li key={key} className="w-full flex justify-center items-center">
              {/* Navigation Button */}
              <NavLink
                to={data?.link}
                className="flex flex-col gap-y-1 pt-3 pb-4"
              >
                {({ isActive }) => (
                  <>
                    {/* Icon */}
                    <span
                      className={`block py-1 px-5 rounded-full ${
                        isActive ? "bg-lime-200" : "group-hover:bg-gray-200"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        className="fill-[#4d4256]"
                      >
                        {data?.icon}
                      </svg>
                    </span>

                    {/* Label */}
                    <div
                      className={`block text-xs text-center ${
                        isActive
                          ? "text-black font-bold"
                          : "text-[#4d4256] font-medium group-hover:text-black"
                      }`}
                    >
                      {data?.label}
                    </div>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BottomNavBar;
