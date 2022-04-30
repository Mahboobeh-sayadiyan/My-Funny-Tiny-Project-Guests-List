import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const visible = props.visible;
  const classes = `${styles.button} ${visible === 0 ? styles.invisible : ""}`;
  return (
    <div onClick={props.onclick} className={classes}>
      {props.children}
    </div>
  );
}

export default Button;
