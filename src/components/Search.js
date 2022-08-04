import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchRequest, setSearchRequest] = useState("");

  const redirect = (event) => {
    window.location.replace(`https://www.google.com/search?q=${searchRequest}&btnI=Мені+пощастить&sourceid=navclient&gfns=1&lr=(-lang_ru)`);
  };
  const inputChangeHandler = (event) => {
    setSearchRequest(event.target.value);
  };

  return (
    <div className="common_form">
      <form action="https://google.com/search">
        <div>
          <h1 id="search_title">Bamboozle</h1>
        </div>
        <div className="search_string_div">
          <input
            id="common_search_string"
            className="search_string"
            type="search"
            name="q"
            placeholder="Хто шукає – той знайде!"
            onChange={inputChangeHandler}
            value={searchRequest}
          />
        </div>
        <div className="search_button_div">
          <input
            className="search_button"
            type="submit"
            value={"Час відґуґлити!"}
          />
          <button type="button" onClick={redirect} className="search_button">Мені пощастить!</button>
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
