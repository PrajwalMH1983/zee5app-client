//It should handle the routing for signup and Login
//whatever the login related specifications are coming right should be managed by this
// In spring we have used /auth for all authentication related stuff
// For all restcontrollers we have mapped requestMapping
//like /movies , /series etc

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

//rafc
export const AuthRouters = () => {
  console.log("Inside the auth Routers");
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};
