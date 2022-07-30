import React from "react";
import "./SearchSelector.css"
const SearchSelector = (props) => {
  const clickHandler = (event) => {
    console.log(event.target.value);
    console.log(props.page);
    props.onSearchSelected(event.target.value);
  };
  
  if (props.page === "search") {
    return (
      <header className="search_selector">
        <button onClick={clickHandler} value={"images"}>
          Пошук зображень
        </button>
        <button onClick={clickHandler} value={"extended"}>
          Розширений пошук
        </button>
      </header>
    );
  } else {
    return (
      <header className="search_selector">
        <button onClick={clickHandler} value={"search"}>
          Звичайний пошук
        </button>
      </header>
    );
  }
};

export default SearchSelector;
