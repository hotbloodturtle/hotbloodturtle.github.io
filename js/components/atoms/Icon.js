const StyledIcon = () => {
  const cssText = `
    width: 60px;
    height: 60px;
    background-color: red;
  `;
  const el = document.createElement("i");
  el.style.cssText = cssText;
  el.addEventListener("mouseover", (e) => {
    el.style.cssText =
      cssText +
      `
      background-color: blue;
    `;
  });
  el.addEventListener("mouseout", (e) => {
    el.style.cssText =
      cssText +
      `
      background-color: red;
    `;
  });
  return el;
};

const Icon = ({ props, style }) => {
  const { classList } = props;

  const el = StyledIcon();
  classList.forEach((cls) => el.classList.add(cls));

  return el;
};

export default Icon;
