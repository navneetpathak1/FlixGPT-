const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-12 px-4 md:px-10 text-white">
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-sm md:text-base max-w-2xl">{overview}</p>
      </div>
      <div className="flex gap-3 mb-8">
        <button className="flex items-center gap-2 bg-white text-black px-4 md:px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700 bg-opacity-70 text-white px-4 md:px-6 py-2 rounded font-semibold hover:bg-opacity-50 transition focus:outline-none focus:ring-2 focus:ring-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;


