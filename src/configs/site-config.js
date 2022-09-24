import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  author: {
    name: "Krishnendu Patra",
    accounts: [
      {
        url: "https://github.com/krishdu",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "https://linkedin.com/in/krishnendu-patra/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "https://medium.com/@krishnendupatra",
        label: "Medium Account",
        type: "gray",
        icon: <FaMedium />,
      },
      {
        url: "mailto:krishdu.p@gmail.com",
        label: "Mail Krishnendu",
        type: "gray",
        icon: <FiMail />,
      },
    ],
  },
};

export default siteConfig;
