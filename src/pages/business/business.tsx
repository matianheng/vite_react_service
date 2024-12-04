import React, { useState } from "react";
import UserTable from "../../components/UserTable";
import UserForm from "../../components/UserForm";
import "../../components/css/index.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);
  const [editingUser, setEditingUser] = useState(null);

  // 添加用户
  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  // 删除用户
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // 更新用户
  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  // 编辑用户
  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="app-container">
      <h1>User Management</h1>
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
      <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;
