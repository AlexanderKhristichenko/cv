import englishFlag from "./assets/img/english.png";
import ukraineFlag from "./assets/img/ukraine.png";
import russianFlag from "./assets/img/russian.png";
import html from "./assets/img/html.png";
import css from "./assets/img/css.png";
import js from "./assets/img/js.png";
import sass from "./assets/img/sass.png";
import less from "./assets/img/less.png";
import styledComponents from "./assets/img/styled-components.png";
import jQuery from "./assets/img/jquery.png";
import react from "./assets/img/react.png";
import vue from "./assets/img/vue.png";
import bootstrap from "./assets/img/bootstrap.png";
import photoshop from "./assets/img/photoshop.png";
import figma from "./assets/img/figma.png";
import avocode from "./assets/img/avocode.png";
import gulp from "./assets/img/gulp.png";
import git from "./assets/img/git.png";
import jira from "./assets/img/jira.png";
import foxtrot from "./assets/img/foxtrot.png";
import insticator from "./assets/img/insticator.png";
import solidopinion from "./assets/img/solidopinion.png";
import infovision from "./assets/img/infovision.png";

const data = {
  userPhoto: "https://alexanderkhristichenko.github.io/cv/media/user.png",
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
      link: "https://t.me/F_webdev",
      desc: "https://t.me/F_webdev",
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
      date: "Aug 2019 - Present",
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
      logo: bootstrap,
      title: "Bootstrap",
    },
    {
      id: "tool11",
      logo: photoshop,
      title: "Photoshop",
    },
    {
      id: "tool12",
      logo: figma,
      title: "Figma",
    },
    {
      id: "tool13",
      logo: avocode,
      title: "Avocode",
    },
    {
      id: "tool14",
      logo: gulp,
      title: "Gulp",
    },
    {
      id: "tool15",
      logo: git,
      title: "Git",
    },
    {
      id: "tool16",
      logo: jira,
      title: "Jira",
    },
  ],
  projects: [
    {
      id: "proj1",
      img: "https://alexanderkhristichenko.github.io/cv/media/photographer.png",
      title: "A.Smith Photographer (Portfolio)",
      desc: "The landing page was created using the following tools: HTML, CSS(SASS/SCSS), JavaScript",
      link: "https://alexanderkhristichenko.github.io/portfolio/photographer/",
    },
    {
      id: "proj2",
      img: "https://alexanderkhristichenko.github.io/cv/media/amazing.png",
      title: "Amazing Landing Page",
      desc: "The landing page was created using the following tools: HTML, CSS(SASS/SCSS)",
      link: "https://alexanderkhristichenko.github.io/portfolio/amazing/",
    },
  ],
};

export default data;
