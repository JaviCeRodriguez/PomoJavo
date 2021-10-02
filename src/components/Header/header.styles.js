import styled from "styled-components";

export const StyledHeader = styled.nav`
  width: 100vw;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #4c376e;

  .logo {
    margin: 0 0.5rem;
    font-size: 1.7rem;
    font-weight: 800;
    text-shadow: 0.2rem 0.2rem rgba(31, 39, 27, 0.5);
    color: #fff;
  }

  ul {
    display: flex;
    margin: 0 0.5rem;
  }

  li {
    padding: 0.1rem 0.5rem;
    margin-left: 0.4rem;
    color: #1f271b;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: rgba(220, 199, 190, 0.8);
    border-radius: 0.2rem;
  }
`;
