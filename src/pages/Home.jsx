import React, { useRef } from "react";
import NavigationBar from "../components/NavigationBar";
import Accordion from "../components/Accordion";

const CompetitionAccordion = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const items = [
    {
      title:
        "Construction & Materials, Built Environment & Interior Design, Green Products / Agriculture & Environment",
      content: (
        <>
          <div className="flex flex-col gap-y-1">
            <h6 className="font-semibold text-black">Focus:</h6>
            <p>
              Innovative solutions in construction and interior design, use of
              alternative and eco-friendly materials, sustainable building
              technologies, as well as green innovations for agriculture,
              environment, and renewable energy.
            </p>
          </div>

          <div className="flex flex-col gap-y-1 mt-3">
            <h6 className="font-semibold text-black">Example Projects:</h6>
            <ol className="list-decimal list-inside">
              <li>Eco-friendly concrete using industrial waste.</li>
              <li>Energy-efficient and ergonomic classroom design.</li>
              <li>Modular structures for rapid deployment.</li>
              <li>Smart irrigation system with soil moisture sensors.</li>
              <li>Domestic wastewater treatment using biofilters.</li>
              <li>Portable solar power generator for rural areas.</li>
            </ol>
          </div>
        </>
      ),
    },
    {
      title: "Machinery, Equipment & Manufacturing Processes",
      content: (
        <>
          <div className="flex flex-col gap-y-1">
            <h6 className="font-semibold text-black">Focus:</h6>
            <p>
              Design and development of tools and machines, as well as
              improvements in manufacturing processes to enhance productivity,
              efficiency, and industrial automation.
            </p>
          </div>

          <div className="flex flex-col gap-y-1 mt-3">
            <h6 className="font-semibold text-black">Example Projects:</h6>
            <ol className="list-decimal list-inside">
              <li>Automated livestock feed dispenser.</li>
              <li>High-precision jigs & fixtures for workshops.</li>
              <li>Compact packaging automation system for SMEs.</li>
              <li>Flexible microcontroller-based packaging machine.</li>
              <li>Production testing device using digital sensors.</li>
            </ol>
          </div>
        </>
      ),
    },
    {
      title:
        "ICT & Multimedia, Electrical & Renewable Energy, Electronics & Telecommunications",
      content: (
        <>
          <div className="flex flex-col gap-y-1">
            <h6 className="font-semibold text-black">Focus:</h6>
            <p>
              Development of digital applications, interactive systems,
              communication and smart sensor technologies, as well as the
              integration of intelligent and renewable energy-based automation
              systems.
            </p>
          </div>

          <div className="flex flex-col gap-y-1 mt-3">
            <h6 className="font-semibold text-black">Example Projects:</h6>
            <ol className="list-decimal list-inside">
              <li>IoT-based workplace safety monitoring application.</li>
              <li>Augmented reality learning modules.</li>
              <li>Facial recognition attendance system.</li>
              <li>Smart lighting control using LDR and microcontroller.</li>
              <li>Compact 5G microstrip antenna.</li>
              <li>IoT-based home automation system.</li>
              <li>Wireless sensor-based solar energy monitoring.</li>
            </ol>
          </div>
        </>
      ),
    },
    {
      title: "Teaching & Learning",
      content: (
        <>
          <div className="flex flex-col gap-y-1">
            <h6 className="font-semibold text-black">Focus:</h6>
            <p>
              Innovative educational tools, interactive training platforms, and
              technology-enhanced teaching approaches to improve learning
              experiences and outcomes.
            </p>
          </div>

          <div className="flex flex-col gap-y-1 mt-3">
            <h6 className="font-semibold text-black">Example Projects:</h6>
            <ol className="list-decimal list-inside">
              <li>Portable hydraulic system trainer.</li>
              <li>Gamified e-learning platform.</li>
              <li>Virtual reality-based safety simulation module.</li>
              <li>STEM education kit using microcontrollers.</li>
              <li>Interactive learning application with multimedia content.</li>
              <li>Digital quiz system with automated reporting.</li>
            </ol>
          </div>
        </>
      ),
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

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
      <title>ICONIC - Home</title>

      <div className="grid grid-cols-12 items-start max-w-7xl mx-auto">
        <div className="col-span-12 md:col-span-9">
          {/* Navigation Bar - Hanya terlihat saat Head Content tidak terlihat */}
          <div
            className={`sticky top-0 left-0 max-w-7xl mx-auto z-50 py-2 mt-12 bg-white px-6`}
          >
            <NavigationBar />
          </div>

          {/* What's ICONIC */}
          <div
            ref={whatIsIconicElement}
            id="what-is-iconic"
            className="pt-24 px-6"
          >
            <h2 className="text-4xl font-medium">What is ICONIC?</h2>
            <p className="mt-4 text-base">
              <span>
                Capstone Design Competition 2025 is part of a series of TOR
                ICONIC (International Competition & Exhibition of Innovation &
                Creativity) activities that aim to develop student innovation in
                technology, engineering, and product design.
              </span>
              <br />
              <br />
              <span>
                This competition is a platform for students to present the
                results of their Capstone projects that are oriented towards
                innovation and real implementation.
              </span>
            </p>
          </div>

          {/* Competition Theme */}
          <div
            ref={temaKompetisiElement}
            id="tema-kompetisi"
            className="pt-24 px-6"
          >
            <h2 className="text-4xl font-medium">Competition Theme</h2>
            <p className="mt-4 text-base">
              <span className="font-semibold text-lg">
                Innovative Technology for Sustainable Development
              </span>
              <br />
              <span className="block mt-1">
                This competition is a platform for students to present the
                results of their Capstone projects that are oriented towards
                innovation and real implementation.
              </span>
            </p>
          </div>

          {/* Competition Category */}
          <div
            ref={kategoriKompetisiElement}
            id="kategori-kompetisi"
            className="pt-24"
          >
            <h2 className="text-4xl font-medium px-6">Competition Category</h2>
            <div className="px-2 mt-2">
              <CompetitionAccordion />
            </div>
          </div>

          {/* Important Schedule */}
          <div
            ref={jadwalPentingElement}
            id="jadwal-penting"
            className="pt-24 px-6"
          >
            <h2 className="text-4xl font-medium">Important Schedule</h2>
            <ul className="list-disc mt-4 text-base ml-4">
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Registration</div>
                  <div className="col-span-7">
                    : June 1 &ndash; July 31, 2025 (Summary+Poster)
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Proposal Selection</div>
                  <div className="col-span-7">: August 1, 2025</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Finalist Announcement</div>
                  <div className="col-span-7">: August 17, 2025</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Presentations & Exhibitions</div>
                  <div className="col-span-7">: September 8, 2025</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Awarding</div>
                  <div className="col-span-7 text-red-600 font-medium">
                    : September 12, 2025
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Registration Fee */}
          <div
            ref={biayaPendaftaranElement}
            id="biaya-pendaftaran"
            className="pt-24 px-6"
          >
            <h2 className="text-4xl font-medium">Registration Fee</h2>
            <ul className="mt-4 text-base">
              <li className="mb-1.5">
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Category</div>
                  <div className="col-span-7">Registration Fee</div>
                </div>
              </li>
              <li>
                <div className="border-b border-gray-300"></div>
              </li>
              <li className="mt-1.5">
                <div className="grid grid-cols-12">
                  <div className="col-span-5">National Student</div>
                  <div className="col-span-7 font-medium">FREE</div>
                </div>
              </li>
              <li className="mt-1.5">
                <div className="grid grid-cols-12">
                  <div className="col-span-5">International Students</div>
                  <div className="col-span-7 font-medium">FREE</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Prizes and Awards */}
          <div
            ref={hadiahPenghargaanElement}
            id="hadiah-penghargaan"
            className="pt-24 px-6"
          >
            <h2 className="text-4xl font-medium">Prizes and Awards</h2>
            <ul className="list-disc mt-4 text-base ml-4">
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">1st place</div>
                  <div className="col-span-8">: Trophy + Certificate</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">2nd place</div>
                  <div className="col-span-8">: Trophy + Certificate</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">3rd place</div>
                  <div className="col-span-8">: Trophy + Certificate</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">
                    Consolation & People's Choice
                  </div>
                  <div className="col-span-8">: Certificate + Plaque</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <aside className="md:pb-8 md:sticky md:top-8 order-first md:order-last col-span-12 md:col-span-3 mt-14 max-h-screen overflow-y-auto">
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
                Competition Theme
              </button>
            </li>
            <li>
              <button
                onClick={scrollToKategoriKompetisi}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Competition Category
              </button>
            </li>
            <li>
              <button
                onClick={scrollToJadwalPenting}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Important Schedule
              </button>
            </li>
            <li>
              <button
                onClick={scrollToBiayaPendaftaran}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Registration Fee
              </button>
            </li>
            <li>
              <button
                onClick={scrollToHadiahPenghargaan}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Prizes and Awards
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

            <ul className="flex flex-col mt-1.5">
              <li className="mb-2">
                <p className="font-bold mb-0.5">Lecturer work submission:</p>
                All registration and submission of lecturers' works are
                conducted through the{" "}
                <a
                  target="_blank"
                  href="https://forms.gle/M5j51CVqK1LZX6vu5"
                  className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Google Drive
                </a>{" "}
                platform.
              </li>
              <li className="block border-t border-gray-300 w-full"></li>
              <li className="mt-2">
                <p className="font-bold mb-0.5">
                  General participant submission:
                </p>
                All registration and submission of participants' works are
                conducted through the{" "}
                <a
                  target="_blank"
                  href="https://bit.um.ac.id/ICONIC2025-FT60"
                  className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Google Drive
                </a>{" "}
                platform.
              </li>
            </ul>
          </div>

          {/* Contact & More Information */}
          <div className="mx-2 py-3 px-4 transition duration-200 hover:bg-gray-200 rounded-xl">
            <p className="text-left text-xs font-semibold text-[#4d4256]">
              Contact & More Information
            </p>

            <ul className="flex flex-col gap-y-1.5 list-none mt-2">
              <li className="relative before:absolute before:left-0 before:top-0 before:content-['📍']">
                <p className="ml-6 text-xs">
                  ICONIQ Fakultas Teknik Universitas Negeri Malang Jl Semarang
                  No. 5, Malang 65154, East Java, Indonesia
                </p>
              </li>
              <li className="relative before:absolute before:left-0 before:top-0 before:content-['📞']">
                <ol className="flex flex-col gap-y-0.5 list-inside list-decimal">
                  <li className="ml-6 text-xs">
                    Hanif Rifai Adha, S.Pd., M.T. (+62 822-4546-1308)
                  </li>
                  <li className="ml-6 text-xs">
                    Naomi Vadka Rezkia (+62 821-4501-2230)
                  </li>
                </ol>
              </li>
              <li className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['🌐']">
                <p className="ml-6 text-xs">
                  <a
                    target="_blank"
                    href="https://iconic-topaz.vercel.app/"
                    className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    ICONIC Website
                  </a>
                </p>
              </li>
              <li className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-['📧']">
                <p className="ml-6 text-xs">ft@um.ac.id</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Home;
