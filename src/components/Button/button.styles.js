import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props.type === "full" ? "100%" : "6.5rem")};
  height: ${(props) => (props.type === "full" ? "2.4rem" : "1.8rem")};
  font-size: ${(props) => (props.type === "full" ? "1.3rem" : "0.8rem")};
  font-weight: 700;
  color: ${(props) => (props.type === "full" ? "#dcc7be" : "#1F271B")};
  background-color: ${(props) =>
    props.type === "full" ? "#4c376e" : "#dcc7be"};
  border: none;
  border-radius: ${(props) => (props.type === "full" ? "0" : "0.3rem")};
  cursor: pointer;
`;
