import React from "react";

const HomeNavigation = ({ scrollToWhatIsIconic }) => {
  const content = [
    {
      title: "What is ICONIC?",
      desc: "Pelajari lebih lanjut tentang ICONIC 2025 dan tujuannya",
      onClick: scrollToWhatIsIconic,
    },
    {
      title: "Competition Details",
      desc: "Lihat informasi lengkap tentang Capstone Design Competition 2025",
    },
    {
      title: "Submission Guidelines",
      desc: "Panduan lengkap untuk pendaftaran dan pengumpulan proposal",
    },
    {
      title: "Important Dates",
      desc: "Cek jadwal penting dan tenggat waktu kompetisi",
    },
  ];

  return (
    <>
      {content?.map((value, key) => {
        return (
          <li key={key} className="w-full">
            <button
              onClick={value.onClick}
              className="flex flex-col gap-y-2 p-6 rounded-3xl transition duration-200 bg-lime-200 hover:bg-lime-300 hover:shadow-md active:bg-lime-400 active:scale-95 cursor-pointer w-full h-full"
            >
              <h4 className="text-left text-2xl text-[#1c1b1d] font-medium">
                {value?.title}
              </h4>
              <p className="text-left text-[#1c1b1d] text-base">
                {value?.desc}
              </p>
            </button>
          </li>
        );
      })}
    </>
  );
};

export default HomeNavigation;
