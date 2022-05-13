import "./styles.css";
import Text from "../Text";

function Project ({
    imageUrl,
    title,
    link
}) {
    return (
        <a className='project-container' href={link} target="_blank" rel="noreferrer">
            <img alt ={title} src={imageUrl} />
            <div className="project-text">
            <Text fontSize={20} > {title}</Text>
            </div>
        </a>
    );
}

export default Project;