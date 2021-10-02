import React from "react";
import { StyledHeader } from "./header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">PomoJavo</div>
      <ul>
        <li>
          📊&nbsp;<span>Stats</span>
        </li>
        <li>
          🔮&nbsp;<span>Config</span>
        </li>
        <li>
          👤&nbsp;<span>Login</span>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
