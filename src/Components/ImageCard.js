import React from "react";

function ImageCard({ image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-500 text-sm ">
          Photo by <span className="text-teal-400">{image.user}</span>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
