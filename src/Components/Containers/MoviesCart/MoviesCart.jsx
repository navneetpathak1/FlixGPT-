import { IMG_URL } from "../../../utils/constant";

const MoviesCart = ({ posterPath }) => {
  return (
    <div className="min-w-[160px] md:min-w-[180px] lg:min-w-[200px] transition-transform duration-300 transform hover:scale-110">
      <img
        className="w-full rounded-lg shadow-lg"
        src={`${IMG_URL}${posterPath}`}
        alt="movie poster"
      />
    </div>
  );
};

export default MoviesCart;
