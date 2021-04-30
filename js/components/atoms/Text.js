const StyledText = ({ fontSize = "18px", fontWeight = "300" }) => {
  const cssText = `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    font-family: Roboto, sans-serif;
  `;
  const el = document.createElement("p");
  el.style.cssText = cssText;
  return el;
};

const Text = ({ props, style = {} }) => {
  const { text } = props;
  const el = StyledText({ ...style });
  el.textContent = text;
  return el;
};

export default Text;
