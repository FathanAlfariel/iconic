import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full p-8 md:p-14 rounded-3xl bg-gray-50">
        <h1 className="text-6xl md:text-8xl font-semibold text-center mb-4">
          ICONIC
        </h1>
        <h4 className="text-base md:text-xl font-normal text-center max-w-none md:max-w-5xl mx-auto">
          Kenali lebih dalam Capstone Design Competition 2025 – dari panduan
          inovasi dan alat bantu hingga komponen desain yang dapat digunakan
          kembali serta implementasi proyek berbasis teknologi dan rekayasa.
        </h4>

        <ul className="hidden md:grid grid-cols-2 gap-2 max-w-6xl mx-auto mt-14">
          <li className="w-full">
            <button className="flex flex-col gap-y-2 p-6 rounded-3xl transition duration-200 bg-lime-200 hover:bg-lime-300 hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer w-full h-full">
              <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
                What is ICONIC?
              </h4>
              <p className="text-left text-[#1c1b1d] text-base">
                Pelajari lebih lanjut tentang ICONIC 2025 dan tujuannya
              </p>
            </button>
          </li>
          <li className="w-full">
            <button className="flex flex-col gap-y-2 p-6 rounded-3xl transition duration-200 bg-lime-200 hover:bg-lime-300 hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer w-full h-full">
              <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
                Competition Details
              </h4>
              <p className="text-left text-[#1c1b1d] text-base">
                Lihat informasi lengkap tentang Capstone Design Competition 2025
              </p>
            </button>
          </li>
          <li className="w-full">
            <button className="flex flex-col gap-y-2 p-6 rounded-3xl transition duration-200 bg-lime-200 hover:bg-lime-300 hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer w-full h-full">
              <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
                Submission Guidelines
              </h4>
              <p className="text-left text-[#1c1b1d] text-base">
                Panduan lengkap untuk pendaftaran dan pengumpulan proposal
              </p>
            </button>
          </li>
          <li className="w-full">
            <button className="flex flex-col gap-y-2 p-6 rounded-3xl transition duration-200 bg-lime-200 hover:bg-lime-300 hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer w-full h-full">
              <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
                Important Dates
              </h4>
              <p className="text-left text-[#1c1b1d] text-base">
                Cek jadwal penting dan tenggat waktu kompetisi
              </p>
            </button>
          </li>
        </ul>
      </div>

      <ul className="grid md:hidden grid-cols-2 gap-2 mt-8">
        <li className="w-full">
          <button className="flex flex-col gap-y-2 p-6 rounded-3xl transition duration-200 bg-lime-200 hover:bg-lime-300 hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer w-full h-full">
            <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
              What is ICONIC?
            </h4>
            <p className="text-left text-[#1c1b1d] text-sm">
              Pelajari lebih lanjut tentang ICONIC 2025 dan tujuannya
            </p>
          </button>
        </li>
        <li className="w-full">
          <button className="flex flex-col gap-y-2 p-6 rounded-3xl transition duration-200 bg-lime-200 hover:bg-lime-300 hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer w-full h-full">
            <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
              Competition Details
            </h4>
            <p className="text-left text-[#1c1b1d] text-sm">
              Lihat informasi lengkap tentang Capstone Design Competition 2025
            </p>
          </button>
        </li>
        <li className="w-full">
          <button className="flex flex-col gap-y-2 p-6 rounded-3xl transition duration-200 bg-lime-200 hover:bg-lime-300 hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer w-full h-full">
            <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
              Submission Guidelines
            </h4>
            <p className="text-left text-[#1c1b1d] text-sm">
              Panduan lengkap untuk pendaftaran dan pengumpulan proposal
            </p>
          </button>
        </li>
        <li className="w-full">
          <button className="flex flex-col gap-y-2 p-6 rounded-3xl transition duration-200 bg-lime-200 hover:bg-lime-300 hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer w-full h-full">
            <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
              Important Dates
            </h4>
            <p className="text-left text-[#1c1b1d] text-sm">
              Cek jadwal penting dan tenggat waktu kompetisi
            </p>
          </button>
        </li>
      </ul>
    </>
  );
};

export default Home;
