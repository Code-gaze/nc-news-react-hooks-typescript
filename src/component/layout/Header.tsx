import * as React from "react";
import logo from "../icon/034-microphone.svg";
import { AnimatedText } from "../hooks/AnimatedText";

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <img src={logo} alt="title" className="logo" id="logo" />
      <AnimatedText textColor="#06b9f0" overlayColor="#73e607">
        Nc News{" "}
        <span role="img" aria-label="say no evil">
          🙊️
        </span>
      </AnimatedText>
    </header>
  );
};

export default Header;
