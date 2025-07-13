import React, { useState } from "react";
import Header from "./Header";
import FrontImage from "./FrontImage";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const ToggleEvents = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="relative min-h-screen">
      <FrontImage />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header data={"Front Page"} />

        <main className="flex flex-col items-center justify-center flex-grow px-4">
          <form className="bg-black/70 p-8 rounded-md shadow-lg space-y-4 w-full max-w-sm">
            <h1 className="text-2xl font-bold text-white text-center">
              {!isSignIn? "Sign up ":"Sign In"}
            </h1>
            {!isSignIn && (
              <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            )}
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition font-semibold"
            >
              Submit
            </button>
            <h1 className="font-light text-white cursor-pointer" onClick={ToggleEvents}>
              {!isSignIn? "Already a user: Sign In ":"New user Sign up"}
            </h1> 
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
