import React from "react";
import styles from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={() => {
        console.log("clicked!!!");
      }}
    >
      PLAY
    </button>
  );
};

export default Button;
