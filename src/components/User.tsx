// src/components/User.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions";

const User = () => {
  const [name, setName] = useState("");
  const name2 =  useSelector((state: any) => state.user!=null?state.user.name:"");
  const dispatch = useDispatch();

  const handleSaveUser = () => {
    dispatch(setUser({ name }));
  };

  return (
    <div>
      <div>{name2}</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleSaveUser}>Save User</button>
    </div>
  );
};

export default User;
