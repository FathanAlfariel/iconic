import React, { useRef } from "react";
import HomeNavigation from "../components/HomeNavigation";

const Home = () => {
  const whatIsIconicElement = useRef(null);

  const scrollToWhatIsIconic = () => {
    whatIsIconicElement?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full p-8 md:p-14 rounded-3xl bg-gray-50 min-h-auto md:min-h-[85vh]">
        <h1 className="text-6xl md:text-8xl font-semibold text-center mb-4">
          ICONIC
        </h1>
        <h4 className="text-base md:text-xl font-normal text-center max-w-none md:max-w-5xl mx-auto">
          Kenali lebih dalam Capstone Design Competition 2025 – dari panduan
          inovasi dan alat bantu hingga komponen desain yang dapat digunakan
          kembali serta implementasi proyek berbasis teknologi dan rekayasa.
        </h4>

        <ul className="hidden md:grid grid-cols-2 gap-2 max-w-6xl mx-auto mt-14">
          <HomeNavigation scrollToWhatIsIconic={scrollToWhatIsIconic} />
        </ul>
      </div>

      <ul className="grid md:hidden grid-cols-2 gap-2 mt-8">
        <HomeNavigation scrollToWhatIsIconic={scrollToWhatIsIconic} />
      </ul>

      <div className="grid grid-cols-12 items-start max-w-6xl mx-auto">
        <div className="col-span-12 md:col-span-10 px-6">
          <div ref={whatIsIconicElement} className="mt-14">
            <h2 className="text-4xl font-medium">What is ICONIC?</h2>
            <p className="mt-4 text-base">
              <span>
                Capstone Design Competition 2025 adalah bagian dari rangkaian
                kegiatan TOR ICONIC (International Competition & Exhibition of
                Innovation & Creativity) yang bertujuan untuk mengembangkan
                inovasi mahasiswa dalam bidang teknologi, rekayasa, dan desain
                produk.
              </span>
              <br />
              <br />
              <span>
                Kompetisi ini menjadi wadah bagi mahasiswa untuk
                mempresentasikan hasil proyek Capstone mereka yang berorientasi
                pada inovasi dan implementasi nyata.
              </span>
            </p>
          </div>

          <div className="mt-14">
            <h2 className="text-4xl font-medium">Tema Kompetisi</h2>
            <p className="mt-4 text-base">
              <span className="font-semibold text-lg">
                Innovative Technology for Sustainable Development
              </span>
              <br />
              <span className="block mt-1">
                Kompetisi ini menjadi wadah bagi mahasiswa untuk
                mempresentasikan hasil proyek Capstone mereka yang berorientasi
                pada inovasi dan implementasi nyata.
              </span>
            </p>
          </div>

          <div className="mt-14">
            <h2 className="text-4xl font-medium">Kategori Kompetisi</h2>
            <ol className="list-decimal mt-4 text-base ml-4">
              <li>
                Construction & Materials / Built Environment & Interior Design
              </li>
              <li>Machinery, Equipment & Manufacturing Processes</li>
              <li>ICT & Multimedia</li>
              <li>Electrical, Electronics & Telecommunications</li>
              <li>
                Green Products / Agriculture / Environment / Renewable Energy
              </li>
              <li>Teaching & Learning</li>
            </ol>
          </div>

          <div className="mt-14">
            <h2 className="text-4xl font-medium">Jadwal Penting</h2>
            <ul className="list-disc mt-4 text-base ml-4">
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">
                    Batas Akhir Pendaftaran & Pengumpulan Proposal
                  </div>
                  <div className="col-span-7">: 30 Mei 2025</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">
                    Batas Akhir Pengumpulan Proyek Final
                  </div>
                  <div className="col-span-7">: 30 Juni 2025</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Pengumuman Finalis</div>
                  <div className="col-span-7">: 17 Agustus 2025</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Presentasi & Penjurian</div>
                  <div className="col-span-7">: 9 September 2025</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Pengumuman Pemenang</div>
                  <div className="col-span-7 text-red-600 font-medium">
                    : 12 September 2025
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <aside className="order-first md:order-last col-span-12 md:col-span-2 mt-14">
          <p className="text-left text-xs font-semibold text-[#4d4256] mb-2 px-6">
            On this page
          </p>

          <ul className="px-2">
            <li>
              <button
                onClick={scrollToWhatIsIconic}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-bold transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                What is ICONIC
              </button>
            </li>
            <li>
              <button className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer">
                Tema Kompetisi
              </button>
            </li>
            <li>
              <button className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer">
                Kategori Kompetisi
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Home;
