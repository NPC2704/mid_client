import React from "react";
import styled from "styled-components";

import HeaderContent from "./HeaderContent";
import BodyContentChild from "./BodyContentChild";
const Container = styled.div`
  width: 77%;
  height: 100%;
  display: flex;
  background-color: #2b2b2b;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 95%;
  width: 95%;
  border: 0.5px solid #353434;
  border-radius: 10px;
`;

const BodyContents = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderContent />
        <BodyContentChild />
      </Wrapper>
    </Container>
  );
};

export default BodyContents;
