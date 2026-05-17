import styles from "./Stack.module.css";
import { stack } from "../data/config";

export default function Stack() {
  return (
    <section id="stack" className="container">
      <div className="section-label">stack</div>

      <div className={styles.grid}>
        {stack.map((item) => (
          <div key={item.name} className={styles.item}>
            <span className={styles.dot} style={{ background: item.color }} />
            <span className={styles.name}>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
