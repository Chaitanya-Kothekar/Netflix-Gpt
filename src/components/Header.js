import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { profileLogo, logo} from './constants';
import { toggleGptSearchView } from '../Utils/gptSlice';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => (store.user))
  const dispatch = useDispatch();
  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggel GPT Search
    dispatch(toggleGptSearchView());
  }

 

  return (
    <div className=' absolute bg-gradient-to-b from-black flex w-full z-10  justify-between' >
      <img className="  px-3  w-64 " src={logo} alt='logo' />
      {user && (<div className='flex p-2'>
      <button className='py-1 px-2 m-6  bg-white  font-bold rounded-2xl ' onClick={handleGptSearchClick}>GPT Search</button>
        <img className=" h-10 my-6 mx-2 w-10" src={profileLogo} alt='profileLogo' />
        <button onClick={handleSignout} className='mx-4   font-bold text-white'>[ Log Out ]</button>

      </div>
      )}
    </div>


  )
}

export default Header