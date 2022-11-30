import Divider from "../UI/Divider";
import styles from "./Sidebar.module.css";
import SidebarContacts from "./SidebarContacts";
import SidebarHobbies from "./SidebarHobbies";
import SidebarLanguages from "./SidebarLanguages";
import SidebarSocials from "./SidebarSocials";
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
      <SidebarSocials socials={data.socials} />
      <Divider />
      <SidebarLanguages languages={data.languages} />
      <Divider />
      <SidebarHobbies hobbies={data.hobbies} />
    </aside>
  );
};

export default Sidebar;
