import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false); // Trạng thái chế độ sáng/tối
  const user = useSelector((state) => state.user.currentUser);

  // Hàm xử lý chuyển đổi chế độ sáng/tối
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={darkMode ? "dark" : "light"}>
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
