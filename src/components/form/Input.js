import React, { useState } from "react";

function Input({ id, type, label, placeholder, passedValue = "" }) {
  const [value, setValue] = useState(passedValue);
  const onChangeHandler = (e) => {
    console.log(value);
    setValue(e.target.value);
  };
  return (
    <div className="ui field">
      <label htmlFor={id}>
        {label}
        <input
          className="ui"
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </label>
    </div>
  );
}

export default Input;
