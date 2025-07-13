import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";

import FrontPage from "../Components/FrontPage";
import Login from "../Components/Login";
import Browser from "../Components/Browser";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Streamify = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <FrontPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;

        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        // ...


      } else {
        
        dispatch(removeUser())

      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Streamify;
