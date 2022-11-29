import classes from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./data";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Sidebar data={data} />
    </div>
  );
};

export default App;
