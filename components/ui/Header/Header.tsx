import React from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.container}>
      <Navbar />
    </header>
  );
};

export default Header;
