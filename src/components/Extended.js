import React from "react";
import "./Extended.css";
import ExtendedField from "./ExtendedField";

const Extended = () => {
  const contentUkr = {
    labels: [
      "усі ці слова:",
      "точне слово або фразу:",
      "будь-яке з цих слів:",
      "жодне з цих слів:",
    ],
    descriptions: [
      "Введіть важливі слова: ",
      "Візьміть точні слова в лапки: ",
      "Введіть OR між усіма потрібними словами: ",
      "Поставте знак мінус перед небажаними словами: ",
    ],
    examples: [
      "триколірний рет-тер’єр",
      '"рет-тер’єр"',
      "мініатюрні OR стандартні",
      '-гризун, -"Джек Рассел"',
    ],
  };

  return (
<div className="adv_search_div">
      <ExtendedField
        label={contentUkr.labels[0]}
        description={contentUkr.descriptions[0]}
        example={contentUkr.examples[0]}
      />
      <ExtendedField
        label={contentUkr.labels[1]}
        description={contentUkr.descriptions[1]}
        example={contentUkr.examples[1]}
      />
      <ExtendedField
        label={contentUkr.labels[2]}
        description={contentUkr.descriptions[2]}
        example={contentUkr.examples[2]}
      />
      <ExtendedField
        label={contentUkr.labels[3]}
        description={contentUkr.descriptions[3]}
        example={contentUkr.examples[3]}
      />
      
</div>
  );
};

export default Extended;
