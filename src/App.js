import React, { useState } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Overlay from "./components/UI/Overlay";
import MessageModal from "./components/UI/MessageModal";
import Wrapper from "./components/Helper/Wrapper";
import ReactDOM from "react-dom";

function App() {
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
    console.log("here");
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
  const confirmUserHandler = (index) => {
    const newUsers = [...users];
    newUsers[index].visible = 0;
    setUsers(newUsers);
    localStorage.removeItem("userInformation");
    localStorage.setItem("userInformation", JSON.stringify(newUsers));
  };
  const unConfirmUserHandler = (index) => {
    const newUsers = [...users];
    newUsers[index].visible = 1;
    setUsers(newUsers);
    localStorage.removeItem("userInformation");
    localStorage.setItem("userInformation", JSON.stringify(newUsers));
  };
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Overlay visible={visible} onOverlayClick={closeModalHandler} />,
        document.getElementById("root-overlay")
      )}
      {ReactDOM.createPortal(
        <MessageModal
          onCloseModal={closeModalHandler}
          visible={visible}
          message={errorMessage}
        />,
        document.getElementById("root-modal")
      )}

      <AddUser
        onShowError={showErrorHandler}
        onSaveNewUser={SaveNewUserHandler}
        onRemoveAlluser={RemoveAlluserHandler}
      />
      <Users
        onRemoveUser={RemoveUserHandler}
        onConfirmUser={confirmUserHandler}
        onUnConfirmUser={unConfirmUserHandler}
        users={users}
      />
    </Wrapper>
  );
}

export default App;
