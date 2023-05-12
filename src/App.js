import React from "react";
// import Signup from "./routes/signup/signup";
import Signup from "./routes/signup/Signup";
// import Welcome from "./routes/welcome/Welcome";
import { Routes, Route } from "react-router-dom";
import Welcome from "./routes/welcome/Welcome";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Signup />}></Route>
        <Route path={"/welcome"} element={<Welcome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
