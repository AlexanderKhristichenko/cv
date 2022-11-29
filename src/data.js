import userPhoto from "./assets/img/user.png";
import { Telegram, Envelop, Skype } from "@styled-icons/icomoon";

const data = {
  userPhoto,
  username: "Olexander Khrystychenko",
  text: "Creative Designer with 4+ years of experience in the graphic design & UI/UX industry. Extensive experience with conceptualizing and managing digital marketing campaigns over social media and UI/UX for various apps & websites. Specializes in rebranding projects, where vast knowledge of design, marketing, and Team management can be applied. Drafts own ideas using programs such as Figma and Illustrator.",
  contacts: [
    {
      id: "con1",
      icon: Envelop,
      subtitle: "Email",
      desc: "alexander.khristichenko@gmail.com",
      isLink: false,
    },
    {
      id: "con2",
      icon: Telegram,
      subtitle: "Telegram",
      link: "https://t.me/F_webdev",
      desc: "https://t.me/F_webdev",
      isLink: true,
    },
    {
      id: "con3",
      icon: Skype,
      subtitle: "Skype",
      link: "https://join.skype.com/invite/l4ToQg5T1O1y",
      desc: "webartcoder",
      isLink: true,
    },
  ],
  social: [
    {
      id: "soc1",
      icon: "",
      title: "",
      desc: "",
    },
    {
      id: "soc2",
      icon: "",
      title: "",
      desc: "",
    },
    {
      id: "soc3",
      icon: "",
      title: "",
      desc: "",
    },
  ],
  languages: [
    {
      id: "lan1",
      icon: "",
      title: "",
      desc: "",
    },
    {
      id: "lan2",
      icon: "",
      title: "",
      desc: "",
    },
    {
      id: "lan3",
      icon: "",
      title: "",
      desc: "",
    },
  ],
  hobbies: ["Gaming", "Travelling", "Music"],
};

export default data;
