import React from "react";
import "./css/SlideShow.scss";
import JJImage from "../images/jj.png";
import PalletechImage from "../images/palletech.png";
import SoulMentorImage from "../images/soulmentor.png";
import GPTMechanic from "../images/gptmechanic.png";
// import axios from "axios";

function SlideShow() {
    //const projects = await axios.get('https://josephtams.com/api/getProjects');
    const projects = [
        {
            name: "JJ Sushi Sparks",
            link: "https://jjsushi.com",
            image: JJImage,
            about: "https://github.com/jtams",
            desc: "An in-progress website written in React and TypeScript for Spark's best Sushi spot.",
        },
        {
            name: "Palletech",
            link: "https://palletech.net/",
            image: PalletechImage,
            about: "https://github.com/jtams",
            desc: "A website written in React and TypeScript for Palletech, a reno company that provides pallet services.",
        },
        {
            name: "Soul Mentor",
            link: "https://soulmentornv.com/",
            image: SoulMentorImage,
            about: "https://github.com/jtams",
            desc: "A website created using React and Gatsby for a local life and spirituality coach.",
        },
        {
            name: "GPT Mechanic",
            link: "https://gptmechanic.com",
            image: GPTMechanic,
            about: "https://github.com/jtams",
            desc:
                "A personal project created in React and TypeScript that uses OpenAI's advanced natural language model to answer car related questions. Note: This site isn't publicly usable due to OpenAI's restrictions.",
        },
    ];

    const projectList = [];
    projects.forEach((project, index) => {
        projectList.push(
            <div
                className="project"
                key={index}
                onClick={() => {
                    window.open(project.link, "_blank");
                }}>
                <img src={project.image} alt={project.name} style={{ width: "400px", cursor: "pointer" }}></img>
                <h2 style={{ textAlign: "center", color: "white", marginTop: "5px" }}>{project.name}</h2>
                <p className="projectDesc">{project.desc}</p>
            </div>
        );
    });

    return <div className="projectContainer">{projectList}</div>;
}

export default SlideShow;
