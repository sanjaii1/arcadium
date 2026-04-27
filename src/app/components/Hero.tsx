import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <h1 className={styles.heroTitle}>
        Building bold brands with <span className="serif-italic">thoughtful design</span>
      </h1>
      <p className={styles.heroSubtitle}>
        We fuse strategy, architecture and user interface engineering to create exceptional impactful digital experiences that move humanity forward.
      </p>
      <div className={styles.heroButtons}>
        <button className={styles.primaryBtn}>
          Start project {"->"}
        </button>
        <div className={styles.heroAvatars}>
          <div className={styles.avatarGroup}>
            <img src="/images/team1.png" className={styles.avatar} alt="Client 1" />
            <img src="/images/team2.png" className={styles.avatar} alt="Client 2" />
            <img src="/images/team3.png" className={styles.avatar} alt="Client 3" />
          </div>
          <div className={styles.ratingText}>
            <div className={styles.stars}>★★★★★</div>
            Reviewed by users
          </div>
        </div>
      </div>
    </section>
  );
}
