const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-14 px-12 text-white">
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-sm md:text-base max-w-2xl">{overview}</p>
      </div>
      <div className="flex gap-3 mb-6">
        <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-opacity-80 transition">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white px-4 py-2 rounded font-semibold hover:bg-opacity-50 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};



export default VideoTitle;
