import React, { useState } from "react";
const Find = () => {
  const [findValue, setFindValue] = useState("");
  const handleChange = event => {
    setFindValue(event.target.value);
  };
  const handleSingleFind = () => {
    let firstHighlighted = document.getElementsByClassName("highlight")[0];
    if (firstHighlighted) {
      let oldValue = firstHighlighted.innerHTML;
      firstHighlighted.innerHTML = firstHighlighted.innerHTML.replace(
        oldValue,
        findValue
      );
      firstHighlighted.classList.remove("highlight");
    }
  };
  const handleAllFinds = () => {
    let elements = document.getElementsByClassName("highlight");
    console.log(elements.length);
    for (var i = 0; i < elements.length; i++) {
      let oldValue = elements[i].innerHTML;
      console.log(i);
      elements[i].innerHTML = elements[i].innerHTML.replace(
        oldValue,
        findValue
      );
      elements[i].classList.add("nonHighlight");
    }
  };
  return (
    <div className="findUs">
      <input
        type="text"
        name="findText"
        value={findValue}
        onChange={handleChange}
        placeholder="Replace with"
      />
      <div className="buttons">
        <input
          className="singleFind"
          type="submit"
          onClick={handleSingleFind}
          value="Replace"
        />
        <input
          className="singleFind"
          type="submit"
          onClick={handleAllFinds}
          value="Replace all"
        />
      </div>
    </div>
  );
};

export default Find;
