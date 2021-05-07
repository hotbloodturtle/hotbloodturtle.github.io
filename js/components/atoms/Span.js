const StyledSpan = ({ fontSize = "14px", fontWeight = "300" }) => {
  const cssText = `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    font-family: Roboto, sans-serif;
  `;
  const el = document.createElement("span");
  el.style.cssText = cssText;
  return el;
};

const Span = ({ props, style = {} }) => {
  const { text } = props;
  const el = StyledSpan({ ...style });
  el.textContent = text;
  return el;
};

export default Span;
