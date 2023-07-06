import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Avt from "../../../assets/profile.jpg";
import { addComment } from "../../../utils/apiRoutes";
import { ChatDotsFill, ArrowUpRightSquareFill } from "react-bootstrap-icons";
import { getComment } from "../../../utils/apiRoutes";

const Container = styled.div`
  height: 50%;
  width: 100%;
`;

const TopUpdateContent = styled.div`
  height: 30%;
  margin-left: 20px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const TimeSpan = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;
const BottomUpdateContent = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  height: 40px;
  width: 4%;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
const Input = styled.input`
  background-color: #333333;
  padding: 15px 15px;
  margin: 0px 20px;
  border-radius: 5px;
  outline: none;
  color: white;
  width: 80%;
  height: 30px;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const FooterUpdate = ({ bodyUpdate }) => {
  const [addCmt, setAddCmt] = useState({
    id_cmt: 0,
    cmt: "",
  });
  console.log(bodyUpdate);
  const handleSubmid = (e) => {
    e.preventDefault();
    setAddCmt();
    addCommentService(addCmt);
  };
  const [data, setData] = useState([]);

  const loadCmt = () => {
    axios
      .get(getComment)
      .then((response) => {
        // Cập nhật dữ liệu vào state

        setData(response.data.titleData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    loadCmt();
  }, []);

  const addCommentService = async () => {
    return axios
      .post(addComment, addCmt)
      .then((res) => {
        if (res.status === 200) {
          loadCmt();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <TopUpdateContent>
        <ChatDotsFill size={15} fill={"#fff"} />
        <p
          style={{
            fontWeight: 400,
            fontSize: 18,
            marginLeft: 15,
            color: "white",
          }}
        >
          Comment
        </p>
      </TopUpdateContent>
      <BottomUpdateContent>
        <Img src={Avt} alt="" />

        <form onSubmit={handleSubmid} style={{ width: "80%" }}>
          <Input
            onChange={(e) =>
              setAddCmt({ ...addCmt, cmt: e.target.value, id_cmt: bodyUpdate })
            }
            name="comment"
            type="text"
            placeholder="Add detailed job description..."
          />
          <button type="submit">
            <ArrowUpRightSquareFill size={18} color="white" />
          </button>
        </form>
      </BottomUpdateContent>{" "}
      <div>
        {data.map((index) => (
          <BottomUpdateContent
            key={index.id}
            style={{
              justifyContent: "flex-start",
              marginLeft: "15px",
              marginTop: "5px",
              marginLeft: "70px",
            }}
          >
            {index.id_cmt === bodyUpdate ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "white", marginRight: "35px" }}>
                  {index.cmt}
                </span>
                <div
                  style={{
                    backgroundColor: "#333333",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    with: "50px",
                    height: "30px",
                  }}
                >
                  <TimeSpan
                    style={{ color: "white", with: "100px", height: "100px" }}
                  >
                    {index.createdAt}
                  </TimeSpan>
                </div>
              </div>
            ) : (
              <div style={{ display: "none" }}>
                <span>{index.cmt}</span>
                <div style={{ display: "none" }}>
                  <span style={{ color: "white" }}>{index.createdAt}</span>
                </div>
              </div>
            )}
          </BottomUpdateContent>
        ))}
      </div>
    </Container>
  );
};

export default FooterUpdate;
