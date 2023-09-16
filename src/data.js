import userPhoto from "./assets/img/user.png";
// ! Lang Icon
import englishFlag from "./assets/img/LangIcon/english.png";
import ukraineFlag from "./assets/img/LangIcon/ukraine.png";
import russianFlag from "./assets/img/LangIcon/russian.png";
// ! Work Experience
import foxtrot from "./assets/img/WorkExperience/foxtrot.png";
import insticator from "./assets/img/WorkExperience/insticator.png";
import solidopinion from "./assets/img/WorkExperience/solidopinion.png";
import infovision from "./assets/img/WorkExperience/infovision.png";
// ! Tools & Skills
import html from "./assets/img/Tools/html.png";
import css from "./assets/img/Tools/css.png";
import js from "./assets/img/Tools/js.png";
import sass from "./assets/img/Tools/sass.png";
import less from "./assets/img/Tools/less.png";
import styledComponents from "./assets/img/Tools/styled-components.png";
import jQuery from "./assets/img/Tools/jquery.png";
import react from "./assets/img/Tools/react.png";
import vue from "./assets/img/Tools/vue.png";
import bootstrap from "./assets/img/Tools/bootstrap.png";
import photoshop from "./assets/img/Tools/photoshop.png";
import figma from "./assets/img/Tools/figma.png";
import avocode from "./assets/img/Tools/avocode.png";
import gulp from "./assets/img/Tools/gulp.png";
import git from "./assets/img/Tools/git.png";
import jira from "./assets/img/Tools/jira.png";
import webflow from "./assets/img/Tools/webflow.png";
// ! Projects
import photographer from "./assets/img/Projects/photographer.png";
import todoList from "./assets/img/Projects/todolist.png";
import bomiSchool from "./assets/img/Projects/BOMI-School.png";
import demoWizard from "./assets/img/Projects/demo-wizard.png";
import createx from "./assets/img/Projects/createx.png";

const data = {
  userPhoto,
  username: "Olexander Khrystychenko",
  text: "Creative front-end developer with 5+ years of web development experience. Extensive experience in the creation of landing pages, development of web applications, online store, adaptability for mobile devices, etc. Specializes in the development of sites and web applications, where you can apply the vast knowledge of development.",
  contacts: [
    {
      id: "con1",
      icon: "icon-envelop",
      subtitle: "Email",
      link: "alexander.khristichenko@gmail.com",
      desc: "alexander.khristichenko@gmail.com",
      isMail: true,
    },
    {
      id: "con2",
      icon: "icon-telegram",
      subtitle: "Telegram",
      link: "https://t.me/Olexander_Khrystychenko",
      desc: "https://t.me/Olexander_Khrystychenko",
      isMail: false,
    },
    {
      id: "con3",
      icon: "icon-skype",
      subtitle: "Skype",
      link: "https://join.skype.com/invite/l4ToQg5T1O1y",
      desc: "webartcoder",
      isMail: false,
    },
    {
      id: "con4",
      icon: "icon-github",
      subtitle: "Github",
      link: "https://github.com/AlexanderKhristichenko?tab=repositories",
      desc: "AlexanderKhristichenko",
      isMail: false,
    },
  ],
  socials: [
    {
      id: "soc1",
      icon: "icon-facebook",
      subtitle: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100006207426671",
      desc: "facebook.com/profile",
    },
    {
      id: "soc2",
      icon: "icon-instagram",
      subtitle: "Instagram",
      link: "https://www.instagram.com/aleksandr_khristichenko/",
      desc: "instagram.com/aleksandr",
    },
    {
      id: "soc3",
      icon: "icon-linkedin2",
      subtitle: "Linkedin",
      link: "https://www.linkedin.com/in/alexander-k-9a608b19a/",
      desc: "linkedin.com/in/alexander",
    },
  ],
  languages: [
    {
      id: "lan1",
      img: englishFlag,
      subtitle: "English",
      desc: "Elementary",
    },
    {
      id: "lan2",
      img: ukraineFlag,
      subtitle: "Ukranian",
      desc: "Proficient",
    },
    {
      id: "lan3",
      img: russianFlag,
      subtitle: "Russian",
      desc: "Proficient",
    },
  ],
  hobbies: [
    {
      id: "hob1",
      name: "Gaming",
    },
    {
      id: "hob2",
      name: "Travelling",
    },
    {
      id: "hob3",
      name: "Music",
    },
    {
      id: "hob4",
      name: "Sport",
    },
    {
      id: "hob5",
      name: "Codding",
    },
    {
      id: "hob6",
      name: "Snowboarding",
    },
    {
      id: "hob7",
      name: "Rolling",
    },
    {
      id: "hob8",
      name: "Biking",
    },
    {
      id: "hob9",
      name: "Football",
    },
  ],
  workExperience: [
    {
      id: "work1",
      date: "Aug 2021 - Dec 2022",
      logo: foxtrot,
      title: "Foxtrot",
      subtitle: "Front-end Developer",
      desc: "Responsible for code refactoring, bug fixes, project testing, email HTML layout, support of existing projects, development of new pages for the online store, and development of interface components using Angular",
    },
    {
      id: "work2",
      date: "Oct 2019 - Feb 2021",
      logo: insticator,
      title: "Insticator inc",
      subtitle: "Software Engineer(React)",
      desc: "Responsible for creating a copy of the site page, correcting errors, testing the project, helping in the development of the company's product, supporting existing projects, writing unit tests, integrating web applications on customer sites, and developing UI Components using React + StyledComponents.",
    },
    {
      id: "work3",
      date: "Oct 2017 - Oct 2019",
      logo: solidopinion,
      title: "Squawk-IT / SolidOpinion",
      subtitle: "Integrations Engineer in Technical",
      desc: "Responsible for creating site page copy, fixing code errors, integrating web applications into client sites, testing web applications, and troubleshooting web applications",
    },
    {
      id: "work4",
      date: "Oct 2016 - Dec 2017",
      logo: infovision,
      title: "Infovision",
      subtitle: "Web application development",
      desc: "Responsible for the development of interactive navigation systems for shopping centers on touch screens, the development of questionnaires for corporate meetings, the development of advertising products for touch screens, the development of the company website, code refactoring, the elimination of errors in web applications and the support of existing projects",
    },
  ],
  tools: [
    {
      id: "tool1",
      logo: html,
      title: "HTML",
    },
    {
      id: "tool2",
      logo: css,
      title: "CSS",
    },
    {
      id: "tool3",
      logo: sass,
      title: "SASS",
    },
    {
      id: "tool4",
      logo: less,
      title: "Less",
    },
    {
      id: "tool5",
      logo: styledComponents,
      title: "Styled Components",
    },
    {
      id: "tool6",
      logo: js,
      title: "JavaScript",
    },
    {
      id: "tool7",
      logo: jQuery,
      title: "JQuery",
    },
    {
      id: "tool8",
      logo: react,
      title: "React",
    },
    {
      id: "tool9",
      logo: vue,
      title: "Vue",
    },
    {
      id: "tool10",
      logo: webflow,
      title: "Webflow",
    },
    {
      id: "tool11",
      logo: bootstrap,
      title: "Bootstrap",
    },
    {
      id: "tool12",
      logo: photoshop,
      title: "Photoshop",
    },
    {
      id: "tool13",
      logo: figma,
      title: "Figma",
    },
    {
      id: "tool14",
      logo: avocode,
      title: "Avocode",
    },
    {
      id: "tool15",
      logo: gulp,
      title: "Gulp",
    },
    {
      id: "tool16",
      logo: git,
      title: "Git",
    },
    {
      id: "tool17",
      logo: jira,
      title: "Jira",
    },
  ],
  projects: [
    {
      id: "proj4",
      img: createx,
      title: "CreateX",
      desc: "The multipage site was created using the following tools: HTML, CSS(SASS/SCSS), JavaScript",
      link: "https://alexanderkhristichenko.github.io/createx/",
    },
    {
      id: "proj1",
      img: demoWizard,
      title: "Demo Wizard",
      desc: "The web application was created using the following tools: HTML, CSS, JavaScript, Webflow",
      link: "https://www.demo-wizard.com/",
    },
    {
      id: "proj2",
      img: bomiSchool,
      title: "BOMI School",
      desc: "The landing page was created using the following tools: HTML, CSS, JavaScript, Webflow",
      link: "https://www.bomi.school/",
    },
    {
      id: "proj3",
      img: todoList,
      title: "To-Do List",
      desc: "The web application was created using the following tools: HTML, CSS(Module), JavaScript(React)",
      link: "https://alexanderkhristichenko.github.io/Todo-List/",
    },
  ],
};

export default data;
