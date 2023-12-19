import React, { useRef } from 'react'
import lang from "../Utils/languageConstants"
import { useDispatch, useSelector } from 'react-redux'
import openai from '../Utils/openai';
import { API_OPTIONS } from './constants';
import { addGptMovieResult } from '../Utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store)=> store.config.lang) ;
  const searchText =useRef(null);
   
  //search movie in tmdb
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",API_OPTIONS);
    
    const json= await data.json();
    return json.results;
  }


const handleGptSearchClick = async ()=>{
  // make an api call to gpt ai and get movie results

  const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +searchText.current.value+
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
   
  const gptResults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    //after this we will get arrays of movies becuase of split
    //for each movie i will search in tmdb api

    const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie) );
    //we will get more then 1 promises
    
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({ movieNames : gptMovies , movieResults:tmdbResults}));

}  
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' w-1/2  bg-white grid grid-cols-12 rounded-xl' onSubmit={(e)=> e.preventDefault()} >
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9 bg-black text-white ' placeholder={lang[langkey].gptSearchPlaceholder}/>
            <button className=' m-4 py-2 px-4 bg-red-800  col-span-3 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar