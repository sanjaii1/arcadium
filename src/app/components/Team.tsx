import Image from "next/image";
import styles from "../page.module.css";

export default function Team() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Meet the <span className="serif-italic">creative minds</span> <br /> behind our success</h2>
      </div>
      <div className={styles.teamGrid}>
        <div className={styles.teamCard}>
          <div className={styles.teamImgBox} style={{ backgroundColor: '#e0f2fe' }}>
            <Image src="/images/team1.png" alt="Logan Qary" width={300} height={300} className={styles.teamImg} style={{ objectFit: 'cover' }} />
          </div>
          <h4 className={styles.teamName}>Logan Qary</h4>
          <p className={styles.teamRole}>Founder / CEO</p>
          <div className={styles.teamSocials}>
            <span>in</span> <span>tw</span>
          </div>
        </div>
        <div className={styles.teamCard}>
          <div className={styles.teamImgBox} style={{ backgroundColor: '#ffedd5' }}>
            <Image src="/images/team2.png" alt="Sarah Bell" width={300} height={300} className={styles.teamImg} style={{ objectFit: 'cover' }} />
          </div>
          <h4 className={styles.teamName}>Sarah Bell</h4>
          <p className={styles.teamRole}>Lead Designer</p>
          <div className={styles.teamSocials}>
            <span>in</span> <span>be</span>
          </div>
        </div>
        <div className={styles.teamCard}>
          <div className={styles.teamImgBox} style={{ backgroundColor: '#fef3c7' }}>
            <Image src="/images/team3.png" alt="Mike Jenkins" width={300} height={300} className={styles.teamImg} style={{ objectFit: 'cover' }} />
          </div>
          <h4 className={styles.teamName}>Mike Jenkins</h4>
          <p className={styles.teamRole}>Technical Director</p>
          <div className={styles.teamSocials}>
            <span>in</span> <span>tw</span>
          </div>
        </div>
        <div className={styles.teamCard}>
          <div className={styles.teamImgBox} style={{ backgroundColor: '#e0f2fe' }}>
            <Image src="/images/team4.png" alt="Emma Clark" width={300} height={300} className={styles.teamImg} style={{ objectFit: 'cover' }} />
          </div>
          <h4 className={styles.teamName}>Emma Clark</h4>
          <p className={styles.teamRole}>Marketing Head</p>
          <div className={styles.teamSocials}>
            <span>in</span> <span>tw</span>
          </div>
        </div>
      </div>
    </section>
  );
}
