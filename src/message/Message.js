import React, { useState, useEffect } from "react";
import { useSocketContext } from "../Socket/Socket";

const Message = () => {
  const [sender, setSender] = useState("64e602e6655faf323405963c");
  const [receiver, setReceiver] = useState("64e60300655faf323405963f");

  const [message, setMessage] = useState("");
  const socket = useSocketContext();

  const handleMessage = () => {
    const data = { sender, receiver, message, message_type: "text" };
    socket.emit("message", data);
    setMessage("");
  };

  useEffect(() => {
    const message = (data) => {
      console.log(data, "message");
    };

    socket.on("message", message);

    return () => {
      socket.off("message", message);
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div>
      <h1>Send Message</h1>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleMessage}>Send</button>
    </div>
  );
};

export default Message;
