import React from "react";
import styles from "./LayoutMain.module.css";

const LayoutMain = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default LayoutMain;
