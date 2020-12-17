import React from "react";
import cn from "classnames";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import { ArrowBottom } from "../icons";
import styles from "./ProfilBox.module.css";

function ProfilBox({
  flat = false,
  slug = "ekremsarı",
  name = "Ekrem",
  avatar,
}) {
  return (
    <Button className={cn(styles.profilBox)}>
      <Avatar size={39} src={avatar} />
      {!flat && (
        <div className={styles.body}>
          <span className={styles.name}>{name}</span>
          <span className={styles.slug}>@{slug}</span>
        </div>
      )}
      {!flat && <ArrowBottom className={styles.arrow} />}
    </Button>
  );
}

export default ProfilBox;
