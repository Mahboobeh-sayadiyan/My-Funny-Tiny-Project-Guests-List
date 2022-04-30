import React, { useState } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Overlay from "./components/UI/Overlay";
import MessageModal from "./components/UI/MessageModal";

function App() {
  localStorage.removeItem("userInformation");
  const [errorMessage, seterrorMessage] = useState("");
  const storageData = JSON.parse(localStorage.getItem("userInformation"));
  const [users, setUsers] = useState(storageData != null ? storageData : []);
  const [visible, setvisible] = useState(false);
  const SaveNewUserHandler = (newUser) => {
    const newUsers = [newUser, ...users];
    setUsers((prevUsers) => [newUser, ...prevUsers]);
    localStorage.removeItem("userInformation");
    localStorage.setItem("userInformation", JSON.stringify(newUsers));
  };
  const showErrorHandler = (message) => {
    seterrorMessage(message);
    setvisible(true);
  };
  const closeModalHandler = () => {
    setvisible(false);
  };
  const RemoveAlluserHandler = () => {
    localStorage.removeItem("userInformation");
    setUsers([]);
  };
  const RemoveUserHandler = (index) => {
    const newUsers = users.filter((user, userindex) => index !== userindex);
    setUsers(newUsers);
    localStorage.removeItem("userInformation");
    localStorage.setItem("userInformation", JSON.stringify(newUsers));
  };
  const ConfirmUserHandler = (index) => {
    const newUsers = [...users];
    newUsers[index].visible = 0;
    setUsers(newUsers);
    localStorage.removeItem("userInformation");
    localStorage.setItem("userInformation", JSON.stringify(newUsers));
  };
  return (
    <div>
      <Overlay visible={visible} />
      <MessageModal
        onCloseModal={closeModalHandler}
        visible={visible}
        message={errorMessage}
      />
      <AddUser
        onShowError={showErrorHandler}
        onSaveNewUser={SaveNewUserHandler}
        onRemoveAlluser={RemoveAlluserHandler}
      />
      <Users
        onRemoveUser={RemoveUserHandler}
        onConfirmUser={ConfirmUserHandler}
        users={users}
      />
    </div>
  );
}

export default App;
