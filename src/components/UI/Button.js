import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const visible = props.visible;
  const classes = `${styles.button} ${visible === 0 ? styles.invisible : ""}`;
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={classes}
    >
      {props.children}
    </button>
  );
}

export default Button;
