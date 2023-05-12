import React from "react";
import { Link } from "react-router-dom";
import loginpic from "../../assests/images/login.jpg";
function Signup() {
  return (
    <>
      <container className="bg-[#eff6ff] w-full h-screen flex items-center justify-center">
        <main className="flex h-[15.9rem] w-2/1">
          <left className="w-1/2 bg-[#c7d2fe] flex items-center justify-center p-[5rem] ">
            <form>
              {/* email */}
              <p className="mt-8">Email</p>
              <input
                type="email"
                placeholder="
              xxxx@gmail.com"
              />

              {/* password */}
              <p className="mt-2 ">Password</p>
              <input
                type="password"
                placeholder="
              xxxx"
              />

              {/* conform password */}
              <p className="mt-2">Confirm Password</p>
              <input
                type="password"
                placeholder="
              xxxx"
              />

              <Link to={"/welcome"}>
                <button className="flex  mt-7 mb-9 p-5 cursor-pointer	  px-5 py-1 font-medium text-white bg-[#1d4ed8] hover:bg-[#6366f1] rounded">
                  Sign up
                </button>
              </Link>
            </form>
          </left>

          <right className="w-2/1 sm:flex ">
            {/* image */}
            <img className="" src={loginpic} alt="loginpic" />
          </right>
        </main>
      </container>
    </>
  );
}

export default Signup;
