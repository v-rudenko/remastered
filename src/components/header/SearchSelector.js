import React, { useState } from "react";
import "./SearchSelector.css";

const SearchSelector = (props) => {
  const [buttonStyle, SetButtonStyle] = useState("#0064ff63");

  const clickHandler = (event) => {
    SetButtonStyle("#0064ff63");
    event.target.style.backgroundColor = "#0064ff63";
    console.log(event.target.value);
    console.log(props.page);
    props.onSearchSelected(event.target.value);
  };

  const pointerHandler = (event) => {
    console.log("Змінити колір на...");
    SetButtonStyle("#0064ffe8");
    console.log(buttonStyle);
    event.target.style.backgroundColor = "#0064ffe8";
    event.target.style.cursor = "pointer";
  };
  const mouseLeave = (event) => {
    console.log("Змінити колір на...");
    console.log(buttonStyle);
    SetButtonStyle("#0064ff63");
    event.target.style.backgroundColor = "#0064ff63";
  };

  if (props.page === "search") {
    return (
      <header className="search_selector">
        <div>
          <div>
            <button
              className="search_selector_button"
              id="search_images_button"
              onMouseOver={pointerHandler}
              onMouseLeave={mouseLeave}
              onClick={clickHandler}
              value={"images"}
            >
              Пошук зображень
            </button>
            <button
              className="search_selector_button"
              id="search_extended_button"
              onMouseOver={pointerHandler}
              onMouseLeave={mouseLeave}
              onClick={clickHandler}
              value={"extended"}
            >
              Розширений пошук
            </button>
          </div>
        </div>
      </header>
    );
  } else if (props.page === "extended") {
    return (
      <header>
        <div className="search_selector">
          <button
            className="search_selector_button"
            onMouseOver={pointerHandler}
            onMouseLeave={mouseLeave}
            onClick={clickHandler}
            value={"search"}
          >
            Звичайний пошук
          </button>
        </div>
        <div id="search_selector_label">
          <label>Розширений пошук</label>
        </div>
        <div className="terminator"></div>
      </header>
    );
  } else {
    return (
      <header className="search_selector">
        <button
          className="search_selector_button"
          onMouseOver={pointerHandler}
          onMouseLeave={mouseLeave}
          onClick={clickHandler}
          value={"search"}
        >
          Звичайний пошук
        </button>
      </header>
    );
  }
};

export default SearchSelector;
