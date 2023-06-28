import React from "react";
import styled from "styled-components";
import Data from "../../Data/DataHeaderContentLeft";

const HeaderContentLefts = styled.div`
  display: flex;
  width: 50%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;
const HeaderContentLeftChild = styled.div`
  height: 100%;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  &:hover {
    border-bottom: 2px solid #6f8bff;
    color: #6f8bff;
  }
`;
const Title = styled.div`
  color: #e8e8e9;
  font-size: 15px;
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
            <Title style={{ marginLeft: "5px" }}>{index.nameIcon}</Title>
          </div>
        </HeaderContentLeftChild>
      ))}
    </HeaderContentLefts>
  );
};

export default HeaderContentLeft;
