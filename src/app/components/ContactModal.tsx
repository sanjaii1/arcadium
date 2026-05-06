"use client";
import styles from "../page.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.modalBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modalContent}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalClose} onClick={onClose}>
              <FaTimes />
            </div>

            <div className={styles.modalFormGrid}>
              <div className={styles.contactInfoSide}>
                <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1 }}>Let's build something <span className="serif-italic">great.</span></h2>
                <div className={styles.infoBlock}>
                  <h5>Manhattan, New York</h5>
                  <p>2024</p>
                </div>
                <div className={styles.infoBlock}>
                  <h5>Email us</h5>
                  <p>hello@avidci.agency</p>
                </div>
                <div className={styles.infoBlock}>
                  <h5>Office hours</h5>
                  <p>Mon - Fri: 11 AM - 2 PM</p>
                </div>
              </div>

              <div className={styles.contactFormSide}>
                <div className={styles.formField}>
                  <label>Name (required)</label>
                  <div className={styles.formRow}>
                    <input type="text" placeholder="First Name" className={styles.formInput} />
                    <input type="text" placeholder="Last Name" className={styles.formInput} />
                  </div>
                </div>

                <div className={styles.formField}>
                  <label>Service</label>
                  <select className={styles.formSelect}>
                    <option value="">Select a service</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="strategy">Strategy</option>
                  </select>
                </div>

                <div className={styles.formField}>
                  <label>Email (required)</label>
                  <input type="email" placeholder="Your Email" className={styles.formInput} />
                </div>

                <div className={styles.formField}>
                  <label>Project description</label>
                  <textarea placeholder="Tell us about your project" className={styles.formInput} rows={3}></textarea>
                </div>

                <div className={styles.formCheckboxRow}>
                  <input type="checkbox" id="modal-newsletter" />
                  <label htmlFor="modal-newsletter">Sign up for news and updates</label>
                </div>

                <button className={styles.submitBtn}>Send Message</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
