import React from "react";
import HeaderTitle from "./header-title";

import "./header.css";

function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <HeaderTitle />
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
