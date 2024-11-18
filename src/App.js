import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import HomPage from "./components/Papacasa homepage/HomPage";
import SignUp from "./components/sign up page/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
