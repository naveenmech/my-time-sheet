import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./routes/signup/Signup";
import Welcome from "./routes/welcome/Welcome";
import PersonalDetails from "./routes/personalDetails/personalDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Signup />}></Route>
        <Route path={"/welcome"} element={<Welcome />}></Route>
        <Route path={"/personalDetails"} element={<PersonalDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
