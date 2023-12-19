import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import img1 from "../images/bg2.png";

const GptSearch = () => {
  return (
    <div>
    <div className="absolute w-full -z-10">
        <img className=" w-full" src={img1} alt="bg-img" />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch