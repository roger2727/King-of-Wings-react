import React from "react";
import pic from "../assets/logo.png";
import styles from "../UI/Start.module.css";

function Banner() {
  return <img className={styles.hero} src={pic} />;
}

export default Banner;
