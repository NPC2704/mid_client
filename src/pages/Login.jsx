import { React, useState } from "react";
import styled from "styled-components";
import bg from "../assets/bgg.jpg";
import { login } from "../redux/apiCalls";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bg}) center;
  background-size: cover;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 90%;
  max-width: 500px;
  height: 360px;
  background: transparent;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
`;

const Title = styled.h2`
  padding: 40px;
  font-weight: lighter;
  text-transform: uppercase;
  color: #414141;
`;

const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  padding-left: 10px;
  margin: 0 auto;
  border: none;
  color: #ff5722;
  outline: none;
  border-bottom: 1px solid #ff5722;
  text-decoration: none;
`;

const Linkto = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 27px 28%;
  text-transform: uppercase;
  color: black;
  font-weight: lighter;
  transition: 0.5s;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  float: left;
  width: 250px;
  height: 60px;
  margin-top: -10px;
  border: none;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  color: #fff;
  background-color: #ff5722;
  transition: 0.5s;
  @media (max-width: 768px) {
    width: 50%;
    height: 60px;
  }
`;

const Button1 = styled.button`
  cursor: pointer;
  display: inline-block;
  float: left;
  background-color: #673ab7;
  width: 250px;
  height: 60px;
  margin-top: -10px;
  border: none;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  color: #fff;
  transition: 0.5s;
  @media (max-width: 768px) {
    width: 50%;
    height: 60px;
  }
`;

const Heading = styled.h3`
  position: absolute;
  top: -100%;
  left: 20%;
  text-transform: uppercase;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.3);
  transition: 0.3s ease-in-out 1.2s;
`;

const Form = styled.form``;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Linkto href="#" className="link">
            Forgot your password?
          </Linkto>
          <br />
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button1 className="register">
              <span>Register</span>
            </Button1>
          </Link>
          <Button
            className="signin"
            onClick={handleClick}
            disabled={isFetching}
          >
            <span>Login</span>
          </Button>
          {error && <Error>Something went wrong...</Error>}
        </Form>
        <Heading>Your registration is complete!</Heading>
        <Heading>Your sign-in is complete!</Heading>
      </Container>
    </Wrapper>
  );
};

export default Login;
