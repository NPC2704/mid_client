import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContextProviders } from "../contexts/AuthContext";
import Spinner from "react-bootstrap/Spinner";
import Home from "../../pages/Home";

const ProtectedRoute = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContextProviders);

  if (authLoading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );

  return isAuthenticated ? (
    <>
      {" "}
      <Home />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
