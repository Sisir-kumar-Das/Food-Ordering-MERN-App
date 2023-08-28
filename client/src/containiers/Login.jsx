import React, { useState } from "react";
import { LoginBg, Logo } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope } from "../assets/icons";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className=" w-screen h-screen relative overflow-hidden flex">
      {/*  BackGround Image */}
      <img
        src={LoginBg}
        className=" w-full h-full  object-cover absolute top-0 left-0"
        alt="Login Pic"
      />
      {/** content box */}
      <div className=" flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
        <div className=" flex items-center justify-start gap-4 w-full">
          <img src={Logo} className="w-8" alt="Logo fig" />
          <p className="text-headingColor font-semibold text-2xl">City</p>
        </div>
        {/**  WelCome Text */}
        <p className=" text-3xl font-semibold text-headingColor">
          Welcome Back
        </p>
        <p className=" text-xl text-textColor -mt-6">
          Sign in with the following
        </p>
        {/**  Input Section */}
        <div className=" w-full flex flex-col justify-center items-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={"Email"}
            icon={<FaEnvelope className=" text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignup={isSignUp}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
