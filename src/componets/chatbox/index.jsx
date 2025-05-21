
import { useState } from "react";
import "./chatbox1.css";
import Chatbubble from "../chatbubble";
const ChatBox = () => {



  return (
    <div className="chatbox">
      {mesg.map((msg) => (
        <Chatbubble key={msg.id} msg={msg} />
      ))}
    </div>
  );
};

export default ChatBox;
