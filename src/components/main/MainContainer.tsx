import React from "react";
import styles from "./Main.module.scss";
import logo from "../../assets/images/logo.svg";


const MainContainer = () => {
  return (
    <section className={styles.container}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className={styles.heading}>
        <h1>Upgrade to Riddey PRO and boost productivity!</h1>
        <p>Pellentesque porttitor euismod ante, accumsan consequat purus!</p>
      </div>
    </section>
  );
};

export default MainContainer;
