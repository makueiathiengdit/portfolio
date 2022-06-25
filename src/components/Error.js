import React from "react";
function Error({ item, message = "Failed to fetch" }) {
  return (
    <div className="ui red horizontal label" style={{ marginLeft: "5px" }}>
      {message} {item}
    </div>
  );
}

export default Error;
