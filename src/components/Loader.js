import React from "react";

function Loader() {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui medium text loader">Loading</div>
      </div>
      <p></p>
      <p></p>
    </div>
  );
}

export default Loader;
