import React from "react";
import placeholder from '../assets/images/mock01.png'; // You can replace this with your project image
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/armanalis/LeetCode" target="_blank" rel="noreferrer"><img src={placeholder} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/armanalis/LeetCode" target="_blank" rel="noreferrer"><h2>Daily LeetCode Challenge</h2></a>
                <p>This project aims to be better myself each day. I solve at least 1 LeetCode problem everyday.</p>
            </div>
            </div>
            </div>
            
    );
}

export default Project;