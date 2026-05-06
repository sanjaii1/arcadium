"use client";
import styles from "../page.module.css";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className={styles.compactFooter}>
      <motion.div
        className={styles.compactFooterContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className={styles.compactFooterTop}>
          <div className={styles.compactFooterBrand}>
            <div className={styles.logo}>
              <div className={styles.logoCircle}></div>
              Avidci
            </div>
            <p className={styles.compactFooterTagline}>Building digital excellence through innovation and strategy.</p>
            <div className={styles.compactFooterSocials}>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>

          <div className={styles.compactFooterLinksGrid}>
            <div className={styles.compactFooterLinkCol}>
              <h4>Navigation</h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Process</li>
              </ul>
            </div>
            <div className={styles.compactFooterLinkCol}>
              <h4>Company</h4>
              <ul>
                <li>Careers</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className={styles.compactFooterLinkCol}>
              <h4>Social</h4>
              <ul>
                <li>Twitter / X</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.compactFooterBottom}>
          <div className={styles.compactFooterDivider}></div>
          <div className={styles.compactFooterBottomFlex}>
            <span>© 2024 Avidci. All rights reserved.</span>
            <div className={styles.compactFooterLegal}>
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
