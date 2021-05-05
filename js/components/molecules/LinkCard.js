import Icon from "../atoms/Icon.js";

const StyledConIcon = () => {
  const cssText = `
    display: flex;
    width: 110px;
    justify-content: space-between;
  `;
  const el = document.createElement("div");
  el.style.cssText = cssText;
  return el;
};

const LinkCard = () => {
  const conIcon = StyledConIcon();
  const faIcon = Icon({
    props: {
      classList: ["fab", "fa-facebook"],
      url: "https://www.facebook.com/interpretation.river",
    },
  });
  const gitIcon = Icon({
    props: {
      classList: ["fab", "fa-github"],
      url: "https://github.com/hotbloodturtle",
    },
  });
  conIcon.appendChild(faIcon);
  conIcon.appendChild(gitIcon);

  const conText = document.createElement("div");

  const el = document.createElement("div");
  el.appendChild(conIcon);
  el.appendChild(conText);
  return el;
};

export default LinkCard;
