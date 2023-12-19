import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return ( movies.nowPlayingMovies && (
    <div className='bg-black text-white'>
    <div className='-mt-72 relative z-20'>
    <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
    <MovieList title={'Top Rated Movies'} movies={movies.nowTopRattedMovies} />
    <MovieList title={'Popular'} movies={movies.nowPopularMovies} />
    <MovieList title={'Upcoming Movies'} movies={movies.nowUpcomingMovies} />
    </div>
    </div>
  )
    
  );
};

export default SecondaryContainer;