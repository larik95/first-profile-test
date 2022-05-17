import "./styles.css";

function Heading({
  children,
  color = "#ffffff",
  fontSize = 22,
  fontWeight,
  fontFamily,
  className,
}) {
  return (
    <div
      style={{ color, fontSize, fontWeight, fontFamily }}
      className={"headingsize" + className}
    >
      {children}
    </div>
  );
}

export default Heading;
