import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(
      () =>
        dispatch(
          addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20) + "🚀",
          })
        ),
      1500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="p-2 ml-2 border border-black h-[450px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full border border-black p-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="px-2 w-80"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="px-2 mx-2 bg-green-100 cursor-pointer"
          onClick={() => {
            dispatch(
              addMessage({
                name: "Dwarakesh",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
