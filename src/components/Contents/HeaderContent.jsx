import React from "react";
import styled from "styled-components";

import HeaderContentLeft from "./HeaderContentLeft";
import HeaderContentRight from "./HeaderContentRight";
const HeaderContents = styled.div`
  width: 100%;
  height: 8%;
  color: #ced2da;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #353434;
`;
const HeaderContent = () => {
  return (
    <HeaderContents>
      <HeaderContentLeft />
      <HeaderContentRight />
    </HeaderContents>
  );
};

export default HeaderContent;
