import { useDispatch, useSelector } from "react-redux";
import searchImg from "../assets/search.png";
import ChatMessage from "../components/ChatMessage";
import { chatRequest } from "../redux/action/chat.action";
import { useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Chat() {
  const dispatch = useDispatch();
  const {message, chat, currentChatId , messageLoading} = useSelector(state=> state.chat)

  const {chatId} = useParams()

  const inputRef = useRef();
  function handleInput(){
    let prompt = inputRef.current.value;
    dispatch(chatRequest({'text': prompt, chatId:currentChatId}));
    inputRef.current.value = "";
  }
  
  return (
    <div className="overflow-hidden grow flex flex-col items-center pt-5 pl-5 pr-5 gap-5">
      {chatId != null ? <div className="w-11/12 h-[70vh] p-16 grow overflow-y-auto rounded-3xl flex flex-col gap-1 bg-gradient-to-tl from-white  from-20% via-teal-100 via-30% to-white to-80%">
        {  message.map((item, index) => (
          <ChatMessage key={index} text={item.text} type={item.type} />
        ))}
        {messageLoading && <Skeleton count={2} height={40}/>}
      </div> :
      <div className="w-11/12 h-[70vh] pt-5 pb-5 text-7xl font-bold text-white grow overflow-y-auto rounded-3xl flex justify-center items-center gap-1 bg-gradient-to-tl from-white  from-20% via-teal-300 via-30% to-white to-80%">
      Welcome! New Chat
    </div>
      }
      <div className="flex pb-auto flex-row gap-5 w-9/12 items-center justify-center">
        <input
        ref={inputRef}
          type="text"
          className="w-full indent-4 bg-gray-300 h-12 rounded-xl"
        />
        <img onClick={handleInput} className="w-7 h-7 hover:cursor-pointer" src={searchImg} alt="GO" />
      </div>
    </div>
  );
}
