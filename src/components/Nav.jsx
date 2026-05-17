import styles from "./Nav.module.css";
import { personal, navLinks } from "../data/config";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>{personal.navLogo}</span>
      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
