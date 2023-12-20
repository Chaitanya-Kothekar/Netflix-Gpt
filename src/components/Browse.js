import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearch/> : <> <MainContainer/>  <SecondaryContainer/> </>  //react fragment <> </> beacuse there are tow component in two linest
      }
  
    </div>
  );
};
export default Browse;
