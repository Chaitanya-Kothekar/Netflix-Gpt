import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' w-1/2  bg-white grid grid-cols-12 rounded-xl'>
            <input type='text' className='p-4 m-4 col-span-9 bg-black ' placeholder='what would you like to search today ?'/>
            <button className=' m-4 py-2 px-4 bg-red-800  col-span-3 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar