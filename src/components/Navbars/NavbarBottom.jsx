import React from "react";
import styled from "styled-components";
import Logo1 from "../../assets/logo.jpg";
const Bottom = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0px;
`;

const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;
const NavbarBottom = () => {
  return (
    <Bottom>
      <div>
        <div style={{ margin: "10px 0" }}>
          <UserAvatar src={Logo1} />
        </div>
        <div style={{ margin: "10px 0" }}>
          {" "}
          <UserAvatar src={Logo1} />
        </div>
        <div style={{ margin: "10px 0" }}>
          {" "}
          <UserAvatar src={Logo1} />
        </div>
      </div>
    </Bottom>
  );
};

export default NavbarBottom;
