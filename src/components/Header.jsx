import { Link, NavLink } from "react-router-dom";
import sidebarImg from "../assets/sidebar.png";
function Header({showSidebar, setShowSideBar}) {
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
    <header className="relative flex flex-row w-[100%] ">
        <nav className=" flex flex-row w-full justify-end items-center px-[5vw]">
        
              {!showSidebar && <NavLink
                onClick={sidebarToggler}
                className="nav-link sidebartoggler ps-[4vw]"
                id="headerCollapse"
              >
                <img className="w-10" src={sidebarImg} alt="" />
              </NavLink>}
            

            <ul className="flex items-center justify-end space-x-4 w-full">
              <li className="nav-item">
                <NavLink className="nav-link relative">
                  Report Analysis
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link relative">
                  Query
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link relative">
                  Generate Report
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link relative" to={'/register'}>
                  Logout
                </NavLink>
              </li>
            </ul>
          
        </nav>
      
    </header>
  );
}

export default Header;
