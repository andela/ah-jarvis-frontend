import React from "react";
export const InputField = props => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type={props.type}
          id={props.id}
          className="validate"
          value={props.value}
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
        />
        <label htmlFor={props.id}>{props.label}</label>
      </div>
    </div>
  );
};
