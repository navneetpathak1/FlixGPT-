import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/_e44da759-63a6-4b3f-8a5e-9a1f0ff899e7.jpeg";

import { onAuthStateChanged, signOut } from "firebase/auth";

import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));

        if (
          window.location.pathname === "/" ||
          window.location.pathname === "/login"
        ) {
          navigate("/browser");
        }
      } else {
        dispatch(removeUser());

        // If user is on protected route, redirect to login/home
        if (window.location.pathname === "/browser") {
          navigate("/login");
        }
      }
    });

    return unsubscribe;
  }, [dispatch, navigate]);

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-gradient-to-b from-black/70 to-transparent z-20">
      <div className="h-15 w-35">
        <img
          src={logoImage}
          alt="Logo"
          className="h-full w-full object-contain"
        />
      </div>

      {data === "Sign Out" ? (
        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          {data}
        </button>
      ) : data === "Login" ? (
        <Link to="/login">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            {data}
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            {data}
          </button>
        </Link>
      )}
    </header>
  );
};

export default Header;
