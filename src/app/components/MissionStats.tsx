import styles from "../page.module.css";

export default function MissionStats() {
  return (
    <section className={styles.section}>
      <h2 className={styles.missionText}>
        We fuse <span className={styles.highlightPink}>✧ Creativity</span> <span className={styles.highlightBlue}>△ Architecture</span> & <span className={styles.highlightOrange}>✦ UI Strategy</span> to craft exceptional, digital experiences strategy and technology to drive exceptional, impactful results.
      </h2>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h3>40</h3>
          <p>Staff picks accolades</p>
        </div>
        <div className={styles.statItem}>
          <h3>15</h3>
          <p>Award creatives</p>
        </div>
        <div className={styles.statItem}>
          <h3>12</h3>
          <p>Total clients</p>
        </div>
      </div>
    </section>
  );
}
