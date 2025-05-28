// import './App.css'
// import { useState } from 'react'
// import Chatpage from './componets/chatpage'
// import DhatFooter from './componets/DhatFooter'
// import Chatbox from './componets/chatbox'
// import MenuPage from './componets/pages/Menupage'

// const App = () => {
//   const [messages, setMessages] = useState([
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
// <>
// {/* <MenuPage/> */}
// <Chatbox  msg={messages}/>
// <Chatpage/>
// <DhatFooter   setMessage={setMessages}/>
// </>

//   )



// }

// export default App


import './App.css'
import { useState } from 'react'
import Chatpage from './componets/chatpage'
import DhatFooter from './componets/DhatFooter'
import Chatbox from './componets/chatbox'
import ErrorBoundry from './componets/ErrorBoundary'
import MenuPage from './componets/pages/Menupage'

const App = () => {
  const [messages, setm] = useState([
    {
      id: 1,
      message: "Hello",
      role: "user",
    },
    {
      id: 2,
      message: "Hi there! How can I assist you today?",
      role: "bot",
    },
  ]);

  return (
    <>
      {/* <MenuPage/> */}
    <ErrorBoundry>

      <Chatbox mesg={messages} />  {/* Pass messages to Chatbox */}
      
      <Chatpage/>
      <DhatFooter setMessage={setm}/>
      
      
      </ErrorBoundry> 
    </>
  )
}

export default App
