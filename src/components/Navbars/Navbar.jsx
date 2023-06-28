import React from "react";
import styled from "styled-components";
import {
  CompassFill,
  StarFill,
  ChatDotsFill,
  BarChartFill,
  Globe,
  Building,
} from "react-bootstrap-icons";

import Logo1 from "../../assets/logo.jpg";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";
const Container = styled.div`
  width: 5%;
  height: 100%;
  background-color: #2b2b2b;
  position: relative;
`;

const Top = styled.div`
  width: 100%;
  height: 50%;

  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0px;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: #66666620;
  color: #c3cada;
  padding: 5px;
  border: transparent;
  margin-right: 10px;
  margin: 10px 10px;
`;

const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;
const Navbar = () => {
  return (
    <Container>
      <NavbarTop />
      <NavbarBottom />
    </Container>
  );
};

export default Navbar;
