import React from "react";
import { Link } from "react-router-dom";
import tickLogo from "../../assests/images/tick-logo.png";

function Welcome() {
  return (
    <>
      <div className="flex flex-col gap-6 items-center my-[12rem] bg-green-200 p-6 sm:ml-[11rem] sm:mr-[11rem] pt-[5rem] pb-[5rem]  lg:mr-[30rem] lg:ml-[30rem] rounded-md">
        <div className="flex">
          <div>
            <img
              src={tickLogo}
              alt="Tick Logo"
              className="w-6 h-6 mr-2 animate-ping gap-3"
            />
          </div>
          <div>
            <p className="font-bold text-green-800">Sign up successful!</p>
          </div>
        </div>
        <div>
          <Link to={"/personalDetails"}>
            <button className=" mb-2 p-5 cursor-pointer	  px-5 py-1 font-medium text-white bg-[#1d4ed8] hover:bg-[#6366f1] rounded">
              Next >>>
            </button>
          </Link>
          
        </div>
      </div>

      {/* <div className="flex flex-col">
        <div className="flex items-center justify-center bg-green-200 p-4 rounded">
          <img src={tickLogo} alt="Tick Logo" className="w-6 h-6 mr-2" />
          <p className="font-bold text-green-800">Sign up successful!</p>

          <div className="flex flex-col">
            <Link to={"/personalDetails"}>
              <button className=" mb-9 p-5 cursor-pointer	  px-5 py-1 font-medium text-white bg-[#1d4ed8] hover:bg-[#6366f1] rounded">
                Next >>>
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Welcome;
