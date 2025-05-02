const Accordion = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="cursor-pointer w-full flex justify-between items-center p-4 text-left rounded-xl hover:bg-gray-100 bg-white transition-colors duration-300"
        onClick={onToggle}
      >
        <span className="text-base font-medium text-gray-800">{title}</span>
        <svg
          className={`min-w-4 w-4 min-h-4 h-4 text-gray-500 transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pt-0 text-gray-600 text-sm md:text-base">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
