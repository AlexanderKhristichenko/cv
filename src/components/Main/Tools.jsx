import styles from "./Tools.module.css";

const Tools = ({ items }) => {
  const toolsAndSkills = items.map((item) => (
    <div key={item.id} className={styles.card}>
      <figure>
        <img src={item.logo} alt={item.title} />
        <figcaption>{item.title}</figcaption>
      </figure>
    </div>
  ));

  return <div className={styles.container}>{toolsAndSkills}</div>;
};

export default Tools;
