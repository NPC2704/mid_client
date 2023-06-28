import React from "react";
import styled from "styled-components";
import { ThreeDots, FileEarmarkPerson } from "react-bootstrap-icons";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LogoUser = styled.div`
  font-size: 20px;
  margin: 10px 10px;
  margin-left: 30px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: #c3cada;
  background-color: #66666620;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  &:hover {
    opacity: 0.9 !important;
    transition: all ease-in-out 4s;
    background-color: black;
  }
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

  margin: 10px 10px;
  margin-right: 30px;
`;
const HeaderOpition = () => {
  return (
    <Header>
      <LogoUser>
        <FileEarmarkPerson></FileEarmarkPerson>
      </LogoUser>
      <Icons>
        <ThreeDots></ThreeDots>
      </Icons>
    </Header>
  );
};

export default HeaderOpition;
