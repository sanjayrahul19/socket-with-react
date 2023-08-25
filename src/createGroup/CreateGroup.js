import React, { useState, useEffect } from "react";
import { useSocketContext } from "../Socket/Socket";

const CreateGroup = () => {
  const socket = useSocketContext();

  const [data, setData] = useState({
    group_name: "",
    group_admin: "64e60300655faf323405963f",
    members: ["64e60300655faf323405963f"],
  });

  const id = [
    "64e602e6655faf323405963c",
    "64dc6cb726ed9bf2c7f79a89",
    "64df20080c0f905daa9d8a66",
  ];

  useEffect(() => {
    const createGroup = (data) => {
      console.log(data);
    };
    socket.on("createGroup", createGroup);

    return () => {
      socket.off("createGroup", createGroup);
      socket.disconnect();
    };
  }, [socket]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleClick = (user) => {
    setData((preVal) => {
      return {
        ...preVal,
        members: [...preVal.members, user],
      };
    });
  };

  console.log(data);

  const handleAdd = () => {
    socket.emit("createGroup", data);
  };

  return (
    <div>
      <h1>Create Group</h1>
      <input
        name="group_name"
        type="text"
        value={data.group_name}
        placeholder="Enter Group Name"
        onChange={handleChange}
        style={{ padding: "5px", marginLeft: "30px" }}
      />
      <ul style={{ cursor: "pointer" }}>
        {id.map((item) => {
          return (
            <li key={item} onClick={() => handleClick(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      <button
        style={{
          padding: "5px 15px",
          margin: "5px 25px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default CreateGroup;
