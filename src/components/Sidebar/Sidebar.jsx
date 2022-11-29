import Divider from "../UI/Divider";
import classes from "./Sidebar.module.css";
import SidebarUser from "./SidebarUser";

const Sidebar = ({ data }) => {
  return (
    <aside className={classes.sidebar}>
      <SidebarUser
        photo={data.userPhoto}
        username={data.username}
        text={data.text}
      />
      <Divider />
    </aside>
  );
};

export default Sidebar;
