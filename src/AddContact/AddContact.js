import React, { useState} from "react";
import { useSocketContext } from "../Socket/Socket"

const AddContact = () => {
  const [sender, setSender] = useState("64e602e6655faf323405963c");
  const [receiver, setReceiver] = useState("64e60300655faf323405963f");

  const socket = useSocketContext();

  const handleAddContact = () => {
    const data = { sender, receiver };

    // Emit an "addContact" event to the server
    socket.emit("addContact", data);
  };

  

  return (
    <div>
      <h2>Add Contact</h2>
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default AddContact;
