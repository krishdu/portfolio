import NagarroLogo from "assets/images/logos/nagarro_logo.png";
import vidyasagarVidyapithLogo from "assets/images/logos/vidyasagarVidyapithLogo.png"
import TechnoMainLogo from "assets/images/logos/TechnoMainLogo.png";
import phpLogo from "assets/images/skills/phpLogo.png";
import kubernetesLogo from "assets/images/skills/kubernetes.png";
import react from "assets/images/skills/react.png";
import ccppLogo from "assets/images/skills/ccppLogo.png";
import javaLogo from "assets/images/skills/javaLogo.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import azureLogo from "assets/images/skills/azureLogo.png";
import sqlLogo from "assets/images/skills/SQL.png";
import mysql from "assets/images/skills/mysql.png";
import nodeJsLogo from "assets/images/skills/nodeJsLogo.png";
import mongoDBLogo from "assets/images/skills/mongoDB.png";
import gitLogo from "assets/images/skills/git.png";
import dockerLogo from "assets/images/skills/docker.png";
import springBootLogo from "assets/images/skills/springBoot.png";

export const companies = [
  {
    title: "Nagarro Software Pvt. Ltd",
    alt: "Nagarro Software Pvt. Ltd",
    role: "Associate Engineer",
    skills: [".NET Core", "Azure", "NodeJs", "Angular"],
    period: "2021 - Present",
    logo: NagarroLogo
  }
];

export const institutes = [
  {
    short_title: "Techno Main Salt Lake",
    title: "Techno Main Salt Lake",
    alt: "Techno main salt lake",
    role: "Bachelor Of Technology in Information Technology",
    skills: ["project management", "team management", "web development", "data structures", "operating system"],
    period: "2017 - 2021",
    startingYear: "2017",
    logo: TechnoMainLogo,
    awards: [
      {
        title: "Ardent Computech Pvt. Ltd.",
        description:
          "Completed the hands on training and internship on the subject Machine Learning and developed the project titled 'CAR PRICE PREDICTION'.",
        date: "2020"
      },
      {
        title: "Future-Proof Hackathon",
        description:
          "Participated in 'Future-Proof Hackathon 2020' organized by Techno India Group.",
        date: "2020"
      },
      {
        title: "Developing Dynamic Web applications using PHP & MySQL",
        description:
          "Completed this training offered by Oracle Academy.",
        date: "2018"
      },
      {
        title: "Introduction to Programming in C",
        description: "Qualified NPTEL examination with Elite tag.",
        date: "2018"
      }
    ]
  },
  {
    short_title: "Vidyasagar Vidyapith",
    title: "Vidyasagar Vidyapith",
    alt: "college image",
    role: "Higher Secondary (10+2)",
    skills: ["mathematics", "physics", "chemistry"],
    period: "2016 - 2017",
    startingYear: "2016",
    logo: vidyasagarVidyapithLogo
  }
];

export const skills = [
  {
    name: "Java",
    description: "Programming Language",
    link: "https://dev.java/learn/getting-started-with-java/",
    type: "programminglanguages",
    image: javaLogo
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "NodeJs",
    description: "Web development",
    link: "https://nodejs.org/en/",
    type: "development",
    image: nodeJsLogo
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "MySQL",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "C/C++",
    description: "Programming Language",
    link: "https://isocpp.org/get-started",
    type: "programminglanguages",
    image: ccppLogo
  },
  {
    name: "PHP",
    description: "Programming Language",
    link: "https://www.php.net/docs.php",
    type: "programminglanguages",
    image: phpLogo
  },
  {
    name: "SQL",
    description: "Structured Query Language",
    link: "https://www.php.net/docs.php",
    type: "programminglanguages",
    image: sqlLogo
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "development",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "development",
    image: bootstrap
  },
  {
    name: "MongoDB",
    description: "Database",
    link: "https://www.mongodb.com/",
    type: "database",
    image: mongoDBLogo
  },
  {
    name: "Azure",
    description: "Cloud",
    link: "https://azure.microsoft.com/en-in/",
    type: "devops",
    image: azureLogo
  },
  {
    name: "Git",
    description: "Version control system",
    link: "https://git-scm.com/",
    type: "devops",
    image: gitLogo
  },
  {
    name: "Spring Boot",
    description: "Web development",
    link: "https://spring.io/projects/spring-boot/",
    type: "lesspriority",
    image: springBootLogo
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "lesspriority",
    image: typescript
  },
  {
    name: "Docker",
    description: "Containerization tool",
    link: "https://www.docker.com/get-started/",
    type: "lesspriority",
    image: dockerLogo
  },
  {
    name: "Kubernetes",
    description: "Container orchestration system",
    link: "https://kubernetes.io/",
    type: "lesspriority",
    image: kubernetesLogo
  }
];
