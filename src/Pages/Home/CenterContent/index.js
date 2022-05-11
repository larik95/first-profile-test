import "./styles.css";
import Card from "../../../Components/Card";
import UserProfile from "../UserProfile";
import Technologies from "../Technologies";
import LastProjects from "../Last Projects";


function CenterContent() {
  return (
    <div className="center-content-container">
      <div className="center-content-container-left">
        <UserProfile />
      </div>
      <div className="center-content-container-right">
        <Technologies />
        <LastProjects />
        <Card>Card 3</Card>
      </div>
    </div>
  );
}

export default CenterContent;
