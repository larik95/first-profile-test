import Heading from "../Heading";
import Text from "../Text";
import "./styles.css";

function Certificate ({
    imageUrl,
    link,
    title,
    subtitle,
    autenticationCode

}) {
    return (
        <a className='certificate-container' href={link} target='_blank' rel='noreferrer'>
            <img alt={title} src={imageUrl} />
            
            <div className="certificate-right">
                <Heading color="#5cff9b" fontSize={19} fontWeight={500} fontFamily="Azonix Regular">{title}</Heading>
                <Heading fontWeight={300} fontSize={16}>{subtitle}</Heading>
                <Text fontSize={14}>{autenticationCode}</Text>
            </div>
        </a>
    );
}

export default Certificate;