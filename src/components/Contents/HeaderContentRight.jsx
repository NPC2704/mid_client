import React from "react";
import styled from "styled-components";
import Data from "../../Data/DataHeaderContentRight";
const HeaderContentRights = styled.div`
  width: 17%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Notify = styled.div`
  font-size: 20px;
  margin: 0 10px 0 10px;
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
const HeaderContentRight = () => {
  return (
    <HeaderContentRights>
      {/* <Notify>
        <FolderFill size={16} fill={"#fff"} />
      </Notify>
      <Notify>
        <TrashFill size={16} fill={"#fff"} />
      </Notify>
      <Notify>
        <SunFill size={16} fill={"#fff"} />
      </Notify> */}
      {Data.map((index) => (
        <Notify key={index.id}>{index.tag}</Notify>
      ))}
    </HeaderContentRights>
  );
};

export default HeaderContentRight;
