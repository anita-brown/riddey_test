import React from "react";
import styles from "./Main.module.scss";
import logo from "../../assets/images/logo.svg";
import FeatureInfo from "../feature/FeatureInfo";


const MainContainer = () => {
  return (
    <section className={styles.container}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className={styles.heading}>
        <h1>Upgrade to Riddey PRO and boost productivity!</h1>
        <p className={styles.content}>Pellentesque porttitor euismod ante, accumsan consequat purus!</p>
      </div>
      <div>
        <FeatureInfo/>
      </div>
    </section>
  );
};

export default MainContainer;
