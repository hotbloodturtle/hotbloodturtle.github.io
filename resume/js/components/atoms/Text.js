const defaultStyle = ({ fontSize = "40px", fontWeight = "500" }) => `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    font-family: Roboto, sans-serif;
`;

const Text = ({ props, style = {} }) => {
  const { text } = props;
  const el = document.createElement("p");
  el.textContent = text;
  el.style.cssText = defaultStyle({ ...style });
  return el;
};
