import React, { useEffect, useState } from "react";

const Heading_Img = () => {
  const [isExpand, setIsExpand] = useState(false);

  // Mengatur overflow pada body saat Expand Content aktif
  useEffect(() => {
    if (isExpand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup saat komponen unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpand]);

  return (
    <>
      <div className="relative">
        {/* HEADING IMAGE */}
        <div className="w-full min-h-52 h-52 lg:min-h-80 md:min-h-full md:h-full lg:h-[400px]">
          <img
            src="HEADING.png"
            alt="heading_image"
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>

        {/* Expand Button */}
        <div className="absolute bottom-3 right-3 z-50">
          <button
            title="Full screen"
            onClick={() => setIsExpand(true)}
            className="cursor-pointer p-2.5 rounded-full transition duration-300 bg-gray-100/[.6] hover:bg-gray-100/[.75] active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#21182b"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expand Content */}
      {isExpand && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-50 bg-black/[.5]">
          <div className="h-auto max-w-7xl">
            <img
              src="HEADING.png"
              alt="heading_image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-3 right-3 md:top-6 md:right-6">
            <button
              title="Close"
              onClick={() => setIsExpand(false)}
              className="cursor-pointer p-2.5 rounded-full transition duration-300 bg-gray-100/[.6] hover:bg-gray-100/[.75] active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#21182b"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Heading_Img;
