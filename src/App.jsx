import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router> */}
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={!user ? <Navigate to="/login" /> : <Home />}
          ></Route>
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
