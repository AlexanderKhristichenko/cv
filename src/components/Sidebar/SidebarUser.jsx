import classes from "./SidebarUser.module.css";

const SidebarUser = ({ photo, username, text }) => {
  return (
    <>
      <div className={classes.photo}>
        <img src={photo} alt="User" />
      </div>
      <h2 className={classes.username}>{username}</h2>
      <p className={classes.text}>{text}</p>
    </>
  );
};

export default SidebarUser;
