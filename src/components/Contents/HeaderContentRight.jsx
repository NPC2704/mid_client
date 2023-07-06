import React, { useState } from "react";
import styled from "styled-components";
import { FolderFill, TrashFill, SunFill, Moon } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../redux/themeSlice";
import Data from "../../Data/DataHeaderContentRight";
const HeaderContentRights = styled.div`
  transition: background-color 0.3s ease;
  width: 17%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
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
  const [darkMode, setDarkMode] = useState(false);

  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggleMode = () => {
    setDarkMode(mode);
    dispatch(toggleMode());
  };
  return (
    <HeaderContentRights darkMode={darkMode}>
      <Notify>
        <FolderFill size={16} fill={"#fff"} />
      </Notify>
      <Notify>
        <TrashFill size={16} fill={"#fff"} />
      </Notify>

      <Notify onClick={handleToggleMode}>
        {darkMode === true ? (
          <Moon size={16} fill={"#fff"} />
        ) : (
          <SunFill size={16} fill={"#fff"} />
        )}
      </Notify>
    </HeaderContentRights>
  );
};
export default HeaderContentRight;
