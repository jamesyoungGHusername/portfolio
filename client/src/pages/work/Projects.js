import "./Projects.css";

import { MadabaMatch } from '../MadabaMatch';
import Project from '../../components/Project';
import React from 'react';
import infiniMatchAppIcon from '../../assets/InfiniMatchAppIcon.png';
import phoneIcon from '../../assets/PhoneBooth/IMG_1965.JPG';

const workInfo = {
    invert: {
        name: "Invert | YC W22",
        link: "https://invertbio.com",
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQH1tF4zexZ12w/company-logo_200_200/company-logo_200_200/0/1660660360825/invertinc_logo?e=2147483647&v=beta&t=4WLE-fjyS_uGr4Vam7kf_H3UfglZouDjVFITXkQmCPw",
        desc: "Software to manage, analyze, and optimize bioprocessing data",
        text: "It's often cheaper to grow medicine than it is to syntesize it.",
    },
    hueIq: {
        name: "Hue IQ | Color Analysis",
        link: "/hue-iq",
        image: "https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/assets/HueIQLogo.jpg",
        desc: "A Neural Network Trained To Identify Color Seasons",
        text: "The app allows users to analyze photos of clothes to figure out what color seasons the shades will look best with. The model is a sequential neural network made using the TensorFlow library."
    },
    upsolve: {
        name: "Upsolve.ai | YC W24",
        link: "https://upsolve.ai/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT50n_Eg-IQ0DNzEITp5GB8loyR1yA7CYwvQ&s",
        desc: "AI Powered Customer Facing Analytics",
        text: `This project is close to my heart. In Jan of 2024 I was hired by a pair of founders who were about to go through YC to help build their product.
        Over the course of 6 months I designed and implemented natural language-based UI elements,
        allowing customers to instruct AI to build dashboards with their data; implemented tenancy-based security;
        and built frontend data visualization components.`
    },
    inflow: {
        name: "Inflow | YC S21",
        link: "https://www.getinflow.io/",
        image: "https://play-lh.googleusercontent.com/dJ1rIZmvEy049twcXo32EIWs90T6hkjc3vmlJ9CmoeUsrAl4Wti3f0g1gHCHgiM8iUXg=w240-h480-rw",
        desc: "A Mental Health App For People With ADHD.",
        text: "In 2023 I worked as a full-stack developer on the Inflow team."
    },
    madabaMatch: {
        name: "Madaba Match",
        link: "https://apps.apple.com/us/app/madaba-match/id1598843708",
        image: infiniMatchAppIcon,
        desc: "A match game where the important thing isn't where you end up, it's how you got there.",
        text: "Written in Swift using SpriteKit. Includes sound, tactile feedback, and a color-blind mode.",
        documentation: "/madaba-match"
    },
    thisWebsite: {
        name: "This Website",
        link: "https://github.com/jamesyoungGHusername/portfolio",
        image: "",
        desc: "A dual-purpose portfolio/documentation website for my projects.",
        text: "Built with React, custom animations, and hosted on AWS EC2 with Apache. Includes routing workarounds for React Router."
    },
    phoneBooth: {
        name: "Interactive Exhibit @ The Gaylord",
        link: "https://github.com/jamesyoungGHusername",
        image: phoneIcon,
        desc: "Replaced the guts of a rotary phone with a Raspberry Pi.",
        text: "Users could record messages via handset, stored on an FTP server and played randomly across connected devices."
    },
};

const Work = () => {
    return (
        <section id="projects">
            <ul className="projectList">
                {Object.values(workInfo)
                    .map((project) => {
                        if(!project.name) return null
                        return <Project
                            key={project.name}
                            image={project.image}
                            link={project.link}
                            name={project.name}
                            desc={project.desc}
                            text={project.text}
                            documentation={project.documentation}
                        />
                    })}
            </ul>
        </section>
    );
};

export default Work;