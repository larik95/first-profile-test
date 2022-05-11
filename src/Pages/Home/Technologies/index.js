import Card from "../../../Components/Card";
import Heading from "../../../Components/Heading";
import "./styles.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

function Technologies() {
  return (
    <Card>
      <div className="technologies-container">
        <div className="technologies-header">
          <Heading fontSize={26}>Tecnologias e frameworks</Heading>
        </div>
        <div className="technologies-content">
          <div className="technologies-logo">
            <SiHtml5 size={45} color="#e34c26" />
          </div>
          <div className="technologies-logo">
            <SiCss3 size={45} color="#2962ff" />
          </div>
          <div className="technologies-logo">
            <SiJavascript size={45} color="#f89820" />
          </div>
          <div className="technologies-logo">
            <SiReact size={45} color="#84a0f2" />

            <Heading color="#84a0f2">React</Heading>
          </div>
          <div className="technologies-logo">
            <SiGit size={45} color="#f34f29" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Technologies;
