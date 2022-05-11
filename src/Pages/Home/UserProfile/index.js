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
        <Card>
          <div className="user-profile-left-user-img">
          <UserImage />
          </div>
          <div className="user-profile-left-name">
          <Heading fontSize={28}>Larissa Ferreira</Heading>
          </div>
          <Heading color="#5DB9FA" fontSize={20} fontWeight={200}>Junior, 6 meses de experiência</Heading>
          <Text>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tristique lacinia maximus. Morbi egestas orci erat, sed blandit
            magna ornare ut. Integer faucibus risus eget lorem malesuada, quis
            accumsan dolor pretium. Curabitur eleifend feugiat lacus ut euismod.
            Maecenas eros nisi, scelerisque quis nulla sit amet, faucibus
            laoreet enim. Praesent sagittis nisl nunc, at condimentum leo
            tristique accumsan. Nunc pretium erat lorem, id porta arcu lobortis
            sit amet. Sed non consectetur leo.</p>
          </Text>
          <div className="user-infos-container">
            <div className="user-infos-item">
              <div className="user-infos-item-icon"><MdLocationOn color="#ACACAC" size={20} /></div>
              <Text color="#ACACAC">Brasília, DF - Brasil</Text>
            </div>
            <div className="user-infos-item">
              <div className="user-infos-item-icon"><MdEmail color="#ACACAC" size={20} /></div>
              <Text color="#ACACAC">larissaferreira_@live.com</Text>
            </div>
            <div className="user-infos-item">
              <div className="user-infos-item-icon"><BsWhatsapp color="#ACACAC" size={20}/></div>
              <Text color="#ACACAC">+55 (61) 99991-4409</Text>
            </div>
          </div>
          <SocialMedia />
        </Card>
  );
}

export default UserProfile;
