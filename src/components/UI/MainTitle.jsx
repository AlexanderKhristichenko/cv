import styles from "./MainTitle.module.css";

const MainTitle = ({ children }) => (
  <h2 className={styles.title}>{children}</h2>
);

export default MainTitle;
