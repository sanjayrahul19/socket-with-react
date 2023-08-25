import React from "react";
import AddContact from "./AddContact/AddContact";
import Message from "./message/Message";
import DeliveredMessages from "./deliveredMessages/DeliveredMessages";
import CreateGroup from "./createGroup/CreateGroup";

const App = () => {
  return (
    <div>
      <h1>Chat App</h1>
      <AddContact/>
      <Message/>
      <DeliveredMessages/>
      <CreateGroup/>
    </div>
  );
};

export default App;
