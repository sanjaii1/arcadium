"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

interface CTABannerProps {
  onStartClick?: () => void;
}

export default function CTABanner({ onStartClick }: CTABannerProps) {
  return (
    <section className={styles.sectionWide}>
      <ScrollReveal distance={50} duration={900}>
        <div className={styles.footerBanner}>
          <ScrollReveal delay={100} distance={30} duration={800}>
            <div className={styles.footerBannerIcon}>
              <div className={styles.footerBannerIconInner}></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} distance={30} duration={800}>
            <h2>Ready to transform your <span className="serif-italic">data?</span></h2>
          </ScrollReveal>
          
          <ScrollReveal delay={300} distance={25} duration={800}>
            <p>Join thousands of data-driven professionals who are creating beautiful visualizations in minutes.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={450} distance={20} duration={800}>
            <button 
              className={styles.footerBannerBtn}
              onClick={onStartClick}
            >
              Start for free
            </button>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
}
