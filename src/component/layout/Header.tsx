import * as React from "react";
import logo from "../icon/034-microphone.svg";

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <img src={logo} alt="title" className="logo" id="logo" />
      <h1>
        Nc News
        <span role="img" aria-label="say no evil">
          🙊️
        </span>
      </h1>
    </header>
  );
};

export default Header;
