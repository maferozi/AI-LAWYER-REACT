import logo from "../assets/logo.png";
import sidebarImg from "../assets/sidebar.png";
import logoutImg from "../assets/logout.png";

import { Link, NavLink, useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/auth.action";
import ChatTitle from "./ChatTitle";
import { newChat } from "../redux/action/chat.action";

function Sidebar({ setShowSideBar, showSidebar }) {
  const dispatch = useDispatch();
  const { chat } = useSelector((state) => state.chat);
  const navigate = useNavigate();
  function logoutHandler() {
    dispatch(logout());
  }

  const sidebarToggler = () => {
    showSidebar ? setShowSideBar(false) : setShowSideBar(true);
  };

  function handleNewChat() {
    dispatch(newChat());
    navigate('/chat');
  }

  return (
    <div className="max-w-[30vw] h-[100vh] flex flex-col  pt-5 pb-5 bg-gradient-to-t from-gray-300 from-20% to-white to-80%">
      <div className="flex items-center justify-start">
        <div onClick={handleNewChat} className="hover:cursor-pointer text-nowrap ml-5">
          <img src={logo} className="w-14 pt-3 pl-2" alt="Logo-Dark" />
        </div>
        {showSidebar && (
          <Link
            onClick={sidebarToggler}
            className="sidebartoggler ml-auto mr-5 text-decoration-none text-xl block"
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
          padding: "10px 24px",
          height: "calc(100vh - 200px)",

          // borderRadius: "7px",
          // background: "none",
          // margin: "0 24px",
        }}
        autoHide={false}
      >
        {chat &&
          chat
            .slice()
            .reverse()
            .map((item, index) => (
              <ChatTitle key={index} id={item.chatId} text={item.chatTitle} />
            ))}
      </SimpleBar>

      <div className="p-1 mx-2 mb-2 bg-gray-100 rounded mt-3 ">
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
