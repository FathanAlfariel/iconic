import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ navigationList }) => {
  return (
    <>
      <aside className="h-full">
        <ul className="hidden md:block w-full flex flex-col items-center bg-gray-50 px-2 h-full">
          {navigationList?.map((data, key) => {
            return (
              <li
                key={key}
                className="group w-full flex justify-center items-center"
              >
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
                          className="fill-[#4d4256] transition duration-200 group-hover:scale-105"
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
      </aside>
    </>
  );
};

export default Sidebar;
