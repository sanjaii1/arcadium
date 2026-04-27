"use client";
import Image from "next/image";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  return (
    <section className={styles.section}>
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            How we transformed a <br /> small business&apos;s online presence
          </h2>
        </div>
      </ScrollReveal>
      <div className={styles.portfolioGrid}>
        <ScrollReveal delay={0} distance={50} duration={800}>
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
        </ScrollReveal>
        <ScrollReveal delay={150} distance={50} duration={800}>
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
        </ScrollReveal>
        <ScrollReveal delay={50} distance={50} duration={800}>
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
        </ScrollReveal>
        <ScrollReveal delay={200} distance={50} duration={800}>
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
        </ScrollReveal>
      </div>
    </section>
  );
}
