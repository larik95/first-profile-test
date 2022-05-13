import "./styles.css";

function Card ({children, height, paddingBottom=15}) {
    return (
        <div className="card-container" style={{height, paddingBottom}}>
            {children}
        </div>
    );
}

export default Card;