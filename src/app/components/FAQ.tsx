"use client";
import { useState } from "react";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  { 
    q: "What is Avidci?", 
    a: "Avidci is a premium design and engineering agency that helps you launch clean, high-converting digital products. We focus on building momentum before your product goes live."
  },
  { 
    q: "What's included in our partnership?", 
    a: "We provide full-cycle support including brand strategy, visual identity, UI/UX design, and custom web development tailored to your specific goals."
  },
  { 
    q: "How do I customize my project?", 
    a: "Every project is unique. We start with a discovery phase to understand your needs and then tailor our workflow to match your requirements and brand voice."
  },
  {
    q: "Do you offer ongoing support after project completion?",
    a: "Absolutely! We offer ongoing support and maintenance packages. Whether it's post-launch bug fixes, updates, feature enhancements, or regular consultation sessions, we want to ensure your continued success.",
  },
  { 
    q: "Is support available?", 
    a: "Yes, our team is always available for consultations and support. We pride ourselves on being a long-term partner for our clients' growth."
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} serif-italic`}>Frequently asked questions</h2>
          <p className={styles.sectionSubtitle}>Everything you need to know about Avidci. Find answers to the most common questions below.</p>
        </div>
      </ScrollReveal>
      
      <div className={styles.faqContainer}>
        {faqData.map((item, i) => (
          <ScrollReveal key={i} delay={i * 80} distance={30} duration={700}>
            <div 
              className={styles.faqCard}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <div className={styles.faqQuestionRow}>
                <h4 className={styles.faqQuestionText}>{item.q}</h4>
                <div 
                  className={styles.faqIconButton}
                  style={{ transform: activeIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </div>
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className={styles.faqAnswerContent}>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

