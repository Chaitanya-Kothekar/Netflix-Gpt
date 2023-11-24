
import Header from './Header';
import img1 from '../images/bg2.png';
import { useState } from 'react';



const Login = () => {

  const [ isSign , setisSign] = useState(true);                      //state variable

  const toogleform = () => {
     setisSign(!isSign);                          //setisSign true than issign is false & if it is flase than setissign is true 
  };

  return (
    <div>
      <Header/>
      <div className='absolute w-full'>
          <img className=' w-full' src={img1} alt='bg-img'/>
      </div>
      <form className=' absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 h-4/6  bg-black text-white rounded-lg  bg-opacity-90'>
        <h1 className=' font-bold text-3xl py-4' >{isSign ? "Sign In" : "Sign Up"}</h1>               {/* if isSign is true than use text "Sign" otherwise use "Sign Up" */}
        { !isSign && <input type='text' placeholder='Name' className=' p-4 my-2 w-full bg-gray-700  '/>}   {/* if it is not "isSign" than  show input */}
        <input type='text' placeholder='Email Address' className=' p-4 my-2 w-full bg-gray-700  '/>
        <input type='password' placeholder='Password' className=' p-4 my-2 w-full bg-gray-700'/>
        <button className='p-4 my-4 bg-red-700  w-full rounded-md '>{isSign ? "Sign In" : "Sign Up"}</button> 
        <p className="py-2 cursor-pointer " onClick={toogleform}>{isSign ? "new user? Sign Up" : "registerd already? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login