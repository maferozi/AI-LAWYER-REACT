import logo from "../assets/logo.png";
import sidebarImg from "../assets/sidebar.png";
import logoutImg from "../assets/logout.png";

import { Link, NavLink } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action/auth.action";

function Sidebar({setShowSideBar ,showSidebar}) {
  const dispatch = useDispatch()
  
  function logoutHandler(){
    dispatch(logout());
  }
  const sidebarToggler = () => {
    showSidebar? setShowSideBar(false):setShowSideBar(true);
  };

  return (
    <div className="max-w-[30vw]">
      <div className="flex items-center justify-start">
        <NavLink to={"/dashboard"} className="text-nowrap pl-2">
          <img src={logo} className="w-10 pt-3 pl-2" alt="Logo-Dark" />
        </NavLink>
        {showSidebar && (
          <Link
            onClick={sidebarToggler}
            className="sidebartoggler ml-auto text-decoration-none text-xl block"
            data-cy="sidebar-closeButton"
          >
            <img className="w-10 z-10" src={sidebarImg} alt="" />
          </Link>
        )}
      </div> 

      <SimpleBar
        style={{
          maxHeight: "90vh",
          overflowX: "hidden",
          overflowY: "auto",
          padding: "0 24px",
          height: "calc(100vh - 175px)",
          borderRadius: "7px",
        }}
        autoHide={false}
      >
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <span className="ml-2">SIDEBARdssdsds</span>
            </li>
          </ul>
        </nav>
      </SimpleBar>

      <div className="p-1 mx-2 mb-2 bg-gray-200 rounded mt-3">
        <nav className="sidebar-nav">
          <ul>
            <li className="sidebar-item">
              <Link
                onClick={logoutHandler}
                className="flex flex-col items-center justify-center"
                aria-expanded="false"
              >
                <span>
                  <img className="w-7" src={logoutImg} alt="" />
                </span>
                <span className="ml-2">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
