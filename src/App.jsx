import classes from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Sidebar />
    </div>
  );
};

export default App;
