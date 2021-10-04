import React, { useState, useEffect } from "react";
import Button from "../Button/button";
import { StyledPomodoro } from "./pomodoro.styles";

const Pomodoro = () => {
  let pomodoroTimer = 25 * 60
  const [counter, setCounter] = useState(pomodoroTimer)
  const [toggleCount, setToggleCount] = useState(false)

  const twoDigits = (num) => {
    return num.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
  }

  const startCount = () => setToggleCount(!toggleCount)

  useEffect(() => {
    if (toggleCount) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter, toggleCount]);

  return (
    <StyledPomodoro>
      <div className="mode-wrapper">
        <Button text="Pomodoro" />
        <Button text="Short" />
        <Button text="Long" />
      </div>
      <h1>{twoDigits(Math.floor(counter / 60))}:{twoDigits(Math.floor(counter % 60))}</h1>
      <Button text={toggleCount ? "PAUSE" : "START"} type="full" funcEvent={startCount} />
    </StyledPomodoro>
  );
};

export default Pomodoro;
