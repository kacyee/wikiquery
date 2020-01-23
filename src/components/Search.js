import React, { useState, useEffect } from "react";
const Search = props => {
  const [searchValue, setSearchValue] = useState("");
  const [counter, setCounter] = useState(0);
  const handleChange = event => {
    setCounter(counter + 1);
    setSearchValue(event.target.value);
    if (
      searchValue &&
      searchValue !== event.target.value &&
      counter % 2 === 0
    ) {
      props.search(searchValue);
    }
  };
  const changedValue = event => {
    event.preventDefault();
    props.search(searchValue);
  };
  useEffect(() => {
    const elements = document.getElementsByClassName("singleQuery");
    for (var i = 0; i < elements.length; i++) {
      let innerHTML = elements[i].innerHTML;
      let index = innerHTML.toLowerCase().indexOf(searchValue);
      let highlighted = '<span class="highlight">' + searchValue + "</span>";
      if (index > -1) {
        innerHTML = innerHTML.replace(
          new RegExp(searchValue, "gi"),
          highlighted
        );
        elements[i].innerHTML = innerHTML;
      }
    }
  });
  return (
    <form className="searchForm">
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search phrase"
        onKeyDown={handleChange}
      />
      <input onClick={changedValue} type="submit" value="search" />
    </form>
  );
};

export default Search;
