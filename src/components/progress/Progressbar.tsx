import React, { useState } from "react";
import styles from "./Progress.module.css";

const Progressbar = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const progressPercentage = (count / 10) * 100;

  return (
    <section className={styles.progress_container}>
      <div>
        <h4 className={styles.counter_text}>{count} out of 10 boards in use</h4>
      </div>
      <div style={{ height: "5px", backgroundColor: "#f2f2f2", borderRadius: "5px" }}>
        <div
          style={{
            height: "100%",
            backgroundColor: "#E26559",
            borderRadius: "5px",
            width: `${progressPercentage}%`,
          }}
        />
      </div>
      <button disabled={count >= 10} className={`${styles.button} ${count >= 10 ? `${styles.disabled}` : ""}`} onClick={handleClick}>
        Add New Board
      </button>
    </section>
  );
};

export default Progressbar;
