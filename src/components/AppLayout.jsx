import { Outlet, useParams } from "react-router";
import Sidebar from "./SideBar"
import Header from "./Header";
import LayoutScroll from "./LayoutScroll";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allChatRequest, fetchChatRequest } from "../redux/action/chat.action";
import { useSearchParams } from "react-router-dom";

function AppLayout() {
  const{chat, currentChatId}=useSelector(state=>state.chat)

  const {chatId} = useParams()
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(allChatRequest())
  }
  ,[])
  useEffect(()=>{
    // if(currentChatId != -99)
        // dispatch(fetchChatRequest({chatId: currentChatId}))
    if(chatId)
        dispatch(fetchChatRequest({chatId: chatId}))
   }
     ,[chatId])

const [showSidebar, setShowSideBar] = useState(true)
  return (
    <div id="main-wrapper " className={"flex  " + `${showSidebar? '':''}`}>
        <div id='sidebar-wrapper' className={`w-full ${showSidebar === false? 'max-w-[7vw]':'max-w-[25vw]'} `}>
          <Sidebar showSidebar={showSidebar} setShowSideBar={setShowSideBar}/>
        </div>
      <div className="w-full  flex flex-col justify-between pb-5">
        <Header showSidebar={showSidebar} setShowSideBar={setShowSideBar} />
        
        <Outlet />
        
      </div>
    </div>
  );
}

export default AppLayout;
