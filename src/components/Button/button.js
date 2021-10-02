import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ text, type }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

export default Button;
