import React, { useRef } from "react";

const Home = () => {
  // Ref untuk setiap section
  const whatIsIconicElement = useRef(null);
  const temaKompetisiElement = useRef(null);
  const kategoriKompetisiElement = useRef(null);
  const jadwalPentingElement = useRef(null);
  const biayaPendaftaranElement = useRef(null);
  const hadiahPenghargaanElement = useRef(null);

  // Fungsi scroll untuk setiap section
  const scrollToWhatIsIconic = () => {
    whatIsIconicElement?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTemaKompetisi = () => {
    temaKompetisiElement?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToKategoriKompetisi = () => {
    kategoriKompetisiElement?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToJadwalPenting = () => {
    jadwalPentingElement?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBiayaPendaftaran = () => {
    biayaPendaftaranElement?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHadiahPenghargaan = () => {
    hadiahPenghargaanElement?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="grid grid-cols-12 items-start max-w-7xl mx-auto">
        <div className="col-span-12 md:col-span-9 px-6">
          {/* What's ICONIC */}
          <div ref={whatIsIconicElement} id="what-is-iconic" className="mt-14">
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

          {/* Tema Kompetisi */}
          <div ref={temaKompetisiElement} id="tema-kompetisi" className="mt-14">
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

          {/* Kategori Kompetisi */}
          <div
            ref={kategoriKompetisiElement}
            id="kategori-kompetisi"
            className="mt-14"
          >
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

          {/* Jadwal Kompetisi */}
          <div ref={jadwalPentingElement} id="jadwal-penting" className="mt-14">
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

          {/* Biaya Pendaftaran */}
          <div
            ref={biayaPendaftaranElement}
            id="biaya-pendaftaran"
            className="mt-14"
          >
            <h2 className="text-4xl font-medium">Biaya Pendaftaran</h2>
            <ul className="mt-4 text-base">
              <li className="mb-1.5">
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Kategori</div>
                  <div className="col-span-7">Biaya Pendaftaran</div>
                </div>
              </li>
              <li>
                <div className="border-b border-gray-300"></div>
              </li>
              <li className="mt-1.5">
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Mahasiswa Nasional</div>
                  <div className="col-span-7 font-medium">FREE</div>
                </div>
              </li>
              <li className="mt-1.5">
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Mahasiswa Internasional</div>
                  <div className="col-span-7 font-medium">FREE</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Jadwal Kompetisi */}
          <div
            ref={hadiahPenghargaanElement}
            id="hadiah-penghargaan"
            className="mt-14"
          >
            <h2 className="text-4xl font-medium">Hadiah dan Penghargaan</h2>
            <ul className="list-disc mt-4 text-base ml-4">
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Juara 1</div>
                  <div className="col-span-8">: Sertifikat</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Juara 2</div>
                  <div className="col-span-8">: Sertifikat</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Juara 3</div>
                  <div className="col-span-8">: Sertifikat</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Penghargaan Inovasi Terbaik</div>
                  <div className="col-span-8">: Sertifikat</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">
                    Penghargaan Presentasi Terbaik
                  </div>
                  <div className="col-span-8">: Sertifikat</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <aside className="md:sticky md:top-28 order-first md:order-last col-span-12 md:col-span-3 mt-14">
          <p className="text-left text-xs font-semibold text-[#4d4256] mb-2 px-6">
            On this page
          </p>

          {/* List page */}
          <ul className="px-2">
            <li>
              <button
                onClick={scrollToWhatIsIconic}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                What is ICONIC
              </button>
            </li>
            <li>
              <button
                onClick={scrollToTemaKompetisi}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Tema Kompetisi
              </button>
            </li>
            <li>
              <button
                onClick={scrollToKategoriKompetisi}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Kategori Kompetisi
              </button>
            </li>
            <li>
              <button
                onClick={scrollToJadwalPenting}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Jadwal Penting
              </button>
            </li>
            <li>
              <button
                onClick={scrollToBiayaPendaftaran}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Biaya Pendaftaran
              </button>
            </li>
            <li>
              <button
                onClick={scrollToHadiahPenghargaan}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Hadiah dan Penghargaan
              </button>
            </li>
          </ul>

          <span className="block border-t border-gray-300 my-3"></span>

          {/* Submission Pendaftaran */}
          <div className="text-left text-xs mx-2 py-3 px-4 transition duration-200 hover:bg-gray-200 rounded-xl">
            <span className="font-semibold text-[#4d4256]">
              Submission Platform
            </span>
            <br />
            <span className="block text-[#1c1b1d] mt-1.5">
              Semua pendaftaran dan pengumpulan dokumen dilakukan melalui
              platform <span className="text-red-600">xxxxxx</span>
            </span>
          </div>

          {/* Kontak & Informasi Lebih Lanjut */}
          <div className="mx-2 py-3 px-4 transition duration-200 hover:bg-gray-200 rounded-xl">
            <p className="text-left text-xs font-semibold text-[#4d4256]">
              Kontak & Informasi Lebih Lanjut
            </p>

            <ul className="flex flex-col gap-y-1.5 list-none mt-2">
              <li className="relative before:absolute before:left-0 before:top-0 before:content-['📍']">
                <p className="ml-6 text-xs">
                  ICONIQ Fakultas Teknik Universitas Negeri Malang Jl Semarang
                  No. 5, Malang 65154, East Java, Indonesia
                </p>
              </li>
              <li className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['📞']">
                <p className="ml-6 text-xs">xxx (mahasiswa)</p>
              </li>
              <li className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['🌐']">
                <p className="ml-6 text-xs">xxx</p>
              </li>
              <li className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['📧']">
                <p className="ml-6 text-xs">xxx</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Home;
