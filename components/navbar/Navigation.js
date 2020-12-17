import React from "react";
import { useRouter } from "next/router";
import { MENU } from "../../const/menu";
import styles from "./Navigation.module.css";
import MenuButton from "../button/MenuButton";

// href notify icon title pathname

function Navigation({ flat }) {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const selected = router.pathname === menu.path;
        const showTitle = !flat && menu.title.length > 0;
        return (
          <MenuButton
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={styles.MenuButton}
          >
            {selected ? menu.icon : menu.iconSelected}
            {showTitle && <span className={styles.title}>{menu.title}</span>}
          </MenuButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
