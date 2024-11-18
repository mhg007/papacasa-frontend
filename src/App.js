import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import HomPage from "./components/homepage/HomPage";
import SignUp from "./components/signUpPage/SignUp";
import ForgetPassword from "./components/forget pasword page/ForgetPassword";
import Navbar from "./components/navbar/Navbar";
import ListOne from "./components/lists/List form 1/ListOne";
import ListThree from "./components/lists/List form 3/ListThree";
import ListFive from "./components/lists/List form 5/ListFive";
import ListSeven from "./components/lists/List form 7/ListSeven";
import ListFour from "./components/lists/List form 4/ListFour";
import ListSix from "./components/lists/List form 6/ListSix";
import ListTwo from "./components/lists/List form 2/ListTow";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/" element={<HomPage />} />
          <Route path="/lists/1" element={<ListOne />} />
          <Route path="/lists/2" element={<ListTwo />} />
          <Route path="/lists/3" element={<ListThree />} />
          <Route path="/lists/4" element={<ListFour />} />
          <Route path="/lists/5" element={<ListFive />} />
          <Route path="/lists/6" element={<ListSix />} />
          <Route path="/lists/7" element={<ListSeven />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
