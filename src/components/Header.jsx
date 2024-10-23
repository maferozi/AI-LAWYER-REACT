import { Link, NavLink } from "react-router-dom";
import logoutImg from "../assets/logout.png";
import sidebarImg from "../assets/sidebar.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action/auth.action";
function Header({showSidebar, setShowSideBar}) {

  const dispatch = useDispatch()
  
  function logoutHandler(){
    dispatch(logout());
  }
  const sidebarToggler = () => {
    showSidebar? setShowSideBar(false):setShowSideBar(true);
   
    // const sidebartoggler = document.querySelector(".sidebartoggler");
    // sidebartoggler.checked = !sidebartoggler.checked;

    // const mainWrapper = document.getElementById("main-wrapper");
    // mainWrapper.classList.toggle("show-sidebar");

    // const body = document.querySelector("body");
    // const dataTheme = body.getAttribute("data-sidebartype");
    // if (dataTheme === "full") {
    //   body.setAttribute("data-sidebartype", "mini-sidebar");
    // } else {
    //   body.setAttribute("data-sidebartype", "full");
    // }
  };

  return (
    
        <nav className=" flex flex-row w-full bg-gradient-to-l from-gray-300 to-white justify-end items-center pl-5 pr-5 pt-5 pb-3">
        
              {!showSidebar && <NavLink
                onClick={sidebarToggler}
                className="nav-link sidebartoggler"
                id="headerCollapse"
              >
                <img className="p-0 w-10 bg-transparent" src={sidebarImg} alt="" />
              </NavLink>}
            

            <ul className="flex items-center justify-end space-x-4 w-full">
              
             
             
              <li className="nav-item">
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
      
    
  );
}

export default Header;
