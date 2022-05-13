import CenterContent from "./CenterContent";
import Text from "../../Components/Text";
import "./styles.css";
import Logo from "../../Components/Logo";

function Home() {
  return (
    <div className="home-container">
      <div className="home-container-content">
        <div className="header"></div>

        <CenterContent />

        <div className="home-container-content-bottom">
          <Text color="#fff">Powered by</Text>

          <div className="logo-container">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
