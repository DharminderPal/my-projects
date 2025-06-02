
import './App.css'
import { useState } from 'react'
import Chatpage from './componets/chatpage'
import DhatFooter from './componets/DhatFooter'
import Chatbox from './componets/chatbox'
import MenuPage from './componets/pages/Menupage'
import Login from './componets/login'
import About from './componets/page/about'
import LoginForm from './componets/loginForm'
import ErrorBoundary from './componets/ErrorBoundary'
// import Header from './componets/header'
import { BrowserRouter, Route, Routes } from 'react-router'
const App = () => {
  const [messages, setm] = useState([
    // {
    //   id: 1,
    //   message: "Hello",
    //   role: "user",
    // },
    // {
    //   id: 2,
    //   message: "Hi there! How can I assist you today?",
    //   role: "bot",
    // },
  ]);

  return (
   <>
<BrowserRouter>
<ErrorBoundary>
    <Routes>
      <Route path='/loginForm' element={<LoginForm/>} />
      <Route path='/' element={<MenuPage/>} />
      <Route path='/chat' element={<Chatpage/>} />
      <Route path='/login' element={<Login/>} />
      {/* <Route path='/header' element={<Header/>} /> */}
      <Route path='/about' element={<About />} />
      <Route path='/chatbox' element={<Chatbox msg={messages} />} />
      <Route path = '/Dhatfooter' element ={<DhatFooter setMessage={setm}/>}/>
      </Routes>
      </ErrorBoundary>
</BrowserRouter>
      {/* <MenuPage/> */}
      <Chatbox mesg={messages} /> 
      {/* <Chatpage/> */}
      <DhatFooter setMessage={setm}/>
    </>
  )
}

export default App
