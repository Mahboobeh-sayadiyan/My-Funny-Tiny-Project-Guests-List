import React from "react";
import Button from "./Button";
import styles from "./MessageModal.module.css";

function MessageModal(props) {
  const classes = `${styles.modal} ${props.visible && styles.visible}`;
  return (
    <div className={classes}>
      <div className={styles.header}>
        <h2>Invalid Input</h2>
      </div>
      <div className={styles.content}>{props.message}</div>
      <div className={styles.actions}>
        <Button onclick={props.onCloseModal}>Okay</Button>
      </div>
    </div>
  );
}

export default MessageModal;
