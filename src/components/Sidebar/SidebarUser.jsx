import styles from "./SidebarUser.module.css";

const SidebarUser = ({ photo, username, text }) => {
  return (
    <>
      <div className={styles.photo}>
        <img src={photo} alt="User" />
      </div>
      <h2 className={styles.username}>{username}</h2>
      <p className={styles.text}>{text}</p>
    </>
  );
};

export default SidebarUser;
