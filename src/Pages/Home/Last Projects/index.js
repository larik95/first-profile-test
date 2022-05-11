
import Heading from "../../../Components/Heading";
import Project from "../../../Components/Project";
import Card from "../../../Components/Card";
import "./styles.css";


function LastProjects() {
  return (
    <Card>
      <div className="last-projects-container">
        <div className="last-projects-header">
      <Heading fontSize={24}>Últimos projetos</Heading>
      <Heading fontSize={16} color="#acacac">VER TODOS</Heading>
      </div>
      <div className="last-projects-content">
        <Project />
      </div>
     </div>
    </Card>
  );
}

export default LastProjects;
