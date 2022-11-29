import styles from "./SidebarContacts.module.css";

const SidebarContacts = ({ contacts }) => {
  const userContacts = contacts.map((contact) => (
    <div key={contact.id} className={styles.container}>
      <div className={styles.box}>
        <span className={contact.icon}></span>
      </div>
      <div className={styles.info}>
        <h3>{contact.subtitle}</h3>
        <a
          className={styles.link}
          href={contact.isMail ? `mailto:${contact.link}` : contact.link}
        >
          {contact.desc}
        </a>
      </div>
    </div>
  ));

  return (
    <>
      <h2 className="subtitle">Contacts</h2>
      {userContacts}
    </>
  );
};

export default SidebarContacts;
