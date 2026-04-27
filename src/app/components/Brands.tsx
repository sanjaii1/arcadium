"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

const marqueeItems = [
  { label: "SaaS Startups", icon: "🚀" },
  { label: "FinTech", icon: "💳" },
  { label: "E-Commerce", icon: "🛍️" },
  { label: "HealthTech", icon: "🏥" },
  { label: "EdTech", icon: "📚" },
  { label: "Media & Content", icon: "🎬" },
  { label: "AI Platforms", icon: "🤖" },
  { label: "Web3 / Crypto", icon: "⛓️" },
  { label: "Enterprise B2B", icon: "🏢" },
  { label: "Consumer Apps", icon: "📱" },
];

// Duplicate for seamless loop
const track = [...marqueeItems, ...marqueeItems];

export default function Brands() {
  return (
    <ScrollReveal distance={30} duration={800} threshold={0.1}>
      <section className={styles.brandsSection}>
        {/* Header */}
        <div className={styles.brandsHeader}>
          <span className={styles.brandsTrustBadge}>✦ Trusted By</span>
          <p className={styles.brandsTagline}>
            Partnering with ambitious teams across every industry
          </p>
        </div>

        {/* Marquee row */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeFade} data-side="left" />
          <div className={styles.marqueeTrack}>
            {track.map((item, i) => (
              <span key={i} className={styles.marqueeChip}>
                <span className={styles.marqueeChipIcon}>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
          <div className={styles.marqueeFade} data-side="right" />
        </div>

        {/* Stats row */}
        <div className={styles.brandsMeta}>
          <div className={styles.brandsMetaItem}>
            <strong>120+</strong>
            <span>Projects Delivered</span>
          </div>
          <div className={styles.brandsMetaDivider} />
          <div className={styles.brandsMetaItem}>
            <strong>40+</strong>
            <span>Industries Served</span>
          </div>
          <div className={styles.brandsMetaDivider} />
          <div className={styles.brandsMetaItem}>
            <strong>98%</strong>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
