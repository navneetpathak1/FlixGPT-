import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./Containers/MainContainer";
import SecondaryContainer from "./Containers/SecondaryContainer";
import Header from "./Header";


const Browser = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <Header data={"Sign Out"} />
      < MainContainer />
      < SecondaryContainer />
    </div>
  );
};

export default Browser;
