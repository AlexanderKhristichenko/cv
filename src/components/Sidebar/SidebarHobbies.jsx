import styles from "./SidebarHobbies.module.css";

const SidebarHobbies = ({ hobbies }) => {
  const userHobbies = hobbies.map((hobbie) => (
    <li key={hobbie.id} className={styles.item}>
      {hobbie.name}
    </li>
  ));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hobbies</h2>
      <ul className={styles.list}>{userHobbies}</ul>
    </div>
  );
};

export default SidebarHobbies;
