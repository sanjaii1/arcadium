import styles from "../page.module.css";

export default function Brands() {
  return (
    <section className={styles.brands}>
      <h3 className={styles.brandLogo}>Brainbase</h3>
      <h3 className={styles.brandLogo}>Hopin</h3>
      <h3 className={styles.brandLogo}>Square</h3>
      <h3 className={styles.brandLogo}>Foursquare</h3>
      <h3 className={styles.brandLogo}>Pipedrive</h3>
    </section>
  );
}
