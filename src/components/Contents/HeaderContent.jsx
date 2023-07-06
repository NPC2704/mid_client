import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import HeaderContentLeft from "./HeaderContentLeft";
import HeaderContentRight from "./HeaderContentRight";

const HeaderContents = styled.div`
  background-color: ${(props) => (props.darkMode ? "#fff" : "#2b2b2b")};
  color: ${(props) => (props.darkMode ? "#2b2b2b" : "#fff")};
  width: 100%;
  height: 8%;
  color: #ced2da;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #353434;
  @media (max-width: 768px) {
    margin: 0 10px;
    overflow-x: auto;
    width: auto;
  }
`;

const HeaderContent = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <HeaderContents darkMode={mode === true}>
      <HeaderContentLeft />
      <HeaderContentRight />
    </HeaderContents>
  );
};

export default HeaderContent;
