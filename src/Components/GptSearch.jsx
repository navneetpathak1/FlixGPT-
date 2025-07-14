import GptSearchSuggestion from "./GPT/GptSearchSuggestion";
import GptSearchBar from "./GPT/GptSearchBar";
import FrontImage from "./FrontImage";

const GptSearch = () => {
  return (
    <div className="relative w-full h-screen">
      <FrontImage />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
        <GptSearchBar />
        <GptSearchSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
