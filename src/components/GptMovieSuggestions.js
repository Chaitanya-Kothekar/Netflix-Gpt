import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className='p-4 mt-0  md:mt-6 bg-black  bg-opacity-90
     text-white font-bold'>
      <div>
        {movieNames.map((movieNames,index)=>(
          <MovieList key={movieNames} title={movieNames} movies={movieResults[index]}/>
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
