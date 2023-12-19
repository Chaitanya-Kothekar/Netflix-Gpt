import React from 'react'
import lang from "../Utils/languageConstants"
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langkey = useSelector((store)=> store.config.lang) 
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' w-1/2  bg-white grid grid-cols-12 rounded-xl'>
            <input type='text' className='p-4 m-4 col-span-9 bg-black ' placeholder={lang[langkey].gptSearchPlaceholder}/>
            <button className=' m-4 py-2 px-4 bg-red-800  col-span-3 text-white rounded-lg'>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar