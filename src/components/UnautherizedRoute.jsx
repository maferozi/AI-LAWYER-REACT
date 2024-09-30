import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UnauthorizedRoute = ({ redirectTo = "/dashboard" }) => {
  const {user} = useSelector(state=>state.auth);

  return !user ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default UnauthorizedRoute;
