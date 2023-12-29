import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const ChatMessage = (props) => {
  const { name, message } = props;
  return (
    <div className="flex my-4">
      <p className="text-2xl">
        <FaRegCircleUser />
      </p>
      <span className="mx-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
