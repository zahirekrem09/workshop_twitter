import React from "react";
import cn from "classnames";
import ThemeButton from "../button/ThemeButton";
import styles from "./LayoutSidebar.module.css";
import Navigation from "../navbar/Navigation";
import ProfilBox from "../profilbox/ProfilBox";
import { Tweet } from "../icons";

const LayoutSidebar = ({ flat }) => {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <div className={cn(styles.tweet)}>
        <ThemeButton xl full={!flat}>
          {flat ? <Tweet /> : "Tweet"}
        </ThemeButton>
      </div>
      <div className={styles.profile}>
        <ProfilBox flat={flat} />
      </div>
    </div>
  );
};

export default LayoutSidebar;
