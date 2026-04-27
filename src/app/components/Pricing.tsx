"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Pricing() {
  return (
    <section className={styles.section}>
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Pick the plan that <br /> fits your <span className="serif-italic">start-up</span>
          </h2>
        </div>
      </ScrollReveal>
      <div className={styles.pricingCards}>
        <ScrollReveal delay={0} distance={50} duration={800}>
          <div className={styles.priceCard}>
            <div className={styles.priceBadge}>Basic</div>
            <p style={{ marginBottom: "1rem" }}>An entry-level plan for small teams or individuals building a presence.</p>
            <div className={styles.priceAmount}>$2900<span>/month</span></div>
            <ul className={styles.priceFeatures}>
              <li>Basic Branding Tool Kit (2 Days)</li>
              <li>Website Setup</li>
              <li>SEO Optimization</li>
              <li>24/7 Email Support</li>
            </ul>
            <button className={styles.priceBtn}>Get Started <span>-&gt;</span></button>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150} distance={50} duration={800}>
          <div className={`${styles.priceCard} ${styles.pro}`}>
            <div className={styles.priceBadge}>Pro</div>
            <p style={{ marginBottom: "1rem" }}>Advanced robust features for full-scale growth and ongoing management.</p>
            <div className={styles.priceAmount}>$3800<span>/month</span></div>
            <ul className={styles.priceFeatures}>
              <li>Everything in Basic plan</li>
              <li>Dedicated Account Mgr</li>
              <li>Full Marketing Strategy</li>
              <li>Advanced SEO Setup</li>
            </ul>
            <button className={styles.priceBtn}>Get Started <span>-&gt;</span></button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
