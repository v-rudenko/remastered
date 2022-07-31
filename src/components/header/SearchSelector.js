import React, { useState } from "react";
import "./SearchSelector.css";


const SearchSelector = (props) => {

  const [buttonStyle, SetButtonStyle] = useState("blue");

  const clickHandler = (event) => {
    console.log(event.target.value);
    console.log(props.page);
    props.onSearchSelected(event.target.value);
  };
  const selector_button = (
    <button
      className="search_selector_button"
      id="search_images_button"
      onPointerEnter={pointerHandler}
      onClick={clickHandler}
      value={"images"}
    >
      Пошук зображень
    </button>
  );

  const pointerHandler = (event) => {
    console.log("Змінити колір на...");
    console.log(event);
    SetButtonStyle("red");
    event.target.style.backgroundColor = buttonStyle;
  };
  const mouseLeave = (event) => {
    console.log("Змінити колір на...");
    console.log(event);
    SetButtonStyle("blue");
    event.target.style.backgroundColor = buttonStyle;
  };

  if (props.page === "search") {
    return (
      <header className="search_selector">
        <button
          className="search_selector_button"
          id="search_images_button"
          onMouseEnter={pointerHandler}
          onMouseLeave={mouseLeave}
          style={{backgroundColor: buttonStyle}}
          onClick={clickHandler}
          value={"images"}
        >
          Пошук зображень
        </button>
        <button
          className="search_selector_button"
          id="search_extended_button"
          onClick={clickHandler}
          value={"extended"}
        >
          Розширений пошук
        </button>
      </header>
    );
  } else {
    return (
      <header className="search_selector">
        <button
          className="search_selector_button"
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
