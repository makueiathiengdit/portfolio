import React from "react";

function AddButton({ text, onClick }) {
  return (
    <button className="ui primary button" onClick={onClick}>
      {text}
    </button>
  );
}

export default AddButton;
