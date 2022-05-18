import Heading from "../../../Components/Heading";
import Project from "../../../Components/Project";
import Card from "../../../Components/Card";
import CursoWeb from "../Last Projects/first-project.png";
import ProjetoFashion from "../Last Projects/projeto-fashion.png";
import ProjetoResponsivo from "../Last Projects/projeto-responsivo.png";

import "./styles.css";

function LastProjects() {
  return (
    <Card paddingBottom={0}>
      <div className="last-projects-container">
        <div className="last-projects-header">
          <Heading>Últimos projetos</Heading>
          <Heading fontSize={14} color="#acacac">
            VER TODOS
          </Heading>
        </div>
        <div className="last-projects-rapper">

        <div className="last-projects-content">
          <Project imageUrl={ProjetoResponsivo} link="rangehotel.vercel.app" title="Projeto Responsivo" />
          <Project imageUrl={ProjetoFashion} link="https://fashion-psi.vercel.app/" title="Projeto Fashion" />
          <Project imageUrl={CursoWeb} link="#" title="Projeto Curso Web" />
        </div>
        </div>
      </div>
    </Card>
  );
}

export default LastProjects;
