import React, { state } from "react";
import styles from "./Button.module.css";

const clickHandler = () => {
  console.log("clickHandler");
};
const Button = (props) => {
  return (
    <button className={styles.button} onClick={clickHandler}>
      PLAY
    </button>
  );
};

export default Button;
