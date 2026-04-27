"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Brands() {
  return (
    <ScrollReveal distance={30} duration={800} threshold={0.1}>
      <section className={styles.brands}>
        <h3 className={styles.brandLogo}>Brainbase</h3>
        <h3 className={styles.brandLogo}>Hopin</h3>
        <h3 className={styles.brandLogo}>Square</h3>
        <h3 className={styles.brandLogo}>Foursquare</h3>
        <h3 className={styles.brandLogo}>Pipedrive</h3>
      </section>
    </ScrollReveal>
  );
}
