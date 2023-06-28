import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Home from "./pages/Home";
import Auth from "./components/views/Auth";
import ProtectedRoute from "./components/routing/ProtectedRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Auth authRoutes="login" />} />
        <Route
          exact
          path="/register"
          element={<Auth authRoutes="register" />}
        />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
