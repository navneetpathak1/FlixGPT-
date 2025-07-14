import React, { useRef, useState } from "react";
import Header from "./Header";
import FrontImage from "./FrontImage";
import validateInputForm from "../utils/validateInputForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const validateForm = () => {
    // If the user is signing up (not signing in)
    if (!isSignIn) {
      const nameValue = name.current.value;
      if (!nameValue.trim()) {
        setErrMessage("Name is required");
        return; // Stop here if no name
      }
    }

    // Validate email and password inputs
    const message = validateInputForm(
      email.current.value,
      password.current.value
    );
    if (message) {
      setErrMessage(message);
      return; // Stop here if validation failed
    } else {
      setErrMessage(""); // Clear any previous error
    }

    // Sign up flow
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    }
    // Sign in flow
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const ToggleEvents = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative min-h-screen">
      <FrontImage />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header data={"Front Page"} />

        <main className="flex flex-col items-center justify-center flex-grow px-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black/70 p-8 rounded-md shadow-lg space-y-4 w-full max-w-sm"
          >
            <h1 className="text-2xl font-bold text-white text-center">
              {!isSignIn ? "Sign up " : "Sign In"}
            </h1>
            {errMessage && (
              <p className="text-2xl font-bold text-red-500 text-center">
                {errMessage}
              </p>
            )}

            {!isSignIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition font-semibold"
              onClick={validateForm}
            >
              Submit
            </button>
            <h1
              className="font-light text-white cursor-pointer"
              onClick={ToggleEvents}
            >
              {!isSignIn ? "Already a user: Sign In " : "New user Sign up"}
            </h1>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
