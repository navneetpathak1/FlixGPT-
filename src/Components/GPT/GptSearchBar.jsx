import { useSelector } from "react-redux";
import { lang } from "../../utils/languageConstant";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  return (
    <div className="absolute top-[10%] left-0 w-full flex justify-center">
      <form className="flex w-full max-w-2xl bg-black py-6">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="flex-1 px-4 py-2 rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
        <button
          type="submit"
          className="bg-blue-700 font-semibold text-white px-4 py-2 rounded-r hover:bg-blue-800 transition"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
