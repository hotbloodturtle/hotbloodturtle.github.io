const StyledIcon = () => {
  const cssText = `
    width: 60px;
    height: 60px;
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s, box-shadow 0.5s;
    border-radius: 100%;
    cursor: pointer;
    color: #000;
  `;
  const el = document.createElement("i");
  el.style.cssText = cssText;
  el.addEventListener("mouseover", (e) => {
    el.style.cssText =
      cssText +
      `
        transform: scale3d(1.1, 1.1, 1.1);
        box-shadow: inset 0 0 0 35px #fff;
        filter: invert(100%)
      `;
  });
  el.addEventListener("mouseout", (e) => {
    el.style.cssText = cssText;
  });
  return el;
};

const Icon = ({ props, style }) => {
  const { classList, url } = props;

  const el = StyledIcon();
  classList.forEach((cls) => el.classList.add(cls));

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.appendChild(el);

  return anchor;
};

export default Icon;
