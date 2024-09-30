import { NavLink, Outlet, useLocation } from "react-router-dom";
import logoPic from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { clearMesage } from "../redux/action/auth.action";
export default function AuthLayout() {
  let loc = useLocation();
 
  return (
    <>
      <div className="relative bg-transparent overflow-hidden flex justify-center items-center w-[100vw] h-[100vh]">
        <nav className="absolute w-[100vw] p-10 top-0 left-0 flex flex-row justify-between items-center">
          <img className="w-16 h-16" src={logoPic} alt="" />
          <NavLink
            to={loc.pathname == "/register" ? "/login" : "/register"}
            className="px-4 py-3  border-black border-2 shadow-lg hover:shadow-teal-900 font-bold"
          >
            {loc.pathname == "/register" ? "Login" : "Register"}
          </NavLink>
        </nav>
        <div className="absolute -z-10 w-[120vw] h-[80vh]  -top-52 -left-10 -rotate-6  bg-gradient-to-r from-teal-300  from-20% via-sky-100 via-40% to-emerald-400 to-80%"></div>

        <Outlet />
      </div>
    </>
  );
}
