import React, { useRef } from "react";
import NavigationBar from "../components/NavigationBar";

const Rules = () => {
  // Ref untuk setiap section
  const eligibilityRef = useRef(null);
  const teamCompositionRef = useRef(null);
  const projectRequirementsRef = useRef(null);
  const submissionRequirementsRef = useRef(null);
  const judgingCriteriaRef = useRef(null);
  const categorySelectionRef = useRef(null);
  const participantNamesRef = useRef(null);
  const languageRef = useRef(null);

  // Fungsi scroll untuk setiap section
  const scrollEligibilityRef = () => {
    eligibilityRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTeamCompositionRef = () => {
    teamCompositionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollProjectRequirementsRef = () => {
    projectRequirementsRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollSubmissionRequirementsRef = () => {
    submissionRequirementsRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollJudgingCriteriaRef = () => {
    judgingCriteriaRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollCategorySelectionRef = () => {
    categorySelectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollParticipantNamesRef = () => {
    participantNamesRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollLanguageRef = () => {
    languageRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <title>ICONIC - Rules and Regulation</title>

      <div className="grid grid-cols-12 items-start max-w-7xl mx-auto">
        <div className="col-span-12 md:col-span-9 px-6">
          {/* Navigation Bar - Hanya terlihat saat Head Content tidak terlihat */}
          <div
            className={`sticky top-0 left-0 max-w-7xl mx-auto z-50 py-2 mt-12 bg-white`}
          >
            <NavigationBar />
          </div>

          <ul className="max-w-7xl mx-auto">
            {/* Eligibility */}
            <li ref={eligibilityRef} className="pt-24">
              <h5 className="text-2xl font-medium">Eligibility:</h5>
              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-3">
                <li className="ml-8">
                  The competition is OPEN to all active university students,
                  both from national and international higher education
                  institutions.
                </li>
              </ul>
            </li>

            {/* Team Composition */}
            <li ref={teamCompositionRef} className="pt-24">
              <h5 className="text-2xl font-medium">Team Composition:</h5>

              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-3">
                <li className="ml-8">
                  Each team must consist of 2–3 students and one faculty advisor
                  (supervisor).
                </li>
                <li className="ml-8">
                  Projects can be presented individually or as a team with a
                  maximum of four (4) members, including the Team
                  Leader/Supervisor, with the Team Leader submitting only one
                  project title.
                </li>
              </ul>
            </li>

            {/* Project Requirements */}
            <li ref={projectRequirementsRef} className="pt-24">
              <h5 className="text-2xl font-medium">Project Requirements:</h5>
              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-3">
                <li className="ml-8">
                  The project must be a result of Capstone Design within the
                  last two years.
                </li>
                <li className="ml-8">
                  Participants must submit an initial proposal, project report,
                  and product proposal.
                </li>
              </ul>
            </li>

            {/* Submission Requirements */}
            <li ref={submissionRequirementsRef} className="pt-24">
              <h5 className="text-2xl font-medium">Submission Requirements:</h5>
              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-3">
                <li className="ml-8">
                  Entries must include a completed entry form, Abstract, Poster
                  and a Payment Slip as proof of registration.
                </li>
                <li className="ml-8">
                  The abstract must be written in English and clearly explain
                  the project’s objectives, methodology, and impact.
                </li>
                <li className="ml-8">
                  The poster must be in English and visually represent the
                  innovation effectively.
                </li>
              </ul>
            </li>

            {/* Judging Criteria */}
            <li ref={judgingCriteriaRef} className="pt-24">
              <h5 className="text-2xl font-medium">Judging Criteria:</h5>
              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-3">
                <li className="ml-8">Innovation</li>
                <li className="ml-8">Sustainability</li>
                <li className="ml-8">Industrial Impact</li>
                <li className="ml-8">Technical Implementation</li>
              </ul>
            </li>

            {/* Category Selection */}
            <li ref={categorySelectionRef} className="pt-24">
              <h5 className="text-2xl font-medium">Category Selection:</h5>
              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-3">
                <li className="ml-8">
                  The correct category selection will help participants achieve
                  the best marks. However, the organizer reserves the right to
                  reassign participants to a different category based on the
                  subject matter.
                </li>
              </ul>
            </li>

            {/* Participant Names & Modifications */}
            <li ref={participantNamesRef} className="pt-24">
              <h5 className="text-2xl font-medium">
                Participant Names & Modifications:
              </h5>
              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-3">
                <li className="ml-8">
                  Group members will be registered according to the names listed
                  on the entry form, and any changes are NOT allowed.
                </li>
              </ul>
            </li>

            {/* Language to be used */}
            <li ref={languageRef} className="pt-24">
              <h5 className="text-2xl font-medium">Language to be used:</h5>
              <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-3">
                <li className="ml-8">
                  For ABSTRACT, the usage of English and Bahasa Indonesia are
                  allowed.
                </li>
                <li className="ml-8">
                  For POSTER, participants MUST use English.
                </li>
                <li className="ml-8">
                  Only FIVE (5) shortlisted participants from each class will be
                  called for pitching session that will be held on September 8th
                  2025 for a TOP 5 and best award winner selection.
                </li>
                <li className="ml-8">
                  For participants that are not called for pitching session, the
                  participant and award (Gold, Silver and Bronze) certificates
                  will be mailed after closing ceremony on September 2025.
                </li>
                <li className="ml-8">
                  No refunds will be issued if participants wish to withdraw
                  from the competition.
                </li>
                <li className="ml-8">
                  Decisions of panels are FINAL. Any complaints will not be
                  entertained.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <aside className="md:sticky md:top-8 order-first md:order-last col-span-12 md:col-span-3 mt-14 max-h-screen overflow-y-auto">
          <p className="text-left text-xs font-semibold text-[#4d4256] mb-2 px-6">
            On this page
          </p>

          {/* List page */}
          <ul className="px-2">
            <li>
              <button
                onClick={scrollEligibilityRef}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Eligibility
              </button>
            </li>
            <li>
              <button
                onClick={scrollTeamCompositionRef}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Team Composition
              </button>
            </li>
            <li>
              <button
                onClick={scrollProjectRequirementsRef}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Project Requirements
              </button>
            </li>
            <li>
              <button
                onClick={scrollSubmissionRequirementsRef}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Submission Requirements
              </button>
            </li>
            <li>
              <button
                onClick={scrollJudgingCriteriaRef}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Judging Criteria
              </button>
            </li>
            <li>
              <button
                onClick={scrollCategorySelectionRef}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Category Selection
              </button>
            </li>
            <li>
              <button
                onClick={scrollParticipantNamesRef}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Participant Names & Modifications
              </button>
            </li>
            <li>
              <button
                onClick={scrollLanguageRef}
                className="w-full py-2 px-4 text-left text-[#21182b] text-sm font-normal transition duration-200 hover:bg-gray-200 rounded-full cursor-pointer"
              >
                Language to be used
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
              All registration and document collection is done through{" "}
              <a
                target="_blank"
                href="https://bit.um.ac.id/ICONIC2025-FT60"
                className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
              >
                Google Drive
              </a>{" "}
              platform
            </span>
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

export default Rules;
