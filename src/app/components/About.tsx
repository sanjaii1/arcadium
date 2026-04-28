"use client";
import Image from "next/image";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=5",
];

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      {/* Label */}
      <ScrollReveal distance={30} duration={700}>
        <p className={styles.aboutLabel}>• ABOUT US</p>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal distance={40} duration={800} delay={80}>
        <h2 className={styles.aboutHeading}>
          A global consulting partner
          <br />
          dedicated to building{" "}
          <span className={styles.aboutIconBadgeBlue}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/>
            </svg>
          </span>{" "}
          smarter
          <br />
          <span className={styles.aboutHeadingMuted}>
            and{" "}
            <span className={styles.aboutIconBadgeGreen}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2a7 7 0 0 1 5.292 11.585l-.002.003A5.978 5.978 0 0 0 16 17v1a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1c0-1.27-.484-2.433-1.29-3.412A7 7 0 0 1 12 2zm2 18h-4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1z"/>
              </svg>
            </span>{" "}
            more adaptive
          </span>
        </h2>
      </ScrollReveal>

      {/* Bento Grid */}
      <ScrollReveal distance={50} duration={900} delay={160}>
        <div className={styles.aboutGrid}>

          {/* LEFT — Blue image card */}
          <div className={styles.aboutCardBlue}>
            <div className={styles.aboutCardBluTop}>
              <span className={styles.aboutBrand}>IPSUM<sup>™</sup></span>
              <span className={styles.aboutBarIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="12" width="4" height="10" rx="1"/>
                  <rect x="10" y="7" width="4" height="15" rx="1"/>
                  <rect x="18" y="2" width="4" height="20" rx="1"/>
                </svg>
              </span>
            </div>

            <div className={styles.aboutPersonWrap}>
              <Image
                src="/about-person.png"
                alt="Team member"
                fill
                className={styles.aboutPersonImg}
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            <div className={styles.aboutBlueStatBox}>
              <h3 className={styles.aboutBigStat}>120+</h3>
              <p className={styles.aboutStatDesc}>
                Collaborating with leading AI and cloud technology providers.
              </p>
            </div>
          </div>

          {/* MIDDLE — Commitment card */}
          <div className={styles.aboutCardLight}>
            <p className={styles.aboutCardMeta}>Commitment to measurable</p>
            <h3 className={styles.aboutPercentStat}>100%</h3>

            <div className={styles.aboutAvatarRow}>
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`client ${i + 1}`}
                  className={styles.aboutAvatar}
                  style={{ zIndex: avatars.length - i }}
                />
              ))}
            </div>

            <p className={styles.aboutQuote}>
              &ldquo;Their automation strategy completely reshaped how we work. It&apos;s
              efficient, intelligent, and seamless.&rdquo;
            </p>
          </div>

          {/* RIGHT — Two stacked cards */}
          <div className={styles.aboutRightCol}>
            {/* Lime card */}
            <div className={styles.aboutCardLime}>
              <p className={styles.aboutCardMetaDark}>Data Points</p>
              <h3 className={styles.aboutLimeStat}>520k+</h3>
              <p className={styles.aboutLimeDesc}>
                Analyzed monthly to power smarter business strategies.
              </p>
            </div>

            {/* Dark card */}
            <div className={styles.aboutCardDark}>
              <p className={styles.aboutCardMetaLight}>Continents</p>
              <h3 className={styles.aboutDarkStat}>20+</h3>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
