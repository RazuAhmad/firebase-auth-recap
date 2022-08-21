import { Routes, Route } from "react-router-dom";
import "./App.css";
import GoogleGithubSignIn from "./Components/GoogleGithubSignIn/GoogleGithubSignIn";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SignInWithEmailPass from "./Components/SignInWithEmailPass/SignInWithEmailPass";
import SignUpCompo from "./Components/SignUpCompo/SignUpCompo";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clickToSignIn" element={<GoogleGithubSignIn />} />
        <Route path="/emailPassLogIn" element={<SignInWithEmailPass />} />
        <Route path="/singUp" element={<SignUpCompo />} />
      </Routes>
    </div>
  );
};

export default App;
