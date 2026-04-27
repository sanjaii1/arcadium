import Image from "next/image";
import styles from "../page.module.css";

export default function Portfolio() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>How we transformed a <br /> small business&apos;s online presence</h2>
      </div>
      <div className={styles.portfolioGrid}>
        <div className={styles.portfolioCard}>
          <div className={styles.portfolioImgWrap}>
            <Image src="/images/fintech.png" alt="FiendTech" fill className={styles.portfolioImg} />
          </div>
          <div className={styles.portfolioInfo}>
            <h4>FiendTech</h4>
            <div className={styles.portfolioTags}>
              <span>Fintech app</span>
              <span>Case study</span>
            </div>
          </div>
        </div>
        <div className={styles.portfolioCard}>
          <div className={styles.portfolioImgWrap}>
            <Image src="/images/saas.png" alt="Analytica" fill className={styles.portfolioImg} />
          </div>
          <div className={styles.portfolioInfo}>
            <h4>Analytica</h4>
            <div className={styles.portfolioTags}>
              <span>SaaS design</span>
              <span>Case study</span>
            </div>
          </div>
        </div>
        <div className={styles.portfolioCard}>
          <div className={styles.portfolioImgWrap}>
            <Image src="/images/health.png" alt="HealthGen" fill className={styles.portfolioImg} />
          </div>
          <div className={styles.portfolioInfo}>
            <h4>HealthGen</h4>
            <div className={styles.portfolioTags}>
              <span>Healthcare Web</span>
              <span>UI/UX</span>
            </div>
          </div>
        </div>
        <div className={styles.portfolioCard}>
          <div className={styles.portfolioImgWrap}>
            <Image src="/images/agency.png" alt="Studio X" fill className={styles.portfolioImg} />
          </div>
          <div className={styles.portfolioInfo}>
            <h4>Studio X</h4>
            <div className={styles.portfolioTags}>
              <span>Creative Portfolio</span>
              <span>Web Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
