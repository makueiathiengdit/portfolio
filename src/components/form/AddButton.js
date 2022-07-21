import React from "react";

function AddButton({ text, onClick }) {
  return (
    <button className="primary fluid ui icon button" onClick={onClick}>
      <i className="plus icon"></i>
      {/* {text} */}
    </button>
  );
}

export default AddButton;
