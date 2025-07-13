import { Link } from "react-router-dom";
import logoImage from "../assets/_e44da759-63a6-4b3f-8a5e-9a1f0ff899e7.jpeg";

const Header = ({ data }) => {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-gradient-to-b from-black/70 to-transparent z-20">
      <div className="h-15 w-35 ">
        <img src={logoImage} alt="Logo" className="h-full w-full object-contain" />
      </div>
      {data === "Login" ? (
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
