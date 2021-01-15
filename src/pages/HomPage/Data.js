import logoOne from "../../images/svg-1.svg";
import logoTwo from "../../images/svg-2.svg";
import logoThree from "../../images/svg-3.svg";
import logoFour from "../../images/svg-4.svg";

export const homeObjOne = {
  primary: true,
  lightBg: false,
  topLine: "Hackable and Opensource",
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  buttonLabel: "Installation",
  headline: "So much more than everyother vim plugin manager",
  description:
    "Finally, you can efficiently manage your Vim plugins. Search, Install, Update, and Remove plugins or colorschemes from the command line. VimDiesel development is in early Alpha",
  imgStart: "",
  logo: logoOne,
  alt: "vim diesel package manager",
  start: "false",
};

export const homeObjTwo = {
  primary: false,
  lightBg: true,
  topLine: "How it works",
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  buttonLabel: "Check Out The Code",
  headline:
    "Diesel leverages the new built-in package system in Vim for loading, and Git for fetching plugins and version control",
  description:
    "There are two pieces of the VimDiesel architecture. The read-only vim-diesel-api that finds a stores plugins and plugin metadata from Github and vim.org, and the asynchronous vim-diesel-cli which connects to the api and allows the user a robust interface into the world of vim packages",
  imgStart: "start",
  logo: logoTwo,
  alt: "vim diesel package manager",
  start: "true",
};

export const homeObjThree = {
  primary: true,
  lightBg: false,
  topLine: "$ diesel install NerdTree",
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  buttonLabel: "Installation",
  headline:
    "A Vim plugin management system akin to any other popular package manager you have ever used",
  description:
    "Finally, you can efficiently manage your Vim plugins. Search, Install, Update, and Remove plugins or colorschemes from the command line.",
  imgStart: "",
  logo: logoThree,
  alt: "vim diesel package manager",
  start: "",
};

export const homeObjFour = {
  primary: false,
  lightBg: true,
  topLine: "Contributing",
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  buttonLabel: "Open An Issue",
  headline:
    "Are you a programmer? Git wizard? Have a good idea for a feature? Found a bug?",
  description:
    "The vim-diesel-api and cli are both written in Python, and use the Django Rest Framework. If you are proficient in any of these technolgies please consider contributing",
  imgStart: "start",
  logo: logoFour,
  alt: "vim diesel package manager",
  start: "true",
};
