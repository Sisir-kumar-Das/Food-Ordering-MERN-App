import React, { useState } from "react";
import { LoginBg, Logo } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonCLick } from "../animations";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [consfirmPassword, setConsfirmPassword] = useState("");
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
          {isSignUp
            ? "Sign Up with the following"
            : "Sign In with the following"}
        </p>
        {/**  Input Section */}
        <div className=" w-full flex flex-col justify-center items-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className=" text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignup={isSignUp}
            id="email"
          />
          <LoginInput
            placeHolder={"Password Here"}
            icon={<FaLock className=" text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignup={isSignUp}
            id="pass"
          />
          {isSignUp && (
            <LoginInput
              placeHolder={"Confirm Password Here"}
              icon={<FaLock className=" text-xl text-textColor" />}
              inputState={consfirmPassword}
              inputStateFunc={setConsfirmPassword}
              type="password"
              isSignup={isSignUp}
              id="con_pass"
            />
          )}
          {!isSignUp ? (
            <p>
              Doesn't have an account:{" "}
              <motion.button
                {...buttonCLick}
                className=" text-red-600 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(true)}
              >
                Create One
              </motion.button>{" "}
            </p>
          ) : (
            <p>
              ALready have an account:{" "}
              <motion.button
                {...buttonCLick}
                className=" text-red-600 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignUp(false)}
              >
                Sign-in here
              </motion.button>{" "}
            </p>
          )}

          <motion.button
            {...buttonCLick}
            className=" w-full px-4 py-2  rounded-xl bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
          >
            {isSignUp ? "Sign Up" : "Sign in"}
          </motion.button>
        </div>

        <div className="flex items-center justify-between gap-16">
          <div className=" w-24 h-[1px] rounded-md bg-white"></div>
          <p className=" text-white">or</p>
          <div className=" w-24 h-[1px] rounded-md bg-white"></div>
        </div>

        <motion.div
          {...buttonCLick}
          className=" flex items-center justify-center px-20 py-2 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4"
        >
          <FcGoogle />
          <p className="capitalize text-base text-headingColor">
            Signin with Google
          </p>
          <div></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
