import { BG_SEARCH_URL } from "../utils/constants";

const GptSearchBar = () => {
  return (
    <div
      className="h-full pt-40 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BG_SEARCH_URL})` }}
    >
      <form className="flex items-center justify-between gap-2 w-9/12 m-auto relative">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="border border-[#D8D5CE] rounded-3xl pl-3 pr-12 h-12 w-full text-xl text-[#D8D5CE] placeholder-[#D8D5CE] outline-0"
        />
        <button className="absolute w-10 h-10 bg-red-500 flex items-center justify-center rounded-full right-1 text-white cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
