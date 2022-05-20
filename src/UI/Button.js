import React, { state } from "react";
import styles from "../UI/Button.module.css";
import StartGame from "../Components/StartGame.js";

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
