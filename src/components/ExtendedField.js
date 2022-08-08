import React from "react";


const ExtendedField = props => {
  return (
    <div className="adv_search_field">
    <label>{props.label}</label>
    <div className="adv_search_input">
      <input type="text" />
    </div>
    <div>
      {props.description}
      <span>{props.example}</span>
    </div>
  </div>
  );
};

export default ExtendedField;