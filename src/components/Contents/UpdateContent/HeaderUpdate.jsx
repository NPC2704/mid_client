import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Data from "../../../Data/DataBodyContent";
import axios from "axios";
import { XCircleFill, Share } from "react-bootstrap-icons";
import { updateWork } from "../../../utils/apiRoutes";
const ContainerHeaderUpdate = styled.div`
  width: 100%;
  height: 15%;
  display: flex;

  margin-bottom: 20px;
  justify-content: space-between;
  border-bottom: 1px solid #4544445f;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  align-items: center;
`;
const HeaderUpdateLeft = styled.div`
  display: block;
  margin-left: 25px;
  width: 20%;
  color: white;
  @media (max-width: 768px) {
    width: 40%;
  }
`;
const Close = styled.div`
  font-size: 20px;

  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: #c3cada;
  background-color: #66666620;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  justify-content: center;
  &:hover {
    background: red;
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    padding: 10px;
  }
`;
const HeaderUpdateRight = styled.div`
  height: 70%;
  display: flex;
  position: relative;
`;
const TableTitle = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  height: 35%;
  width: 140px;
  background-color: #151515;
  border-radius: 20px;
  padding-bottom: 15px;
  z-index: 1000;
`;
const HeaderUpdate = ({
  bodyUpdate,
  toggle,
  onClick,
  headerUpdate,
  loadData,
}) => {
  const array = ["TO DO", "IN WORK", "REVIEW", "DONE"];
  const [toggleTitle, setToggleTitle] = useState(false);
  const [update, setUpdate] = useState({
    bid: null,
    id_title: "",
  });

  useEffect(() => {
    setUpdate((prevUpdate) => ({
      ...prevUpdate,
      bid: bodyUpdate,
    }));
  }, [bodyUpdate]);

  const handleShare = (e) => {
    updateWorkService(update);
  };
  const updateWorkService = async () => {
    return axios
      .put(updateWork, update)
      .then((res) => {
        if (res.status === 200) {
          loadData();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <ContainerHeaderUpdate>
      <HeaderUpdateLeft>
        <p style={{ fontSize: 20, fontWeight: 700 }}>{headerUpdate}</p>
        <p style={{ fontSize: 15 }}>In the table {headerUpdate}</p>
      </HeaderUpdateLeft>
      <HeaderUpdateRight>
        <Close onClick={() => setToggleTitle(!toggleTitle)}>
          <Share size={16} fill={"#fff"} />
        </Close>
        <Close toggle={toggle} onClick={onClick}>
          <XCircleFill size={16} fill={"#fff"} />
        </Close>
        <TableTitle
          style={
            toggleTitle === true
              ? {
                  position: "absolute",
                  top: "50px",
                  right: "50px",
                  height: "192px",
                  width: "140px",
                  backgroundColor: "#151515",
                  borderRadius: "20px",
                  paddingBottom: 10,
                  zIndex: 1000,
                }
              : { display: "none" }
          }
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5px",
              color: "white",
            }}
          >
            <p>Select 1 table</p>
          </div>
          {array.map((index) => {
            if (headerUpdate === index) {
              return (
                <div
                  style={{
                    height: "20%",
                    width: "100%",
                    marginTop: 5,
                    display: "none",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <input
                    type="radio"
                    name="radio-choose-table"
                    id=""
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "black",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "200",
                      color: "white",
                    }}
                  >
                    {index}
                  </p>
                </div>
              );
            } else {
              return (
                <div
                  style={{
                    height: "20%",
                    width: "100%",
                    marginTop: 5,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <input
                    onClick={() => {
                      if (index === "TO DO") {
                        setUpdate({
                          ...update,
                          id_title: 1,
                        });
                      } else if (index === "IN WORK") {
                        setUpdate({
                          ...update,
                          id_title: 2,
                        });
                      } else if (index === "REVIEW") {
                        setUpdate({
                          ...update,
                          id_title: 3,
                        });
                      } else if (index === "DONE") {
                        setUpdate({
                          ...update,
                          id_title: 4,
                        });
                      }
                    }}
                    type="radio"
                    name="radio-choose-table"
                    id=""
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "black",
                    }}
                  />

                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    {index}
                  </p>
                </div>
              );
            }
          })}
          <div
            style={{
              height: "20%",
              width: "100%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <button
              onClick={handleShare}
              style={{
                height: "70%",
                borderRadius: "20px",
                width: "70%",
                backgroundColor: "#e9ebec",
              }}
            >
              Transfer
            </button>
          </div>
        </TableTitle>
      </HeaderUpdateRight>
    </ContainerHeaderUpdate>
  );
};

export default HeaderUpdate;
