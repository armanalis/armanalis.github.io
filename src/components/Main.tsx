import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      {/* Add the id="about" here so navigation works */}
      <div className="about-section" id="about">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQF_14865828/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718283227073?e=1737590400&v=beta&t=__P-VqP92QJaV4Pp-7J4uvMdgz_an47072lQ07WnjrU" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/armanalis" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ali-arman-dai/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ali Arman Dai</h1>
          <p>Computer Engineering Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/armanalis" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ali-arman-dai/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          
          {/* New Paragraph Section */}
          <div className="about-text">
            <p>
            I’m a computer engineering student who loves building software that actually solves problems. I'm really into automation and AI—basically finding ways to make systems smarter and more efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;