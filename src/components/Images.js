import React from "react";
const Images = () => {
  return (
    <div>
      <form action="https://google.com/search">
        <div>
          <h1>Bamboozle</h1>
          <h2>Для зображень</h2>
        </div>
        <div>
          <input type="search" name="q" placeholder="Не любиш читати? Шукай картинки!" />
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
