import styles from "./About.module.css";
import { about, stats } from "../data/config";

export default function About() {
  return (
    <section id="about" className="container">
      <div className="section-label">about</div>

      <div className={styles.grid}>
        <div className={styles.text}>
          {about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statNum}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
