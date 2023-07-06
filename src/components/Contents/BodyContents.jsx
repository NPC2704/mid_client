import React from "react";
import styled from "styled-components";
import HeaderContent from "./HeaderContent";
import BodyContentChild from "./BodyContentChild";

import { useSelector } from "react-redux";
const Container = styled.div`
  width: 77%;
  height: 100%;
  display: flex;
  background-color: ${(props) => (props.darkMode ? "#fff" : "#2b2b2b")};
  color: black;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
    overflow-x: hidden;
  }
`;
const Wrapper = styled.div`
  height: 95%;
  width: 95%;
  border: 0.5px solid #353434;
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

const BodyContents = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <Container darkMode={mode === true}>
      <Wrapper>
        <HeaderContent />
        <BodyContentChild />
      </Wrapper>
    </Container>
  );
};

export default BodyContents;
