import styled from "styled-components";

export const StyledPomodoro = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f271b;
  width: 100%;
  border-radius: 0.4rem;
  overflow: hidden;

  .mode-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 0.5rem;
  }

  h1 {
    text-align: center;
    margin: 2rem 0;
    font-size: 4.5rem;
    color: #fff;
  }
`;
