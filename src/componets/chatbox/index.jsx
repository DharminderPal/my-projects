
// import { useState } from "react";
// import "./chatbox1.css";
// import Chatbubble from "../chatbubble";
// const ChatBox = (mesg) => {
  
// const [mesg, setMesg] = useState([
//     {
//       id: 1,
//       message: "Hello",
//       role: "user",
//     },
//     {
//       id: 2,
//       message: "Hi there! How can I assist you today?",
//       role: "bot",
//     },
//   ]);
//   return (
//     <div className="chatbox">
//       {mesg.map((msg) => (
//         <Chatbubble key={msg.id} msg={msg} />
//       ))}
//     </div>
//   );
// };

// export default ChatBox;

import { useState } from "react";
import "./chatbox1.css";
import Chatbubble from "../chatbubble";





const ChatBox = ({ mesg }) => { 
  return (
    <div className="chatbox">
      {mesg.map((msg) => (
        <Chatbubble key={msg.id} msg={msg} />
      ))}
    </div>
  );
};

export default ChatBox;