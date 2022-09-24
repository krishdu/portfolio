import bb1 from "assets/images/projects/0-bb/bb-1.gif";
import bbLogo from "assets/images/projects/0-bb/bb-logo.png";
import ht1 from "assets/images/projects/ht/ht-1.gif";
import htLogo from "assets/images/projects/ht/htLogo.png";
import cgLogo from "assets/images/projects/cg/cgLogo.png";
import cg1 from "assets/images/projects/cg/cg1.gif";
import yp1 from "assets/images/projects/1-yp/your-pen-4.gif";
import ypLogo from "assets/images/projects/1-yp/your-pen-logo.jpg";
import mmLogo from "assets/images/projects/mm/mmLogo.png";
import mm1 from "assets/images/projects/mm/mm-1.gif";
import pgLogo from "assets/images/projects/pg/pgLogo.png";
import pg1 from "assets/images/projects/pg/pg1.gif";
import nggLogo from "assets/images/projects/ngg/nggLogo.png";
import ngg1 from "assets/images/projects/ngg/ngg1.gif";
import tdl1 from "assets/images/projects/todoly/todoly1.gif";
import tdlLogo from "assets/images/projects/todoly/todolyLogo.png";

export const projectsList = [
  //Blink & Buy
  {
    id: 1,
    title: "Blink&Buy",
    logo: bbLogo,
    github_url: "https://github.com/krishdu/Blink-and-Buy",
    demo_url: "https://blink-and-buy.onrender.com/",
    published: "2022",
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "/project/0",
    images:[bb1],
    featured: true,
    desc: `A full-stack E-commerce MERN application, Developed this project to get a full-fledged knowledge about JS full-stack application.`,
    technologies: ["nodejs", "express", "react-redux", "mongodb"]
  },
  {
    id: 2,
    title: "Happy Tummy",
    logo: htLogo,
    github_url: "https://github.com/krishdu/Happy-Tummy",
    demo_url: "https://krish-happy-tummy-1e3785.netlify.app",
    published: "2021",
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "/project/1",
    images:[ht1],
    featured: true,
    desc: `Happy Tummy - A Food Order Application Using ReactJs. This was created while I was learning React.`,
    technologies: ["react", "firebase"]
  },
  {
    id: 3,
    title: "Candy Game",
    logo: cgLogo,
    github_url: "https://github.com/krishdu/candy-gamea",
    demo_url: "https://krishdu.github.io/candy-game/",
    published: "2021",
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "/project/2",
    images:[cg1],
    featured: true,
    desc: `It's a basic in-browser game with basic math calculations. User need to choose the number of candies popped on the screen. It can be a single number or sum of 2-3 number. To win the game player need to cover all the numbers (1 to 9) in a stipulated time.`,
    technologies: ["react"]
  },
  {
    id: 4,
    title: "Your-Pen",
    logo: ypLogo,
    github_url: "https://github.com/krishdu/Your-Pen",
    demo_url: "https://krishdu.github.io/your-pen/",
    published: "2022",
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "/project/3",
    images:[yp1],
    featured: true,
    desc: `Simple Quote storing application, whice will access your browser local storage and store all the quotes and thoughts.`,
    technologies: ["react"]
  },
  {
    id: 5,
    title: "MeasureMe",
    logo: mmLogo,
    github_url: "https://github.com/krishdu/MeasureMe",
    demo_url: "https://measure-me.onrender.com/",
    published: "2021",
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "/project/4",
    images:[mm1],
    featured: false,
    desc: `I had created this repository while I was learning Express Js.`,
    technologies: ["nodejs", "express", "ejs"]
  },
  {
    id: 6,
    title: "Password Generator",
    logo: pgLogo,
    github_url: "https://github.com/krishdu/Password-Generator",
    demo_url: "https://krishdu.github.io/Password-Generator/",
    published: "2018",
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "/project/5",
    images:[pg1],
    featured: false,
    desc: `While building this Password Generator application, I learned how to work with checkbox using JavaScript and how to use setTimeout to hide the alert after certain time. Also I tried to implement asynchronous Clipboard API (This is an experimental technology, not supported by every browser).`,
    technologies: ["html", "css", "javascript"]
  },
  {
    id: 7,
    title: "Number Guessing Game",
    logo: nggLogo,
    github_url: "https://github.com/krishdu/Number-Guessing-Game",
    demo_url: "https://krishdu.github.io/Number-Guessing-Game/",
    published: "2018",
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "/project/6",
    images:[ngg1],
    featured: false,
    desc: `A simple game, built using simple vanilla Js.`,
    technologies: ["html", "css", "javascript"]
  },
  {
    id: 8,
    title: "Todoly",
    logo: tdlLogo,
    github_url: "https://github.com/krishdu/Todoly",
    demo_url: "https://krishdu.github.io/Todoly/",
    published: "2018",
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "/project/7",
    images:[tdl1],
    featured: false,
    desc: `It's a simple ToDo application, While building this, I learned how to create web elements dynamically, how to remove a certain element, understood the parent-child relation between elements.`,
    technologies: ["html", "css", "javascript"]
  }
];
