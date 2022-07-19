import React from "react";

function RemoveButton({ onClick }) {
  return (
    <>
      <button className="negative mini ui icon  button" onClick={onClick}>
        <i className="times icon"></i>
      </button>
    </>
  );
}

export default RemoveButton;
