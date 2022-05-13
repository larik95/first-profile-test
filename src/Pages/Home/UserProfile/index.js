import "./styles.css";
import Card from "../../../Components/Card";
import UserImage from "../../../Components/UserImage";
import Heading from "../../../Components/Heading";
import Text from "../../../Components/Text";
import SocialMedia from "../../../Components/SocialMedia";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

function UserProfile() {
  return (
    <Card height='100%'>
      <div className="user-profile-left-user-img">
        <UserImage />
      </div>
      <div className="user-profile-left-name">
        <Heading fontSize={28}>Larissa Ferreira</Heading>
      </div>
      <Heading color="#5DB9FA" fontSize={20} fontWeight={200}>
        Junior, 6 meses de experiência
      </Heading>
      <div className="user-info-bio-text">
       <Text>
        <p>
          Olá, eu sou uma desenvolvedora web. Passo horas experimentando HTML,
          CSS e JavaScript; Apesar de se nova no ramo, eu inalo uma grande
          variedade de informações que me fazem apaixonar cada vez mais pela
          área. Eu crio sites que encantam e informam. Fique a vontade para
          olhar os meus tabalhos. 
        </p>
      </Text>
      </div> 
      <div className="user-infos-container">
        <div className="user-infos-item">
          <div className="user-infos-item-icon">
            <MdLocationOn color="#ACACAC" size={20} />
          </div>
          <Text color="#ACACAC">Brasília, DF - Brasil</Text>
        </div>
        <div className="user-infos-item">
          <div className="user-infos-item-icon">
            <MdEmail color="#ACACAC" size={20} />
          </div>
          <Text color="#ACACAC">larissaferreira_@live.com</Text>
        </div>
        <div className="user-infos-item">
          <div className="user-infos-item-icon">
            <BsWhatsapp color="#ACACAC" size={20} />
          </div>
          <Text color="#ACACAC">+55 (61) 99991-4409</Text>
        </div>
      </div>
      <SocialMedia className='bio-social-media'/>
    </Card>
  );
}

export default UserProfile;
