import React, { useEffect } from "react";
import { useSocketContext } from "../Socket/Socket";

const DeliveredMessages = () => {
  const socket = useSocketContext();

  useEffect(() => {
    const handleOfflineMessages = (data) => {
      if (data.length > 0) {
        console.log(data, "offlineMessages");
        data.forEach((item) => {
          socket.emit("deliveredMessage", item);
        });
      }
    };

    const handleDeliveredMessage = (data) => {
      console.log(data, "deliveredMessages");
    };

    const seenMessage = (data) => {
      console.log(data);
    };

    const blocked = (data) => {
      console.log(data);
    };

    const unblock = (data) => {
      console.log(data);
    };

    socket.on("offlineMessage", handleOfflineMessages);
    socket.on("deliveredMessage", handleDeliveredMessage);
    socket.on("seenMessage", seenMessage);
    socket.on("blocked", blocked);
    socket.on("unblock", unblock);

    return () => {
      socket.off("offlineMessage", handleOfflineMessages);
      socket.off("deliveredMessage", handleDeliveredMessage);
      socket.off("seenMessage", seenMessage);
      socket.off("blocked", blocked);
      socket.off("unblock",unblock)
      socket.disconnect();
    };
  }, [socket]);

  const data = {
    sender: "64e602e6655faf323405963c",
    receiver: "64e60300655faf323405963f",
  };

  const handleChat = () => {
    socket.emit("seenMessage", data);
  };

  const handleBlock = () => {
    socket.emit("blocked", data);
  };

  const handleUnblock = () => {
    socket.emit("unblock", data);
  };

  return (
    <div>
      <h1>Delivered Message</h1>
      <div
        style={{
          border: "1px solid",
          padding: "5px",
          width: "200px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
        onClick={handleChat}
      >
        <h2 style={{ textAlign: "center" }}>Chat</h2>
      </div>
      <button
        style={{
          padding: "5px 10px",
          margin: "5px 15px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={handleBlock}
      >
        Block
      </button>
      <button
        style={{
          padding: "5px 5px",
          margin: "5px 15px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={handleUnblock}
      >
        Unblock
      </button>
    </div>
  );
};

export default DeliveredMessages;
