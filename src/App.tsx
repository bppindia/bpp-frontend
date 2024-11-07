import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./pages/SignupPage/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
