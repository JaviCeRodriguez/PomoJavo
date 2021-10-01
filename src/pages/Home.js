import React from "react";
import Container from "../components/Container/container";
import Header from "../components/Header/header";
import Pomodoro from "../components/Pomodoro/pomodoro";

const Home = () => {
  return (
    <Container>
      <Header />
      <Pomodoro />
    </Container>
  );
};

export default Home;
