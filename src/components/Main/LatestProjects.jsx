import styles from "./LatestProjects.module.css";

const LatestProjects = ({ items }) => {
  const projects = items.map((item) => (
    <div key={item.id} className={styles.card}>
      <figure>
        <img src={item.img} alt={item.title} />
        <figcaption className={styles.figcaption}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.desc}>{item.desc}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={styles.btn}
          >
            Demo
          </a>
        </figcaption>
      </figure>
    </div>
  ));
  return (
    <>
      <div className={styles.container}>{projects}</div>
      <a href="google.com" className={`${styles.btn} ${styles.more}`}>
        More Projects
      </a>
    </>
  );
};

export default LatestProjects;
