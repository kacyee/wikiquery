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
      let index = innerHTML.toLowerCase().indexOf(findValue.toLowerCase());
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
    for (var i = 0; i < elements.length; i++) {
      let innerHTML = elements[i].innerHTML;
      let index = innerHTML.toLowerCase().indexOf(findValue);
      let highlighted = '<span class="highlight">' + findValue + "</span>";
      if (index > -1) {
        innerHTML = innerHTML.replace(new RegExp(findValue, "gi"), highlighted);
        elements[i].innerHTML = innerHTML;
      }
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
