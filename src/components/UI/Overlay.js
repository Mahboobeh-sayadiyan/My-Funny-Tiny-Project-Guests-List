import React from "react";
import styles from "./MessageModal.module.css";

function Overlay(props) {
  const classes = `${styles.backdrop} ${props.visible && styles.visible}`;
  return <div className={classes}></div>;
}

export default Overlay;
