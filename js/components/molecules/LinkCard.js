import Icon from "../atoms/Icon.js";

const LinkCard = () => {
  const conIcon = document.createElement("div");
  const faIcon = Icon({ props: { classList: ["fab", "fa-facebook"] } });
  const gitIcon = Icon({ props: { classList: ["fab", "fa-github"] } });
  conIcon.appendChild(faIcon);
  conIcon.appendChild(gitIcon);

  const conText = document.createElement("div");

  const el = document.createElement("div");
  el.appendChild(conIcon);
  el.appendChild(conText);
  return el;
};

export default LinkCard;
