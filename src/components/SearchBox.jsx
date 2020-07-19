import React from "react";

const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <form className="max-w-sm mx-auto">
      <input
        className="w-full py-2 px-4 my-2 focus:outline-none border border-solid border-gray-400 mb-8"
        type="search"
        name="q"
        placeholder={placeholder}
        autoComplete="off"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBox;
