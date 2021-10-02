import React from "react";
import Button from "../Button/button";
import { StyledPomodoro } from "./pomodoro.styles";

const Pomodoro = () => {
  return (
    <StyledPomodoro>
      <div className="mode-wrapper">
        <Button text="Pomodoro" />
        <Button text="Short" />
        <Button text="Long" />
      </div>
      <h1>25:00</h1>
      <Button text="START" type="full" />
    </StyledPomodoro>
  );
};

export default Pomodoro;
