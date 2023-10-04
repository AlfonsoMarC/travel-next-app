import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import styles from "./profile.module.css";
//import MapComponent from "@/components/ui/Map/Map";

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <div className={styles.container}>{children}</div>
      <footer className={styles.profileFooter}>Footer</footer>
    </MainLayout>
  );
}
