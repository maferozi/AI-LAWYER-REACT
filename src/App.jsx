import { useEffect, useState } from "react";
import "./App.css";
import "simplebar-react/dist/simplebar.min.css";
import "react-loading-skeleton/dist/skeleton.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import Login from "./containers/auth/login";
import Register from "./containers/auth/register";
import AppLayout from "./components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { clearMesage, meRequest } from "./redux/action/auth.action";
import UnauthorizedRoute from "./components/UnautherizedRoute";
import PrivateRoute from "./components/PrivateRoute";
import Swal from "sweetalert2";
import Chat from "./containers/Chat";
import { SkeletonTheme } from "react-loading-skeleton";
import { ClimbingBoxLoader } from "react-spinners";

export let globalNavigate;

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    globalNavigate = navigate;
  }, [navigate]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meRequest());
  }, []);

  const { error, meLoading, loading, success } = useSelector(
    (state) => state.auth
  );
  if (error && error.message) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      timer: 3000,
    });
  } else if (success) {
    Swal.fire({
      icon: "success",
      title: "Congrats",
      text: success,
      timer: 3000,
    });
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(clearMesage());
    }, 3000);
    return () => clearTimeout(timeout);
  }, [error, success]);

  return (
    <SkeletonTheme>
      {meLoading ? (
        <div className="flex h-[100vh] w-full justify-center items-center">
          <ClimbingBoxLoader
            color="#000000"
            loading
            size={50}
            speedMultiplier={2}
            aria-label="Loading..."
          />
        </div>
      ) : (
        <Routes>
          <Route element={<UnauthorizedRoute />}>
            <Route path="/" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Route>
          {!meLoading && (
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<AppLayout />}>
                <Route path="chat/:chatId?" element={<Chat />} />
              </Route>
            </Route>
          )}
        </Routes>
      )}
    </SkeletonTheme>
  );
}

export default App;
