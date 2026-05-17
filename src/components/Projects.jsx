import styles from "./Projects.module.css";
import { projects } from "../data/config";

export default function Projects() {
  return (
    <section id="projects" className="container">
      <div className="section-label">selected projects</div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.name}>{project.name}</span>
              <i
                className={`ti ti-${project.icon} ${styles.icon}`}
                aria-hidden="true"
              />
            </div>

            <p className={styles.desc}>{project.description}</p>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${styles.tag} ${tag === project.primaryTag ? styles.tagAccent : ""}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
