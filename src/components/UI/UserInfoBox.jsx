import styles from "./UserInfoBox.module.css";

const UserInfoBox = ({ title, items }) => {
  const userInfoItems = items.map((item) => (
    <div key={item.id} className={styles.container}>
      <div className={styles.box}>
        {item.icon ? (
          <span className={item.icon}></span>
        ) : (
          <img src={item.img} alt="" />
        )}
      </div>
      <div className={styles.info}>
        <h3>{item.subtitle}</h3>
        {item.link ? (
          <a
            className={styles.link}
            href={item.isMail ? `mailto:${item.link}` : item.link}
            target="_black"
          >
            {item.desc}
          </a>
        ) : (
          <p>{item.desc}</p>
        )}
      </div>
    </div>
  ));

  return (
    <div className={styles.info_box}>
      <h2>{title}</h2>
      {userInfoItems}
    </div>
  );
};

export default UserInfoBox;
