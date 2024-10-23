import { useDispatch, useSelector } from "react-redux";
import { fetchChatRequest } from "../redux/action/chat.action";
import { Link, NavLink, useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ChatTitle({ text = "title", id }) {
  const dispatch = useDispatch();
  const {currentChatId} = useSelector(state=>state.chat)
  const {chatId} = useParams()
  const navigate = useNavigate()
  function handleLoadChat() {
    // dispatch(fetchChatRequest({ chatId: id }));
    navigate(`/chat/${id}`)
  }
  return (
    <div
      onClick={handleLoadChat}
      className={`rounded-xl  p-3 ${id == chatId? 'bg-gradient-to-tl from-white  from-20% via-teal-100 via-30% to-white to-80%': ''} hover:bg-gray-50 hover:cursor-pointer w-full m-3 overflow-hidden`}
    >
      <p className={"text-lg font-normal line-clamp-1 "}>{text}</p>
    </div>
  );
}
