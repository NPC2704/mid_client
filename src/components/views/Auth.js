import React from "react";

import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import { AuthContextProviders } from "../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const Auth = ({ authRoutes }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContextProviders);

  let body;

  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  else if (isAuthenticated) return <Navigate to="/home" />;
  else
    body = (
      <>
        {authRoutes === "login" && <LoginForm />}
        {authRoutes === "register" && <RegisterForm />}
      </>
    );

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">{body}</div>
      </div>
    </div>
  );
};

export default Auth;
