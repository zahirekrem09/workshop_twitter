import Head from "next/head";
import SvgComponent from "../components/icon/Add";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <SvgComponent />
    </div>
  );
}
