import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-80 text-white pl-4  relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Ratted Movies"} movies={movies.nowTopRattedMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowUpcomingMovies}
          />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
