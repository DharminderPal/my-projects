import logo from "./logo3.png";
import     "../chatpage/chatheader.css"

const chatheader =()=>{
 
    return(
<header className="chat-header">

<div className="logo-container">
    <img src={logo}  className="logo"/> 
    <p className="heading">Ai Bot</p>
</div>

</header>

    )
}

export default chatheader;