import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbars/Navbar";
import Option from "./Options/Option";
import BodyContents from "./Contents/BodyContents";
const Container = styled.div`
  width: 100%;
  height: 92.4vh;
  overflow-y: hidden;
  display: flex;
`;
const Content = () => {
  return (
    <Container>
      <Navbar />
      <Option />
      <BodyContents />
    </Container>
  );
};

export default Content;
