import React from "react";
import styled from "styled-components";

import Data from "../../Data/DataNavbar";
const Top = styled.div`
  width: 100%;
  height: 50%;

  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
const NavbarTop = () => {
  return (
    <Top>
      <div>
        {Data.map((index) => (
          <Icons key={index.id}> {index.tag} </Icons>
        ))}
      </div>
    </Top>
  );
};

export default NavbarTop;
