import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import HomPage from "./components/homepage/HomPage";
import SignUp from "./components/signUpPage/SignUp";
import ListOne from './components/lists/List form 1/ListOne';
import Navbar from './components/navbar/Navbar';
import ListTow from "./components/lists/List form 2/ListTow";
import ListFour from "./components/lists/List form 4/ListFour";
import ListSix from "./components/lists/List form 6/ListSix";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomPage />} />
            <Route path="/list-one" element={<ListOne/>} />
            <Route path="/list-two" element={<ListTow/>} />
            <Route path="/list-four" element={<ListFour/>} />
            <Route path="/list-six" element={<ListSix/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
