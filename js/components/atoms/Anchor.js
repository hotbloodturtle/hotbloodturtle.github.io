const StyledAnchor = ({
  fontSize = "16px",
  fontWeight = "400",
  color = "black",
}) => {
  const cssText = `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    font-family: Roboto, sans-serif;
    color: ${color};
  `;
  const el = document.createElement("a");
  el.style.cssText = cssText;
  return el;
};

const Anchor = ({ props, style }) => {
  const { url, text } = props;
  const el = StyledAnchor({ ...style });
  el.href = url;
  el.textContent = text;
  return el;
};

export default Anchor;
