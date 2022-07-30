import React from "react";
import "./Search.css"

const Search = () => {
  return (
    <div className="common_form">
      <form action="https://google.com/search">
        <div>
          <h1>Bamboozle</h1>
        </div>
        <div className="search_string_div">
          <input className="search_string" type="search" name="q" placeholder="Шукай зі мною!" />
        </div>
        <div className="search_button_div">
          <input className="search_button" type="submit" value={"Час відґуґлити!"} />
          <input className="search_button" type="submit" value={"Мені пощастить!"} />
        </div>
        <div>
          <input type="hidden" name="hl" value={"uk"} />
          <input type="hidden" name="lr" value={"(-lang_ru)"} />
        </div>
      </form>
    </div>
  );
};

export default Search;
