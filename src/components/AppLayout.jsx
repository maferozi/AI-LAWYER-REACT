import { Outlet } from "react-router";
import Sidebar from "./SideBar"
import Header from "./Header";
// import { logout } from "@redux/actions/auth.actions";
import LayoutScroll from "./LayoutScroll";
import { useState } from "react";

function AppLayout() {
//   const user = useSelector(selectCurrentUser);

//   const dispatch = useDispatch();
//   const handleLogout = () => {
    // dispatch(logout());
//   ;
//   const childComponentProps = {
    // user,
    // handleLogout,
//   };
const [showSidebar, setShowSideBar] = useState(false)
  return (
    <div id="main-wrapper" className={`relative ${showSidebar? '':''}`}>
      <aside  className="relative  with-vertical">
        <div id='sidebar-wrapper' className={` ${showSidebar === false? 'left-sidebar':'show-sidebar'} `}>
          <Sidebar showSidebar={showSidebar} setShowSideBar={setShowSideBar}/>
        </div>
      </aside>
      <div className="absolute w-[100vw]  top-3 flex flex-col">
        <Header showSidebar={showSidebar} setShowSideBar={setShowSideBar} />  

       <LayoutScroll>
          <Outlet />
        </LayoutScroll>
      </div>
    </div>
  );
}

export default AppLayout;
