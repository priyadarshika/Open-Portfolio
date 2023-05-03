/*
SKILLS IMAGES
Add your Skill image in assets folder and import the image like below images.
*/

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
/*import MACHINE_LEARNING from "../assets/machine_learning.png";*/
import GITHUB from "../assets/github.png";
/*import TAILWIND from "../assets/tailwind.png";*/
import PYTHON from "../assets/python.png";
import C from "../assets/c.png";
import CPP from "../assets/cpp.png";
import CRITICAL_THINKING from "../assets/critical_thinking.png";
import GIT from "../assets/git.png";
import MACHINE_LEARNING from "../assets/machine_learning.png";
import VISUALIZATION from "../assets/visualization.png";

/*
WORK IMAGES
Add your Work image in assets folder and import the image like below images.
*/

import PROJECT from "../assets/project.jpeg";

export const data = {
    name: "Priyadarshika Nimesh",
    tagline:
        "A rigorous task-driven professional with substantial experience in website development, Machine learner, who is open to learning something new every day!.",
    resume: "https://drive.google.com/file/d/1U319OrcIazeCx4JrpfZAnKeRwA17JiYy/view?usp=sharing",

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
            name: "DATA VISUALIZATION",
            image: VISUALIZATION,
        },
        {
            name: "CRITICAL_THINKING",
            image: CRITICAL_THINKING,
        },
        {
            name: "JAVASCRIPT",
            image: JS,
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
            name: "MACHINE LEARNING",
            image: MACHINE_LEARNING,
        },
    ],

    work: [
        {
            name: "Sathi-FIR",
            description:
                "(Work in progress)  A website which helps in registering FIR online so that everyone's FIR should be registered and is provided by proof of registration ",
            demoLink: "https://www.google.com",
            codeLink: "https://www.google.com",
            image: PROJECT,
        },
        {
            name: "Krishi-gyaan",
            description:
                "A website which helps farmer to cultivate multiple crops on the same soil and for trsting hte soil and its diseases ",
            demoLink: "/",
            codeLink: "https://www.google.com",
            image: PROJECT,
        },
        {
            name: "Rental clothes",
            description:
                "A website which helps the people in take clothes on rent purpose and it also provide a AI visualisation of clothes so that they can check it in a comfortalbe way.",
            demoLink: "/",
            codeLink: "/",
            image: PROJECT,
        },
    ],

    experience: [
        {
            name: "Contributer(team mate)",
            description:
                "Taken part in contributing in the intership provided by college and worked as a team mate in particular project ",
        },
        {
            name: "Head Coordinator and volunteer",
            description:
                "Contributed as club volunteer and coordinator also been an organizer in organising various events including tech events",
        },
        {
            name: "Open source contributer",
            description:
                "contributed in open source .",
        },
    ],

    socials: {
        linkedIn: "https://www.linkedin.com/in/priyadarshika001/",
        gitHub: "https://github.com/priyadarshika",
        twitter: "https://twitter.com/darshika2603",
        mail: "iampriyadarshika17@gmail.com",
    },
};

/*
EDIT /components/Home/Salutation.jsx to edit POSITIONS
*/
