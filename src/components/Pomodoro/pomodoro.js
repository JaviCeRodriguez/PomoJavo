import React from "react";
import Button from "../Button/button";
import { Container } from "./pomodoro.styles";

const Pomodoro = () => {
  return (
    <Container>
      <h1>25:00</h1>
      <Button text="START" />
    </Container>
  );
};

export default Pomodoro;
