import React from "react";
import {
  Search,
  FileEarmarkPerson,
  BellFill,
  XCircleFill,
  BoxArrowRight,
} from "react-bootstrap-icons";
import { logout } from "../../utils/apiRoutes";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "../../redux/userRedux";
import { publicRequest } from "../../requestMethods";

const Right = styled.div`
  width: 530px;
  height: 80%;
  display: flex;
  align-items: center;
`;
const Info = styled.div`
  background-color: #515255;
  border-radius: 25px;
  width: 300px;
  height: 80%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Icon = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border: transparent;
`;
const SearchName = styled.input`
  height: 100%;
  width: 85%;
  border: none;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: transparent;
  color: #768aad;
  outline: none;
  ::placeholder {
    color: red;
    opacity: 1;
  }
`;

const Name = styled.div`
  background-color: #151515;
  border-radius: 25px;
  width: 90px;
  height: 80%;
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Avatar = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  color: #ced2da;
  border: transparent;
  margin-right: 10px;
`;
const UserName = styled.p`
  display: flex;
  align-items: center;
  color: #ced2da;
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
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    padding: 10px;
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
  cursor: pointer;
  justify-content: center;
  &:hover {
    background: red;
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    padding: 10px;
    margin-right: 10px;
  }
`;
const HeaderRight = () => {
 
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logoutStart());

    try {
      await publicRequest.post(logout);

      // Gửi action để cập nhật Redux store với trạng thái đăng xuất
      dispatch(logoutSuccess());
    } catch (err) {
      // Xử lý lỗi nếu có
      dispatch(logoutFailure());
    }
  };
  return (
    <Right>
      <Info>
        <Icon>
          <Search color="#7285a5" />
        </Icon>
        <SearchName placeholder="Search products or others..."></SearchName>
      </Info>
      <Name>
        <Avatar>
          <FileEarmarkPerson />
        </Avatar>
        <UserName>Cong</UserName>
      </Name>
      <Notify>
        <BellFill size={16} fill={"#fff"} />
      </Notify>
      <Close>
        <XCircleFill size={16} fill={"#fff"} />
      </Close>
      <Close onClick={handleLogout}>
        <BoxArrowRight size={16} fill={"#fff"} />
      </Close>
    </Right>
  );
};

export default HeaderRight;
