import React from "react";
import styled from "styled-components";

import Data from "../../Data/DataOpitionContent";
const Options = styled.div`
  width: 100%;
  height: 300px;

  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OptionDad = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const OptionChild = styled.div`
  width: 49%;
  border: 1px solid #4544445f;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #151515;
  }
`;

const Icon = styled.div`
  color: #c3cada;
  font-size: 15px;
`;
const Title = styled.div`
  color: #c3cada;
  font-size: 15px;
`;
const Optionss = () => {
  return (
    <Options>
      <OptionDad>
        {Data.map((index) => (
          <OptionChild
            style={index.id === 2 ? { backgroundColor: " #151515" } : null}
            key={index.id}
          >
            <div>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon>{index.tag}</Icon>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                {" "}
                <Title>{index.title}</Title>{" "}
              </div>
            </div>
          </OptionChild>
        ))}
      </OptionDad>
    </Options>
  );
};

export default Optionss;
