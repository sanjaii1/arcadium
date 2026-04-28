"use client";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Process() {
  const steps = [
    {
      id: "1",
      title: "Discovery & Strategy",
      description: "We start by understanding your business, goals, and target audience. This phase includes research, competitor analysis, and defining the project scope to ensure a clear direction.",
      colorClass: styles.cardPink
    },
    {
      id: "2",
      title: "Wireframing & UX Design",
      description: "Before jumping into visuals, I create wireframes to map out the structure and user flow. This ensures an intuitive and seamless experience for visitors.",
      colorClass: styles.cardBlue
    },
    {
      id: "3",
      title: "Visual Design & Branding",
      description: "This is where your website comes to life. Using your brand identity, I design a visually compelling interface with the perfect balance of aesthetics and usability.",
      colorClass: styles.cardOrange
    },
    {
      id: "4",
      title: "Development & Implementation",
      description: "Once the design is approved, I build your website using modern, responsive technologies. I ensure that it's optimized for speed, SEO, and a flawless user experience across all devices.",
      colorClass: styles.cardGreen
    }
  ];

  return (
    <section className={styles.section} id="process">
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.processHeader}>
          <h2 className={styles.sectionTitle}>My Process</h2>
          <div className={styles.processLine}></div>
          <button className={styles.processBtn}>
            Let's get started
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </ScrollReveal>
      
      <div className={styles.processGrid}>
        {steps.map((step, index) => (
          <ScrollReveal key={step.id} delay={index * 100} distance={40} duration={800}>
            <div className={`${styles.processCard} ${step.colorClass}`}>
              <div className={styles.processStepInfo}>
                <span className={styles.processStepNumber}>{step.id}.</span>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
              </div>
              <div className={styles.processDivider}></div>
              <div className={styles.processStepDesc}>
                <p>{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
