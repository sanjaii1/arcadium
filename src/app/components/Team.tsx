"use client";
import Image from "next/image";
import styles from "../page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Team() {
  return (
    <section className={styles.section}>
      <ScrollReveal distance={40} duration={700}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Meet the <span className="serif-italic">creative minds</span> <br /> behind our success
          </h2>
        </div>
      </ScrollReveal>
      <div className={styles.teamGrid}>
        {[
          { src: "/images/team1.png", name: "Logan Qary", role: "Founder / CEO", bg: "#e0f2fe", socials: ["in", "tw"] },
          { src: "/images/team2.png", name: "Sarah Bell", role: "Lead Designer", bg: "#ffedd5", socials: ["in", "be"] },
          { src: "/images/team3.png", name: "Mike Jenkins", role: "Technical Director", bg: "#fef3c7", socials: ["in", "tw"] },
          { src: "/images/team4.png", name: "Emma Clark", role: "Marketing Head", bg: "#e0f2fe", socials: ["in", "tw"] },
        ].map((member, i) => (
          <ScrollReveal key={member.name} delay={i * 100} distance={50} duration={800}>
            <div className={styles.teamCard}>
              <div className={styles.teamImgBox} style={{ backgroundColor: member.bg }}>
                <Image
                  src={member.src}
                  alt={member.name}
                  width={300}
                  height={300}
                  className={styles.teamImg}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h4 className={styles.teamName}>{member.name}</h4>
              <p className={styles.teamRole}>{member.role}</p>
              <div className={styles.teamSocials}>
                {member.socials.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
