import { Link } from "react-router-dom";
import FrontImage from "./FrontImage";
import Header from "./Header";

const FrontPage = () => {

  return (
    <div className="relative min-h-screen">
      <FrontImage />
      <div className="relative z-20 min-h-screen bg-transparent flex flex-col">
        <Header  data= {"Login"}/>
        <main className="flex flex-col justify-center items-center flex-grow px-4">
          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
              Unlimited movies, TV shows, and more
            </h1>
            <h2 className="text-white text-2xl font-medium drop-shadow-md">
              Watch anywhere. Cancel anytime.
            </h2>
            <p className="text-white text-lg drop-shadow-md">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <Link to="/login"><button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition text-lg font-semibold">
              Get Started →
            </button></Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FrontPage;
