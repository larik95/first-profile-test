import "./styles.css";

function Heading({ children, color="#ffffff", fontSize = 22, fontWeight, fontFamily }) {
  return <div style={{ color, fontSize, fontWeight, fontFamily }}>{children}</div>;
}

export default Heading;
