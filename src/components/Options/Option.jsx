import React from "react";
import styled from "styled-components";
import Avt from "../../assets/profile.jpg";
import HeaderOption from "./HeaderOpition";
import Optionss from "./Optionss";
import FooterOpition from "./FooterOpition";
const Container = styled.div`
  width: 18%;
  height: 100%;
  background-color: #2b2b2b;
  position: relative;
  border-left: 0.5px solid #353434;
`;

const User = styled.div`
  width: 100%;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const NameUser = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmailUser = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Option = () => {
  return (
    <Container>
      <HeaderOption />
      <User>
        <img
          src={Avt}
          alt=""
          style={{
            width: "auto",
            height: "90%",
            borderRadius: "50%",
            padding: 5,
            border: "1px solid #7e7e7e",
          }}
        />
      </User>
      <NameUser>
        <p style={{ color: "#ced2da" }}>Công</p>
      </NameUser>
      <EmailUser>
        <p style={{ color: "#7386a8", fontSize: "10px" }}>
          cong.dev.it@gmail.com
        </p>
      </EmailUser>
      <Optionss />
      <FooterOpition />
    </Container>
  );
};

export default Option;
