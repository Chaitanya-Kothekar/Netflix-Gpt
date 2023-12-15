import { useState, useRef } from "react";
import { checkValidData } from "../Utils/validate";
import Header from "./Header";
import img1 from "../images/bg2.png";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [isSign, setisSign] = useState(true); //state variable
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonclick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) return;

    if (!isSign) {
      // sign up logic from firebase

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: user.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const { uid, email } = auth.currentUser;
            dispatch{
              addUSer({
                uid: uid,
                email: email,
              })
            };
            // ...
          }).catch((error) => {
            // An erconst errorCode = error.code;
            const errorMessage = error.message;

            seterrorMessage(errorCode + "-" + errorMessage);
            // ...
          });


          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          seterrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      // sign in logic from firebase

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toogleform = () => {
    setisSign(!isSign); //setisSign true than issign is false & if it is flase than setissign is true
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img className=" w-full" src={img1} alt="bg-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}        /*(e)=>e.prevent.default helps to not submit form */
        className=" absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 h-6/6  bg-black text-white rounded-lg  bg-opacity-90"
      >
        <h1 className=" font-bold text-3xl py-1  text-center">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>{" "}
        {/* if isSign is true than use text "Sign" otherwise use "Sign Up" */}
        {!isSign && (
          <input
            type="text"
            placeholder="Name"
            className=" p-4 my-2 w-full bg-gray-700  "
          />
        )}{" "}
        {/* if it is not "isSign" than  show input */}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" p-4 my-2 w-full bg-gray-700  "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-4 my-2 w-full bg-gray-700"
        />
        <button
          className="p-4 my-4 bg-red-700  w-full rounded-md "
          onClick={handleButtonclick}
        >
          {" "}
          {isSign ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer text-center " onClick={toogleform}>
          {isSign ? "new user? Sign Up" : "registerd already? Sign In"}
        </p>
        <p className="text-red-500  text-lg font-bold text-center">
          {errorMessage}
        </p>
      </form>
    </div>
  );
};

export default Login;
