import Sections from "../UI/Sections";
import styles from "./Main.module.css";
import Tools from "./Tools";
import WorkExperience from "./WorkExperience";

const Main = ({ data }) => {
  return (
    <div className={styles.main}>
      <h1>Web-Developer & Front-end Developer</h1>
      <Sections title="Work Experience">
        <WorkExperience items={data.workExperience} />
      </Sections>
      <Sections title="Tools & Skills">
        <Tools items={data.tools} />
      </Sections>
    </div>
  );
};

export default Main;
