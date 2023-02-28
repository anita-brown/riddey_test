import React from "react";
import styles from "./Main.module.css";
import logo from "../../assets/images/logo.svg";
import FeatureInfo from "../feature/FeatureInfo";
import Progressbar from "../progress/Progressbar";


const MainContainer = () => {
  return (
    <section className={styles.container}>
        <figure>
          <img className={styles.logo} src={logo} alt="logo" />
        </figure>
      
        <div className={styles.heading}>
          <h1>Upgrade to Riddey PRO and boost productivity!</h1>
          <p className={styles.content}>Pellentesque porttitor euismod ante, accumsan consequat purus!</p>
        </div>
        <div>
          <FeatureInfo />
        </div>
        <div>
          <h3>Current usage</h3>
        </div>
      <Progressbar />
    </section>
  );
};

export default MainContainer;
