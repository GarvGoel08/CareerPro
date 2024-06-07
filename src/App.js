import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import OTP from "./pages/OTP";
import Login from "./pages/Login";
import Career from "./pages/Career";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verifyotp" element={<OTP/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
