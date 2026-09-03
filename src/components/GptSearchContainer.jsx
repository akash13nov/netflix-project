import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchContainer = () => {
  return (
    <div className="bg-black h-full">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchContainer;
