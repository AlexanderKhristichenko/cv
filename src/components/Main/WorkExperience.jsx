import styles from "./WorkExperience.module.css";

const WorkExperience = ({ items }) => {
  const experience = items.map((item) => (
    <div key={item.id} className={styles.container}>
      <div className={styles.step}>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.info}>
        <div className={styles.date}>{item.date}</div>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <img src={item.logo} alt={item.title} />
          </div>
          <div className={styles.titles}>
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
          </div>
        </div>
      </div>
      <div className={styles.txt}>
        <p>{item.desc}</p>
      </div>
    </div>
  ));

  return <>{experience}</>;
};

export default WorkExperience;
