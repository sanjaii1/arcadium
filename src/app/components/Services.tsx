"use client";
import { useState } from "react";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

const servicesData = [
  {
    title: "AI Strategy",
    desc: "We help you find chances for AI use and put the tools into your business.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 8l-1-2-2-1 2-1 1-2 1 2 2 1-2 1-1 2zm-7 14l-2.5-5.5L4 14l5.5-2.5L12 6l2.5 5.5L20 14l-5.5 2.5L12 22z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Business Consulting",
    desc: "We lead your change with smart plans, pushing growth and making work simple.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Data & Insights",
    desc: "We turn your raw data into clear value using solid rules and great models.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <rect x="16" y="4" width="4" height="16" rx="1"></rect>
        <rect x="10" y="10" width="4" height="10" rx="1"></rect>
        <rect x="4" y="14" width="4" height="6" rx="1"></rect>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<number>(1);

  return (
    <section className={styles.servicesSectionNew}>
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.servicesHeaderNew}>
          <span className={styles.servicesSubtitleNew}>• SERVICES</span>
          <h2 className={styles.servicesTitleNew}>
            Comprehensive consulting<br />
            and intelligent innovation
          </h2>
          <p className={styles.servicesDescNew}>
            Whether you're optimizing today or building for<br />
            tomorrow we help you move faster with confidence.
          </p>
          <button className={styles.servicesBtnNew}>
            GET STARTED
            <span className={styles.servicesBtnIconWrapper}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </span>
          </button>
        </div>
      </ScrollReveal>

      <ScrollReveal distance={40} duration={800} delay={200}>
        <div className={styles.servicesCardsWrapper}>
          <div className={styles.servicesNewGrid}>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`${styles.servicesNewCard} ${activeCard === index ? styles.active : ""}`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className={styles.servicesNewIconWrapper}>
                  {service.icon}
                </div>
                
                <div className={styles.cardImageContainer}>
                  <img src={service.image} alt={service.title} className={styles.cardImage} />
                </div>

                <div className={styles.servicesNewTextContainer}>
                  <h4 className={styles.servicesNewTitle}>{service.title}</h4>
                  <p className={styles.servicesNewDesc}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
