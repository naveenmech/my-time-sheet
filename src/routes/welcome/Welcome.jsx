import React from "react";
// import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      {/* <Link to={"/"}>
        <h1>hello</h1>
      </Link> */}

      <container className="bg-[#eff6ff] w-full h-screen flex items-center justify-center">
        <main className="bg-black  h-[10rem] w-1/2  flex">
          <left className="bg-white w-1/2">hey</left>

          <right className="bg-[#7e22ce] w-1/2 ">hello</right>
        </main>
      </container>
    </>
  );
}

export default Welcome;
