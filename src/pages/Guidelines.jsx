import React, { useRef } from "react";
import NavigationBar from "../components/NavigationBar";

const Guidelines = () => {
  // Ref untuk setiap section
  const innovationPosterFormat = useRef(null);
  const pitchingSessionGuidelines = useRef(null);

  const scrollToInnovationPosterFormat = () => {
    innovationPosterFormat?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPitchingSessionGuidelines = () => {
    pitchingSessionGuidelines?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <title>ICONIC - Format and Guidelines</title>

      <div className="grid grid-cols-12 items-start max-w-7xl mx-auto">
        <div className="col-span-12 md:col-span-9 px-6">
          {/* Navigation Bar - Hanya terlihat saat Head Content tidak terlihat */}
          <div
            className={`sticky top-0 left-0 max-w-7xl mx-auto z-50 py-2 mt-12 bg-white`}
          >
            <NavigationBar />
          </div>

          {/* Innovation Poster Format */}
          <div ref={innovationPosterFormat} className="pt-24">
            <h2 className="text-4xl font-medium">Innovation Poster Format</h2>
            <div className="mt-7">
              <p>Each poster must follow the following specifications:</p>
              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-0.5">
                <li className="ml-8">
                  Each participation MUST submit ONE (1) poster.
                </li>
                <li className="ml-8">
                  The poster must be of A3 size and in the PDF format.
                </li>
                <li className="ml-8">
                  The Innovation Poster must include the following mandatory
                  sections:
                  <ol type="a" className="ml-8 list-outside list-[lower-alpha]">
                    <li>Title of Innovation Product/ Project.</li>
                    <li>Group Members/Affiliations.</li>
                    <li>Introduction/Problem Statement.</li>
                    <li>Objective.</li>
                    <li>Innovation Product/ Project Impact.</li>
                    <li>Uses and Applications.</li>
                    <li>Novelty and Inventiveness.</li>
                    <li>Implementation Level .</li>
                    <li>
                      Commercial Potential/ Commercialisation/ Publishing
                      Status.
                    </li>
                  </ol>
                </li>
                <li className="ml-8">
                  The background design of the poster is based on the template
                  given.
                </li>
              </ul>
            </div>
          </div>

          {/* Pitching Session Guidelines */}
          <div ref={pitchingSessionGuidelines} className="pt-24">
            <h2 className="text-4xl font-medium">
              Pitching Session Guidelines
            </h2>
            <div className="mt-7">
              <p>
                Only the top 5 groups from each competition category will be
                eligible to compete in the ICONIQ 2025 finals.
              </p>
              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-0.5">
                <li className="ml-8">
                  Build a synchronized virtual presentation through Microsoft
                  Teams.
                </li>
                <li className="ml-8">Groups must always be prepared online.</li>
                <li className="ml-8">
                  The duration of the presentation for each group is 15 minutes
                  and for the question-and-answer session is 10 minutes.
                </li>
                <li className="ml-8">
                  Pre-recorded presentation video is NOT allowed for pitching
                  session unless a group member wish to shows the project
                  feature video during presentation.
                </li>
                <li className="ml-8">
                  Provide slides of the innovation presentation in Microsoft
                  Power Point format.
                </li>
                <li className="ml-8">
                  The innovation product must be original and is not an
                  adaptation of any existing ideas or systems.
                </li>
                <li className="ml-8">
                  The innovative product must have a safety design and features.
                </li>
                <li className="ml-8">
                  Explain the functions and benefits of the innovation product
                  effectively.
                </li>
                <li className="ml-8">
                  Explain the level of implementation and marketability of the
                  innovation product.
                </li>
                <li className="ml-8">
                  Participants who fail to be present during the session will be
                  disqualified from the final round.
                </li>
              </ul>
            </div>
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
                onClick={scrollToInnovationPosterFormat}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Innovation Poster Format
              </button>
            </li>
            <li>
              <button
                onClick={scrollToPitchingSessionGuidelines}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Pitching Session Guidelines
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
                    href="https://iconic-topaz.vercel.app/"
                    className="font-semibold text-blue-500 hover:text-blue-700 hover:underline"
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

export default Guidelines;
