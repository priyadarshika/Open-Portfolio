/*
SKILLS IMAGES
Add your Skill image in assets folder and import the image like below images.
*/

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import REACT from "../assets/react.png";
import GITHUB from "../assets/github.png";
import TAILWIND from "../assets/tailwind.png";
import PYTHON from "../assets/python.png";
import C from "../assets/c.png";
import CPP from "../assets/cpp.png";
import BOOTSTRAP from "../assets/bootstrap.png";
import GIT from "../assets/git.png";
import GCP from "../assets/gcp.png";

/*
WORK IMAGES
Add your Work image in assets folder and import the image like below images.
*/

import PROJECT from "../assets/project.jpeg";

export const data = {
    name: "John Doe",
    tagline:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    resume: "https://www.google.com",

    skills: [
        {
            name: "HTML",
            image: HTML,
        },
        {
            name: "CSS",
            image: CSS,
        },
        {
            name: "TAILWIND",
            image: TAILWIND,
        },
        {
            name: "BOOTSTRAP",
            image: BOOTSTRAP,
        },
        {
            name: "JAVASCRIPT",
            image: JS,
        },
        {
            name: "REACT JS",
            image: REACT,
        },
        {
            name: "C",
            image: C,
        },
        {
            name: "C++",
            image: CPP,
        },
        {
            name: "PYTHON",
            image: PYTHON,
        },
        {
            name: "GIT",
            image: GIT,
        },
        {
            name: "GITHUB",
            image: GITHUB,
        },
        {
            name: "GOOGLE CLOUD",
            image: GCP,
        },
    ],

    work: [
        {
            name: "Sample Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            demoLink: "https://www.google.com",
            codeLink: "https://www.google.com",
            image: PROJECT,
        },
        {
            name: "Sample Project 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            demoLink: "https://www.google.com",
            codeLink: "https://www.google.com",
            image: PROJECT,
        },
        {
            name: "Sample Project 3",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            demoLink: "https://www.google.com",
            codeLink: "https://www.google.com",
            image: PROJECT,
        },
    ],

    experience: [
        {
            name: "Position 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "Position 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "Position 3",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "Position 4",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ],

    socials: {
        linkedIn: "https://www.google.com",
        gitHub: "https://www.google.com",
        twitter: "https://www.google.com",
        mail: "johndoe@gmail.com",
    },
};

/*
EDIT /components/Home/Salutation.jsx to edit POSITIONS
*/
