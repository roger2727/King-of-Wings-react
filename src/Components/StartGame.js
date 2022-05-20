import React, { useState } from "react";
import Photo from "../assets/game-logo.png";
import styles from "../UI/Button.module.css";
const DisplayImageComponent = () => {
  const [isImageActive, setIsImageActive] = useState();
  function clickEventHandler() {
    setIsImageActive(true);
  }
  return (
    <div className="myContainer">
      <button className={styles.button} onClick={clickEventHandler}>
        play
      </button>
      {isImageActive && (
        <img className={styles.gamePage} src={Photo} alt="your image name " />
      )}
    </div>
  );
};

export default DisplayImageComponent;
