import Divider from "../UI/Divider";
import styles from "./Sidebar.module.css";
import SidebarContacts from "./SidebarContacts";
import SidebarUser from "./SidebarUser";

const Sidebar = ({ data }) => {
  return (
    <aside className={styles.sidebar}>
      <SidebarUser
        photo={data.userPhoto}
        username={data.username}
        text={data.text}
      />
      <Divider />
      <SidebarContacts contacts={data.contacts} />
      <Divider />
    </aside>
  );
};

export default Sidebar;
