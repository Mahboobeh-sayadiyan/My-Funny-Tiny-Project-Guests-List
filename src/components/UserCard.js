import React from "react";
import styles from "./UserCard.module.css";
import Button from "./UI/Button";

function UserCard(props) {
  const visible = props.user.visible;
  const removeUserHandler = () => {
    props.onRemovecurrentUser(props.index);
  };
  const confirmUserHandler = () => {
    props.onconfirmcurrentUser(props.index);
  };
  const unConfirmUserHandler = () => {
    props.onUnConfirmcurrentUser(props.index);
  };
  return (
    <div className={`${styles.card} ${!visible ? styles.invisible : ""}`}>
      <h4>
        Guest {props.index + 1}- {props.user.guest} ({props.user.guestCount}{" "}
        People) - {props.user.phoneNumber}
      </h4>
      <Button onclick={removeUserHandler} visible={visible}>
        Remove
      </Button>
      <Button onclick={confirmUserHandler} visible={visible}>
        Confirm
      </Button>
      <Button onclick={unConfirmUserHandler} visible={visible === 0 ? 1 : 0}>
        UnConfirm
      </Button>
    </div>
  );
}

export default UserCard;
