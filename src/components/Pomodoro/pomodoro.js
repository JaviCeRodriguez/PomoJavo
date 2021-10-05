import React, { useState, useEffect } from "react";
import Button from "../Button/button";
import { StyledPomodoro } from "./pomodoro.styles";

const Pomodoro = () => {
  const initialMode = {
    'Pomodoro': true,
    'Short': false,
    'Long': false
  }
  const initialModeTimer = {
    'Pomodoro': 25,
    'Short': 10,
    'Long': 15
  }
  let initialTimer = initialModeTimer['Pomodoro'] * 60

  const [counter, setCounter] = useState(initialTimer)
  const [toggleCount, setToggleCount] = useState(false)
  const [mode, setMode] = useState(initialMode)

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

  const selectMode = (e) => {
    setToggleCount(false)
    const key = e.target.value
    let modes = mode

    Object.keys(modes).map((k) => {
      k === key ? modes[k] = true : modes[k] = false
    })

    setMode(modes)
    setCounter(initialModeTimer[key] * 60)
  }

  return (
    <StyledPomodoro>
      <div className="mode-wrapper">
        <Button text="Pomodoro" funcEvent={selectMode} />
        <Button text="Short" funcEvent={selectMode} />
        <Button text="Long" funcEvent={selectMode} />
      </div>
      <h1>{twoDigits(Math.floor(counter / 60))}:{twoDigits(Math.floor(counter % 60))}</h1>
      <Button text={toggleCount ? "PAUSE" : "START"} type="full" funcEvent={startCount} />
    </StyledPomodoro>
  );
};

export default Pomodoro;
