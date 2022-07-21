import React from "react";

function RemoveButton({ onClick, transparent = true }) {
  return (
    <>
      <button
        className="negative ui medium icon"
        onClick={onClick}
        style={{ border: "none", background: "transparent" }}
      >
        <i className="times icon red"></i>
      </button>
    </>
  );
}

export default RemoveButton;
