import React, { useState } from "react";
const Search = props => {
  const [searchValue, setSearchValue] = useState("");
  const [counter, setCounter] = useState(0);
  const handleChange = event => {
    setCounter(counter + 5);
    setSearchValue(event.target.value);
    if (
      searchValue &&
      searchValue !== event.target.value &&
      counter % 10 === 0
    ) {
      props.search(searchValue);
    }
  };
  const changedValue = event => {
    event.preventDefault();
    props.search(searchValue);
  };

  return (
    <form className="searchForm">
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search phrase"
      />
      <input onClick={changedValue} type="submit" value="search" />
    </form>
  );
};

export default Search;
