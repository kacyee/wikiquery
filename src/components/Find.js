import React, { useState } from "react";
const Find = () => {
  const [findValue, setFindValue] = useState("");
  const handleChange = event => {
    setFindValue(event.target.value);
  };
  const handleSingleFind = () => {
    const elements = document.getElementsByClassName("singleQuery");
    var i = 0,
      found = false;
    while (i < elements.length && !found) {
      let innerHTML = elements[i].innerHTML;
      let index = innerHTML.indexOf(findValue);
      if (index > -1) {
        found = true;
        innerHTML =
          innerHTML.substring(0, index) +
          "<span class='highlight'>" +
          innerHTML.substring(index, index + findValue.length) +
          "</span>" +
          innerHTML.substring(index + findValue.length);
        elements[i].innerHTML = innerHTML;
      }
      i++;
    }
  };
  const handleAllFinds = () => {
    const elements = document.getElementsByClassName("singleQuery");
    var i = 0;
    while (i < elements.length) {
      let innerHTML = elements[i].innerHTML;
      let index = innerHTML.toLowerCase().indexOf(findValue.toLowerCase());
      if (index > -1) {
        innerHTML =
          innerHTML.substring(0, index) +
          "<span class='highlight'>" +
          innerHTML.substring(index, index + findValue.length) +
          "</span>" +
          innerHTML.substring(index + findValue.length);
        elements[i].innerHTML = innerHTML;
      }
      i++;
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
