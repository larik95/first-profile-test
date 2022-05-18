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
        <Heading>Certificados</Heading>
        <Heading fontSize={14} color="#acacac">
          VER TODOS
        </Heading>
      </div>
      <div className="certicates-content">
        <Certificate
        imageUrl={StarterPack}
        link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/114744014517100872545607175394384289508579300724341038746707473297364607827969"
        title="STARTER PACK"
        subtitle="Front Academy, 2022"
        autenticationCode="Autenticação 1147440145"
        />
      </div>
    </div>
  </Card>
  );
}

export default Certificates ;
