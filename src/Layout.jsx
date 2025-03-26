import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const navigationList = [
    {
      icon: (
        <path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z" />
      ),
      label: "Home",
      link: "/",
    },
    {
      icon: (
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560h560v-560h-80v245q0 12-10 17.5t-20-.5l-49-30q-10-6-21-6t-21 6l-49 30q-10 6-20 .5T480-515v-245H200Zm0 560v-560 560Z" />
      ),
      label: "Guidelines",
      link: "/guidelines",
    },
    {
      icon: (
        <path d="M760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120Zm-560-80h280v-320l280 320v-560H480v240L200-200Z" />
      ),
      label: "Poster",
      link: "/poster",
    },
    {
      icon: (
        <path d="M222-200 80-342l56-56 85 85 170-170 56 57-225 226Zm0-320L80-662l56-56 85 85 170-170 56 57-225 226Zm298 240v-80h360v80H520Zm0-320v-80h360v80H520Z" />
      ),
      label: "Pitching",
      link: "/pitching",
    },
  ];

  return (
    <>
      {/* Bottom Navigation Bar for Mobile View */}
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
                        isActive ? "bg-[#E8DEF8]" : ""
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
                    <span className="block text-xs text-center font-medium">
                      {data?.label}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* Sidebar for Tablet and Desktop View */}
      <div className="flex items-start h-screen">
        <aside className="h-full">
          <ul className="hidden md:block w-full flex flex-col items-center bg-[#f2ecee] px-2 h-full">
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
                            isActive
                              ? "bg-slate-300"
                              : "group-hover:bg-gray-200"
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

        <main className="p-2 md:p-3 w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
