import React, { useState } from "react";
import Data from "../../Data/DataHeader";
import { MenuApp, ThreeDots } from "react-bootstrap-icons";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleResponsive } from "../../redux/responSlice";
const Left = styled.div`
  width: 600px;
  height: 80%;
  display: flex;
  align-items: center;
  opacity: 1;
`;

const Logo = styled.p`
  font-size: 17px;
  padding: 0 18px;
  color: #c3cada;
  cursor: pointer;
  font-weight: 400;
`;
const Opition2 = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
const NameOpition = styled.p`
  font-size: 11px;
  color: #768aad;
  margin: 0 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MenuS = styled.div`
  font-size: 20px;
  margin: 0 10px 0 20px;
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
    background: #151515;
  }
`;
const HeaderLeft = () => {
  const [respone, setRespone] = useState("0");

  const responsive = useSelector((state) => state.respon.responsive);
  const dispatch = useDispatch();

  const handleToggleResponsive = () => {
    setRespone(responsive);
    dispatch(toggleResponsive());
  };
  return (
    <Left>
      {/* <Option1 style={{ display: "none" }} toggle1={toggle1} /> */}
      <MenuS>
        <MenuApp onClick={handleToggleResponsive} />
      </MenuS>
      <Logo>Constructor</Logo>
      <Opition2>
        {Data.map((index) => (
          <NameOpition key={index.id}>{index.title}</NameOpition>
        ))}
        <ThreeDots size={16} fill={"#768aad"} style={{ marginLeft: "10px" }} />
      </Opition2>
    </Left>
  );
};

export default HeaderLeft;
