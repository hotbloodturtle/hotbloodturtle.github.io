const cssText = ({ fontSize = "18px", fontWeight = "300" }) => `
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  font-family: Roboto, sans-serif;
`;

const Text = ({ props, style = {} }) => {
  const { text } = props;
  const el = document.createElement("p");
  el.textContent = text;
  el.style.cssText = cssText({ ...style });
  return el;
};

export default Text;
