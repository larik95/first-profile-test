import "./styles.css";
import Heading from "../../../Components/Heading";
import Card from "../../../Components/Card";
import Certificate from '../../../Components/Certificate';
import StarterPack from '../Certificates/iniciante-starter-pack-astronauta.png';



function Certificates () {
  return (
    <Card>
    <div className="certicates-container">
      <div className="certicates-header">
        <Heading fontSize={24}>Certificados</Heading>
        <Heading fontSize={16} color="#acacac">
          VER TODOS
        </Heading>
      </div>
      <div className="certicates-content">
        <Certificate
        imageUrl={StarterPack}
        link="https://www.frontacademy.com.br/#starter-pack"
        title="STARTER PACK"
        subtitle="Front Academy, 2022"
        autenticationCode="Autenticação 000120324450225"
        />
      </div>
    </div>
  </Card>
  );
}

export default Certificates ;
