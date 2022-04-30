import React from "react";
import styles from "./MessageModal.module.css";

function Overlay(props) {
  const classes = `${styles.backdrop} ${props.visible && styles.visible}`;
  return <div className={classes} onClick={props.onOverlayClick}></div>;
}

export default Overlay;
