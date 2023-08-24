import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Login } from "./containiers";

const App = () => {
  return (
    <div className=" w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <Routes>
        <Route path="/*" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
