import React from "react";

const Rules = () => {
  return (
    <>
      <ul className="max-w-7xl mx-auto mt-8">
        {/* Eligibility */}
        <li className="p-6 hover:bg-gray-100 rounded-4xl">
          <h5 className="text-lg font-medium">Eligibility:</h5>
          <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-2.5">
            <li className="ml-8">
              The competition is OPEN to all active university students, both
              from national and international higher education institutions.
            </li>
          </ul>
        </li>

        {/* Team Composition */}
        <li className="p-6 hover:bg-gray-100 rounded-4xl">
          <h5 className="text-lg font-medium">Team Composition:</h5>

          <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-2.5">
            <li className="ml-8">
              Each team must consist of 2-5 students with one faculty advisor
              (supervisor).
            </li>
            <li className="ml-8">
              Projects can be presented individually or as a team with a maximum
              of five (5) members, including the Group Leader/Supervisor.
            </li>
          </ul>
        </li>

        {/* Project Requirements */}
        <li className="p-6 hover:bg-gray-100 rounded-4xl">
          <h5 className="text-lg font-medium">Project Requirements:</h5>
          <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-2.5">
            <li className="ml-8">
              The project must be a result of Capstone Design within the last
              two years.
            </li>
            <li className="ml-8">
              Participants must submit an initial proposal, project report, and
              product proposal.
            </li>
          </ul>
        </li>

        {/* Submission Requirements */}
        <li className="p-6 hover:bg-gray-100 rounded-4xl">
          <h5 className="text-lg font-medium">Submission Requirements:</h5>
          <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-2.5">
            <li className="ml-8">
              Entries must include a completed entry form, Abstract, Poster and
              a Payment Slip as proof of registration.
            </li>
            <li className="ml-8">
              The abstract must be written in English and clearly explain the
              project’s objectives, methodology, and impact.
            </li>
            <li className="ml-8">
              The poster must be in English and visually represent the
              innovation effectively.
            </li>
          </ul>
        </li>

        {/* Judging Criteria */}
        <li className="p-6 hover:bg-gray-100 rounded-4xl">
          <h5 className="text-lg font-medium">Judging Criteria:</h5>
          <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-2.5">
            <li className="ml-8">Innovation</li>
            <li className="ml-8">Sustainability</li>
            <li className="ml-8">Industrial Impact</li>
            <li className="ml-8">Technical Implementation</li>
          </ul>
        </li>

        {/* Category Selection */}
        <li className="p-6 hover:bg-gray-100 rounded-4xl">
          <h5 className="text-lg font-medium">Category Selection:</h5>
          <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-2.5">
            <li className="ml-8">
              The correct category selection will help participants achieve the
              best marks. However, the organizer reserves the right to reassign
              participants to a different category based on the subject matter.
            </li>
          </ul>
        </li>

        {/* Participant Names & Modifications */}
        <li className="p-6 hover:bg-gray-100 rounded-4xl">
          <h5 className="text-lg font-medium">
            Participant Names & Modifications:
          </h5>
          <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-2.5">
            <li className="ml-8">
              Group members will be registered according to the names listed on
              the entry form, and any changes are NOT allowed.
            </li>
          </ul>
        </li>

        {/* Language to be used */}
        <li className="p-6 hover:bg-gray-100 rounded-4xl">
          <h5 className="text-lg font-medium">Language to be used:</h5>
          <ul className="list-outside list-disc flex flex-col gap-y-0.5 mt-2.5">
            <li className="ml-8">
              For ABSTRACT, the usage of English and Bahasa Indonesia are
              allowed.
            </li>
            <li className="ml-8">For POSTER, participants MUST use English.</li>
            <li className="ml-8">
              Only FIVE (5) shortlisted participants from each class will be
              called for pitching session that will be held on September 8th
              2025 for a TOP 5 and best award winner selection.
            </li>
            <li className="ml-8">
              For participants that are not called for pitching session, the
              participant and award (Gold, Silver and Bronze) certificates will
              be mailed after closing ceremony on September 2025.
            </li>
            <li className="ml-8">
              No refunds will be issued if participants wish to withdraw from
              the competition.
            </li>
            <li className="ml-8">
              Decisions of panels are FINAL. Any complaints will not be
              entertained.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Rules;
