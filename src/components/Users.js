import React from "react";
import UserCard from "./UserCard";
import Container from "./UI/Container";

function Users(props) {
  const users = props.users;
  const removecurrentUserHandler = (index) => {
    props.onRemoveUser(index);
  };
  const confirmcurrentUserHandler = (index) => {
    props.onConfirmUser(index);
  };
  return (
    <Container>
      {users.map((user, index) => (
        <UserCard
          onRemovecurrentUser={removecurrentUserHandler}
          onconfirmcurrentUser={confirmcurrentUserHandler}
          key={index}
          user={user}
          index={index}
        />
      ))}
    </Container>
  );
}

export default Users;
