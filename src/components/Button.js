import React, { useState, useEffect } from "react";

function Button({ text = "Print" }) {
  const [show, setShow] = useState(true);

  // remove the button from the document so that it doesn't get printed
  const handleClick = (e) => {
    setShow(false);
    e.target.innerHTML = "";
    window.print();
  };

  useEffect(() => {
    setShow(true);
  }, [show]);
  return (
    <div>
      {show && (
        <button
          className="blue ui fluid button"
          type="button"
          onClick={handleClick}
          style={{ backgroundColor: "#1260CC" }}
        >
          {text}
        </button>
      )}
    </div>
  );
}

export default Button;
