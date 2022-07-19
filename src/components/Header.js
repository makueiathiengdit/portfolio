import React from "react";

function Header() {
  return (
    <div className="ui secondary  menu">
      <a className="active item" href="home">
        Home
      </a>
      <a className="item" href="template">
        Templates
      </a>

      <div className="right menu">
        <a className="ui item blue" href="create">
          Create
        </a>
      </div>
    </div>
  );
}

export default Header;
