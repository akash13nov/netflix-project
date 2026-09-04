import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const VideoDetails = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="absolute w-screen h-screen aspect-video bg-gradient-to-r from-black/100  to-transparent max-w-xl pt-[20%] px-15">
      <h1 className="text-[#D8D5CE] font-semibold text-[2rem] mb-5">
        {lang[langKey]?.movieTitle || title}
      </h1>
      <p className="text-[#D8D5CE] text-[1rem] mb-7">
        {overview?.length > 170 ? overview.slice(0, 170) + "..." : overview}
      </p>
      <div className="flex gap-3 items-center">
        <button className="border-none rounded-xl py-3 px-6 font-semibold text-[1rem] cursor-pointer flex items-center gap-1.5 bg-white hover:opacity-70">
          ▶ <span className="text-[1rem]">{lang[langKey]?.play || "Play"}</span>
        </button>
        <button className="border-none rounded-xl py-3 px-6 font-semibold text-[1rem] cursor-pointer flex items-center gap-1.5 bg-gray-500 hover:opacity-70">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="12" y1="11" x2="12" y2="16"></line>
            <circle
              cx="12"
              cy="8"
              r="0.6"
              fill="currentColor"
              stroke="none"
            ></circle>
          </svg>
          {lang[langKey]?.unmute || "Unmute"}
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;
