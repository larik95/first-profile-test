import "./styles.css";

function Heading({ children, color="#ffffff", fontSize = 22, fontWeight }) {
  return <div style={{ color, fontSize, fontWeight }}>{children}</div>;
}

export default Heading;
