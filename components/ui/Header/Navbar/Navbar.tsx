import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const links = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "Profile",
    route: "/profile"
  }
];

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.linkList}>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
