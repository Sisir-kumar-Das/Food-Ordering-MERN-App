import React from "react";
import { LoginBg } from "../assets";

const Login = () => {
  return (
    <div className=" w-screen h-screen relative overflow-hidden flex">
      {/*  BackGround Image */}
      <img
        src={LoginBg}
        className=" w-full h-full  object-cover absolute top-0 left-0"
        alt="Login Pic"
      />
      {/** content box */}
      <div className=" flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12"></div>
    </div>
  );
};

export default Login;
