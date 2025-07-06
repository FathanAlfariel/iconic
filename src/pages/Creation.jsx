import React, { useRef } from "react";
import NavigationBar from "../components/NavigationBar";

const Creation = () => {
  const whatIsCreationRef = useRef(null);
  const competitionThemeRef = useRef(null);
  const scheduleRef = useRef(null);
  const prizesRef = useRef(null);
  const rulesRef = useRef(null);
  const formatRef = useRef(null);
  const linksRef = useRef(null);

  return (
    <>
      <title>CREATION - UM FT</title>

      <div className="grid grid-cols-12 items-start max-w-7xl mx-auto">
        <div className="col-span-12 md:col-span-9 px-6">
          <div className="sticky top-0 left-0 max-w-7xl mx-auto z-50 py-2 mt-12 bg-white">
            <NavigationBar />
          </div>

          {/* What is CREATION */}
          <section ref={whatIsCreationRef} className="pt-24">
            <h2 className="text-4xl font-medium">What is CREATION?</h2>
            <p className="mt-4 text-base">
              CREATION or "Creative Entrepreneurship Authentic Competition" is
              an entrepreneurship competition organized by BEM FT UM for
              students of the Faculty of Engineering, State University of
              Malang. It aims to enhance skills, measure abilities, foster a
              competitive spirit, create business opportunities, and encourage
              creativity and bold innovation.
            </p>
          </section>

          {/* Competition Theme */}
          <section ref={competitionThemeRef} className="pt-24">
            <h2 className="text-4xl font-medium">Competition Theme</h2>
            <p className="mt-4 text-lg font-semibold">
              Developing Future Entrepreneurs Through Creativity and Innovation
            </p>
            <p className="mt-2 text-base">
              This means shaping, preparing, and educating future entrepreneurs
              through creativity and innovation, not just theories.
            </p>
          </section>

          {/* Important Schedule */}
          <section ref={scheduleRef} className="pt-24">
            <h2 className="text-4xl font-medium">Important Schedule</h2>
            <ul className="list-disc mt-4 ml-6 text-base">
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">
                    Registration & Proposal Upload
                  </div>
                  <div className="col-span-7">
                    : July 30 &ndash; August 25, 2025 (Summary+Poster)
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">
                    Proposal Selection Announcement
                  </div>
                  <div className="col-span-7">: August 30 &ndash; 31, 2025</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Technical Meeting</div>
                  <div className="col-span-7">: September 3, 2025</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">First Day of Event</div>
                  <div className="col-span-7">
                    : September 8, 2025 (08.00 WIB &ndash; until finished)
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Second Day of Event</div>
                  <div className="col-span-7">
                    : September 9, 2025 (08.00 WIB &ndash; until finished)
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-5">Closing Ceremony</div>
                  <div className="col-span-7">: September 12, 2025</div>
                </div>
              </li>
            </ul>
          </section>

          {/* Prizes and Awards */}
          <section ref={prizesRef} className="pt-24">
            <h2 className="text-4xl font-medium">Prizes and Awards</h2>
            <ul className="list-disc mt-4 ml-6 text-base">
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">Participants</div>
                  <div className="col-span-8">: Certificate</div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">1st Winner</div>
                  <div className="col-span-8">
                    : Coaching Fund + Certificate
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">2nd Winner</div>
                  <div className="col-span-8">
                    : Coaching Fund + Certificate
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">3rd Winner</div>
                  <div className="col-span-8">
                    : Coaching Fund + Certificate
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Rules and Regulations */}
          <section ref={rulesRef} className="pt-24">
            <h2 className="text-4xl font-medium">Rules and Regulations</h2>
            <ul className="list-disc mt-4 ml-6 text-base">
              <li>Open to active students of the Faculty of Engineering, UM</li>
              <li>Teams consist of 3–6 members</li>
              <li>Products must be food or creatively made goods</li>
              <li>
                Must fill out the form and submit proposal using the template
              </li>
              <li>Proposal must be written in Indonesian</li>
              <li>
                Categories: Food & Beverages, Creative Industry/Art/Culture
              </li>
            </ul>
          </section>

          {/* Proposal Format */}
          <section ref={formatRef} className="pt-24">
            <h2 className="text-4xl font-medium">
              Proposal Format and Guidelines
            </h2>
            <ul className="list-disc mt-4 ml-6 text-base">
              <li>Cover includes Kemdikbud, university, and business logos</li>
              <li>Approval Sheet (signed by team leader)</li>
              <li>
                Team Profile (photo, student ID, name, skills, assignment)
              </li>
              <li>
                Business Description (background, location, noble purpose)
              </li>
              <li>Product Description (photo, development, feedback)</li>
              <li>Business Operations & Partners</li>
              <li>Marketing Strategy (4P: Product, Price, Place, Promotion)</li>
              <li>Financial Plan, Profit and Loss, Projection, Budget Usage</li>
              <li>Internal Evaluation & Future Development Plan</li>
              <li>Documentation Photos & Business Location Coordinates</li>
              <li>Attachment: Budget Plan</li>
            </ul>
          </section>

          {/* Links */}
          <section ref={linksRef} className="pt-24">
            <h2 className="text-4xl font-medium">Important Links</h2>
            <ul className="list-disc mt-4 ml-6 text-base text-blue-700 underline">
              <li>
                <a href="https://forms.gle/7FGeNTuLxsNFYy1o8" target="_blank">
                  Registration Form
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/FORMATPROPOSALCREATION2025"
                  target="_blank"
                >
                  Proposal Format Example
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="md:pb-8 md:sticky md:top-8 order-first md:order-last col-span-12 md:col-span-3 mt-14 max-h-screen overflow-y-auto">
          <p className="text-left text-xs font-semibold text-[#4d4256] mb-2 px-6">
            On this page
          </p>

          {/* List page */}
          <ul className="px-2">
            <li>
              <button
                onClick={() =>
                  whatIsCreationRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="w-full py-2 px-4 text-left text-sm hover:bg-gray-200 rounded-full cursor-pointer"
              >
                What is CREATION?
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  competitionThemeRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="w-full py-2 px-4 text-left text-sm hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Competition Theme
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  scheduleRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-2 px-4 text-left text-sm hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Important Schedule
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  prizesRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-2 px-4 text-left text-sm hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Prizes
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  rulesRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-2 px-4 text-left text-sm hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Rules
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  formatRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-2 px-4 text-left text-sm hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Proposal Format
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  linksRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-2 px-4 text-left text-sm hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Important Links
              </button>
            </li>
          </ul>

          <span className="block border-t border-gray-300 my-3"></span>

          {/* Important Links */}
          <div className="text-left text-xs mx-2 py-3 px-4 transition duration-200 hover:bg-gray-200 rounded-xl">
            <div className="flex items-start font-semibold text-[#4d4256]">
              Important Links
              <span class="relative flex size-2 ml-0.5 pt-px">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex size-2 rounded-full bg-sky-500"></span>
              </span>
            </div>

            <ul className="flex flex-col mt-3">
              <li className="mb-2">
                <p className="font-bold mb-1">Registration Form:</p>
                <a
                  target="_blank"
                  href="https://forms.gle/7FGeNTuLxsNFYy1o8"
                  className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Click here to register
                </a>
              </li>
              <li className="block border-t border-gray-300 w-full"></li>
              <li className="mt-2">
                <p className="font-bold mb-1">Proposal Format Example</p>
                <a
                  target="_blank"
                  href="https://bit.ly/FORMATPROPOSALCREATION2025"
                  className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Click here to see an example of a proposal format
                </a>
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

export default Creation;
