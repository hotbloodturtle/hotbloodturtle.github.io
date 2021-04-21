const Heading = ({ text, styleProps = {} }) => {
  const { size = 1, fontSize = "1rem", fontWeight = "500" } = styleProps;

  const heading = document.createElement(`h${size}`);
  heading.textContent = text;

  heading.style.fontSize = fontSize;
  heading.style.fontWeight = fontWeight;
  return heading;
};

export default Heading;
