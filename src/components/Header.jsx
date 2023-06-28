import React from "react";

import {
  Search,
  MenuApp,
  FileEarmarkPerson,
  BellFill,
  XCircleFill,
  ThreeDots,
} from "react-bootstrap-icons";
import styled from "styled-components";
import HeaderLeft from "./Headers/HeaderLeft";
import HeaderRight from "./Headers/HeaderRight";

const Container = styled.div`
  height: 60px;
  width: 100%;
  background: #2b2b2b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #353434;
`;

const Header = () => {
  return (
    <Container>
      <HeaderLeft />
      <HeaderRight />
    </Container>
  );
};

export default Header;
