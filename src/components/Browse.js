import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRattedMovies from '../hooks/useTopRattedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  const showGptSearch =useSelector((store)=>store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRattedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearch/> : <> <MainContainer/>  <SecondaryContainer/> </>  //react fragment <> </> beacuse there are tow component in two linest
      }
  
    </div>

  )
}

export default Browse
