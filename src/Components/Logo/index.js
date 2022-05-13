import "./styles.css";
import LogoImg from './front-logo.png';

function Logo () {
    return (
        <div >
        <img className="logo-img" src={LogoImg} alt='logo-img' />
        </div>
    );
}

export default Logo;