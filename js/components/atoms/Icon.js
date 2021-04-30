const Icon = ({ props, style }) => {
  const { classList } = props;

  const el = document.createElement("i");
  classList.forEach((cls) => el.classList.add(cls));

  return el;
};

export default Icon;
