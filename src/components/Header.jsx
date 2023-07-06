import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HeaderLeft from "./Headers/HeaderLeft";
import HeaderRight from "./Headers/HeaderRight";

const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${(props) => (props.darkMode ? "#fff" : "#2b2b2b")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #353434;
  @media (max-width: 768px) {
    height: 50px;
    display: flex;
    justify-content: space-between;
  }
`;

const Header = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <Container darkMode={mode === true}>
      <HeaderLeft />
      <HeaderRight />
    </Container>
  );
};

export default Header;
