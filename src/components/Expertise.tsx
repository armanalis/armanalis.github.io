import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import { faCode, faDatabase, faTools } from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Java",
    "MATLAB",
    "C",
    "C++",
];

const labelsSecond = [
    "n8n",
    "SQL",
];

const labelsThird = [
    "Git",
    "Docker",
    "Linux",
];

function Expertise() {
    return (
    <div className="container" id="about">
        <div className="skills-container">
            <div className="split-section">
                {/* Left Side: Skills */}
                <div className="expertise-section">
                    <h1>Expertise</h1>
                    <div className="skills-grid">
                        <div className="skill">
                            <FontAwesomeIcon icon={faCode} size="3x"/>
                            <h3>Programming & Engineering</h3>
                            <p>I have a solid foundation in core programming languages used for software and systems engineering.</p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {labelsFirst.map((label, index) => (
                                    <Chip key={index} className='chip' label={label} />
                                ))}
                            </div>
                        </div>

                        <div className="skill">
                            <FontAwesomeIcon icon={faDatabase} size="3x"/>
                            <h3>Scripting & Databases</h3>
                            <p>I am experienced in writing scripts for automation and managing data with SQL.</p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {labelsSecond.map((label, index) => (
                                    <Chip key={index} className='chip' label={label} />
                                ))}
                            </div>
                        </div>

                        <div className="skill">
                            <FontAwesomeIcon icon={faTools} size="3x"/>
                            <h3>Development Tools</h3>
                            <p>I am familiar with version control, containerization, and operating systems for development.</p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {labelsThird.map((label, index) => (
                                    <Chip key={index} className='chip' label={label} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: About Me Text */}
                <div className="about-section-text">
                    <h1>About Me</h1>
                    <p>
                        I am a dedicated software engineer with a passion for building efficient and scalable solutions. 
                        With a strong background in computer engineering, I enjoy tackling complex problems and turning them into 
                        simple, elegant software. My goal is to continue learning and growing in the field of technology, 
                        contributing to projects that make a real impact.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;