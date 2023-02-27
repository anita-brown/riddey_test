import styles from "./Feature.module.scss";
import { data } from "../../data";
import icon from "../../assets/images/icon.svg";

const FeatureInfo = () => {
  return (
    <section>
      {data.map((item) => (
        <div key={item.id} className={styles.feature}>
          <figure>
            <img src={icon} alt="icon" />
          </figure>
          <div className={styles.feature_content}>
            <span className={styles.description}>
              {" "}
              <span className={styles.title}>{item.title}</span> -
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureInfo;
