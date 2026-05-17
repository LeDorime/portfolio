import styles from "./Footer.module.css";
import { personal } from "../data/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>built with react + vite · deployed on vercel</p>
      <p>
        © {year} {personal.name.toLowerCase()}
      </p>
    </footer>
  );
}
