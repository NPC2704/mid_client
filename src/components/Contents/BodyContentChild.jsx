import React, { useState } from "react";
import styled from "styled-components";
import Data from "../../Data/DataBodyContent";
const BodyContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;
const TitleContent = styled.div`
  width: 80%;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 20px;
  height: 20%;
  display: flex;
  color: #ced2da;
  font-weight: 700;
  align-items: center;
  padding-left: 5px;
`;
const TitleContent1 = styled.div`
  width: 80%;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 20px;
  height: 20%;
  display: flex;
  color: #ced2da;
  font-weight: 700;
  align-items: center;
  padding-left: 5px;
`;
const BoxNote = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  width: 230px;
  height: fit-content;
  background-color: #151515;
  padding-bottom: 10px;
  border-radius: 5px;
`;

const BodyContentChild = () => {
  const [toggleList, setToggleList] = useState(Array(Data.length).fill(false));
  const [toggle, setToggle] = useState(false);
  const handleToggle = (index) => {
    const updatedToggleList = [...toggleList];
    updatedToggleList[index] = !updatedToggleList[index];
    setToggleList(updatedToggleList);
  };
  return (
    <BodyContent>
      {Data.map((index, i) => (
        <BoxNote key={index.id}>
          {index.title}
          <TitleContent
            key={index.id}
            style={{
              backgroundColor: "rgba(179, 179, 179, 0.2)",
              borderRadius: "5px",
              paddingLeft: "5px",
              paddingRight: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 30,
              color: "white",
            }}
          >
            <p onClick={() => setToggle(!toggle)} style={{ fontSize: "15px" }}>
              {index.task}
            </p>
            {index.tagTrash}
          </TitleContent>

          <form
            style={toggleList[i] ? { display: "block" } : { display: "none" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <div>
                {" "}
                <input
                  type="text"
                  style={{
                    backgroundColor: "rgba(179, 179, 179, 0.2)",
                    width: "100%",
                    height: 100,
                    borderRadius: "5px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    display: "flex",
                    outline: "none",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "white",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  <input
                    type="submit"
                    style={{
                      background: "#5d73d0",
                      marginTop: "8px",
                      padding: "5px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  />
                  <div
                    onClick={() => handleToggle(i)}
                    style={{
                      background: "#5d73d0",
                      marginTop: "8px",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    X
                  </div>
                </div>
              </div>
            </div>
          </form>

          <TitleContent
            style={
              toggleList[i]
                ? {
                    display: "none",
                  }
                : {
                    borderRadius: "5px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "white",
                  }
            }
          >
            <div
              onClick={() => handleToggle(i)}
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              {index.tagPlus} {index.addTask}
            </div>
            {index.tagTable}
          </TitleContent>
        </BoxNote>
      ))}
      <div
        style={
          toggle == true
            ? {
                position: "absolute",
                zIndex: "100",
                width: "100px",
                height: "100px",
                background: "Blue",
              }
            : { display: "none" }
        }
      >
        <div onClick={() => setToggle(!toggle)}>X</div>
      </div>
    </BodyContent>
  );
};

export default BodyContentChild;
