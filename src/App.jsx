import styles from "./App.module.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./data";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar data={data} />
      <Main data={data} />
    </div>
  );
};

export default App;
