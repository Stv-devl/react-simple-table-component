import React, { useState } from "react";
import Input from "../input/Input";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="search-bar-container">
      <Input
        name="search"
        labelText="Search"
        setInputValue={setInputValue}
        value={inputValue}
      />
    </div>
  );
};

export default Search;
