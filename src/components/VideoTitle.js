import React from "react";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className="absolute w-full bg-gradient-to-r from-black aspect-square md:aspect-video">
      <div className="absolute top-1/3 px-5 md:px-15  w-5/6 md:w-5/12">
        <h1 className="text-3xl md:text-6xl text-white">{title}</h1>
        <h2 className="text-xs my-3 md:text-sm text-white">{overview}</h2>
        <div className="py-3">
          <button className="bg-white text-white md:px-6 px-3 rounded text-xl cursor-pointer transition-all duration-300 bg-opacity-20 hover:bg-opacity-40 md:font-semibold py-2">
            Play
          </button>
          <button className="bg-white text-white md:px-6 px-3 rounded text-xl cursor-pointer transition-all duration-300 bg-opacity-20 hover:bg-opacity-40 md:font-semibold mx-3 md:mx-5 py-2">
            Watch Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
