import Heading from "../../../Components/Heading";
import Project from "../../../Components/Project";
import Card from "../../../Components/Card";
import SunnysideAgency from '../Last Projects/desktop-preview.jpg'
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
          <Project imageUrl={SunnysideAgency} link="https://sunnyside-flame.vercel.app/" title="Sunnyside Agency" />
          <Project imageUrl={ProjetoResponsivo} link="https://rangehotel.vercel.app/" title="Projeto Responsivo" />
          <Project imageUrl={ProjetoFashion} link="https://fashion-psi.vercel.app/" title="Projeto Fashion" />
        </div>
        </div>
      </div>
    </Card>
  );
}

export default LastProjects;
