import React, { useState } from "react";

function TextArea({ id, label, placeholder }) {
  const [value, setValue] = useState(placeholder);
  return (
    <div className="ui field">
      <label htmlFor={id}>
        {label}
        <textarea
          id={id}
          rows="2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {value}
        </textarea>
      </label>
    </div>
  );
}

export default TextArea;
