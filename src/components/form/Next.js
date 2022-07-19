import React from "react";

function Next({ text, direction, onClick }) {
  return (
    <div>
      <button
        className={`ui ${direction} floated ${direction} labeled icon blue button`}
        onClick={onClick}
      >
        <i className={`${direction} arrow icon`}></i>
        {text}
      </button>
    </div>
  );
}

export default Next;
