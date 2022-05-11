import "./styles.css";

import { FcViewDetails } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

function SocialMedia() {
  return (
    <div className="social-media-container">
      <a
        href="https://github.com/larik95"
        target="_blank"
        className="social-media-item"
        rel="noreferrer"
      >
        <IoLogoGithub size={35} color="#acacac" />
      </a>
      <a
        href="#"
        className="social-media-item"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoLinkedin size={35} color="#0e76a8" />
      </a>
      <a
        href="https://www.linkedin.com/in/larissa-ferreira-62a86822a/"
        className="social-media-item"
        target="_blank"
        rel="noreferrer"
      >
        <FcViewDetails size={35} />
      </a>
    </div>
  );
}

export default SocialMedia;
