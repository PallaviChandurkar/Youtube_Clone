import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../utiles/chatSlice';
import { useDispatch, useSelector } from "react-redux";
import { generateRandomNames, makeRandomString } from '../utiles/helper';

const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState(" ");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //API Polling
            console.log("API Polling");

            dispatch(addMessage({
              name: generateRandomNames(),
              message: makeRandomString(20)
            }));

        },2000);
        
        return () => clearInterval(i);
    },[]);

  return (
    <>
    <div className="mx-2 h-[465px] px-4 py-2 w-[340px] border border-gray-500 rounded-t-xl overflow-y-scroll flex flex-col-reverse">
      {/* Disclaimer: Don't use indexes as keys */}
      {chatMessages.map((c) => (
        <ChatMessage name={c.name} message={c.message} />
      ))}
    </div>
    <form className='w-[340px] mx-2 p-1 border border-gray-600 rounded-b-xl' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(
        addMessage({
          name: "Pallavi Patil",
          message: liveMessage
        })
      );
      setLiveMessage("");
    }}>
      <input type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} className='w-64 border border-gray-400'/>
      <button className='mx-3 bg-gray-400 px-2'>send</button>
    </form>
    </>
  )
}

export default LiveChat
