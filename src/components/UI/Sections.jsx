import styles from "./Sections.module.css";

const Sections = ({ children, title }) => {
  return (
    <section className={styles.section}>
      <div className={styles.step}>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
      </div>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.info}>{children}</div>
      </div>
    </section>
  );
};

export default Sections;
