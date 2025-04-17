import React from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <>
      <ToastContainer />
      <Outlet></Outlet>
    </>
  );
};

export default Root;
