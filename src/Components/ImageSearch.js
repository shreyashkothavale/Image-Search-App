import React, { useState } from "react";

function ImageSearch({ searchText }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto focus-within:shadow-lg  ">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center  bg-gray-100 focus-within:bg-white ">
          <input
            onChange={(e) => setText(e.target.value)}
            className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-light focus:outline-none roundend"
            type="text"
            placeholder="Search image.."
          />
          <button
            className="flex-shrink-0 bg-green-500 text-white hover:bg-green-300 text-sm py-2 px-2 rounded "
            type="submit"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
