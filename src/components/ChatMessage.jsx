export default function ChatMessage({
  text = "message",
  type = "prompt" || "response",
}) {
  const classListContainer =
    type === "response"
      ? "bg-gray-500 self-end"
      : "bg-gray-700 self-start";
  const classListChild = type === "response" ? "text-gray-200" : "text-white";
  return (
    <>
      <div className={"rounded-xl p-3 " + classListContainer}>
        <p className={"text-lg font-normal " + classListChild}>{text}</p>
      </div>
    </>
  );
}
