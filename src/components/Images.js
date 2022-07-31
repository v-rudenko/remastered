import React from "react";
import "./Images.css";
const Images = () => {
  return (
    <div className="common_form">
      <form action="https://google.com/search">
        <div>
          <h1>Bamboozle</h1>
          <h2>Для зображень</h2>
        </div>
        <div className="search_string_div">
          <input className="search_string" type="search" name="q" placeholder="Не любиш читати? Шукай картинки!" />
          <input type="hidden" name="tbm" value={"isch"} />
        </div>
        <div>
          <input type="hidden" name="hl" value={"uk"} />
          <input type="hidden" name="lr" value={"(-lang_ru)"} />
        </div>
      </form>
    </div>
  );
};

export default Images;
