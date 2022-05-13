import "./styles.css";
import Card from "../../../Components/Card";
import UserProfile from "../UserProfile";
import Technologies from "../Technologies";
import LastProjects from "../Last Projects";
import Certificates from "../Certificates";


function CenterContent() {
  return (
    <div className="center-content-container">
      <div className="center-content-container-left">
        <UserProfile />
      </div>
      <div className="center-content-container-right">
        <Technologies />
        <LastProjects />
        <Certificates />
      </div>
    </div>
  );
}

export default CenterContent;
