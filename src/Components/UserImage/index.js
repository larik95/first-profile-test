import "./styles.css";
import ImgUser from "./userimg.jpeg"

function UserImage () {
    return (
        <div className="user-image-container">
            <img alt="Larissa F. foto" src={ImgUser} />
        </div>
    );
}

export default UserImage;