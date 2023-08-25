import React, { createContext, useEffect,useContext } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

const Socket = ({ children }) => {
  const socket = io("http://localhost:8000?id=64e60300655faf323405963f",{
    reconnection: true,         // Enable reconnection
    reconnectionAttempts: 5,   // Number of reconnection attempts
    reconnectionDelay: 1000,   // Delay between reconnection attempts (in milliseconds)
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to the server");
    });

    socket.on("addContact",(data)=>{
      console.log(data)
    })

    return () => {
      socket.off("addContact")
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default Socket;
