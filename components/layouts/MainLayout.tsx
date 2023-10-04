import React from "react";
import styles from "./MainLayout.module.css";
import Header from "../ui/Header/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
