// import { useState, useRef } from "react";
// import "./footer.css"

// const DhatFooter = ({setMessage}) => {

// // const ref = useRef();
//     // const
// /*useref can be used to  on rendring the value to store the value  it does not reset the value 
// for others variales.

// abb jab bhi useref ka use karte hai toh iska value reset nhi h ota or function ko bhi call bar bar bar  nhi krta hai 

// */ 
// const refinput = useRef(); /* asking for interview */


// const onsend=(e)=>{
//     const value =refinput.current.value;
    
//     setMessage((dis)=>[...dis,
    
//     { id: Date.now, 
//         message: {value},
//         role: "user", 
//         created_at:Date.now()
//     }
        
//     ])
// // console.log(value);

// }
// // inputref.current.value = ""; 


//     return (
//         <div className="chatfooter">
//             <input  ref={refinput}     className="input" placeholder="write here..." />
//             <button   onClick={onsend}    className="btn1" >Send ➤</button>
//         </div>
//     );

// };


// export default DhatFooter;

import { useRef } from "react";
import "./footer.css"
import aichat from "../../ai/service/chat";

const DhatFooter = ({ setMessage }) => {  
    const refinput = useRef();

   const onsend = async (e) => {
    const value = refinput.current.value;
    setMessage((prevMessages) => [
        ...prevMessages,
        {   
            id: Date.now(),
            message: value,
            role: "user", 
            created_at: Date.now()

           
        },
        {
              id: Date.now(),
            message: "Thinking...",
            isThinking:true,
            role: "bot", 
            created_at: Date.now() 
        }
    ]);

    const botmsg = await aichat(value);  
    
    
    setMessage((prevMessages) => [
        ...prevMessages,
        {   
            id: Date.now(),
            message: botmsg, 
            role: "bot", 
            created_at: Date.now() 
        }
    ]);

    refinput.current.value = "";
};





    return (
        <div className="chatfooter">
            <input 
                ref={refinput}
                className="input" 
                placeholder="write here..." 
            />
            <button onClick={onsend} className="btn1">Send ➤</button>
        </div>






    );
};


export default DhatFooter;










