import React from "react";
import Container from "../components/container";
import Header from "../components/header";
import Pomodoro from "../components/pomodoro";

const Home = () => {
  return (
    <Container>
      <Header />
      <Pomodoro />
    </Container>
  );
};

export default Home;
