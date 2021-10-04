import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ text, type, funcEvent }) => {
  return <StyledButton value={text} type={type} onClick={funcEvent} >{text}</StyledButton>;
};

export default Button;
