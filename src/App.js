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
import FirstLayOut from "./components/layout/FirstLayOut";
import ProtectedRoute from "./ProtectedRoute";
import MobileNavbar from "./components/mobileNav/MobileNavbar";
import ListEight from "./components/lists/List form 8/ListEight";
import ListNine from "./components/lists/List form 9/ListNine";
import ListTen from "./components/lists/List form 10/ListTen";
import ChangePasword from "./components/Change password/ChangePasword";
import MessagesFirstScreen from "./components/Messages with responsive 1st screen/MessagesFirstScreen";
import Messages2ndscreen from "./components/Messages with responsive 2nd screen/Messages2ndscreen";
import Profile from "./Profil/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}

          {/* <Route element={<FirstLayOut />}> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/reset-password" element={<ChangePasword />} />
              <Route path="/messages-firstScreen" element={<MessagesFirstScreen />} />
              <Route path="/messages-2ndScreen" element={<Messages2ndscreen />} />
              <Route path="/profile" element={<Profile />} />
          {/* </Route> */}

          {/* Protected Routes with Layout */}
          <Route element={<FirstLayOut />}>
            {/* Secured Route */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomPage />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/mobile-nav" element={<MobileNavbar />} />
              <Route path="/lists/1" element={<ListOne />} />
              <Route path="/lists/2" element={<ListTwo />} />
              <Route path="/lists/3" element={<ListThree />} />
              <Route path="/lists/4" element={<ListFour />} />
              <Route path="/lists/5" element={<ListFive />} />
              <Route path="/lists/6" element={<ListSix />} />
              <Route path="/lists/7" element={<ListSeven />} />
              <Route path="/lists/8" element={<ListEight />} />
              {/* <Route path="/lists/9" element={<ListNine />} /> */}
              <Route path="/lists/10" element={<ListTen />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
