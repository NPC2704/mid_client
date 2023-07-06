import React from "react";
import styled from "styled-components";
import Data from "../../Data/DataHeaderContentLeft";

const HeaderContentLefts = styled.div`
  display: flex;
  width: 50%;
  height: 100%;

  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 50px;
  }
`;
const HeaderContentLeftChild = styled.div`
  height: 100%;

  cursor: pointer;
  display: flex;
  margin: 0 10px;
  &:hover {
    border-bottom: 2px solid #6f8bff;
    color: #6f8bff;
  }
  @media (max-width: 768px) {
    margin: 0 5px;
  }
`;
const Title = styled.div`
  color: #e8e8e9;
  font-size: 15px;
  margin-left: 5px;
  @media (max-width: 768px) {
    font-size: 10px;
    margin-left: 5px;
  }
`;
const HeaderContentLeft = () => {
  return (
    <HeaderContentLefts>
      {Data.map((index) => (
        <HeaderContentLeftChild
          key={index.id}
          style={index.id === 2 ? { borderBottom: "2px solid #6f8bff" } : null}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {index.tag}
            <Title>{index.nameIcon}</Title>
          </div>
        </HeaderContentLeftChild>
      ))}
    </HeaderContentLefts>
  );
};

export default HeaderContentLeft;
