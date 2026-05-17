import styles from "./Hero.module.css";
import { personal, heroCTAs } from "../data/config";

export default function Hero() {
  // Split tagline so the accent word gets its own styled span
  const lines = personal.tagline.split("\n");
  const lastLine = lines[lines.length - 1];
  const accentWord = personal.taglineAccent;
  const beforeAccent = lastLine.replace(accentWord, "");

  return (
    <section className={styles.hero}>
      <div
        className={`${styles.tag} fade-up`}
        style={{ animationDelay: "0ms" }}
      >
        <span className={styles.tagDot} />
        {personal.status}
      </div>

      <h1
        className={`${styles.heading} fade-up`}
        style={{ animationDelay: "80ms" }}
      >
        {lines.slice(0, -1).map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
        {beforeAccent}
        <em className={styles.accent}>{accentWord}</em>
      </h1>

      <p
        className={`${styles.bio} fade-up`}
        style={{ animationDelay: "160ms" }}
      >
        {personal.bio}
      </p>

      <div
        className={`${styles.cta} fade-up`}
        style={{ animationDelay: "240ms" }}
      >
        {heroCTAs.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className={btn.primary ? styles.btnPrimary : styles.btnGhost}
            target={btn.target || undefined}
            rel="noopener noreferrer"
          >
            {btn.label}
          </a>
        ))}
      </div>
    </section>
  );
}
