import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import LayoutExtra from "./LayoutExtra";
import LayoutMain from "./LayoutMain";
import LayoutSidebar from "./LayoutSidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const size = useWindowSize();
  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <LayoutSidebar flat={size.width < 1200} />
      {/* Main */}
      <LayoutMain>{children}</LayoutMain>

      {/* ExtraMenü */}
      {size.width > 990 && <LayoutExtra />}
    </div>
  );
};

export default Layout;
