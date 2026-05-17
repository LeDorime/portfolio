import styles from "./Contact.module.css";
import { personal, contactLinks } from "../data/config";

export default function Contact() {
  return (
    <section id="contact" className="container" style={{ paddingTop: 0 }}>
      <div className={styles.block}>
        <h2 className={styles.heading}>Let's build something.</h2>
        <p className={styles.sub}>
          {personal.roles} {personal.location}.
        </p>
        <div className={styles.links}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              target={
                link.target ||
                (link.href.startsWith("http") ? "_blank" : undefined)
              }
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
