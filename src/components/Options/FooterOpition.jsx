import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Footer = styled.div`
  width: 80%;
  height: 30px;

  border: 1px solid #ced2da;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;
const FooterOpition = () => {
  return (
    <ContainerFooter>
      <Footer>
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ margin: "0 10px", color: "blue" }}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ margin: "0 10px", color: "blue" }}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ margin: "0 10px", color: "blue" }}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ margin: "0 10px", color: "blue" }}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ margin: "0 10px", color: "blue" }}
        />
      </Footer>
    </ContainerFooter>
  );
};

export default FooterOpition;
