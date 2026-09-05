import { useSelector } from "react-redux";
import { BG_SEARCH_URL } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchInputRef = useRef(null);

  const handleSearchClick = async () => {
    console.log("Search Query:", searchInputRef.current.value);

    // Make an API call to GPT API and get Movies result

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchInputRef.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Hera Pheri, zindagi Na Milegi Dobara, 3 Idiots, Dangal, Gadar";

    const gptResults = await openai.responses.create({
      model: "gpt-5.5",
      instructions: "You are a coding assistant that talks like a pirate",
      input: gptQuery,
    });

    console.log(gptResults.output_text);
  };

  return (
    <div
      className="h-full pt-40 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BG_SEARCH_URL})` }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center justify-between gap-2 w-9/12 m-auto relative"
      >
        <input
          ref={searchInputRef}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="border border-[#D8D5CE] rounded-3xl pl-3 pr-12 h-12 w-full text-xl text-[#D8D5CE] placeholder-[#D8D5CE] outline-0"
        />
        <button
          onClick={handleSearchClick}
          className="absolute w-10 h-10 bg-red-500 flex items-center justify-center rounded-full right-1 text-white cursor-pointer"
        >
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
          {/* {lang["en-US"].search} */}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
